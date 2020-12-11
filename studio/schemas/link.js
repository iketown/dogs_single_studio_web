export default {
  type: "object",
  name: "link",
  title: "Link",
  fields: [
    {
      name: "name",
      type: "string",
      options: {
        list: ["facebook", "instagram", "twitter", "text"],
      },
    },
    {
      name: "url",
      type: "string",
      description: "full url of link including https://",
    },
    {
      name: "link_text",
      type: "string",
      description: "optional - if link_type = text, this will be the link text",
      title: "Link Text",
    },
  ],
};
