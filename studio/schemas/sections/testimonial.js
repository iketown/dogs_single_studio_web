export const testimonial = {
  name: "testimonial",
  type: "document",
  title: "Testimonial",
  description: "A single testimonial from a person",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      description: "who this testimonial is from",
    },
    {
      name: "location",
      type: "string",
      title: "Location",
      description: "where do they live",
    },
    {
      name: "text",
      type: "blockContent",
      title: "Text",
      description: "the testimonial",
    },
    {
      name: "images",
      type: "array",
      description:
        "may only show first photo, depending on if this is in a list or not",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};

// export const testimonial_list = {
//   type: "document",
//   name: "testimonial_list",
//   title: "Testimonial List",
//   fields: [
//     {
//       name: "Name",
//       type: "string",
//       description: "identifier for this list, not shown anywhere",
//     },
//     {
//       name: "testimonials",
//       type: "array",
//       of: [
//         { type: "testimonial" },
//         {
//           type: "reference",
//           name: "sample_testimonial",
//           to: { type: "testimonial" },
//         },
//       ],
//     },
//   ],
// };
