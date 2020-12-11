import { useBreederCtx } from "@components/layout/BreederContext";
import { imageBuilder } from "@util/sanityImage";
import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import JTree from "@util/JTree";

const Badges: React.FC<SectionPickerI> = ({ section, index }) => {
  const { breeder } = useBreederCtx();
  // const { badge_refs, badges } = breeder;
  // const goodBadges = badge_refs?.map((b, index) => b || badges[index]);
  const { badges, badges_refs } = section;
  const goodBadges = badges_refs.map((ref, i) => ref || badges[i]);
  return (
    <Row className="m-4">
      {goodBadges?.map((badge) => {
        const imageUrl = imageBuilder.image(badge.image).height(150).url();
        const linkUrl = badge.link_url;
        const image = <Image alt={badge.title} unsized src={imageUrl} />;
        const linkedImage = linkUrl && (
          <a style={{ display: "inline-block" }} href={linkUrl} target="_blank">
            {image}
          </a>
        );
        return (
          <Col className="text-center" key={badge._id || badge._key}>
            {linkedImage || image}
          </Col>
        );
      })}
    </Row>
  );
};

export default Badges;
