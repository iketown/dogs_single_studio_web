import allBreeds from "./allBreeds";
import { FaPaw } from "react-icons/fa";
import React from "react";

export default {
  type: "document",
  name: "dog",
  title: "Dog",
  icon: () => <FaPaw color="blue" />,
  orderings: [
    {
      name: "displayAsc",
      title: "Display Order",
      by: [{ field: "list_order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      show_name: "show_name",
      name: "name",
      birthday: "birthday",
      kennel: "breeder.kennel_name",
      media: "head_shots.0",
      sex: "sex",
      list_order: "list_order",
    },

    prepare(selection) {
      const {
        title,
        kennel,
        media,
        sex = "unknown",
        birthday,
        show_name,
        name,
        list_order,
      } = selection;
      return {
        title: `${name} - ${show_name}`,
        subtitle: `${sex} / order: ${list_order}`,
        media,
      };
    },
  },
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: 'Home name, like "Heidi"',
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        maxLength: 96,
        source: "name",
      },
      validation: (Rule) =>
        Rule.required().warning(
          "slug is required, and must be unique (no other dog can have the same slug)"
        ),
    },
    {
      name: "show_name",
      title: "Show Name",
      type: "string",
    },
    {
      name: "list_order",
      type: "number",
      description:
        "1 is listed first, then 2 etc.   1.5 would be between them. ",
    },
    {
      name: "birthday",
      type: "date",
    },
    {
      name: "sex",
      title: "Sex",
      type: "string",
      options: {
        list: ["male", "female"],
      },
      validation: (Rule) => Rule.required().warning("Must choose sex"),
    },
    // {
    //   name: "head_shots_ext",
    //   description: "hosted externally, served by cloudinary",
    //   title: "External Head Shots",
    //   type: "external_photo_array",
    // },
    // {
    //   name: "action_shots_ext",
    //   description: "hosted externally, served by cloudinary",
    //   title: "External Action Shots",
    //   type: "external_photo_array",
    // },
    {
      name: "head_shots",
      title: "Head Shots",
      description: "first photo used on other pages",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "action_shots",
      title: "Action Shots",
      description: "best if at least 3 photos here.",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "description",
      type: "blockContent",
      description:
        "short intro to be shown on dogs index page at /sires or /dams keep it to a couple lines",
    },
    {
      name: "middle_sections",
      type: "sections",
    },
  ],
  // dad
  // mom
};
