import React from "react";
import SectionPicker from "./SectionPicker";
import { motion } from "framer-motion";
// import JTree from "@util/JTree";
const variants = {
  in: (index: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1, delay: index * 0.15 },
  }),
  initial: { opacity: 0, y: 30 },
};

export const useSections = () => {
  const displaySections = (sections: Section[]) => {
    return sections?.map((section, index) => {
      return (
        <motion.div
          variants={variants}
          initial="initial"
          animate="in"
          key={`${section._id}${section._key}${index}`}
          custom={index}
        >
          <SectionPicker
            key={`${section._id}${section._key}${index}`}
            {...{ section, index }}
          />
          {/* <JTree data={{ section }} /> */}
        </motion.div>
      );
    });
  };
  return { displaySections };
};
