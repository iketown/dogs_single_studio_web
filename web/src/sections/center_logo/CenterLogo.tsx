import React from "react";
import JTree from "@util/JTree";
import styled from "styled-components";
import Image from "next/image";
import { imageBuilder } from "@util/sanityImage";
const StyledSection = styled.section<{ height: number; bgColor: string }>`
  height: ${(p) => p.height + 2}rem;
  background-color: ${(p) => p.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
const CenterLogo: React.FC<SectionPickerI> = ({ section, index }) => {
  const dimensions = section.photo?.asset?.metadata?.dimensions;
  const { aspectRatio, height, width } = dimensions || {};
  const { height: sectionHeight } = section;
  const imageHeight = sectionHeight * 16;
  const imgUrl = section.photo
    ? imageBuilder.image(section.photo).height(imageHeight).url()
    : "";
  const { r, g, b, a } = section.bgColor?.rgb || {};
  const bgColor = section.bgColor ? `rgba(${r},${g},${b},${a})` : "";
  return (
    <>
      <StyledSection height={sectionHeight} bgColor={bgColor}>
        <Image
          height={imageHeight}
          width={imageHeight * aspectRatio}
          src={imgUrl}
        />
      </StyledSection>
      {/* <JTree data={{ section }} /> */}
    </>
  );
};

export default CenterLogo;
