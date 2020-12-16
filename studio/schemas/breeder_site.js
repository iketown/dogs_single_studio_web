import { fontCombos } from "@bit/ike76.dog_breeders.font_combos";
import React from "react";
import { FaGlobe } from "react-icons/fa";
const fontOptions = Object.entries(fontCombos).map(([value, { title }]) => ({
  value,
  title,
}));

export default {
  type: "document",
  name: "breeder_site",
  title: "Web Site",
  icon: () => <FaGlobe color="navy" />,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description:
        "doesn't display anywhere - just so you know which one this is",
    },
    {
      name: "palette",
      type: "reference",
      title: "Color Palette",
      to: {
        type: "palette",
      },
    },
    {
      name: "pages",
      type: "array",
      of: [
        {
          type: "reference",
          name: "default_page",
          title: "Page - linkable",
          description: "pre built page",
          to: { type: "page" },
        },
        {
          type: "page",
          name: "custom_page",
          title: "Custom Page - not linkable",
        },
      ],
    },
    {
      name: "font_combo",
      type: "string",
      title: "Font Combination",
      options: {
        list: fontOptions,
      },
    },
    {
      name: "application_form_standard",
      title: "Standard Form",
      type: "reference",
      to: { type: "form" },
      description: "shown on /apply page",
    },
    // {
    //   name: "form_success",
    //   title: "Form Success",
    //   type: "form_success",
    // },
    {
      name: "puppiesPreSections",
      type: "sections",
    },
  ],
};
