import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const InternalLink: React.FC<{ mark: { href: string; anchor: string } }> = ({
  mark,
  children,
}) => {
  const { href, anchor } = mark;

  return (
    <Link
      href={`/${href}${anchor ? "#" + anchor : ""}`}
      as={`/${href}${anchor ? "#" + anchor : ""}`}
    >
      <a>{children}</a>
    </Link>
  );
};

export default InternalLink;
