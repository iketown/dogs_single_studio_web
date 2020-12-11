export default {
  name: "form",
  title: "Form",
  type: "document",
  fields: [
    {
      name: "Title",
      title: "Title",
      type: "string",
      description: "for internal use, not shown anywhere",
    },
    {
      name: "pre_text",
      title: "Pre Text",
      description: "Text shown before form",
      type: "blockContent",
    },
    {
      name: "pre_sections",
      title: "Pre Sections",
      description: "sections before form",
      type: "sections",
    },
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
          type: "object",
          name: "form_contact_section",
          title: "Contact Info Section",
          fields: [{ name: "require_email", type: "boolean" }],
          preview: {
            prepare() {
              return { title: "Contact Info Section" };
            },
          },
        },
      ],
    },
    {
      name: "post_text",
      title: "Post Text",
      description: "Text shown after form",
      type: "blockContent",
    },
    {
      name: "post_sections",
      title: "Post Sections",
      description: "sections after form",
      type: "sections",
    },
    // {
    //   name: "success_photo",
    //   title: "Success Photo",
    //   description: "photo to display after form is submitted",
    //   type: "image",
    // },
    // {
    //   name: "success_message",
    //   title: "Success Message",
    //   description: "message after form is submitted",
    //   type: "blockContent",
    // },
    { name: "section_id", title: "Section Id", type: "string" },
  ],
};
