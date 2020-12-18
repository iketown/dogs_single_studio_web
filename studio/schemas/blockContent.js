import React from "react";
import { FaPaperclip, FaMagic, FaPaw, FaFileAlt, FaDog } from "react-icons/fa";
import { referenceFields } from "./breeder";

const CenteredText = (props) => {
  const style = { textAlign: "center" };
  switch (props.style) {
    case "center_h2":
      return <h2 {...{ style }}>{props.children}</h2>;
    case "center_h3":
      return <h3 {...{ style }}>{props.children}</h3>;
    default:
      return <div {...{ style }}>{props.children}</div>;
  }
};

const colors = {
  litter: "#00FFFF",
  dog: "#00FF00",
  page: "orange",
};
export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
        {
          title: "center",
          value: "center_normal",
          blockEditor: { render: CenteredText },
        },
        {
          title: "center h2",
          value: "center_h2",
          blockEditor: { render: CenteredText },
        },
        {
          title: "center h3",
          value: "center_h3",
          blockEditor: { render: CenteredText },
        },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: "page_link",
            type: "object",
            title: "Page Link",
            fields: [{ name: "page", type: "reference", to: { type: "page" } }],
            blockEditor: {
              icon: () => <FaFileAlt color={colors.page} />,
              render: ({ children, ...props }) => {
                console.log("pagelink", props);
                return (
                  <span style={{ background: colors.page }}>{children}</span>
                );
              },
            },
          },
          {
            name: "dog_link",
            type: "object",
            title: "Dog Link",
            fields: [{ name: "dog", type: "reference", to: { type: "dog" } }],
            blockEditor: {
              icon: () => <FaDog color={colors.dog} />,
              render: ({ children, ...props }) => {
                console.log("dog", props);
                return (
                  <span style={{ background: colors.dog }}>{children}</span>
                );
              },
            },
          },
          {
            name: "litter_link",
            type: "object",
            title: "Litter Link",
            fields: [
              { name: "litter", type: "reference", to: { type: "litter" } },
            ],
            blockEditor: {
              icon: () => <FaPaw color={colors.litter} />,
              render: ({ children }) => (
                <span style={{ background: colors.litter }}>{children}</span>
              ),
            },
          },
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
              {
                title: "Open in new window",
                name: "target_blank",
                type: "boolean",
              },
            ],
          },
          {
            name: "internalLink",
            type: "object",
            title: "Internal Link",
            blockEditor: {
              icon: () => <FaPaperclip />,
            },
            fields: [
              {
                name: "href",
                title: "name of page",
                type: "string",
              },
              {
                name: "anchor",
                title: "anchor on page #whatever",
                type: "string",
              },
            ],
          },
          {
            name: "dynamicText",
            type: "object",
            title: "Dynamic Text",
            blockEditor: {
              icon: () => <FaMagic />,
            },
            fields: [
              {
                name: "key",
                type: "string",
                description: "what dynamic text",
                options: {
                  list: [
                    ...referenceFields.map(({ name }) => name),
                    "homeUrl",
                    "slug_only",
                  ],
                },
              },
              {
                name: "all_caps",
                type: "boolean",
                description: "Display in all caps?",
              },
            ],
          },
          {
            name: "inline heading",
            type: "object",
            title: "Inline Heading",
            blockEditor: {
              icon: () => <b>H</b>,
            },
            fields: [
              {
                name: "hSize",
                type: "string",
                title: "H Size",
                options: {
                  list: [
                    "heading1",
                    "heading2",
                    "heading3",
                    "heading4",
                    "heading5",
                  ],
                },
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: "image",
      options: { hotspot: true },
    },
  ],
};
