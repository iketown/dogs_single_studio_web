import BlockContent from "@components/blockContent/BlockContent";
import { useBreederCtx } from "@components/layout/BreederContext";
import classnames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Measure from "react-measure";

import GoogMap from "./GoogMap";

//
//
const MapSection: React.FC<SectionPickerI> = ({ section, index }) => {
  const { breeder } = useBreederCtx();
  const [containerWidth, setContainerWidth] = useState(1000);
  const [containerHeight, setContainerHeight] = useState(500);
  const indexEven = index % 2 === 0;

  return (
    <Measure
      onResize={(content) => {
        setContainerWidth(content.entry?.width || 1000);
        setContainerHeight(content.entry?.height || 500);
      }}
    >
      {({ measureRef }) => {
        return (
          <Container ref={measureRef} className="py-4">
            <Row>
              <Col
                xs={12}
                md={6}
                className={classnames("d-flex flex-column my-auto", {
                  "order-md-2": indexEven,
                })}
              >
                <GoogMap center={breeder.location} />
              </Col>
              <Col
                xs={12}
                md={6}
                className={classnames("d-flex flex-column my-auto", {
                  "order-md-1": indexEven,
                })}
              >
                <BlockContent blocks={section.blockContent} />
              </Col>
            </Row>
          </Container>
        );
      }}
    </Measure>
  );
};

export default MapSection;
