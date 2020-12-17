import { useDemo } from "@hooks/useDemo";
import { useRouter } from "next/router";
import React from "react";
import { Button } from "react-bootstrap";

import CenterStyle from "./styled_components/CenterStyle";

const Custom404 = () => {
  const { mixedPush } = useDemo();
  const handleGoHome = () => {
    mixedPush(`/home`, `/home`);
  };
  return (
    <CenterStyle>
      <h3 style={{ marginBottom: "2rem" }}>Nothin to see here. :/</h3>
      <Button onClick={handleGoHome}>Go Home</Button>
    </CenterStyle>
  );
};

export default Custom404;
