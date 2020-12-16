import React from "react";
import { Card, Badge } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import DoodleFrame from "../layout/corners/DoodleFrame";

const DogCard: React.FC<{ photoUrl: string; dog: any; index?: number }> = ({
  photoUrl,
  dog,
  index = 0,
}) => {
  const {
    description,
    name,
    sex,
    reservation,
    adopted_date,
    adopted_name,
    buyer,
  } = dog;
  const borderColor =
    sex === "male"
      ? "var(--color-male)"
      : sex === "female"
      ? "var(--color-female)"
      : undefined;
  let reservationBadge;
  if (buyer) {
    const {
      firstName,
      lastName,
      reservation: { reservation_date },
    } = buyer;
    reservationBadge = (
      <Badge variant="warning">
        Reserved <FaUser color="#00000044" /> {lastName}
      </Badge>
    );
  }
  return (
    <>
      <Card>
        <Card.Img src={photoUrl} />
        <DoodleFrame color={borderColor} index={index}>
          <Card.Body style={{ position: "relative" }}>
            <Card.Title as="h5">{name}</Card.Title>
            <Card.Text>
              <div className="text-muted">
                {description} {sex}
              </div>
              {/* <small style={{ fontFamily: "monospace" }} className="text-muted">
                {reservationBadge || " "}
              </small> */}
            </Card.Text>
          </Card.Body>
        </DoodleFrame>
        {reservationBadge}
      </Card>
    </>
  );
};

export default DogCard;
