import { FaFileImage } from "react-icons/fa";

export default {
  name: "page",
  type: "document",
  title: "Page",
  description: "a single page within a website: about us, puppies, etc",
  icon: FaFileImage,
  preview: {
    select: { button_text: "button_text", title: "title" },
    prepare({ button_text, title }) {
      return {
        title,
        subtitle: button_text ? `buttton: ${button_text}` : ``,
      };
    },
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "not displayed anywhere",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "Displayed in the address bar",
      options: {
        source: "button_text",
        maxLength: 96,
      },
    },
    {
      name: "button_text",
      type: "string",
      title: "Button Text",
      description:
        "button to get to this page says this. \n  leave blank to leave off the menu",
    },

    {
      name: "sections",
      type: "sections",
    },
  ],
};
