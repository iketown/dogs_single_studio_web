interface LayoutI {
  akc_link?: string;
  badges?: any[];
  badge_refs?: any[];
  breeder_slug?: string;
  waitingList?: any[];
  city?: string;
  intro_text?: any;
  contact?: string;
  contact_firstName?: string;
  contact_lastName?: string;
  email?: string;
  phone?: string;
  kennel_name: string;
  kennel_domain_url?: string;
  kennel_subtitle?: string;
  ext_header_photo?: ExternalPhoto;
  ext_photos?: {
    photos: ExternalPhoto[];
  };
  photos?: any[];
  ext_logo?: {
    url?: string;
    background_color?: string;
  };
  isLive?: boolean;
  links: {
    default: { button_text: string; slug: string }[];
    custom: { button_text: string; slug: string }[];
  };
  location: {
    lat: number;
    lng: number;
  };
  newsite_image: SanityImage;
  slug: { current: string };
  social_links?: {
    _key: string;
    name: string;
    url: string;
  }[];
  state: string;
  state_abbr: string;
  streetAddress: string;
  zipCode: string;
  font_combo: string;
  palette: {
    title: string;
    darkA: string;
    darkB: string;
    darkAccent: string;
    lightA: string;
    lightB: string;
  };
}
