export default {
  name: "full_width_image",
  type: "document",
  description: "set hotspot for what part will show",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "photo", type: "image", options: { hotspot: true } },
    {
      name: "height",
      type: "number",
      description: "height in rems - default 15",
    },
    { name: "parallax", type: "boolean" },
  ],
};
