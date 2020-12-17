import allBreeds from "./allBreeds";
import { FaPaw } from "react-icons/fa";
import React from "react";

export default {
  type: "document",
  name: "dog",
  title: "Dog",
  icon: () => <FaPaw color="blue" />,

  preview: {
    select: {
      show_name: "show_name",
      name: "name",
      birthday: "birthday",
      kennel: "breeder.kennel_name",
      media: "head_shots.0",
      sex: "sex",
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
      } = selection;
      return {
        title: `${name} - ${show_name}`,
        subtitle: `${sex}`,
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
    {
      name: "show_litters",
      description: "show litters on details page",
      type: "boolean",
    },
  ],
  // dad
  // mom
};
