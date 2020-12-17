import { NonDemoOnly } from "@util/router/demo_settings";
import PageSlugIndex from "@pages/PageSlugIndex";
import { GetServerSideProps } from "next";
import React from "react";
import { getPageData } from "sanityQueries/pageQuery";

//
//
const RealPage = (props) => {
  return (
    <NonDemoOnly>
      <PageSlugIndex {...props} />
    </NonDemoOnly>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const page_slug = params.page_slug as string;
  const data = await getPageData({ page_slug });
  return { props: data };
};

export default RealPage;
