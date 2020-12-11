import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import InternalLink from "./InternalLink";
import DynamicText from "./DynamicText";
import InlineHeading from "./InlineHeading";
const BlockContentRenderer = ({ blocks }) => {
  const serializers = {
    marks: {
      internalLink: InternalLink,
      dynamicText: DynamicText,
      "inline heading": InlineHeading,
    },
  };
  return <BlockContent serializers={serializers} blocks={blocks} />;
};

export default BlockContentRenderer;
