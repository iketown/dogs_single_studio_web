import groq from "groq";
import sanityClient from "@util/sanityClient";
import { sectionTypes } from "../../studio/schemas/sections/sections";

const savedSectionTypes = sectionTypes
  .map(({ name }) => `"${name}_saved"`)
  .join(", ");

import {
  layoutInfo,
  getPageQuery,
  getPageQueryMulti,
  blockContentWithLinks,
} from "./sharedQ";
import { waitingListQuery } from "./waitingListQ";

export const sectionInfo = groq`
  {
    ...,
     "testimonial_refs":testimonials[]->,
     photos {..., 'images': images[]{...,asset->}},
     "colors": colorScheme ->,
     "photo": photo {..., asset->},
     "ext_photos": photos[],
     "badges_refs": badges[]->,
     "dog": dog_ref->,
     "litter": litter_ref->,
     "blockContent": blockContent[] ${blockContentWithLinks},
  }
`;
const pageInfo = groq`
      background_image,
      background_color,
`;

const pageGroq = groq`
"sections_custom_page": pages[_type == 'custom_page' && slug.current == $page_slug ][0]{
    "default_sections": sections[]-> ${sectionInfo},
   "custom_sections": sections[] ${sectionInfo},
   ${pageInfo}
},
"sections_default_page": pages[_type == 'default_page']->[slug.current==$page_slug][0]{
    "default_sections": sections[]-> ${sectionInfo},
   "custom_sections": sections[] ${sectionInfo},
   ${pageInfo}
},
`;
const pageQGroqSingle = getPageQuery(pageGroq);
const pageQGroqMulti = getPageQueryMulti(pageGroq);

export const getPageData = async (params: {
  page_slug: string;
  breeder_slug?: string;
}) => {
  if (params.breeder_slug) return sanityClient.fetch(pageQGroqMulti, params);
  return sanityClient.fetch(pageQGroqSingle, params);
};
