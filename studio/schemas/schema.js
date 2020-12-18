// First, we must import the schema creator
import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";

import { testimonial } from "./sections/testimonial";
import badge, { badge_array } from "./badge";
import blockContent from "./blockContent";
import breeder from "./breeder";
import breeder_site from "./breeder_site";
import buyer from "./buyer";
import center_logo from "./sections/center_logo";
import centered_title from "./sections/centered_title";
import dog from "./dog";
import dog_external from "./dog_external";
import dog_list_item from "./sections/dog_list_item";
import external_photo, {
  external_photo_array,
} from "./sections/external_photo";
import form_question from "./sections/contact_form/form_question";
import form_section from "./sections/form_section";
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
import photos_by_text from "./sections/photos_by_text";
import sectionColorScheme from "./sectionColorScheme";
import sections from "./sections/sections";
import waiting_list from "./sections/waiting_list";
import whelp from "./whelp";
import { addCategories } from "./helpers/addCategories";

const saveableSections = [
  header_section,
  photos_by_text,
  center_logo,
  photo_grid,
  full_width_text,
  full_width_image,
  testimonial,
  badge_array,
].map((section) => addCategories(["sections"])(section));

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
    // saveable sections:
    addCategories(["sections"])(header_section),
    addCategories(["sections"])(photos_by_text),
    addCategories(["sections"])(center_logo),
    addCategories(["sections"])(photo_grid),
    addCategories(["sections"])(full_width_text),
    addCategories(["sections"])(full_width_image),
    addCategories(["sections"])(testimonial),
    addCategories(["sections"])(badge_array),
    addCategories(["sections"])(badge),
    addCategories(["sections"])(map_section),
    addCategories(["sections"])(centered_title),

    // DOGS
    addCategories(["dogs"])(dog),
    addCategories(["dogs"])(whelp),
    addCategories(["dogs"])(dog_external),
    addCategories(["dogs"])(dog_list_item),

    // COLORS & FONTS
    addCategories(["visuals"])(palette),
    addCategories(["visuals"])(sectionColorScheme),

    // FORMS
    addCategories(["forms"])(form_question),
    addCategories(["forms"])(form_section),

    // SITE / PAGES
    addCategories(["site-pages"])(page),
    addCategories(["site-pages"])(breeder_site),

    // BUYERS
    addCategories(["buyers"])(buyer),
    addCategories(["buyers"])(litter),
    addCategories(["buyers"])(waiting_list),

    external_photo_array, // demo only
    external_photo, // demo only

    link, // object
    imageCarousel, //object
    blockContent, //array
    sections, // array
    breeder,
  ]),
});
