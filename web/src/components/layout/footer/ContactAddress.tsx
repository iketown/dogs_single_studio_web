import React from "react";
import { useBreederCtx } from "../BreederContext";
import styled from "styled-components";
import { FaRegEnvelope } from "react-icons/fa";
import { iconStyle } from "./Footer";
const StyledContact = styled.div`
  font-size: 12px;
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  justify-content: center;
  /* text-align: center; */
  a {
    color: white;
  }
  .leftside {
    /* text-align: right; */
    border-left: 1px solid #ffffff66;
    padding-left: 10px;
    .kennel {
      text-transform: uppercase;
      font-weight: bold;
    }
  }
`;

const ContactAddress = () => {
  const { breeder } = useBreederCtx();
  const {
    kennel_name,
    streetAddress,
    state_abbr,
    city,
    zipCode,
    email,
  } = breeder;
  const link = `https://www.google.com/maps/place/${streetAddress},+${city},+${state_abbr}+${zipCode}`;
  return (
    <StyledContact>
      <div className="leftside">
        <a href={link} target="__blank" rel="noopener">
          <div className="kennel">{kennel_name}</div>
          <div>{streetAddress}</div>
          <div>{`${city ? city + ", " : ""}${state_abbr}`}</div>
          {zipCode && <div>{zipCode}</div>}
        </a>
      </div>
    </StyledContact>
  );
};

export default ContactAddress;
