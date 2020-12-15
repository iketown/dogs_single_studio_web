import React, { useEffect } from "react";
import MultiLink from "@util/router/MultiLink";

const PageLink: React.FC<{ mark: any }> = ({ children, mark, ...props }) => {
  return (
    <MultiLink href="/dog/[dog_slug]" as={`/dog/${mark.slug}`}>
      {children}
    </MultiLink>
  );
};

export default PageLink;
