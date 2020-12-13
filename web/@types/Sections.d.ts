interface HeroHeaderI {
  // heroPhoto: string;
  // images: any[];
  section: Section;
}

interface Section {
  _key?: string;
  _id?: string;
  name: string;
  location?: string;
  section_id?: string; // id to find on page #section-id etc.
  bgColor?: any;
  textColor?: string;
  dog_ref?: { _ref: string };
  description_before?: any;
  description_after?: any;
  show_logo?: boolean;
  text?: any;
  subtitle?: string;
  blockContent?: any;
  show?: "waiting" | "confirmed" | "both";
  photo?: SanityImage;
  images?: SanityImage[];
  photos?: { images: SanityImage[]; decoration?: string };
  ext_photo?: ExternalPhoto;
  dog?: Dog;
  // ext_photos?: ExternalPhoto;
  _type: string;
  decoration?: boolean; // spacer with decoration or not.
  testimonial_refs?: any[];
  testimonials?: any[];
  testimonial?: any;
  show_sex_icon?: boolean;
  badges?: any[];
  badges_refs?: any[];
  title_type?: string;
  slug?: { current: string };
  buttonText?: string;
  height?: number;
  colors?: {
    bgColorVar: string;
    textColorVar: string;
  };
  waitingList?: any;
}

interface LogoIntroI {
  title: string;
}

interface PhotoColorInfo {
  background: string;
  foreground: string;
  population: number;
  title: string;
}

interface SanityImage {
  asset: {
    _ref: string;
    _type: string;
    metadata: {
      dimensions: { aspectRatio: number; height: number; width: number };
      palette: {
        darkMuted: PhotoColorInfo;
        darkVibrant: PhotoColorInfo;
        dominant: PhotoColorInfo;
        lightMuted: PhotoColorInfo;
        lightVibrant: PhotoColorInfo;
        vibrant: PhotoColorInfo;
      };
    };
  };
  caption?: string;
  headline?: string;
  subtitle?: string;
  crop: {
    _type: string;
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  hotspot: {
    _type: string;
    height: number;
    width: number;
    x: number;
    y: number;
  };
  show_full?: boolean;
}

interface SectionPickerI {
  section: Section;
  index: number;
}

interface ExternalPhoto {
  _key: string;
  _type: "external_photo";
  aspectX?: number;
  aspectY?: number;
  crop?: { x: number; y: number };
  cropPxl?: { height: number; width: number; x: number; y: number };
  originalPhoto?: {
    naturalHeight: number;
    naturalWidth: number;
    naturalRatio: number;
  };
  display_cropped?: boolean;
  title?: string;
  url: string;
  zoom: number;
}
