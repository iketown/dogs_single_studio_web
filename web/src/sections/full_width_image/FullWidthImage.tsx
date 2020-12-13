import { imageBuilder } from "@util/sanityImage";
import React from "react";
// import JTree from "../../../util/JTree";

const defaultHeight = 15;

const BgImage: React.FC<SectionPickerI> = ({ section, index }) => {
  const heightPx = section.height * 16 || defaultHeight * 16;
  const bgUrl = imageBuilder
    .image(section.photo)
    .width(900)
    .height(heightPx)
    .url();
  return (
    <>
      <div
        style={{
          height: `${heightPx}px`,
          backgroundSize: "cover",
          backgroundImage: `url(${bgUrl})`,
          backgroundPosition: "center",
        }}
      ></div>
      {/* <JTree data={section} /> */}
    </>
  );
};

export default BgImage;
