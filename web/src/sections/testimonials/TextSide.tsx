import BlockContent from "@components/blockContent/BlockContent";
import React from "react";
import styled from "styled-components";
import { GoQuote } from "react-icons/go";
const QuoteStyle = styled.div`
  font-family: Neucha, cursive;
  p {
    font-size: 20px;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: Neucha, cursive;
  }
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #22222211;
  border-radius: 3px;
  padding: 1rem 1rem;
  color: #000000aa;
  font-size: 22px;
  box-shadow: 5px 4px 4px #00000024;
  min-height: 18rem;
  background: url(/images/paper.jpg);
  background-size: cover;

  .quote {
    text-align: left;
    font-size: 2rem;
    line-height: 0.2;
    color: #078c8c;
    opacity: 0.5;
    margin-bottom: 10px;
  }
  .person {
    color: #078c8c;
    text-align: right;
  }
  .name {
  }
  .location {
    font-size: 14px;
  }
  .cancelstamp {
    width: 8rem;
    height: 4rem;
    opacity: 0.1;
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-image: url(/images/poststamp.webp);
    background-size: cover;
  }
`;

const TextSide: React.FC<SectionPickerI> = ({ section }) => {
  return (
    <QuoteStyle>
      {/* <div className="quote">“</div> */}
      <div className="cancelstamp" />
      <div className="quote">
        <GoQuote />
      </div>
      <div className="quoteblock">
        <BlockContent blocks={section.text} />
      </div>
      <div className="person">
        <div>- {section.name?.toUpperCase()}</div>
        <div className="location">{section.location?.toUpperCase()}</div>
      </div>
    </QuoteStyle>
  );
};

export default TextSide;
