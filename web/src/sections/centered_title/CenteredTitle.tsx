import React from "react";
import styled from "styled-components";

const Centered = styled.div`
  padding: 1rem 0 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 4rem;
  }
  h3 {
    font-size: 3rem;
  }
  .subtitle {
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    margin-top: -10px;
  }
`;
const CenteredTitle: React.FC<SectionPickerI> = ({ section, index }) => {
  return (
    <Centered>
      {section.title_type === "page" ? (
        <h1 className="title">{section.text}</h1>
      ) : (
        <h3 className="title">{section.text}</h3>
      )}
      {section.subtitle && <div className="subtitle">{section.subtitle}</div>}
    </Centered>
  );
};

export default CenteredTitle;
