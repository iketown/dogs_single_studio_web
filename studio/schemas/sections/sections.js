import isDemo from "../../../deploy_settings/isDemo";

const demoOnlySections = {
  // these sections are not shown to client when they have access to their own sanity studio
  saveable: isDemo
    ? [
        {
          type: "full_width_text",
          name: "intro_text_auto",
          title: "Auto Intro Text",
        },
      ]
    : [],
  nonSaveable: isDemo
    ? [
        {
          type: "external_photo_array",
          name: "external_photo_array",
          title: "External Photo Array",
        },
        {
          name: "centered_title_auto",
          type: "centered_title",
          title: "Centered Title Auto",
        },
        {
          type: "photo_grid",
          name: "photo_grid_auto",
          title: "Photo Grid Auto replace",
        },
      ]
    : [],
};

const sectionTypesNoSavedVersions = [
  ...demoOnlySections.nonSaveable,
  {
    name: "map_section",
    type: "map_section",
    title: "Map Section",
  },
  {
    name: "dog_list_item",
    type: "dog_list_item",
    title: "Dog List Item",
  },
  { type: "header_section", name: "header_section_auto", title: "Header Auto" },
];

export const sectionTypes = [
  ...demoOnlySections.saveable,
  {
    name: "centered_title",
    type: "centered_title",
    title: "Centered Title",
  },
  { type: "header_section", name: "header_section", title: "Header" },
  {
    type: "photos_by_text",
    name: "photos_by_text",
    title: "Photos + Text",
  },
  {
    type: "center_logo",
    name: "center_logo",
    title: "Center Logo",
  },
  {
    type: "photo_grid",
    name: "photo_grid",
    title: "Photo Grid",
  },
  {
    type: "full_width_text",
    name: "full_width_text",
    title: "Full Width Text",
  },

  {
    type: "full_width_image",
    name: "full_width_image",
    title: "Full Width Image",
  },
  {
    name: "testimonial",
    type: "testimonial",
    title: "Testimonial",
  },
  {
    name: "badge_array",
    type: "badge_array",
    title: "Badges",
  },
  {
    name: "form",
    type: "form_section",
    title: "Form",
  },
];

export default {
  type: "array",
  name: "sections",
  title: "Sections",
  of: [
    // custom versions
    ...sectionTypesNoSavedVersions,
    ...sectionTypes,

    // refs to saved versions
    ...sectionTypes.map((section) => ({
      name: `${section.name}_saved`,
      type: "reference",
      to: { type: section.type },
      title: `${section.title} - saved`,
    })),

    {
      type: "object",
      name: "spacer",
      title: "Spacer",
      description: "separator between sections",
      preview: {
        select: { height: "height" },
        prepare({ height }) {
          return { title: "Spacer", subtitle: `${height} rems` };
        },
      },
      fields: [
        {
          name: "height",
          title: "Height",
          type: "number",
          description: "height in rems",
        },
        { name: "section_id", title: "Section Id", type: "string" },
      ],
    },
    {
      name: "waiting_list",
      type: "object",
      title: "Waiting List",
      preview: {
        select: { show: "show" },
        prepare({ show }) {
          return {
            title: "Waiting list",
            subtitle: `show ${
              show === "both" ? "waiting and confirmed" : show
            }`,
          };
        },
      },
      fields: [
        {
          name: "show",
          type: "string",
          title: "Show",
          options: {
            list: ["waiting", "confirmed", "both"],
          },
        },
      ],
    },
  ],
};
