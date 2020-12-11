/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
import React from "react";
import { FaPaperclip, FaMagic } from "react-icons/fa";
import { referenceFields } from "./breeder";
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
          // {
          //   name: "dynamicText",
          //   type: "object",
          //   title: "Dynamic Text",
          //   blockEditor: {
          //     icon: () => <FaMagic />,
          //   },
          //   fields: [
          //     {
          //       name: "key",
          //       type: "string",
          //       description: "what dynamic text",
          //       options: {
          //         list: [
          //           ...referenceFields.map(({ name }) => name),
          //           "homeUrl",
          //           "slug_only",
          //         ],
          //       },
          //     },
          //     {
          //       name: "all_caps",
          //       type: "boolean",
          //       description: "Display in all caps?",
          //     },
          //   ],
          // },
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
