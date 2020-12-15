import JTree from "@util/JTree";
import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

import Badges from "./badges/Badges";
import CenterLogo from "./center_logo/CenterLogo";
import CenteredTitle, {
  CenteredTitleAuto,
} from "./centered_title/CenteredTitle";
import DevNote from "./dev_note/DevNote";
import FullWidthImage from "./full_width_image/FullWidthImage";
import FullWidthText from "./full_width_text/FullWidthText";
import HeroHeader, { HeroHeaderAuto } from "./header_section/HeroHeader";
import MapSection from "./map_section/MapSection";
import PhotoGrid from "./photo_grid/PhotoGrid";
import PhotosByText from "./photos_by_text/PhotosByText";
import Spacer from "./spacer/Spacer";
import Testimonial from "./testimonials/Testimonial";
import TestimonialList from "./testimonials/TestimonialList";
import WaitingList from "./waiting_list/WaitingList";
import AutoLogo from "./auto_logo/AutoLogo";
import AutoImageGrid from "./auto_image_grid/AutoImageGrid";
import AutoIntroText from "./auto_intro_text/AutoIntroText";
import AutoPhotoHeader from "./auto_photo_header/AutoPhotoHeader";
import DogListItem from "./dog_list_item/DogListItem";
import LitterListItem from "./litter_list_item/LitterListItem";

const StyledSection = styled.section<{
  bgColorVar: string;
  textColorVar: string;
}>`
  position: relative;
  background-color: var(--color-${(p) => p.bgColorVar});
  color: var(--color-${(p) => p.textColorVar});
  a {
    color: ${(p) => (p.bgColorVar?.includes("dark") ? "yellow" : "default")};
    font-weight: bold;
  }
`;

const SectionPicker: React.FC<SectionPickerI> = ({ section, index }) => {
  const getSection = () => {
    switch (section._type) {
      case "photos_by_text":
      case "photos_by_text_custom": {
        return (
          <Container>
            <PhotosByText {...{ section, index }} />
          </Container>
        );
      }
      case "photo_grid":
      case "photo_grid_default":
      case "photo_grid_custom": {
        return <PhotoGrid {...{ section, index }} />;
      }
      case "header_section_auto": {
        return <HeroHeaderAuto {...{ section, index }} />;
      }
      case "header_section_custom":
      case "header_section": {
        return <HeroHeader {...{ section, index }} />;
      }
      case "center_logo":
        return <CenterLogo {...{ section, index }} />;
      case "full_width_text": {
        return <FullWidthText {...{ section, index }} />;
      }
      case "testimonial": {
        return <Testimonial {...{ section, index }} />;
      }
      case "testimonial_list": {
        return <TestimonialList {...{ section, index }} />;
      }
      case "spacer": {
        return <Spacer {...{ section, index }} />;
      }
      case "centered_title_auto":
        return <CenteredTitleAuto {...{ section, index }} />;
      case "centered_title": {
        return <CenteredTitle {...{ section, index }} />;
      }
      case "dev_note": {
        return <DevNote {...{ section, index }} />;
      }
      case "auto_badges":
      case "badge_array":
      case "badgeArray":
      case "badges": {
        return <Badges {...{ section, index }} />;
      }
      case "map_section": {
        return <MapSection {...{ section, index }} />;
      }
      case "full_width_image":
      case "bgImage": {
        return <FullWidthImage {...{ section, index }} />;
      }
      case "waiting_list": {
        return <WaitingList {...{ section, index }} />;
      }
      case "auto_logo": {
        return <AutoLogo {...{ section, index }} />;
      }
      case "auto_img_grid": {
        return <AutoImageGrid {...{ section, index }} />;
      }
      case "auto_intro_text": {
        return <AutoIntroText {...{ section, index }} />;
      }
      case "auto_photo_header": {
        return <AutoPhotoHeader {...{ section, index }} />;
      }
      case "dog_list_item": {
        return <DogListItem {...{ section, index }} />;
      }
      case "litter_list_item": {
        return <LitterListItem {...{ section, index }} />;
      }
      default:
        return (
          <div style={{ background: "salmon", padding: "5px" }}>
            no section type :/
            <JTree data={section} />
          </div>
        );
    }
  };
  const bgColorVar = section.colors?.bgColorVar || "";
  const textColorVar = section.colors?.textColorVar || "black";
  return (
    <StyledSection {...{ bgColorVar, textColorVar }} id={section.section_id}>
      <div style={{ zIndex: 2 }}>{getSection()}</div>
    </StyledSection>
  );
};

export default SectionPicker;
