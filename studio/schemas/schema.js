// First, we must import the schema creator
import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";

import { bgColor, textColor } from "./bgColor";
import { testimonial } from "./sections/testimonial";
import badge, { badgeArray } from "./badge";
import blockContent from "./blockContent";
import breeder from "./breeder";
import breeder_site from "./breeder_site";
import buyer from "./buyer";
import center_logo from "./sections/center_logo";
import centered_title from "./sections/centered_title";
import dog from "./dog";
import dog_external from "./dog_external";
import dog_list_item from "./sections/dog_list_item";
import dynamic_message from "./dynamicMessage";
import external_photo, {
  external_photo_array,
} from "./sections/external_photo";
import form from "./sections/contact_form/form";
import form_question from "./sections/contact_form/form_question";
import form_success from "./sections/contact_form/form_success";
import full_width_image from "./full_width_image";
import full_width_text from "./fullWidthText";
import header_section from "./sections/header_section";
import imageCarousel from "./imageCarousel";
import link from "./link";
import litter from "./litter";
import map_section from "./sections/map_section";
import page from "./site_pages/page";
import palette from "./palette";
import photo_grid from "./sections/photo_grid";
import photos_by_Text from "./sections/photos_by_text";
import sectionColorScheme from "./sectionColorScheme";
import sections from "./sections/sections";
import waiting_list from "./sections/waiting_list";
import whelp from "./whelp";

// Then import schema types from any plugins that might expose them
// We import object and document schemas
// website sections
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    badge,
    badgeArray,
    bgColor,
    blockContent,
    breeder_site,
    breeder,
    buyer,
    center_logo,
    centered_title,
    dog_external,
    dog,
    dog_list_item,
    dynamic_message,
    external_photo_array,
    external_photo,
    form_question,
    form_success,
    form,
    full_width_image,
    full_width_text,
    header_section,
    imageCarousel,
    link,
    litter,
    map_section,
    page,
    palette,
    photo_grid,
    photos_by_Text,
    sectionColorScheme,
    sections,
    // testimonial_list,
    testimonial,
    textColor,
    waiting_list,
    whelp,
  ]),
});
