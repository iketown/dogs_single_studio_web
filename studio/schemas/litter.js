import sanityClient from "part:@sanity/base/client";
import moment from "moment";
import React from "react";
export default {
  type: "document",
  name: "litter",
  preview: {
    select: {
      sireRef: "sire_ref.name",
      damRef: "dam_ref.name",
      sireExtRef: "sire_ext_ref.name",
      damExtRef: "dam_ext_ref.name",
      sireString: "sire_string",
      damString: "dam_string",
      born_date: "born_date",
      due_date: "due_date",
      photos: "photos",
    },
    prepare({
      sireRef,
      sireExtRef,
      damExtRef,
      sireString,
      damRef,
      damString,
      born_date,
      due_date,
      photos,
    }) {
      return {
        title: `${sireRef || sireExtRef || sireString || "unknown"} x ${
          damRef || damExtRef || damString || "unknown"
        }`,
        subtitle: `${
          (born_date && "born " + born_date) || "* due " + due_date
        }`,
        media: photos ? photos[0] : undefined,
      };
    },
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      options: {
        source: () => "hey now",
      },
    },
    {
      name: "slug",
      type: "slug",
      options: {
        source: async (
          { dam_ref, sire_ref, dam_string, sire_string, due_date },
          opts
        ) => {
          let mom = dam_string;
          let dad = sire_string;
          const getNames = (dog_id) => {
            const query = `*[_type == "dog" && _id == $dog_id][0]{name,show_name}`;
            return sanityClient.fetch(query, {
              dog_id,
            });
          };
          if (dam_ref) {
            const { name, show_name } = await getNames(dam_ref._ref);
            mom = name || show_name;
          }
          if (sire_ref) {
            const { name, show_name } = await getNames(sire_ref._ref);
            dad = name || show_name;
          }
          const due = moment(due_date, "YYYY-MM-DD");
          const month = due.format("MMM");
          const year = due.year();
          return `${month}_${year}_${dad}_${mom}`;
        },
      },
    },
    {
      name: "sire_ref",
      type: "reference",
      to: { type: "dog" },
    },
    {
      name: "dam_ref",
      type: "reference",
      to: { type: "dog" },
    },
    {
      name: "sire_ext_ref",
      description: "if sire is external to this site",
      type: "reference",
      to: { type: "dog_external" },
    },
    {
      name: "dam_ext_ref",
      description: "if dam is external to this site",
      type: "reference",
      to: { type: "dog_external" },
    },
    {
      name: "sire_string",
      description: "if no link available, just the name",
      type: "string",
      description: "only if no sire ref avail",
    },
    {
      name: "dam_string",
      description: "if no link available, just the name",
      type: "string",
      description: "if no dam ref avail",
    },
    {
      name: "due_date",
      type: "date",
    },
    {
      name: "born_date",
      type: "date",
    },
    // {
    //   name: "photos",
    //   type: "array",
    //   description: "general photos of the litter",
    //   of: [{ type: "image", options: { hotspot: true } }],
    // },
    {
      name: "pre_puppy_sections",
      type: "sections",
    },
    {
      name: "post_puppy_sections",
      type: "sections",
    },
    {
      name: "short_description",
      type: "blockContent",
    },
  ],
};
