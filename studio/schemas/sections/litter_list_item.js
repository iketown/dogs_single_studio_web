import React from "react";

export default {
  name: "litter_list_item",
  type: "object",
  title: "Litter - List Item Display",
  fields: [{ name: "litter_ref", type: "reference", to: { type: "litter" } }],
  preview: {
    select: {
      slug: "litter_ref.slug",
      title: "litter_ref.title",
    },
    prepare({ slug, title }) {
      return { subtitle: `Link to ${slug}`, title: title };
    },
  },
};
