import PageSlugIndex from "@pages/PageSlugIndex";
import { GetServerSideProps } from "next";
import React from "react";
import { getPageData } from "sanityQueries/pageQuery";

//
//
const DemoPage = (props) => {
  return <PageSlugIndex {...props} />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const page_slug = params.page_slug as string;
  const breeder_slug = params.breeder_slug as string;

  const data = await getPageData({ page_slug, breeder_slug });
  return { props: data };
};

export default DemoPage;
