import sanityClient from "@sanity/client";
import isDemo from "../../deploy_settings/isDemo";

export const projectId = isDemo
  ? "n2xtqmy9"
  : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export default sanityClient({
  projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: false,
});
