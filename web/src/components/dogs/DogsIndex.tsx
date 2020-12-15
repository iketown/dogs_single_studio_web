import BlockContent from "@components/blockContent/BlockContent";
import JTree from "@util/JTree";
import { imageBuilder } from "@util/sanityImage";
import classnames from "classnames";
import { Image } from "cloudinary-react";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import { useBreederCtx } from "../layout/BreederContext";

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

const DogsIndex: React.FC<{ dogs: any; sex: string }> = ({ dogs, sex }) => {
  const { breeder } = useBreederCtx();
  return (
    <div>
      <h1
        className="title"
        style={{
          textAlign: "center",
          marginTop: "1rem",
          padding: "1rem",
        }}
      >
        {sex === "male" ? "Sires" : "Dams"}
      </h1>
      {dogs.map((dog, index) => {
        const isEven = sex === "male" ? index % 2 === 0 : index % 2 !== 0;
        const colors = {
          text: isEven ? `var(--color-white)` : `var(--color-darkA)`,
          background: isEven ? `var(--color-darkB)` : `var(--color-lightA)`,
        };
        const url =
          dog.main_photo &&
          imageBuilder.image(dog.main_photo).width(450).height(300).url();

        const extImage = dog.main_photo_ext;
        let photo;
        if (url) {
          photo = (
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
        }
        if (extImage) {
          photo = (
            <Image
              // style={{ width: "100%", height: "100%" }}
              publicId={extImage.url}
              type="fetch"
              height={230}
              // width={400}
              crop="fit"
            ></Image>
          );
        }
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
                      <Link {...linkProps}>
                        <a>
                          <h4 style={{ color: colors.text }}>
                            {dog.name.toUpperCase()}
                          </h4>
                        </a>
                      </Link>
                      <p>{dog.show_name}</p>
                      {/* {dog.birthday && (
                        <small
                          style={{ color: colors.text, opacity: 0.5 }}
                          className="birthday"
                        >
                          born {dog.birthday}
                        </small>
                      )} */}
                      {dog.description && (
                        <div className="mt-4">
                          <BlockContent blocks={dog.description} />
                        </div>
                      )}
                    </InfoSide>
                  </Col>
                </Row>
              </motion.div>
            </Container>
          </div>
        );
      })}
    </div>
  );
};

export default DogsIndex;
