export default {
  name: "dynamic_message",
  type: "document",
  fields: [
    { name: "title", type: "string" },
    { name: "slug", type: "slug", options: { source: "title" } },
    { name: "date", type: "date" },
    { name: "content", type: "blockContent" },
  ],
};
