import Link from "next/link";
import React from "react";

import { useBreederCtx } from "../../src/components/layout/BreederContext";
import { isDemo } from "./demo_settings";

interface MultiLinkI {
  href: string;
  as: string;
  className?: string;
}
const MultiLink: React.FC<MultiLinkI> = ({ children, href, as, className }) => {
  const {
    breeder: { breeder_slug },
  } = useBreederCtx();
  const multiHref = isDemo ? `/demo/[breeder_slug]${href}` : href;
  const multiAs = isDemo ? `/demo/${breeder_slug}${as}` : as;
  return (
    <Link href={multiHref} as={multiAs}>
      <a className={className}>{children}</a>
    </Link>
  );
};

export default MultiLink;
