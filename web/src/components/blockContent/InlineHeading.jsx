import React from "react";

const InlineHeading = ({ children, mark }) => {
  return <span className={`inlineHeading ${mark.hSize}`}>{children}</span>;
};

export default InlineHeading;
