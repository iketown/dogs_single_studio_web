export default {
  name: "form_success",
  type: "object",
  description: "page to show after form submitted",
  title: "Form Success",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "message",
      type: "blockContent",
      title: "Message",
    },
  ],
};
