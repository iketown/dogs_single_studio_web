import Custom404 from "@components/404";
import { useParentLinks } from "@components/dogs/useParentLinks";
import Layout from "@components/layout/Layout";
import PhotoGallery from "@components/photos/PhotoGallery";
import PhotoGalleryCloudinary from "@components/photos/PhotoGalleryCloudinary";
import { useSections } from "@sections/useSections";
import JTree from "@util/JTree";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import { FaPaw, FaTimes } from "react-icons/fa";

//
//
const DogSlugIndex = ({ layout_info, dog }) => {
  const { query, back } = useRouter();
  const { getDadLink, getMomLink } = useParentLinks();
  if (!dog) return <Custom404 />;
  const {
    show_name,
    name,
    sex,
    description,
    head_shots,
    action_shots,
    head_shots_ext,
    action_shots_ext,
    litters,
    middle_sections,
    middle_section_refs,
  } = dog;
  const middleSectionAll = middle_section_refs?.map((sect, i) =>
    sect._id ? sect : middle_sections[i]
  );
  const { displaySections } = useSections();
  const headerColors =
    sex === "male"
      ? { bg: `var(--color-darkA)`, text: `var(--color-lightA)` }
      : { bg: `var(--color-lightA)`, text: `var(--color-darkA)` };
  return (
    <Layout {...{ layout_info }}>
      <Container className="pt-4">
        {head_shots && <PhotoGallery photos={head_shots} />}
        {head_shots_ext && (
          <PhotoGalleryCloudinary externalPhotos={head_shots_ext.photos} />
        )}
      </Container>
      <h1
        style={{
          textAlign: "center",
          color: headerColors.text,
          background: headerColors.bg,
          padding: "1rem",
          marginBottom: "2rem",
        }}
      >
        {dog.name.toUpperCase()}
      </h1>

      {displaySections(middleSectionAll)}
      <Container className="my-4">
        {/* {description && <BlockContent blocks={description} />} */}
        {!litters?.length ? null : (
          <div>
            <ListGroup>
              <ListGroup.Item>
                <h5>Litters</h5>
              </ListGroup.Item>
              {litters.map((litter) => {
                const partner =
                  sex === "male" ? (
                    getMomLink(litter)
                  ) : sex === "female" ? (
                    getDadLink(litter)
                  ) : (
                    <div>ERROR</div>
                  );
                return (
                  <Link
                    href={`/litter/[litter_slug]`}
                    as={`/litter/${litter.slug.current}`}
                    key={litter._id}
                  >
                    <ListGroup.Item
                      action
                      className="d-flex align-items-center justify-content-between"
                    >
                      <div className="d-flex align-items-center">
                        <FaPaw className="mr-2" />
                        <FaTimes className="mr-2" />
                        <span className="mr-2">{partner}</span>
                      </div>
                      <span>
                        {litter.born_date
                          ? moment(litter.born_date, "YYYY-MM-DD").format(
                              "MM/DD/YY"
                            )
                          : litter.due_date
                          ? `due ${moment(litter.due_date, "YYYY-MM-DD").format(
                              "MMM DD"
                            )}`
                          : ""}
                      </span>
                    </ListGroup.Item>
                  </Link>
                );
              })}
            </ListGroup>
          </div>
        )}
        {action_shots && (
          <div className="my-4">
            <PhotoGallery photos={action_shots} />
          </div>
        )}
        {action_shots_ext && (
          <div className="my-4">
            <PhotoGalleryCloudinary externalPhotos={action_shots_ext.photos} />{" "}
          </div>
        )}
        <div className="text-center m-5">
          <Button variant="info" onClick={back}>
            BACK
          </Button>
        </div>
      </Container>
      {/* <JTree data={dog} /> */}
    </Layout>
  );
};

export default DogSlugIndex;

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const dog_slug = params.dog_slug as string;
//   const data = await getSingleDogData({ dog_slug });
//   return { props: data };
// };
