import { states } from "./states";

import React from "react";
import { FaUser } from "react-icons/fa";

import { isDemo } from "../../deploy_settings/isDemo";

const demoOnlyRefFields = isDemo
  ? [
      {
        name: "intro_text",
        title: "Intro Text",
        type: "blockContent",
      },
      {
        name: "akc_link",
        type: "string",
      },
    ]
  : [];

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
    description: "dog breed?",
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
  ...demoOnlyRefFields,
];

const demoOnlyFields = isDemo
  ? [
      {
        name: "ext_header_photos",
        title: "External Header Photos",
        description: "front page header photos 2 x 1",
        type: "array",
        of: [{ type: "external_photo" }],
      },
      {
        name: "sanity_header_photos",
        type: "array",
        of: [{ type: "image", options: { hotspot: true } }],
      },
      {
        name: "ext_photos",
        type: "external_photo_array",
        description: "these go on the front page and should be squares",
      },
      {
        name: "kennel_domain_url",
        type: "string",
      },
      {
        name: "badges",
        type: "array",
        of: [{ type: "badge" }, { type: "reference", to: { type: "badge" } }],
      },
      {
        name: "site_preview_img",
        type: "image",
        options: {
          hotspot: true,
        },
      },
    ]
  : [];

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
      site_preview_img: "site_preview_img",
    },
    prepare({ title, firstName, lastName, site_preview_img }) {
      return {
        title,
        subtitle: `${firstName} ${lastName}`,
        media: isDemo ? site_preview_img : null,
      };
    },
  },
  fields: [
    ...referenceFields,
    ...demoOnlyFields,
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
      description: "first site is LIVE, others are for tests, etc",
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
  ],
};
