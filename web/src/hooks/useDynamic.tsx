import { useBreederCtx } from "@components/layout/BreederContext";
import React from "react";

export const useDynamicText = () => {
  const { breeder } = useBreederCtx();
  const { city, state, breeder_slug, contact, kennel_name } = breeder;
  const replaceDynamicText = (text: string) => {
    if (text && text.includes("{{")) {
      let dynamicText = text;
      Object.keys(breeder).forEach((key) => {
        dynamicText = dynamicText.replace(`{{${key}}}`, breeder[key]);
      });
      return dynamicText;
    }
    return text;
  };

  return { replaceDynamicText };
};
