export default {
  name: "photo_grid",
  title: "Photo Grid",
  type: "document",
  preview: {
    select: {
      photo: "images.0",
      title: "title",
    },
    prepare({ photo, title }) {
      return { title, media: photo };
    },
  },
  fields: [
    {
      name: "images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "headline",
              title: "Headline",
              type: "string",
              label: "Headline Text",
            },
            {
              name: "subtitle",
              title: "Subtitle",
              type: "string",
              label: "Subtitle Text",
            },
          ],
        },
      ],
    },
    {
      name: "title",
      title: "Title",
      description: "internal only, not shown",
      type: "string",
    },
    {
      name: "description_before",
      title: "Description Before",
      type: "blockContent",
    },
    {
      name: "description_after",
      title: "Description After",
      type: "blockContent",
    },
    { name: "section_id", title: "Section Id", type: "string" },
    { name: "bgColor", title: "Background Color", type: "bgColor" },
    { name: "textColor", title: "Text Color", type: "textColor" },
  ],
};
