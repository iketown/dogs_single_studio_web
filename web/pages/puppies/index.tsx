import LitterInfoDisplay from "@components/dogs/LitterInfoDisplay";
import Layout from "@components/layout/Layout";
import SplitPhoto from "@components/photos/SplitPhoto";
import { getPuppiesPageData } from "@sanityQueries/puppiesPageQ";
import { useSections } from "@sections/useSections";
import { imageBuilder } from "@util/sanityImage";
import { GetServerSideProps } from "next";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//
//
const PuppiesIndexPage: React.FC<any> = ({
  layout_info,
  litters,
  custom_sections,
  default_sections,
}) => {
  const { displaySections } = useSections();
  const sections =
    default_sections?.map((sec, i) => (sec._id ? sec : custom_sections[i])) ||
    [];
  return (
    <Layout {...{ layout_info }}>
      {displaySections(sections)}
      <div style={{ background: "whitesmoke" }}>
        <Container className="pb-4">
          {litters?.map((litter, index) => {
            if (litter._id?.includes("drafts")) return null;
            if (!litter) return null;

            const getParentsImage = () => {
              switch (true) {
                case !!litter.photos?.length: {
                  // return first photo of this litter.
                  const imgUrl = imageBuilder
                    .image(litter.photos[0])
                    .width(400)
                    .url();
                  return (
                    <Image
                      className="rounded shadow"
                      height={300}
                      width={400}
                      src={imgUrl}
                    />
                  );
                }
                case !!litter.dam_ref ||
                  !!litter.dam_ext_ref ||
                  !!litter.sire_ref ||
                  !!litter.sire_ext_ref: {
                  const momPhoto =
                    litter.dam_ref?.photo || litter.dam_ext_ref?.photo;
                  const dadPhoto =
                    litter.sire_ref?.photo || litter.sire_ext_ref?.photo;
                  return <SplitPhoto {...{ dadPhoto, momPhoto }} />;
                }
                // no photos available, just return stock sheltie photo
                default: {
                  return (
                    <Image
                      className="rounded shadow"
                      height={300}
                      width={400}
                      src={"/images/silhouettes/sheltie_silhouette.svg"}
                    />
                  );
                }
              }
            };

            return (
              <div key={litter._id}>
                <hr />
                <Row key={litter._id} className="mt-4">
                  <Col
                    xs={12}
                    md={6}
                    className="d-flex justify-content-center "
                  >
                    {getParentsImage()}
                  </Col>
                  <Col xs={12} md={6} className="text-center text-md-left">
                    <LitterInfoDisplay {...{ litter }} />
                  </Col>
                </Row>
              </div>
            );
          })}
        </Container>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const data = await getPuppiesPageData();
  return { props: data };
};

export default PuppiesIndexPage;
