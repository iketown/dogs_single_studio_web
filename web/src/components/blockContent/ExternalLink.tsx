import React from "react";

const ExternalLink: React.FC<{ mark: any }> = ({ children, mark }) => {
  const { href, target_blank } = mark;
  return (
    <a
      href={href}
      target={target_blank ? "_blank" : ""}
      rel={target_blank ? "noopener noreferer" : ""}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
