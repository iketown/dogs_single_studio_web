import groq from "groq";
import sanityClient from "@util/sanityClient";
import { getPageQuery } from "./sharedQ";

const homePageGroq = getPageQuery(groq`
"page_links": pages[] -> {
    "slug": slug.current,
    title
  },
"home_page": *[slug.current == 'home'][0]{
  "sections": sections[]->,
  ...
  },
`);

export const getHomePage = async () => {
  const data = await sanityClient.fetch(homePageGroq);
  return data;
};

const breederSlugsQ = groq`
  *[_type == "breeder" ]{
  "slug": slug.current, 
}
`;
export const getBreederSlugs = async () => {
  const data = await sanityClient.fetch(breederSlugsQ);
  return data;
};
