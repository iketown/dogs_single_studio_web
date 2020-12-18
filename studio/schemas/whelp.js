import React from "react";
import { FaPaw } from "react-icons/fa";

export default {
  name: "whelp",
  title: "Whelp",
  type: "document",
  icon: () => <FaPaw color="brown" size="15px" />,
  preview: {
    select: {
      description: "description",
      sex: "sex",
      mom: "litter.dam_ref.name",
      momString: "litter.dam_string",
      dadString: "litter.sire_string",
      dad: "litter.sire_ref.name",
      date: "litter.born_date",
      media: "photos.0",
      name: "name",
    },
    prepare({
      description,
      sex,
      dad,
      mom,
      dadString,
      momString,
      date,
      media,
      name,
    }) {
      return {
        title: `${name ? name + " - " : ""}${description || ""} ${sex} `,
        subtitle: `${date} ${dad || dadString} x ${mom || momString}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: "Birthday",
      name: "birthday",
      by: [{ field: "litter.born_date", direction: "desc" }],
    },
  ],
  fields: [
    {
      name: "photos",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "sex",
      type: "string",
      options: {
        list: ["male", "female"],
      },
    },
    {
      name: "litter",
      type: "reference",
      to: { type: "litter" },
    },
    {
      name: "description",
      type: "string",
    },
    {
      name: "name",
      type: "string",
      title: "Name",
    },
  ],
};
