export default {
  name: "photos_by_text",
  type: "document",
  title: "Photos By Text Section",
  preview: {
    select: {
      title: "title",
      image: "photos.images.0",
    },
    prepare: ({ title, image }) => ({ title, media: image }),
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "photos",
      type: "image_carousel",
      title: "Photos",
    },
    {
      name: "blockContent",
      type: "blockContent",
      title: "Text",
    },
    { name: "section_id", title: "Section Id", type: "string" },
    {
      name: "colorScheme",
      type: "reference",
      to: { type: "sectionColorScheme" },
    },
  ],
};
