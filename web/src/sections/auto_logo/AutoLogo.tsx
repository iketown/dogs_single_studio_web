import React from "react";
import JTree from "@util/JTree";
import { useBreederCtx } from "@components/layout/BreederContext";
import styled from "styled-components";

const LogoSection = styled.section<{ url: string }>`
  height: 12rem;
  background-image: url(${(p) => p.url});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const TextSection = styled.section`
  .subtitle {
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    margin-top: -10px;
  }
`;

const AutoLogo: React.FC<SectionPickerI> = ({ section, index }) => {
  const { breeder } = useBreederCtx();
  const { ext_logo, kennel_name, kennel_subtitle } = breeder;
  return (
    <div className="text-center my-4">
      {section.show_logo && ext_logo?.url ? (
        <LogoSection url={ext_logo.url} />
      ) : (
        <TextSection>
          <h1
            style={{
              fontSize: "3.5rem",
            }}
            className="title"
          >
            {kennel_name}
          </h1>
          <div className="subtitle">{kennel_subtitle}</div>
        </TextSection>
      )}
      {/* <JTree data={{ breeder }} /> */}
    </div>
  );
};

export default AutoLogo;
