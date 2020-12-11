interface Breeder {
  breeds: string[];
  kennel_names: string[];
  breeder_names: string[];
  _id: string;
  akcUrl?: string;
  kennelName?: string;
  breederName?: string;
  headline?: string;
  location?: string;
  breeder_name?: string;
  companyName?: string;
  description?: string;
  kennel_name?: string;
  phone?: string;
  photos: { _id: string; caption?: string; imageUrl: string }[];
  website?: string;
}
