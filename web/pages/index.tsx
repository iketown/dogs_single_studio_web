import { GetServerSideProps } from "next";
import { getPageData } from "sanityQueries/pageQuery";

// this is the same as any page, its just stuck with a page_slug of "home".
import PageIndexNormal from "./[page_slug]";
import CenterStyle from "../src/components/styled_components/CenterStyle";

const PageIndex = (props) => {
  return <PageIndexNormal {...props} />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const page_slug = "home";
  const data = await getPageData({ page_slug });
  return { props: data };
};

export default PageIndex;
