export default {
  name: "image_carousel",
  title: "Image Carousel",
  type: "object",
  fields: [
    {
      name: "images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
            meta: ["palette"],
          },
          fields: [
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "decoration",
      type: "string",
      title: "Decoration",
      options: {
        list: ["none", "rotateBoxes"],
      },
    },
  ],
};
