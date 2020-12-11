export default {
  type: "document",
  name: "form_question",
  title: "Form Question",
  fields: [
    {
      name: "question_main",
      type: "string",
      title: "Main Question",
    },
    {
      name: "question_secondary",
      type: "string",
      title: "Secondary Question",
      description: "additional information to clarify the question",
    },
    {
      name: "answer_type",
      type: "string",
      title: "Answer Type",
      options: {
        list: [
          { value: "select", title: "Select" },
          { value: "radio", title: "Radio" },
          { value: "text_short", title: "Text short" },
          { value: "text_med", title: "Text med" },
          { value: "text_long", title: "Text long" },
        ],
      },
    },
    {
      name: "required",
      type: "boolean",
      title: "Required",
      description: "Don't allow form to submit without answering this",
    },
    {
      name: "options",
      description: "Only for 'Select' or 'Radio' answer types",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
