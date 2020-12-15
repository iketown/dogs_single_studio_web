import { useBreederCtx } from "@components/layout/BreederContext";
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
    <CenteredTitleDisplay
      isPage={section.title_type === "page"}
      title={section.text}
      subtitle={section.subtitle}
    />
  );
};

export const CenteredTitleAuto: React.FC<SectionPickerI> = () => {
  const { breeder } = useBreederCtx();
  const title = breeder.kennel_name || "title missing";
  const subtitle = breeder.kennel_subtitle || "subtitle missing";
  const isPage = true;
  return <CenteredTitleDisplay {...{ title, subtitle, isPage }} />;
};

const CenteredTitleDisplay: React.FC<{
  isPage: boolean;
  title: string;
  subtitle?: string;
}> = ({ isPage, title, subtitle }) => {
  return (
    <Centered>
      {isPage ? (
        <h1 className="title">{title}</h1>
      ) : (
        <h3 className="title">{title}</h3>
      )}
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </Centered>
  );
};

export default CenteredTitle;
