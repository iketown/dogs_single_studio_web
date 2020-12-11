import React from "react";
import SanityImageCropper from "../../components/imageCropper/SanityImageCropper";

export default {
  type: "document",
  name: "external_photo",
  description: "photo for display, not hosted on sanity, for demo purposes",
  preview: {
    select: {
      title: "title",
      x: "x",
      url: "url",
    },
    prepare({ title, url }) {
      return {
        title,
        subtitle: url,
        media: (
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundImage: `url(${url})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        ),
      };
    },
  },
  inputComponent: SanityImageCropper,
  initialValue: {
    display_cropped: true,
    title: "initial title",
  },
  fields: [
    { name: "title", title: "Title", type: "string" },
    {
      name: "cropPxl",
      type: "object",
      fields: [
        { name: "width", type: "number" },
        { name: "height", type: "number" },
        { name: "x", type: "number" },
        { name: "y", type: "number" },
      ],
    },
    {
      name: "display_cropped",
      type: "boolean",
    },
    {
      name: "originalPhoto",
      type: "object",
      fields: [
        { name: "naturalHeight", type: "number" },
        { name: "naturalWidth", type: "number" },
        { name: "naturalRatio", type: "number" },
      ],
    },
    {
      name: "crop",
      type: "object",
      fields: [
        { name: "x", type: "number" },
        { name: "y", type: "number" },
      ],
    },
    {
      name: "aspectX",
      type: "number",
    },
    {
      name: "aspectY",
      type: "number",
    },
    { name: "zoom", type: "number" },
    { name: "url", type: "string" },
    { name: "x", title: "X offset", type: "string" },
    { name: "y", title: "y offset", type: "string" },
  ],
};

export const external_photo_array = {
  type: "object",
  name: "external_photo_array",
  title: "External Photo Array",
  fields: [
    { name: "photos", type: "array", of: [{ type: "external_photo" }] },
    { name: "title", type: "string" },
  ],
  preview: {
    select: {
      photos: "photos",
      title: "title",
    },
    prepare({ photos, title }) {
      return { title, subtitle: `${photos?.length || 0} photos` };
    },
  },
};
