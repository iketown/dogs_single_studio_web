import React from "react";
import { useBreederCtx } from "../layout/BreederContext";

const DynamicText: React.FC<{ mark: any }> = ({ children, mark }) => {
  const { key, all_caps } = mark;
  const { breeder } = useBreederCtx();
  const constants = {
    homeUrl: (
      <a href={`https://breeder.page/${breeder.slug.current}`}>
        <pre>https://breeder.page/{breeder.slug.current}</pre>
      </a>
    ),
    slug_only: breeder.slug.current,
  };
  let content = breeder[key] || constants[key] || children;
  if (all_caps) content = content.toUpperCase();
  return <span>{content}</span>;
};

export default DynamicText;
