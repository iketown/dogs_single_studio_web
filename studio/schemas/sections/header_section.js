import React from "react";

export default {
  name: "header_section",
  // title: "Header Section",
  type: "document",

  preview: {
    select: {
      title: "name",
      media: "images.0",
    },
  },
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "images",
      title: "Images",
      description: "images should have hotspots - will be cropped to 2w x 1h",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
            // metadata: ["palette"],
          },
          fields: [
            {
              name: "show_full",
              type: "boolean",
              title: "Show full Frame",
              description: (
                <div>
                  <div>OFF = photo goes to edges of page (default)</div>
                  <div>ON = show the entire photo</div>
                </div>
              ),
            },
          ],
        },
      ],
    },
    { name: "section_id", title: "Section Id", type: "string" },
  ],
};
