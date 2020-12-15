import React from "react";
import PortableText from "@sanity/block-content-to-react";
import InternalLink from "./InternalLink";
import ExternalLink from "./ExternalLink";
import DynamicText from "./DynamicText";
import InlineHeading from "./InlineHeading";
import JTree from "@util/JTree";
import PageLink from "./PageLink";
import DogLink from "./DogLink";
import LitterLink from "./LitterLink";

const BlockContentRenderer = ({ blocks }) => {
  const serializers = {
    marks: {
      internalLink: InternalLink,
      dynamicText: DynamicText,
      "inline heading": InlineHeading,
      link: ExternalLink,
      page_link: PageLink,
      dog_link: DogLink,
      litter_link: LitterLink,
    },
  };
  return (
    <div>
      <PortableText serializers={serializers} blocks={blocks} />
      {/* <JTree data={blocks} /> */}
    </div>
  );
};

export default BlockContentRenderer;
