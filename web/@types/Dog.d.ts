interface Dog {
  _type: "dog";
  _id: string;
  description: any;
  head_shots: SanityImage[];
  action_shots: SanityImage[];
  slug: { current: string };
  name: string;
  show_name: string;
  sex: "male" | "female";
}
