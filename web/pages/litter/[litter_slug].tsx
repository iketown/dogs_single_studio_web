import LitterSlugIndex from "@pages/LitterSlugIndex";
import { getLitterData } from "@sanityQueries/litterPageQ";
import { GetServerSideProps } from "next";
import React from "react";
import { NonDemoOnly } from "../../util/router/demo_settings";

const LitterPage = ({ layout_info, litter }) => {
  return (
    <NonDemoOnly>
      <LitterSlugIndex {...{ layout_info, litter }} />
    </NonDemoOnly>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const litter_slug = params.litter_slug as string;
  const data = await getLitterData({ litter_slug });
  return { props: data };
};

export default LitterPage;
