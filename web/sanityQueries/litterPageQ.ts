import groq from "groq";
import sanityClient from "@util/sanityClient";
import { getPageQuery, getPageQueryMulti, photosForGalleryQ } from "./sharedQ";
import { sectionInfo } from "./pageQuery";
const litterFrag = groq`
"litter": *[ 
  _type == 'litter' && slug.current == $litter_slug 
][0]{
  "photos": photos[] {${photosForGalleryQ}},
  due_date,
  born_date,
  dam_ref ->,
  sire_ref ->,
  dam_ext_ref ->,
  sire_ext_ref ->,
  dam_string,sire_string, short_description,
  dam_external_link,sire_external_link,
  "pre_puppy_sections_refs": pre_puppy_sections[]->${sectionInfo},
  "post_puppy_sections_refs": post_puppy_sections[]->${sectionInfo},
  pre_puppy_sections[] ${sectionInfo},
  post_puppy_sections[] ${sectionInfo},
  ...,
  "whelps": *[_type == 'whelp' && references(^._id)]{
    ...,
    "buyer": *[_type=="buyer" && references(^._id)][0] 
  }
}
`;

const litterGroqSingle = getPageQuery(litterFrag);
const litterGroqMulti = getPageQueryMulti(litterFrag);
export const getLitterData = async (params: {
  litter_slug: string;
  breeder_slug?: string;
}) => {
  if (params.breeder_slug) return sanityClient.fetch(litterGroqMulti, params);
  return sanityClient.fetch(litterGroqSingle, params);
};
