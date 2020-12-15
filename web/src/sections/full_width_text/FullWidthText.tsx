import BlockContent from "@components/blockContent/BlockContent";
import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import JTree from "../../../util/JTree";
import { useBreederCtx } from "../../components/layout/BreederContext";

const StyledText = styled.div`
  padding: 1rem 0;
`;

//
//
const FullWidthText: React.FC<SectionPickerI> = ({ section }) => {
  return (
    <Container className="py-4">
      <StyledText>
        <BlockContent blocks={section.blockContent} />
      </StyledText>
    </Container>
  );
};
export const FullWidthTextAuto: React.FC<SectionPickerI> = ({ section }) => {
  const { breeder } = useBreederCtx();
  const textBlocks = breeder.intro_text || section.blockContent;
  return (
    <Container className="py-4">
      {/* <JTree data={breeder} /> */}
      <StyledText>
        <BlockContent blocks={textBlocks} />
      </StyledText>
    </Container>
  );
};

export default FullWidthText;
