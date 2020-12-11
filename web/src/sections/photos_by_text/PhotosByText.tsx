import BlockContent from "@components/blockContent/BlockContent";
import ImageFader from "@components/imageFader/ImageFader";
import classnames from "classnames";
import React, { useMemo, useRef, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

import { useBreederCtx } from "../../components/layout/BreederContext";

const ImageContainer = styled.div<{ height: number; width: number }>`
  height: ${(p) => p.height}px;
  width: ${(p) => p.width}px;

  position: relative;
  margin: auto;
  @media (min-width: 768px) and (max-width: 991.98px) {
    height: ${(p) => p.height * 0.8}px;
    width: ${(p) => p.width * 0.8}px;
  }
`;

const PhotosByText: React.FC<SectionPickerI> = ({ section, index }) => {
  const { breeder } = useBreederCtx();
  const indexEven = index % 2 === 0;
  const colRef = useRef<HTMLDivElement>(null);

  const images = section?.photos?.images || [];
  const decoration = section?.photos?.decoration || "none";
  const height = 300;
  const width = 400;
  return (
    <>
      <Row xs={1} md={2} className="py-4">
        <Col
          ref={colRef}
          className={classnames(
            "d-flex flex-column my-auto",
            {
              "order-md-2": indexEven,
            },
            "my-4"
          )}
        >
          <ImageContainer className="my-4" {...{ height, width }}>
            <ImageFader
              images={images}
              height={height}
              width={width}
              secondsBetweenImages={8}
              decoration={decoration}
            />
          </ImageContainer>
        </Col>
        <Col
          className={classnames(
            "d-flex flex-column my-auto",
            {
              "order-md-1": indexEven,
            },
            "my-4"
          )}
        >
          <BlockContent blocks={section.blockContent} />
        </Col>
      </Row>
      {/* <JTree data={{ section }} /> */}
      {/* <JTree data={{ breeder }} /> */}
    </>
  );
};

export default PhotosByText;
