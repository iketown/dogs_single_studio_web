export default {
  name: "map_section",
  type: "document",
  description: "gets lat lng from breeder info",
  fields: [
    {
      name: "full_width_map",
      type: "boolean",
      description: "if true, disregard map_text",
    },
    {
      name: "blockContent",
      type: "blockContent",
    },
    {
      name: "colorScheme",
      type: "reference",
      to: { type: "sectionColorScheme" },
    },
    { name: "section_id", title: "Section Id", type: "string" },
  ],
};
