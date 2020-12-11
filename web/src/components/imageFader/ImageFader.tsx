import { imageBuilder } from "@util/sanityImage";
import { motion } from "framer-motion";
import React, { Fragment, useEffect, useState } from "react";

interface ImageFaderI {
  images: SanityImage[];
  decoration?: string;
  secondsBetweenImages?: number;
  width?: number;
  height?: number;
}

const ImageFader: React.FC<ImageFaderI> = ({
  images,
  secondsBetweenImages = 8,
  width = 1000,
  height = 500,
  decoration,
}) => {
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((old) => (old + 1) % images?.length);
    }, secondsBetweenImages * 1000);
    return () => clearInterval(interval);
  }, []);
  const imageUrls = images?.map((img) => {
    const url = imageBuilder.image(img).width(width).height(height).url();
    const caption = img.caption;
    return { url, caption };
  });
  return (
    <>
      {imageUrls?.map(({ url, caption }, i) => {
        const isOdd = i % 2 === 0;
        return (
          <Fragment key={url + "fragment"}>
            {decoration === "rotateBoxes" && (
              <>
                <motion.div
                  key={url + "bg"}
                  style={{
                    background: isOdd
                      ? "var(--color-darkA)"
                      : "var(--color-darkB)",
                    position: "absolute",
                    top: "1.5%",
                    left: "1.5%",
                    right: "-1.5%",
                    bottom: "-1.5%",
                    zIndex: 1,
                    rotate: isOdd ? -1 : 1,
                  }}
                  animate={{
                    opacity: i === imageIndex ? 1 : 0,
                    transition: { duration: 1, delay: 0.5 },
                  }}
                ></motion.div>
                <motion.div
                  key={url + "box"}
                  style={{
                    position: "absolute",
                    top: "2%",
                    left: "2%",
                    right: "-2%",
                    bottom: "-2%",
                    zIndex: 2,
                    rotate: isOdd ? 1 : -1,
                    border: `1px solid var(--color-${
                      isOdd ? "lightA" : "lightB"
                    })`,
                  }}
                  animate={{
                    opacity: i === imageIndex ? 1 : 0,
                    transition: { duration: 1, delay: 1 },
                  }}
                ></motion.div>
              </>
            )}

            <motion.div
              key={url + "img"}
              style={{
                position: "absolute",
                backgroundImage: `url(${url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundColor: "white",
                backgroundPosition: "center",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                zIndex: 5,
              }}
              animate={{
                opacity: i === imageIndex ? 1 : 0,
                transition: { duration: 1.5 },
              }}
            >
              {caption && (
                <div
                  key={url + "caption"}
                  style={{
                    color: "white",
                    background: "#333333aa",
                    borderRadius: "5px",
                    padding: "3px 5px",
                    fontSize: "12px",
                    position: "absolute",
                    bottom: "5px",
                    left: "5px",
                  }}
                >
                  {caption}
                </div>
              )}
            </motion.div>
          </Fragment>
        );
      })}
    </>
  );
};

export default ImageFader;
