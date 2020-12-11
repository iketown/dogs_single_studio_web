import React from "react";
import { FaPhoneSquare, FaRegEnvelope } from "react-icons/fa";
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";
import styled from "styled-components";

import { useBreederCtx } from "../BreederContext";
import ContactAddress from "./ContactAddress";

const StyledFooter = styled.footer`
  margin-bottom: 0;
  padding: 1rem;
  background: #333;
  color: white;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  z-index: 2;
  .social-icons {
    display: flex;
  }
`;
export const iconStyle = {
  height: "30px",
  width: "30px",
  margin: "4px 8px",
  color: "white",
};

export const footerLinkIcons = [
  { name: "facebook", SocialIcon: SiFacebook },
  { name: "instagram", SocialIcon: SiInstagram },
  { name: "twitter", SocialIcon: SiTwitter },
  { name: "text", SocialIcon: null },
];

const Footer = () => {
  const { breeder } = useBreederCtx();
  const { akc_link, social_links } = breeder;
  return (
    <>
      <StyledFooter>
        <div className="d-flex justify-content-left">
          <ContactAddress />
        </div>
        <div className="d-flex flex-column align-items-center">
          <FaPhoneSquare style={iconStyle} />
          <small>
            {breeder.contact_firstName} {breeder.contact_lastName}
          </small>
          <small>{breeder.phone}</small>
        </div>
        <div>
          {breeder.email && (
            <a
              href={`mailto:${breeder.email}`}
              target="_blank"
              rel="noopener"
              className="d-flex flex-column align-items-center"
            >
              <FaRegEnvelope style={iconStyle} />
              <small className="text-white d-block">{breeder.email}</small>
            </a>
          )}
        </div>
        <div className="d-flex justify-content-end">
          {social_links?.map(({ name, url }) => {
            const { SocialIcon } = footerLinkIcons.find(
              ({ name: flName }) => flName === name
            );
            const fullUrl =
              `https://` + url.replace(`https://`, "").replace("http://", "");
            return (
              <a key={url} href={fullUrl} target="__blank" rel="noopener">
                <SocialIcon style={iconStyle} />
              </a>
            );
          })}
        </div>
      </StyledFooter>
    </>
  );
};

export default Footer;
