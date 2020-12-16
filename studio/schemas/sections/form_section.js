export default {
  name: "form_section",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "questions",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "form_question" },
          name: "default_question",
          title: "Question - saved",
        },
        {
          type: "form_question",
          name: "custom_question",
          title: "Question",
        },
        {
          type: "object",
          name: "form_prebuilt_section",
          title: "Pre Built Section",
          fields: [
            {
              name: "section_type",
              type: "string",
              options: {
                list: ["contact"],
              },
            },
          ],
        },
        {
          name: "inner_sections",
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "sections", type: "sections" },
          ],
        },
      ],
    },
    {
      name: "send_to_email",
      type: "string",
    },
    {
      name: "success_page",
      description: "where to go after successful submit",
      type: "reference",
      to: { type: "page" },
    },
  ],
};
