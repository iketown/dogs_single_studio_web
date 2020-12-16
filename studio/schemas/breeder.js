import { states } from "./states";
import LogoSetter from "../components/LogoSetter/LogoSetter";
import { FaTimesCircle, FaSkullCrossbones } from "react-icons/fa";
import React from "react";
import { FaUser } from "react-icons/fa";
export const referenceFields = [
  // fields which can be referenced inside any text area
  {
    name: "kennel_name",
    type: "string",
    title: "Kennel Name",
  },
  {
    name: "kennel_subtitle",
    type: "string",
    title: "Kennel Subtitle",
    description: "shelties or Collies and Shelties",
  },
  {
    name: "contact_firstName",
    type: "string",
    title: "Contact - first name",
  },
  {
    name: "contact_lastName",
    type: "string",
    title: "Contact - last name",
  },
  {
    name: "phone",
    type: "string",
    title: "Phone",
  },
  {
    name: "city",
    type: "string",
    title: "City",
  },
  {
    name: "streetAddress",
    type: "string",
    title: "Street Address",
  },
  {
    name: "zipCode",
    type: "string",
    title: "Zip Code",
  },
  {
    name: "email",
    type: "string",
    title: "Email",
  },
  {
    name: "state",
    type: "string",
    title: "State",
    description: "full state",
    options: {
      list: states.map(({ title }) => title),
    },
  },
  {
    name: "state_abbr",
    type: "string",
    title: "State Abbr",
    description: "2 letter state code",
    options: {
      list: states,
    },
  },
  { name: "location", type: "geopoint" },

  {
    name: "intro_text",
    title: "Intro Text",
    type: "blockContent",
  },
  // {
  //   name: "ext_logo",
  //   type: "object",
  //   inputComponent: LogoSetter,
  //   fields: [
  //     { name: "url", type: "string" },
  //     { name: "background_color", type: "string" },
  //   ],
  // },

  {
    name: "akc_link",
    type: "string",
  },
];

export default {
  name: "breeder",
  title: "About Me",
  type: "document",
  icon: () => <FaUser color="blue" />,
  preview: {
    select: {
      title: "kennel_name",
      firstName: "contact_firstName",
      lastName: "contact_lastName",
    },
    prepare({ title, firstName, lastName }) {
      return { title, subtitle: `${firstName} ${lastName}` };
    },
  },
  fields: [
    ...referenceFields,

    {
      name: "ext_header_photos",
      title: "External Header Photos",
      description: "front page header photos 2 x 1",
      type: "array",
      of: [{ type: "external_photo" }],
    },
    {
      name: "ext_photos",
      type: "external_photo_array",
      description: "these go on the front page and should be squares",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "kennel_name",
        maxLength: 96,
      },
    },
    {
      name: "sites",
      type: "array",
      description: "first site will be live, others for dev etc",
      of: [
        {
          type: "reference",
          to: { type: "breeder_site" },
        },
      ],
    },
    {
      name: "social_links",
      type: "array",
      of: [{ type: "link" }],
    },

    {
      name: "badges",
      type: "array",
      of: [{ type: "badge" }, { type: "reference", to: { type: "badge" } }],
    },
  ],
};
