import React, { useEffect, useState } from "react";
import groq from "groq";
import JTree from "@util/JTree";
import sanityClient from "@util/sanityClient";
import { imageBuilder } from "@util/sanityImage";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import classnames from "classnames";
import Link from "next/link";
import BlockContent from "../../components/blockContent/BlockContent";
import { FaMars, FaVenus } from "react-icons/fa";

const InfoSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  .birthday {
    color: #878787;
    line-height: 0;
  }
  padding: 1rem 1rem 2rem;
`;

const variants = (odd: boolean) => ({
  in: (index) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: index * 0.15 },
  }),
  initial: { opacity: 0, x: odd ? 50 : -50 },
  exit: { opacity: 0, x: odd ? 50 : -50 },
});

const DogListItem: React.FC<SectionPickerI> = ({ section, index }) => {
  // shows dog on "dogs" page or "sires" etc, and links to the individual dog's page.
  const { dog } = section;
  // sex
  //
  if (!dog) return <pre>dog info missing</pre>;
  const isEven = index % 2 === 0;
  const colors = {
    text: isEven ? `var(--color-white)` : `var(--color-darkA)`,
    background: isEven ? `var(--color-darkB)` : `var(--color-lightA)`,
  };
  const url =
    dog.head_shots &&
    dog.head_shots[0] &&
    imageBuilder.image(dog.head_shots[0]).width(450).height(300).url();
  const photo = url && (
    <div
      style={{
        width: "100%",
        maxWidth: "400px",
        backgroundImage: `url(${url})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100%",
        minHeight: "230px",
        // borderRadius: "5px",
      }}
    ></div>
  );
  const sexIcon = {
    female: (
      <FaVenus
        style={{ color: colors.text, opacity: 0.1 }}
        size="2.5rem"
        className="mr-2"
      />
    ),
    male: (
      <FaMars
        style={{ color: colors.text, opacity: 0.1 }}
        size="2.5rem"
        className="mr-2"
      />
    ),
  };
  const linkProps = {
    href: `/dog/[dog_slug]`,
    as: `/dog/${dog.slug?.current}`,
  };
  return (
    <div
      key={dog._id}
      style={{
        background: colors.background,
        color: colors.text,
      }}
    >
      <Container>
        <motion.div
          initial="initial"
          animate="in"
          exit="exit"
          variants={variants(isEven)}
          custom={index}
        >
          <Row style={{ minHeight: "230px" }}>
            <Col
              xs={12}
              md={6}
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                padding: 0,
              }}
              className={classnames(
                { "order-md-2": isEven },
                "pt-md-0",
                "pt-2"
              )}
            >
              <Link {...linkProps}>
                <a style={{ width: "100%" }}>{photo}</a>
              </Link>
            </Col>
            <Col
              xs={12}
              md={6}
              className={classnames({ "order-md-1": isEven })}
            >
              <InfoSide>
                {section.show_sex_icon && (
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: isEven ? "1rem" : undefined,
                      right: !isEven ? "1rem" : undefined,
                    }}
                  >
                    {sexIcon[dog.sex]}
                  </div>
                )}
                <Link {...linkProps}>
                  <a>
                    <h4 style={{ color: colors.text }}>
                      {dog.name.toUpperCase()}
                    </h4>
                  </a>
                </Link>
                <p className="text-center">{dog.show_name}</p>
                {/* {dog.birthday && (
                        <small
                          style={{ color: colors.text, opacity: 0.5 }}
                          className="birthday"
                        >
                          born {dog.birthday}
                        </small>
                      )} */}
                {dog.description && (
                  <div>
                    <BlockContent blocks={dog.description} />
                  </div>
                )}
              </InfoSide>
            </Col>
          </Row>
        </motion.div>
      </Container>
      {/* <JTree data={section} /> */}
    </div>
  );
};

export default DogListItem;
