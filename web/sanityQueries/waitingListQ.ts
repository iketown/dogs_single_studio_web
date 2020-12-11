import sanityClient from "@util/sanityClient";
import groq from "groq";
import { getPageQuery } from "./sharedQ";
import { sectionInfo } from "./pageQuery";

const waitingListSectionQ = groq`
*[_type=='buyer'] | order(reservation, depositDate asc)  {
  ...,
  "reservation": reservation {..., "whelp_ref": whelp_ref->{...,"litter":litter->}}
}
`;
export const waitingListQuery = groq`
  "waitingList": *[_type=='buyer'] | order(reservation, depositDate asc)  {
  ...,
  "reservation": reservation {..., "whelp_ref": whelp_ref->{...,"litter":litter->}}
}
`;

export const getWaitingList = async () => {
  const data = await sanityClient.fetch(getPageQuery(waitingListQuery));
  return data;
};

export const getWaitingListSection = async () => {
  const data = await sanityClient.fetch(waitingListSectionQ);
  return data;
};
