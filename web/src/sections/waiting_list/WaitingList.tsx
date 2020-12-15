import { getWaitingListSection } from "@sanityQueries/waitingListQ";
import { imageBuilder } from "@util/sanityImage";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Container, Image, ListGroup } from "react-bootstrap";
import { FaPaw, FaUser } from "react-icons/fa";
import styled from "styled-components";
import { useBreederCtx } from "@components/layout/BreederContext";
//
//
const ListItemGrid = styled.div`
  display: grid;
  grid-template-columns: [image] max-content [name] 1fr [info] max-content;
  .image {
    grid-area: image;
  }
  .name {
    grid-area: name;
  }
  .info {
    grid-area: info;
    font-size: 11px;
  }
`;
const ListHeader = ({ text }: { text: string }) => (
  <ListGroup.Item style={{ background: "var(--color-lightA)" }}>
    <div>{text}</div>
  </ListGroup.Item>
);

const WaitingListSection: React.FC<SectionPickerI> = ({ section, index }) => {
  const { breeder } = useBreederCtx();
  const { show } = section;
  const { waitingList } = breeder;
  const waitingSection = (
    <ListGroup className="mt-4">
      <ListHeader text="Waiting" />
      {waitingList
        ?.filter((buyer) => !buyer.reservation)
        .map((buyer, index) => {
          return (
            <ListGroup.Item
              key={buyer._id}
              className="d-flex align-items-center"
            >
              <h3 className="text-muted pr-4">{index + 1}</h3>
              <div>
                <div className="d-flex align-items-center">
                  <FaUser className="text-muted mr-2" />
                  {buyer.lastName}
                </div>
                <small className="text-muted">
                  deposit: {moment(buyer.depositDate).format("MM/DD/YY")}
                </small>
              </div>
            </ListGroup.Item>
          );
        })}
    </ListGroup>
  );
  const confirmedSection = (
    <ListGroup className="mt-4">
      <ListHeader text="Confirmed" />
      {waitingList
        ?.filter((buyer) => !!buyer.reservation)
        .map((buyer) => {
          let whelpImg = "/images/silhouettes/sheltie_silhouette.svg";
          const { reservation_date, whelp_ref } = buyer.reservation;
          const photoObj = whelp_ref?.photos && whelp_ref?.photos[0];
          if (photoObj) {
            whelpImg = imageBuilder
              .image(photoObj)
              .width(50)
              .height(50)
              .format("jpg")
              .url();
          }
          return (
            <ListGroup.Item key={buyer._id}>
              <ListItemGrid>
                <div className="image">
                  <Image src={whelpImg} rounded width={50} className="mr-2" />
                </div>
                <div className="name">
                  <div className="d-flex align-items-center">
                    <FaUser className="text-muted mr-2" />
                    {buyer.lastName}
                  </div>
                  <div className="d-flex align-items-center">
                    <FaPaw className="text-info mr-2" />
                    <div className="text-muted">{whelp_ref.name}</div>
                  </div>
                </div>
                <div className="info">
                  {whelp_ref?.litter && (
                    <Link
                      href={`/litter/[litter_slug]`}
                      as={`/litter/${whelp_ref.litter.slug.current}`}
                    >
                      <a className="d-flex">
                        <div className="mr-2">born:</div>
                        <div>
                          {moment(whelp_ref.litter.born_date).format(
                            "MM/DD/YY"
                          )}
                        </div>
                      </a>
                    </Link>
                  )}
                  {reservation_date && (
                    <div className="d-flex">
                      <div className="mr-2">reserved:</div>
                      <div>{moment(reservation_date).format("MM/DD/YY")}</div>
                    </div>
                  )}
                </div>
              </ListItemGrid>
            </ListGroup.Item>
          );
        })}
    </ListGroup>
  );
  return (
    <Container className="my-4">
      {(show === "waiting" || show === "both") && waitingSection}
      {(show === "confirmed" || show === "both") && confirmedSection}
    </Container>
  );
};

export default WaitingListSection;
