import React from "react";

export const colorOptions = [
  {
    name: "darkA",
    type: "color",
    description: "Primary Dark",
  },
  {
    name: "darkB",
    type: "color",
    description: "Secondary Dark",
  },
  {
    name: "darkAccent",
    type: "color",
    description: "Accent Color",
  },
  {
    name: "lightA",
    type: "color",
    description: "Primary Light",
  },
  {
    name: "lightB",
    type: "color",
    description: "Secondary Light",
  },
  {
    name: "transparent",
    type: "color",
    description: "Transparent",
  },
];

export default {
  name: "palette",
  type: "document",
  title: "Color Palette",
  fields: [{ name: "title", title: "Title", type: "string" }, ...colorOptions],
  preview: {
    select: {
      darkA: "darkA",
      darkB: "darkB",
      darkAccent: "darkAccent",
      lightA: "lightA",
      lightB: "lightB",
      title: "title",
    },
    prepare({ title, darkA, darkB, darkAccent, lightA, lightB }) {
      const styles = { width: "1rem", height: "1rem" };
      return {
        title,
        media: (
          <div>
            <div style={{ display: "flex" }}>
              <div style={{ ...styles, background: darkA?.hex || "white" }} />
              <div style={{ ...styles, background: darkB?.hex || "white" }} />
              <div
                style={{
                  ...styles,
                  background: darkAccent?.hex || "white",
                }}
              />
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ ...styles, background: lightA?.hex || "white" }} />
              <div style={{ ...styles, background: lightB?.hex || "white" }} />
            </div>
          </div>
        ),
      };
    },
  },
};
