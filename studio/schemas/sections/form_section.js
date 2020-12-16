export default {
  name: "form_section",
  type: "document",
  fields: [
    {
      name: "questions",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "form_question" },
          name: "default_question",
          title: "Default Question",
        },
        {
          type: "form_question",
          name: "custom_question",
          title: "Custom Question",
        },
        {
          type: "string",
          name: "form_prebuilt_section",
          title: "Pre Built Section",
          options: {
            list: ["contact"],
          },
        },
      ],
    },
  ],
};
