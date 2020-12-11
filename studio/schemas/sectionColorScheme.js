import { colorOptions } from "./palette";

export default {
  type: "document",
  name: "sectionColorScheme",
  title: "Section Color Scheme",
  preview: {
    select: {
      bg: "bgColorVar",
      txt: "textColorVar",
      title: "title",
    },
    prepare({ title, bg, txt }) {
      return {
        title,
        subtitle: `${txt} text on ${bg} bg`,
      };
    },
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "bgColorVar",
      type: "string",
      title: "Background color var",
      options: {
        list: [
          ...colorOptions.map(({ name, description }) => ({
            value: name,
            title: description,
          })),
          { value: "black", title: "black" },
          { value: "white", title: "white" },
        ],
      },
    },
    {
      name: "textColorVar",
      type: "string",
      title: "Text color var",
      options: {
        list: [
          ...colorOptions.map(({ name, description }) => ({
            value: name,
            title: description,
          })),
          { value: "black", title: "black" },
          { value: "white", title: "white" },
        ],
      },
    },
  ],
};
