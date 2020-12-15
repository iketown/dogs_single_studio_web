import React, { useEffect } from "react";
import MultiLink from "@util/router/MultiLink";

const LitterLink: React.FC<{ mark: any }> = ({ children, mark, ...props }) => {
  return (
    <MultiLink href="/litter/[litter_slug]" as={`/litter/${mark.slug}`}>
      {children}
    </MultiLink>
  );
};

export default LitterLink;
