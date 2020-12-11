import Image from "next/image";
import React, { useCallback, useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";

import { imageBuilder } from "../../../util/sanityImage";

const PhotoGallery: React.FC<{ photos: any }> = ({ photos }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const prepareForGallery = (photoArr: any[]) => {
    return photoArr
      .map((img) => {
        if (!img?.dimensions) return null;
        const { height = 300, width = 500 } = img.dimensions;
        return {
          src: imageBuilder.image(img).height(300).format("jpg").url(),
          width,
          height,
        };
      })
      .filter((img) => !!img); // remove missing images
  };

  if (photos.length === 1)
    return (
      <div className="d-flex justify-content-center">
        <Image
          height={400}
          width={600}
          src={imageBuilder.image(photos[0]).height(400).width(600).url()}
        />
      </div>
    );

  return (
    <div>
      <Gallery
        targetRowHeight={250}
        photos={prepareForGallery(photos)}
        onClick={openLightbox}
      />
      {/* <JSONTree data={photos} /> */}
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos
                .filter((x) => x?.dimensions)
                .map((x) => {
                  const src = imageBuilder.image(x).width(600).url();
                  return {
                    src,
                    srcset: x.srcSet,
                    caption: x.caption,
                  };
                })}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default PhotoGallery;
