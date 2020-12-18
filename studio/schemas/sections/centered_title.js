export default {
  name: "centered_title",
  type: "object",
  title: "Centered Title",
  preview: {
    select: {
      title: "text",
      subtitle: "subtitle",
    },
    prepare({ title, subtitle }) {
      return { title: `${title} - centered title`, subtitle };
    },
  },

  fields: [
    { name: "text", type: "string", title: "Text" },
    { name: "subtitle", type: "string", title: "Subtitle" },
    {
      name: "title_type",
      type: "string",
      title: "Title Type",
      options: {
        list: ["page", "section"],
      },
    },
    { name: "section_id", title: "Section Id", type: "string" },
    {
      name: "colorScheme",
      type: "reference",
      to: { type: "sectionColorScheme" },
    },
  ],
};
