import React from "react";
import { useBreederCtx } from "../../components/layout/BreederContext";
import JTree from "@util/JTree";
import { Image, Transformation } from "cloudinary-react";
import { useViewportScroll, useTransform, motion } from "framer-motion";

const AutoPhotoHeader: React.FC<SectionPickerI> = ({ section, index }) => {
  const { breeder } = useBreederCtx();
  const { scrollY } = useViewportScroll();
  const offY = useTransform(scrollY, (y) => y / 2);
  const photo = breeder.ext_header_photo || section.ext_photo;
  if (!photo) return null;
  const { height, width, x, y } = photo.cropPxl;
  const url = `http://res.cloudinary.com/ikeworks/image/fetch/c_crop,h_${height},w_${width},x_${width},y_${y}/${photo.url}`;
  return (
    <>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <motion.div style={{ y: offY }}>
          <Image style={{ width: "100%" }} publicId={photo.url} type="fetch">
            <Transformation {...photo.cropPxl} crop="crop" />
            <Transformation crop="scale" width="900" height="600" />
          </Image>
        </motion.div>
      </div>
      <div>
        {/* <JTree data={{ breeder }} /> */}
        {/* <JTree data={{ section }} /> */}
      </div>
    </>
  );
};

export default AutoPhotoHeader;

const url = `http://res.cloudinary.com/ikeworks/image/fetch/c_crop,h_1140,w_1710,x_0,y_143/https://wyndewayshetsheep.com/victor_left_side_apr14_2019.jpg`;
