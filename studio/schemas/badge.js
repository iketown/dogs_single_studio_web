export default {
  name: "badge",
  type: "document",
  description: "AKC or breeder or merit, etc",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "also used for tooltip",
    },
    {
      name: "link_url",
      type: "string",
      title: "Link Url",
      description: "optional link to external page http://whatever.org",
    },
    {
      name: "image",
      type: "image",
      description: "must be for light/white background ",
      options: {
        hotspot: true,
      },
    },
  ],
};

export const badge_array = {
  name: "badge_array",
  type: "document",
  preview: {
    select: {
      badge1: "badges.0.image",
      title: "title",
    },
    prepare({ badge1, title }) {
      return { title, media: badge1 };
    },
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "not shown anywhere",
    },
    {
      name: "badges",
      type: "array",
      of: [{ type: "badge" }, { type: "reference", to: { type: "badge" } }],
    },
  ],
};
