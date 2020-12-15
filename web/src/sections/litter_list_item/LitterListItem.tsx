import React from "react";
import JTree from "@util/JTree";

import { Row, Col, Button } from "react-bootstrap";

const LitterListItem: React.FC<SectionPickerI> = ({ section, index }) => {
  return (
    <div>
      Litter ListItem
      <JTree data={section} />
    </div>
  );
};

export default LitterListItem;
