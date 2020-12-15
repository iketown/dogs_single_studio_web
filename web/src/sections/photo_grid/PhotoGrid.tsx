import BlockContent from "@components/blockContent/BlockContent";
import { imageBuilder } from "@util/sanityImage";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useBreederCtx } from "../../components/layout/BreederContext";
import JTree from "../../../util/JTree";

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
const ImageSquare = styled.div<{ imgUrl: string }>`
  background-image: url(${(p) => p.imgUrl});
  position: relative;
  background-size: 100%;
  background-position: center;
  height: 300px;
  transition: 2s all;
  &:hover {
    background-size: 110%;
  }
`;

const HoverText = styled.div`
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.5s all;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  opacity: 0;
  &:hover {
    color: white;
    opacity: 1;
    background-image: linear-gradient(#00000044 50%, #000000dd);
  }
`;

const PhotoGridNormal: React.FC<SectionPickerI> = ({ section, index }) => {
  const images = section.images?.map((img) => {
    return {
      fullUrl: imageBuilder.image(img).width(800).url(),
      imgUrl: imageBuilder.image(img).width(500).height(500).url(),
      headline: img.headline,
      subtitle: img.subtitle,
    };
  });
  return <PhotoGrid {...{ section, index, images }} />;
};

export const PhotoGridAuto: React.FC<SectionPickerI> = ({ section, index }) => {
  const { breeder } = useBreederCtx();
  const images = section.images?.map((img) => {
    return {
      fullUrl: imageBuilder.image(img).width(800).url(),
      imgUrl: imageBuilder.image(img).width(500).height(500).url(),
      headline: img.headline,
      subtitle: img.subtitle,
    };
  });
  const breederImages =
    breeder.ext_photos?.photos?.map(({ url, cropPxl, title, subtitle }, i) => {
      const { height, width, x, y } = cropPxl;
      const fullUrl = url;
      const imgUrl = `https://res.cloudinary.com/ikeworks/image/fetch/x_${x},y_${y},w_${width},h_${height},c_crop/${url}`;
      return {
        fullUrl,
        imgUrl,
        headline: title,
        subtitle,
      };
    }) || [];

  const mixedImages = [...breederImages, ...images].slice(0, 6);
  // return <JTree data={breeder} />;
  return <PhotoGrid {...{ section, index, images: mixedImages }} />;
};

interface PhotoGridDisplayI extends SectionPickerI {
  images: {
    fullUrl: string;
    imgUrl: string;
    headline?: string;
    subtitle?: string;
  }[];
}

const PhotoGrid: React.FC<PhotoGridDisplayI> = ({ section, index, images }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [carouselActiveIndex, setCarouselActiveIndex] = useState(0);
  // const images = section.images?.map((img) => {
  //   return {
  //     fullUrl: imageBuilder.image(img).width(800).url(),
  //     imgUrl: imageBuilder.image(img).width(500).height(500).url(),
  //     headline: img.headline,
  //     subtitle: img.subtitle,
  //   };
  // });
  const { description_before, description_after } = section;
  const carouselImages = images.map(({ fullUrl, headline, subtitle }) => {
    return {
      source: fullUrl,
      key: fullUrl,
      caption: (
        <div>
          <h4>{headline}</h4>
          <div>{subtitle}</div>
        </div>
      ),
    };
  });
  const handleClickThumb = (index: number) => {
    setCarouselActiveIndex(index);
    setModalOpen(true);
  };
  return (
    <Container style={{ textAlign: "center" }}>
      <div style={{ margin: "1rem 0" }}>
        {description_before && <BlockContent blocks={description_before} />}

        <StyledGrid>
          {images.map(({ imgUrl, headline, subtitle }, index) => {
            const hasContent = headline || subtitle;
            return (
              <ImageSquare
                key={`${imgUrl}${index}`}
                imgUrl={imgUrl}
                onClick={() => handleClickThumb(index)}
              >
                {hasContent && (
                  <HoverText>
                    {headline && <b>{headline}</b>}
                    {subtitle && <p>{subtitle}</p>}
                  </HoverText>
                )}
              </ImageSquare>
            );
          })}
        </StyledGrid>
        {description_after && <BlockContent blocks={description_after} />}
      </div>
      <ModalGateway>
        {modalOpen ? (
          <Modal onClose={() => setModalOpen(false)}>
            <Carousel
              views={carouselImages}
              currentIndex={carouselActiveIndex}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Container>
  );
};

export default PhotoGridNormal;
