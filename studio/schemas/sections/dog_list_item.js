import React from "react";
import { FaVenusMars } from "react-icons/fa";

export default {
  name: "dog_list_item",
  type: "object",
  title: "Dog - List Item Display",
  preview: {
    select: {
      title: "dog_ref.name",
      subtitle: "dog_ref.show_name",
      media: "dog_ref.head_shots.0",
    },
    prepare({ title, subtitle, media }) {
      return { title, subtitle, media };
    },
  },
  description: "puts dog in list, links to that individual dog page.",
  fields: [
    { name: "dog_ref", type: "reference", to: { type: "dog" } },
    {
      name: "show_sex_icon",
      type: "boolean",
      title: (
        <div>
          show sex icon{" "}
          <FaVenusMars
            style={{ marginLeft: "1rem" }}
            size="2rem"
            color="grey"
          />
        </div>
      ),
    },
  ],
};
