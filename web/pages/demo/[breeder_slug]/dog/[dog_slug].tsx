import DogSlugIndex from "@pages/DogSlugIndex";
import { getSingleDogData } from "@sanityQueries/dogPageQ";
import { GetServerSideProps } from "next";
import React from "react";
import { DemoOnly } from "@util/router/demo_settings";

const DogPage = ({ layout_info, dog }) => {
  return (
    <DemoOnly>
      <DogSlugIndex {...{ layout_info, dog }} />
    </DemoOnly>
  );
};

export default DogPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const dog_slug = params.dog_slug as string;
  const data = await getSingleDogData({ dog_slug });
  return { props: data };
};
