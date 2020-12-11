import { motion, useTransform, useViewportScroll } from "framer-motion";
import React, { useEffect, useState } from "react";

import { imageBuilder } from "@util/sanityImage";

const HeroHeader: React.FC<HeroHeaderI> = ({ section }) => {
  const { scrollY } = useViewportScroll();
  const yTransform = useTransform(scrollY, (y) => `${y / 2}px`);
  const [imageIndex, setImageIndex] = useState(0);

  const images = section.images?.map((img) => {
    const baseImg = imageBuilder.image(img).width(1000);
    if (img.show_full) return baseImg.url(); // no cropping
    return baseImg.height(500).url();
  });

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
      {images.map((image, i) => {
        const backgroundSize = section.images[i].show_full
          ? "contain"
          : "cover";
        return (
          <motion.div
            key={image}
            style={{
              position: "absolute",
              backgroundImage: `url(${image})`,
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

// const HeroHeaderX: React.FC<HeroHeaderI> = ({ title, heroPhoto }) => {
//   return (
//     <ParallaxBanner
//       // className="your-class"
//       layers={[
//         {
//           image: heroPhoto,
//           amount: 0.4,
//           expanded: false,
//         },
//         {
//           children: () => <div />,
//           amount: 0,
//           props: {
//             style: {
//               backgroundImage:
//                 'linear-gradient(#00000000 0%,#00000000 50%,#00000044 70%, #00000066 90% )',
//               height: '100%',
//               width: '100%',
//             },
//           },
//         },
//       ]}
//       style={{
//         height: '60vh',
//         marginTop: '-3.5rem',
//         display: 'flex',
//         alignItems: 'flex-end',
//         justifyContent: 'center',
//         // padding: '1rem',
//         border: '5px solid white',
//       }}
//     >
//       <h1
//         style={{
//           zIndex: 2,
//           color: 'white',
//           fontFamily: 'Kaushan Script',
//           fontSize: '3rem',
//           textShadow: '2px 2px 3px #000000c7',
//         }}
//       >
//         {title}
//       </h1>
//     </ParallaxBanner>
//   );
// };

// const HeroContainer = styled.div`
//   height: 50vh;
//   position: relative;
//   overflow: hidden;
//   display: flex;
//   justify-content: center;
//   align-items: flex-end;
//   padding: 1rem;
//   width: 100vw;
//   background: white;
//   border: 1px solid blue;
// `;
