import PageSlugIndex from "@pages/PageSlugIndex";
import { GetServerSideProps } from "next";
import React from "react";
import { getPageData } from "sanityQueries/pageQuery";
import { DemoOnly } from "@util/router/demo_settings";
//
//
const DemoPage = (props) => {
  return (
    <DemoOnly>
      <PageSlugIndex {...props} />
    </DemoOnly>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const page_slug = params.page_slug as string;
  const breeder_slug = params.breeder_slug as string;

  const data = await getPageData({ page_slug, breeder_slug });
  return { props: data };
};

export default DemoPage;
