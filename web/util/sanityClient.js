import sanityClient from "@sanity/client";

import sanityInfo from "../../studio/sanity.json";

export default sanityClient({
  projectId: sanityInfo.api.projectId,
  dataset: sanityInfo.api.dataset,
  useCdn: false,
});
