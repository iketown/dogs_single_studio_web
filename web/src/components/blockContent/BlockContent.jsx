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
import { useDynamicText } from "../../hooks/useDynamic";

const BlockRenderer = (props) => {
  const { style = "normal" } = props.node;
  const children = useDynamicText(props.children);
  if (style.includes("center")) {
    const centerStyle = { textAlign: "center" };
    switch (style) {
      case "center_h2":
        return <h2 style={centerStyle}>{children}</h2>;
      case "center_h3":
        return <h3 style={centerStyle}>{children}</h3>;
      default:
        return <div style={centerStyle}>{children}</div>;
    }
  }
  if (style === "blockquote") {
    return <blockquote>- {children}</blockquote>;
  }

  // Fall back to default handling
  return PortableText.defaultSerializers.types.block(props);
};

const BlockContentRenderer = ({ blocks }) => {
  const serializers = {
    types: {
      block: BlockRenderer,
    },
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
