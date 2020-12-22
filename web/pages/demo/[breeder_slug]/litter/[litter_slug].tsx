import LitterSlugIndex from "@pages/LitterSlugIndex";
import { getLitterData } from "@sanityQueries/litterPageQ";
import { GetServerSideProps } from "next";
import React from "react";

const LitterPage = ({ layout_info, litter }) => {
  return <LitterSlugIndex {...{ layout_info, litter }} />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const litter_slug = params.litter_slug as string;
  const breeder_slug = params.breeder_slug as string;
  const data = await getLitterData({ litter_slug, breeder_slug });
  return { props: data };
};

export default LitterPage;
