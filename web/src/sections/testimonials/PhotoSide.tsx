import ImageFader from "@components/imageFader/ImageFader";
import React from "react";

const PhotoSide: React.FC<{ images: any }> = ({ images }) => {
  return (
    <div style={{ height: "20rem", position: "relative" }}>
      <ImageFader
        secondsBetweenImages={10}
        images={images}
        height={300}
        width={400}
      />
    </div>
  );
};

export default PhotoSide;
