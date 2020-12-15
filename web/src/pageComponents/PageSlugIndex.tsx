import Custom404 from "@components/404";
import Layout from "@components/layout/Layout";
import { useSections } from "@sections/useSections";
import JTree from "@util/JTree";
import { useRouter } from "next/router";
import React from "react";
import { useRef } from "react";
import { Helmet } from "react-helmet";

//
//
const PageSlugIndex = (props) => {
  const { query } = useRouter();
  const { sections_custom_page, sections_default_page, layout_info } = props;
  const { displaySections } = useSections();
  // this component works for custom pages OR default pages, so we have to check which type this is:  either sections_custom_page or sections_default_page;  the other should be undefined;
  const page = sections_custom_page || sections_default_page;
  if (!page)
    return (
      <div>
        <Custom404 />
        <JTree data={props} />
      </div>
    );
  const sections = page.default_sections?.map(
    // if there's nothing in the default_sections array, its a custom page.
    (section, index) =>
      !!section?._id
        ? section
        : page.custom_sections && page.custom_sections[index]
  );

  return (
    <Layout {...{ layout_info }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{layout_info.kennel_name}</title>
      </Helmet>
      {displaySections(sections)}
      <JTree data={sections} />
    </Layout>
  );
};

export default PageSlugIndex;
