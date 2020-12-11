import React from "react";
import { Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

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
    buyers = [],
  } = dog;
  const borderColor =
    sex === "male"
      ? "var(--color-male)"
      : sex === "female"
      ? "var(--color-female)"
      : undefined;
  let reservationString;
  if (buyers?.length) {
    const {
      firstName,
      lastName,
      reservation: { reservation_date },
    } = buyers[0];
    reservationString = (
      <span>
        <FaStar /> <strong>{lastName}</strong>
      </span>
    );
  }
  return (
    <>
      <Card>
        <Card.Img src={photoUrl} />
        <DoodleFrame color={borderColor} index={index}>
          <Card.Body>
            <Card.Title as="h5">{name}</Card.Title>
            <Card.Text>
              <div className="text-muted">
                {description} {sex}
              </div>
              <small className="text-muted">{reservationString || " "}</small>
            </Card.Text>
          </Card.Body>
        </DoodleFrame>
      </Card>
    </>
  );
};

export default DogCard;
