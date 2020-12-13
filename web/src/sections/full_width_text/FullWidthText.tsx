import BlockContent from "@components/blockContent/BlockContent";
import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const StyledText = styled.div`
  padding: 1rem 0;
`;

//
//
const FullWidthText: React.FC<SectionPickerI> = ({ section }) => {
  console.log("fwt section", { section: JSON.stringify(section) });
  return (
    <Container className="py-4">
      <StyledText>
        <BlockContent blocks={section.blockContent} />
      </StyledText>
    </Container>
  );
};

export default FullWidthText;
