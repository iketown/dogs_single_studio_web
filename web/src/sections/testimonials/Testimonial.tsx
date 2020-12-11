import classnames from "classnames";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import PhotoSide from "./PhotoSide";
import TextSide from "./TextSide";
import {
  FaPenFancy,
  FaPenNib,
  FaEnvelopeOpen,
  FaRegEnvelopeOpen,
  FaRegEnvelope,
} from "react-icons/fa";
const variants = (leftSide: boolean) => ({
  enter: { x: leftSide ? -100 : 100, opacity: 0 },
  in: { x: 0, opacity: 1, transition: { duration: 0.75 } },
});

const Testimonial: React.FC<SectionPickerI> = ({ section, index }) => {
  const indexEven = index % 2 === 0;

  return (
    <Container>
      <hr />
      <div>
        <Row style={{ marginTop: "2rem" }}>
          <Col
            style={{ minHeight: "15rem" }}
            xs={12}
            md={6}
            className={classnames({ "order-md-2": indexEven })}
          >
            {section.images ? (
              <motion.div
                initial="enter"
                animate="in"
                variants={variants(!indexEven)}
                key={`${section._key}-${index}`}
                style={{
                  boxShadow: "5px 4px 2px #00000024",
                }}
              >
                <PhotoSide images={section.images} />
              </motion.div>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <FaRegEnvelope
                  size="8rem"
                  color="#00000011"
                  style={{ transform: "rotate(5deg)" }}
                />
              </div>
            )}
          </Col>
          <Col
            style={{ display: "flex", alignItems: "center" }}
            xs={12}
            md={6}
            className={classnames({ "order-md-1": indexEven })}
          >
            <motion.div
              key={`${section._key}-${index}`}
              initial="enter"
              animate="in"
              variants={variants(indexEven)}
              style={{ minWidth: "20rem", margin: "auto" }}
            >
              <TextSide {...{ section, index }} />
            </motion.div>
          </Col>
        </Row>

        {/* <JSONTree data={section} /> */}
      </div>
    </Container>
  );
};

export default Testimonial;
