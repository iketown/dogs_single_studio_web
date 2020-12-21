import S from "@sanity/desk-tool/structure-builder";
import isDemo from "../deploy_settings/isDemo";

import React from "react";

import {
  FaUser,
  FaPaw,
  FaPagelines,
  FaRegEye,
  FaDog,
  FaPuzzlePiece,
  FaMoneyBillAlt,
  FaFileAlt,
  FaRegEnvelope,
} from "react-icons/fa";
const demoSettings = () =>
  S.list()
    .title("Content")
    .items([...S.documentTypeListItems()]);

const topLevelSection = ({ title, filterText, icon }) => {
  return S.listItem()
    .icon(icon)
    .title(title)
    .child(
      S.list()
        .title(title)
        .items(
          S.documentTypeListItems().filter((listItem) => {
            const schemaType = listItem.getSchemaType();
            return schemaType.categories?.includes(filterText);
          })
        )
    );
};

const singleUserSettings = () =>
  S.list()
    .title("Content")
    .items([
      // DOCUMENT LIST START
      // About me:
      // Dogs subcategory:
      topLevelSection({ title: "Dogs", filterText: "dogs", icon: FaDog }),
      topLevelSection({
        title: "Page",
        filterText: "site-pages",
        icon: FaFileAlt,
      }),
      topLevelSection({
        title: "Page Sections",
        filterText: "sections",
        icon: FaPuzzlePiece,
      }),
      topLevelSection({
        title: "Forms",
        filterText: "forms",
        icon: FaRegEnvelope,
      }),
      topLevelSection({
        title: "Buyers",
        filterText: "buyers",
        icon: FaMoneyBillAlt,
      }),
      topLevelSection({
        title: "Appearance / Visual",
        filterText: "visuals",
        icon: FaRegEye,
      }),
      S.listItem()
        .icon(FaUser)
        .title("About Me")
        .child(S.document().schemaType("breeder").documentId("main_breeder")),

      // ...S.documentTypeListItems().filter((listItem) => {
      //   return !["breeder"].includes(listItem.getId());
      // }),
    ]);

export default isDemo ? demoSettings : singleUserSettings;
