import groq from "groq";
import { waitingListQuery } from "./waitingListQ";
export const layoutInfo = groq`
  "layout_info": {
    ...,
    "font_combo": sites[0]->font_combo,
    "links": sites[0]-> {
      "default": pages[]-> {"slug":slug.current,button_text},
  		"custom": pages[] {"slug":slug.current,button_text}
    },
    "breeder_slug": slug.current,
    "palette": sites[0]-> palette-> {
      "darkA": darkA.hex,
      "darkB": darkB.hex,
      "darkAccent": darkAccent.hex,
      "lightA": lightA.hex,
      "lightB": lightB.hex,
      title,
    },
    "badge_refs": badges[]->,
    badges,
    ${waitingListQuery}
  },
`;

export const photosForGalleryQ = `..., "dimensions": asset-> metadata.dimensions`;

export const getPageQuery = (
  siteContent: string,
  breederContent: string = "",
  breederRestriction: string = ""
) => {
  return groq`
  *[_type == "breeder" ${breederRestriction}
   ][0]{
    ${breederContent}
    ...sites[0]-> {
    ${siteContent}
    },
    ${layoutInfo}
  }
`;
};

// getPageQueryMulti adds the restriction that the breeder slug must match
export const getPageQueryMulti = (
  siteContent: string,
  breederContent: string = ""
) =>
  getPageQuery(
    siteContent,
    breederContent,
    groq`&& slug.current == $breeder_slug`
  );
