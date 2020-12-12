import groq from "groq";
import sanityClient from "@util/sanityClient";
import { layoutInfo, getPageQuery } from "./sharedQ";
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
  }
`;
const pageInfo = groq`
      background_image,
      background_color,
`;

const pageQGroq2 = getPageQuery(groq`
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
`);

export const getPageData = async (params: { page_slug: string }) => {
  const data = await sanityClient.fetch(pageQGroq2, params);
  return data;
};
