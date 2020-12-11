import groq from "groq";
import sanityClient from "@util/sanityClient";
import { getPageQuery } from "./sharedQ";
import { sectionInfo } from "./pageQuery";
const puppiesPageFragment = groq`
   		"litters": *[ _type == 'litter' 
       ] | order(born_date desc) {
        dam_ref -> {name,show_name, _id,slug, "photo": head_shots[0]},
        sire_ref -> {name,show_name, _id,slug, "photo": head_shots[0]},
        dam_ext_ref -> ,
        sire_ext_ref -> ,
				dam_string,sire_string, born_date, due_date, _id, photos, short_description, "slug": slug.current,
        ...,
  			"whelps": *[_type == 'whelp' && references(^._id)]{
         ...
       }
    },
`;

const puppiesSite = groq`
  "default_sections": puppiesPreSections[]-> ${sectionInfo},
	"custom_sections": puppiesPreSections[] ${sectionInfo},
`;

export const getPuppiesPageData = async () => {
  const data = await sanityClient.fetch(
    getPageQuery(puppiesSite, puppiesPageFragment)
  );
  return data;
};
