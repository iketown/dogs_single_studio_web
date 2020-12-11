import React from "react";
import { Container } from "react-bootstrap";
import BlockContent from "@components/blockContent/BlockContent";
import { useBreederCtx } from "../../components/layout/BreederContext";
import JTree from "@util/JTree";

const AutoIntroText: React.FC<SectionPickerI> = ({ section, index }) => {
  const { breeder } = useBreederCtx();
  return breeder.intro_text ? (
    <Container style={{ color: "var(--color-darkA)" }}>
      <BlockContent blocks={breeder.intro_text} />
      {/* <JTree data={breeder} /> */}
    </Container>
  ) : null;
};

export default AutoIntroText;
