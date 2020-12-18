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
      name: "title",
      title: "Title",
      description: "internal only, not shown",
      type: "string",
    },
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
    // {
    //   name: "description_before",
    //   title: "Description Before",
    //   type: "blockContent",
    // },
    // {
    //   name: "description_after",
    //   title: "Description After",
    //   type: "blockContent",
    // },
  ],
};
