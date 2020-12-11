export default {
  type: "document",
  name: "full_width_text",
  title: "Full Width Text",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "not shown anywhere",
    },

    { name: "blockContent", type: "blockContent" },
    { name: "section_id", title: "Section Id", type: "string" },
    {
      name: "colorScheme",
      type: "reference",
      to: { type: "sectionColorScheme" },
    },
    // { name: "bgColor", title: "Background Color", type: "bgColor" },
    // { name: "textColor", title: "Text Color", type: "textColor" },
  ],
};
