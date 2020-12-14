import Link from "next/link";
import { useBreederCtx } from "../../src/components/layout/BreederContext";
import { useDemo } from "@hooks/useDemo";
import React from "react";
import { useRouter } from "next/router";

interface MultiLinkI {
  href: string;
  as: string;
  className?: string;
}
const MultiLink: React.FC<MultiLinkI> = ({ children, href, as, className }) => {
  const { isDemo } = useDemo();
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
