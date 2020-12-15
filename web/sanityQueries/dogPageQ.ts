import { sectionInfo } from "./pageQuery";
import sanityClient from "@util/sanityClient";
import groq from "groq";
import { getPageQuery } from "./sharedQ";
const dogsQFragment = groq`
    "dogs": *[_type=='dog' && sex == $sex 
    ] 
    | order(list_order asc) {
     breed,
      sex,
      show_name, 
      birthday,
      _id,
      name,
      slug,
      "main_photo": head_shots[0]{..., "meta": asset-> metadata  },
      "main_photo_ext": head_shots_ext.photos[0],
      description,
    },
`;

export const getDogsData = async (params: { sex: string }) => {
  const data = await sanityClient.fetch(
    getPageQuery("", dogsQFragment),
    params
  );
  return data;
};

const parentInfo = groq`{name,slug}`;
const singleDogFragment = groq`
    "dog": *[_type=='dog' && slug.current == $dog_slug  ][0] {
      ...,
      "action_shots": action_shots[]{...,  "dimensions": asset-> metadata.dimensions },
      "head_shots": head_shots[]{...,  "dimensions": asset-> metadata.dimensions },
      middle_sections[]${sectionInfo},
      "middle_section_refs": middle_sections[]->${sectionInfo},
      "litters": *[_type == 'litter' && references(^._id)]{
      born_date,
      due_date,
      slug,
      sire_ref->${parentInfo},
      sire_ext_ref->${parentInfo},
      dam_ref->${parentInfo},
      dam_ext_ref->${parentInfo},
      },
    },
`;

export const getSingleDogData = async (params: { dog_slug: string }) => {
  const data = await sanityClient.fetch(
    getPageQuery("", singleDogFragment),
    params
  );
  return data;
};
