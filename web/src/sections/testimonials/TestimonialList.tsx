import { imageBuilder } from "@util/sanityImage";
import classnames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import PhotoSide from "./PhotoSide";
import TextSide from "./TextSide";

const TestimonialList: React.FC<SectionPickerI> = ({ section, index }) => {
  const variants = (fromLeft: boolean) => ({
    initial: { x: fromLeft ? -50 : 50, opacity: 0 },
    in: (i) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 1 },
      rotate: fromLeft ? i : -i,
    }),
    exit: { opacity: 0, transition: { duration: 2 } },
  });
  const indexEven = index % 2 === 0;
  const testCount = useRef(2);
  const [testIndex, setTestIndex] = useState(0);
  const testimonials = section.testimonial_refs.map(
    (tm, index) => tm || section.testimonials[index]
  );
  const longestTestIndex = useMemo(() => {
    let longestTestimonialLength = 0;
    let longestTestimonialIndex = 0;
    testimonials.forEach((tm, index) => {
      let length = 0;
      tm.text?.forEach((p) => {
        p.children.forEach(({ text }) => (length += text.length));
      });
      if (length > longestTestimonialLength) {
        longestTestimonialLength = length;
        longestTestimonialIndex = index;
      }
    });
    return longestTestimonialIndex;
  }, [section]);

  // const longestTestimonial = testimonials.sort((testA,testB)=> testA.)
  useEffect(() => {
    const interval = setInterval(() => {
      setTestIndex((old) => (old + 1) % section.testimonials?.length);
      testCount.current = -testCount.current;
    }, 8 * 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Container>
      <Row>
        <Col
          style={{ display: "flex", alignItems: "center" }}
          xs={12}
          md={5}
          lg={6}
          className={classnames({ "order-md-1": indexEven })}
        >
          <div
            style={{
              position: "relative",
              margin: "auto",
            }}
          >
            <AnimatePresence>
              {testimonials.map((tm, index) => {
                if (index !== testIndex) return null;
                if (!tm.images?.length) return null;
                const url = imageBuilder
                  .image(tm.images[0])
                  .width(400)
                  .height(300)
                  .url();
                return (
                  <motion.div
                    custom={testCount.current}
                    initial="initial"
                    animate="in"
                    exit="exit"
                    key={`test${index}`}
                    variants={variants(!indexEven)}
                    style={{
                      position: "absolute",
                    }}
                  >
                    <div
                      style={{
                        transform: "translateX(-50%)",
                        boxShadow: "5px 4px 2px #00000024",
                      }}
                    >
                      <Image width={400} height={300} src={url} />
                    </div>
                  </motion.div>
                );
              })}
              <div style={{ opacity: 0 /** just for spacing */ }}>
                <PhotoSide images={testimonials[testIndex].images} />
              </div>
            </AnimatePresence>
          </div>
        </Col>
        <Col
          style={{ minHeight: "15rem" }}
          xs={12}
          md={7}
          lg={6}
          className={classnames({ "order-md-2": indexEven })}
        >
          <div style={{ position: "relative" }}>
            <AnimatePresence>
              {testimonials.map((tm, index) => {
                if (index !== testIndex) return null;
                return (
                  <motion.div
                    custom={testCount.current}
                    initial="initial"
                    animate="in"
                    exit="exit"
                    key={`test${index}`}
                    variants={variants(indexEven)}
                    style={{
                      position: "absolute",
                      top: "50%",
                    }}
                  >
                    <div
                      style={{
                        transform: "translateY(-50%)",
                        minWidth: "20rem",
                        margin: "auto",
                      }}
                    >
                      <TextSide section={tm} index={index} />
                    </div>
                  </motion.div>
                );
              })}
              <div style={{ opacity: 0 /** just for spacing */ }}>
                <TextSide
                  section={testimonials[longestTestIndex]}
                  index={longestTestIndex}
                />
              </div>
            </AnimatePresence>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TestimonialList;
