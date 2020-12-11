import moment from "moment";
import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";

import BlockContent from "../blockContent/BlockContent";
import { useParentLinks } from "./useParentLinks";

const LitterInfoDisplay: React.FC<{ litter: any }> = ({ litter }) => {
  const { getParentLink, getExternalParentLink } = useParentLinks();
  if (!litter) return <div>missing litter info</div>;

  // count whelps
  const { male, female } = litter?.whelps?.reduce(
    (obj, whelp) => {
      const sex = whelp.sex;
      if (!sex) return obj;
      obj[sex]++;
      return obj;
    },
    { male: 0, female: 0 }
  ) || { male: 0, female: 0 };
  // get link or text for each parent

  const dam = litter.dam_ref
    ? getParentLink(litter.dam_ref)
    : litter.dam_ext_ref
    ? getExternalParentLink(litter.dam_ext_ref)
    : litter.dam_string || "?";
  const sire = litter.sire_ref
    ? getParentLink(litter.sire_ref)
    : litter.sire_ext_ref
    ? getExternalParentLink(litter.sire_ext_ref)
    : litter.sire_string || "?";

  return (
    <div
      style={{ height: "100%" }}
      className="d-flex flex-column justify-content-center text-center p-2"
    >
      <div>
        <h5 className="mb-0">
          {sire} <small className="text-muted">x</small> {dam}
        </h5>
        {litter.born_date && (
          <small className="m-0 text-muted">
            {male} male, {female} female /{" "}
          </small>
        )}
        <small className="text-muted">
          {litter.born_date
            ? `born ${moment(litter.born_date, "YYYY-MM-DD").format(
                "MMM DD 'YY"
              )}`
            : litter.due_date
            ? `due ${moment(litter.due_date, "YYYY-MM-DD").format(
                "MMM DD 'YY"
              )}`
            : ""}
        </small>
      </div>
      {litter.short_description && (
        <BlockContent blocks={litter.short_description} />
      )}
      <div className="mt-4">
        <Link href={`/litters/[litter_slug]`} as={`/litters/${litter.slug}`}>
          <Button size="lg" variant="info">
            Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LitterInfoDisplay;
