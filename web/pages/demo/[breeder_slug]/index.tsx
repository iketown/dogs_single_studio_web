import { GetServerSideProps } from "next";
import { getPageData } from "sanityQueries/pageQuery";

// this is the same as any page, its just stuck with a page_slug of "home".
import PageIndexNormal from "./[page_slug]";

const PageIndex = (props) => {
  return <PageIndexNormal {...props} />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const page_slug = "home";
  const breeder_slug = params.breeder_slug as string;
  const data = await getPageData({ page_slug, breeder_slug });
  return { props: data };
};

export default PageIndex;
