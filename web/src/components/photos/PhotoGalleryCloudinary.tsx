import { Image, Transformation } from "cloudinary-react";
import React, { useCallback, useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";

const PhotoGalleryCloudinary: React.FC<{ externalPhotos: ExternalPhoto[] }> = ({
  externalPhotos,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [carouselActiveIndex, setCarouselActiveIndex] = useState(0);
  const galleryPhotos = externalPhotos.map(
    ({ url, originalPhoto, cropPxl, display_cropped, title }) => {
      const { naturalHeight, naturalWidth } = originalPhoto;
      const height = display_cropped ? cropPxl.height : naturalHeight;
      const width = display_cropped ? cropPxl.width : naturalWidth;
      return {
        src: url,
        cropPxl,
        display_cropped,
        height,
        width,
        key: url,
        title,
      };
    }
  );

  const handleClickThumb = (index: number) => {
    setCarouselActiveIndex(index);
    setModalOpen(true);
  };

  const imageRenderer = useCallback(
    ({ index, left, top, key, photo, ...rest }) => {
      const { src, display_cropped, cropPxl, height, width, title } = photo;
      const image = (
        <Image
          onClick={() => handleClickThumb(index)}
          publicId={photo.src?.replace("?", "%3F")}
          type="fetch"
          height={height}
          width={width}
        >
          {display_cropped && <Transformation crop="crop" {...cropPxl} />}
        </Image>
      );
      return (
        <div key={`${src}${index}`} style={{ margin: "2px" }}>
          {title ? (
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id={photo.src}>{title}</Tooltip>}
            >
              {image}
            </OverlayTrigger>
          ) : (
            image
          )}
        </div>
      );
    },
    []
  );
  const carouselImages = externalPhotos?.length
    ? externalPhotos.map(({ url, title }) => {
        return {
          source: url,
          caption: title,
          key: url,
        };
      })
    : [];
  return (
    <div>
      <Gallery
        targetRowHeight={200}
        photos={galleryPhotos}
        renderImage={imageRenderer}
      />
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
    </div>
  );
};

export default PhotoGalleryCloudinary;
