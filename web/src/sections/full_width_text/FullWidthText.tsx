import React from "react";
import { Container } from "react-bootstrap";
import BlockContent from "@components/blockContent/BlockContent";
import styled from "styled-components";
import { useReplacementText } from "@hooks/useReplacementText";
const StyledText = styled.div`
  padding: 1rem 0;
`;
const FullWidthText: React.FC<SectionPickerI> = ({ section }) => {
  return (
    <Container className="py-4">
      <StyledText>
        <BlockContent blocks={section.blockContent} />
      </StyledText>
    </Container>
  );
};

export default FullWidthText;
