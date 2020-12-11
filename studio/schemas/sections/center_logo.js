import { string } from "prop-types";

export default {
  name: "center_logo",
  type: "object",
  title: "Center Logo",
  description:
    "if background not transparent, make sure to set background color to match",
  fields: [
    { name: "photo", type: "image", options: { hotspot: true } },
    { name: "title", type: "string", description: "not shown anywhere" },
    { name: "height", type: "number", description: "height in rems" },
    { name: "bgColor", type: "color", title: "Background Color" },
  ],
};
