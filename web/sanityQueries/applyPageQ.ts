import groq from "groq";
import sanityClient from "@util/sanityClient";
import { getPageQuery } from "./sharedQ";

const applyPageGroq2 = groq`
      application_form_standard->{ 
        "stock_questions": questions[]->, 
         "custom_questions": questions[],
        pre_text,post_text,
				pre_sections, "pre_sections_refs": pre_sections[]->, post_sections,
      },
      form_success,
`;
const applyPageQ = getPageQuery(applyPageGroq2);

export const getApplyPageData = async () => {
  const data = await sanityClient.fetch(applyPageQ);
  return data;
};
