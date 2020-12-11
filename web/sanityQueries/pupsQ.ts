import groq from "groq";
import { getPageQuery } from "./sharedQ";
import sanityClient from "@util/sanityClient";

const pupsQ = getPageQuery(groq`...,`);
export const getPupsData = async () => {
  const data = await sanityClient.fetch(pupsQ);
  return data;
};
