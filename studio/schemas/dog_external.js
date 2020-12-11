export default {
  name: "dog_external",
  type: "document",
  title: "Dog - external",
  description: "record of another breeder's dog",
  fields: [
    { name: "name", type: "string" },
    { name: "link", type: "string" },
    { name: "sex", type: "string", options: { list: ["male", "female"] } },
    { name: "photo", type: "image", options: { hotspot: true } },
  ],
};
