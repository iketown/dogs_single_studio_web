import DogCard from "@components/dogs/DogCard";
import { useParentLinks } from "@components/dogs/useParentLinks";
import Layout from "@components/layout/Layout";
import { getLitterData } from "@sanityQueries/litterPageQ";
import { useSections } from "@sections/useSections";
import { imageBuilder } from "@util/sanityImage";
import moment from "moment";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaBirthdayCake } from "react-icons/fa";

const LitterPage = ({ layout_info, litter }) => {
  const { query } = useRouter();
  const { displaySections } = useSections();
  const { getDadLink, getMomLink } = useParentLinks();
  const { male, female } = litter.whelps?.reduce(
    (obj, w) => {
      obj[w.sex]++;
      return obj;
    },
    { male: 0, female: 0 }
  );

  const parentWidth = 400;
  const parentHeight = 300;

  const momRef = litter.dam_ref;
  const momRefExt = litter.dam_ext_ref;
  const momPhoto = momRef
    ? momRef.head_shots[0]
    : momRefExt
    ? momRefExt.photo
    : null;
  const momPhotoUrl =
    momPhoto &&
    imageBuilder
      .image(momPhoto)
      .width(parentWidth)
      .height(parentHeight)
      .format("jpg")
      .url();

  const dadRef = litter.sire_ref;
  const dadRefExt = litter.sire_ext_ref;
  const dadPhoto = dadRef
    ? dadRef.head_shots[0]
    : dadRefExt
    ? dadRefExt.photo
    : null;
  const dadPhotoUrl =
    dadPhoto &&
    imageBuilder.image(dadPhoto).width(parentWidth).height(parentHeight).url();

  const mom = {
    imageUrl: momPhotoUrl || "/images/silhouettes/sheltie_silhouette.svg",
    name: momRef?.name || momRefExt?.name || litter.dam_string,
    color: "var(--color-female)",
    nameLink: getMomLink(litter),
  };
  const dad = {
    imageUrl: dadPhotoUrl || "/images/silhouettes/sheltie_silhouette.svg",
    name: dadRef?.name || dadRefExt?.name || litter.sire_string,
    color: "var(--color-male)",
    nameLink: getDadLink(litter),
  };

  const preSections = litter.pre_puppy_sections_refs?.map((section, index) =>
    section._id ? section : litter.pre_puppy_sections[index]
  );
  const postSections = litter.post_puppy_sections_refs?.map((section, index) =>
    section._id ? section : litter.post_puppy_sections[index]
  );
  return (
    <Layout {...{ layout_info }}>
      <div className="py-4" style={{ background: "whitesmoke" }}>
        <Container className="py-4">
          <Row className="mt-4">
            {[dad, mom].map(({ imageUrl, name, color, nameLink }, i) => {
              return (
                <Col
                  key={i}
                  xs={12}
                  md={6}
                  className="d-flex justify-content-center align-items-center"
                >
                  <Card
                    className="m-4 shadow-sm rounded"
                    style={{ borderBottom: `2px solid ${color}` }}
                  >
                    <Image
                      className="card-img-top"
                      width={parentWidth}
                      height={parentHeight}
                      src={imageUrl}
                    />
                    <Card.Footer>
                      <Card.Title as="h4">{nameLink}</Card.Title>
                    </Card.Footer>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>

        {preSections && (
          <div className="my-4">{displaySections(preSections)}</div>
        )}

        {/** Puppy Pictures */}
        <div style={{ background: "var(--color-darkB)" }}>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              position: "relative",
              justifyContent: "center",
              bottom: "3rem",
              marginBottom: "-2rem",
              marginTop: "3rem",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                boxShadow: "2px 2px 2px #33333311",
                borderRadius: "2rem",
                padding: "2rem 3rem",
              }}
            >
              {litter.born_date && (
                <FaBirthdayCake
                  size="2rem"
                  color="lightgrey"
                  className="mb-2"
                />
              )}
              <h4 className="text-center ">
                {litter.born_date
                  ? moment(litter.born_date).format("MMM DD, YYYY")
                  : litter.due_date
                  ? "due " + moment(litter.due_date).format("MMM DD, YYYY")
                  : null}
              </h4>
              {litter.born_date && (
                <div className="d-none d-sm-block text-center text-muted">
                  {male} male | {female} female
                </div>
              )}
            </div>
          </div>
          <Container
            style={{
              // paddingTop: "6rem",
              // marginTop: "7rem",
              paddingBottom: "3rem",
            }}
          >
            {!litter.whelps?.length ? (
              <div className="text-center text-white">
                Puppy pix coming soon. . .
              </div>
            ) : (
              <div style={{ color: "var(--color-lightA)" }}>
                <h2 className="title text-lg">The Puppies</h2>
              </div>
            )}
            <Row xs={1} sm={2} md={3}>
              {litter.whelps
                ?.sort((a, b) =>
                  a.buyers && b.buyers ? a.buyers?.length - b.buyers?.length : 0
                )
                .map((whelp, index) => {
                  const photoUrl =
                    whelp.photos &&
                    imageBuilder
                      .image(whelp.photos[0])
                      .width(300)
                      .height(200)
                      .url();
                  return (
                    <Col key={whelp._id} className="mt-4 ">
                      <DogCard photoUrl={photoUrl} dog={whelp} index={index} />
                    </Col>
                  );
                })}
            </Row>
          </Container>
        </div>

        {postSections && (
          <div className="my-4">{displaySections(postSections)}</div>
        )}
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const litter_slug = params.litter_slug as string;
  const data = await getLitterData({ litter_slug });
  return { props: data };
};

export default LitterPage;
