import React, { useState, useCallback } from "react";
import { useBreederCtx } from "../../components/layout/BreederContext";
import { Image, Transformation } from "cloudinary-react";
import { Row, Col, Container, Modal } from "react-bootstrap";
import JTree from "@util/JTree";
import styled from "styled-components";

const HoverImageDiv = styled.div`
  border-radius: 10px;
  transition: 0.5s all;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 2px 2px 2px #33333333;
  :hover {
    transform: scale(1.05);
    box-shadow: 4px 2px 6px #33333333;
  }
`;

const AutoImageGrid: React.FC<SectionPickerI> = ({ section, index }) => {
  const [selectedPhoto, setSelectedPhoto] = useState("");
  const { breeder } = useBreederCtx();
  const extPhotos = breeder.ext_photos?.photos || breeder.ext_square_photos;

  return (
    <div>
      <Container className="my-4">
        <Row>
          {extPhotos?.map(({ url, cropPxl }, index) => {
            return (
              <Col
                key={url}
                xs={6}
                lg={4}
                className="d-flex justify-content-center align-items-center mt-4 "
              >
                <HoverImageDiv onClick={() => setSelectedPhoto(url)}>
                  <Image publicId={url} type="fetch" width="250" height="250">
                    <Transformation {...cropPxl} crop="crop" />
                  </Image>
                </HoverImageDiv>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Modal
        centered
        size="sm"
        show={!!selectedPhoto}
        onHide={() => setSelectedPhoto("")}
      >
        <div className="d-flex justify-content-center">
          <Image
            publicId={selectedPhoto}
            type="fetch"
            width="600"
            format="jpg"
          />
        </div>
      </Modal>
      <JTree data={breeder} />
    </div>
  );
};

export default AutoImageGrid;
