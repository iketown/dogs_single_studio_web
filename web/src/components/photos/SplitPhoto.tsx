import React from "react";
import styled from "styled-components";
import { imageBuilder } from "@util/sanityImage";
const SplitDiv = styled.div<{ momUrl: string; dadUrl: string }>`
  display: flex;
  width: 100%;
  min-height: 12rem;
  .left,
  .right {
    background-size: cover;
    background-position: center;
  }
  .left {
    border-right: 2px solid var(--color-male);
    border-bottom: 2px solid var(--color-male);
    flex-grow: 1;
    background-image: url(${(p) => p.dadUrl});
  }
  .right {
    flex-grow: 1;
    border-left: 2px solid var(--color-female);
    border-bottom: 2px solid var(--color-female);
    margin-left: 5px;
    background-image: url(${(p) => p.momUrl});
  }
`;

const SplitPhoto: React.FC<{ momPhoto?: any; dadPhoto?: any }> = ({
  dadPhoto,
  momPhoto,
}) => {
  const getUrl = (photo) =>
    photo &&
    imageBuilder.image(photo).width(300).height(300).format("jpg").url();
  const momUrl = getUrl(momPhoto);
  const dadUrl = getUrl(dadPhoto);
  return (
    <SplitDiv {...{ momUrl, dadUrl }}>
      <div className="left"></div>
      <div className="right"></div>
    </SplitDiv>
  );
};

export default SplitPhoto;
