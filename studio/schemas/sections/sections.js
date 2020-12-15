const sectionTypesNoSavedVersions = [
  {
    type: "external_photo_array",
    name: "external_photo_array",
    title: "External Photo Array",
  },
  {
    name: "centered_title",
    type: "centered_title",
    title: "Centered Title",
  },
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
  {
    name: "litter_list_item",
    type: "litter_list_item",
    title: "Litter List Item",
  },
  {
    name: "centered_title_auto",
    type: "centered_title",
    title: "Centered Title Auto",
  },
  { type: "header_section", name: "header_section_auto", title: "Header Auto" },
  {
    type: "photo_grid",
    name: "photo_grid_auto",
    title: "Photo Grid Auto replace",
  },
];

const sectionTypes = [
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
    type: "full_width_text",
    name: "intro_text_auto",
    title: "Auto Intro Text",
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
];

export default {
  type: "array",
  name: "sections",
  title: "Sections",
  of: [
    // custom
    ...sectionTypes,
    ...sectionTypesNoSavedVersions,
    // saved
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
      fields: [
        {
          name: "height",
          title: "Height",
          type: "number",
          description: "height in rems",
        },
        { name: "section_id", title: "Section Id", type: "string" },
        { name: "bgColor", title: "Background Color", type: "bgColor" },
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
