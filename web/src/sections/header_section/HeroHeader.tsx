import { motion, useTransform, useViewportScroll } from "framer-motion";
import React, { useEffect, useState } from "react";

import { imageBuilder } from "@util/sanityImage";
import { useBreederCtx } from "../../components/layout/BreederContext";
import JTree from "@util/JTree";

const getSanityImageUrl = (img: SanityImage) => {
  const baseImg = imageBuilder.image(img).width(1000);
  if (img.show_full) return { show_full: true, url: baseImg.url() }; // no cropping
  return { show_full: false, url: baseImg.height(500).url() }; // cropped to 1000 x 500;
};

// HeroHeader is for normal use, no external images
const HeroHeader: React.FC<SectionPickerI> = ({ section }) => {
  const images = section.images?.map(getSanityImageUrl);
  return <HeroHeaderDisplay images={images} />;
};

// HeroHeaderAuto mixes in external urls from the breeder.  for marketing site.
export const HeroHeaderAuto: React.FC<SectionPickerI> = ({ section }) => {
  const { breeder } = useBreederCtx();

  const defaultImages = section.images?.map(getSanityImageUrl);
  const breederImages = breeder.ext_header_photos?.map(
    ({ url, cropPxl, display_cropped }) => {
      if (!display_cropped || !cropPxl) return { show_full: true, url };
      const { height, width, x, y } = cropPxl;
      const cloudUrl = `https://res.cloudinary.com/ikeworks/image/fetch/x_${x},y_${y},w_${width},h_${height},c_crop/${url}`;
      return { show_full: false, url: cloudUrl };
    }
  );
  // return <JTree data={breeder} />;
  return (
    <HeroHeaderDisplay
      images={breederImages?.length ? breederImages : defaultImages}
    />
  );
};

interface HeroHeaderDisplayI {
  images: { url: string; show_full: boolean }[];
}
export const HeroHeaderDisplay: React.FC<HeroHeaderDisplayI> = ({ images }) => {
  const { scrollY } = useViewportScroll();
  const yTransform = useTransform(scrollY, (y) => `${y / 2}px`);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((old) => (old + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div
      style={{
        position: "relative",
        height: "50vw",
        background: "lightblue",
      }}
    >
      {images.map(({ url, show_full }, i) => {
        const backgroundSize = show_full ? "contain" : "cover";
        return (
          <motion.div
            key={`${url}${i}`}
            style={{
              position: "absolute",
              backgroundImage: `url(${url})`,
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "center",
              backgroundPositionY: yTransform, // parallax
              backgroundSize,
              backgroundColor: "white",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
            animate={{
              opacity: i === imageIndex ? 1 : 0,
              transition: { duration: 1 },
            }}
          />
        );
      })}
    </div>
  );
};

export default HeroHeader;
