import React from "react";
import styled from "styled-components";
import Corner from "./Corner";

const DoodleContainer = styled.div`
  position: relative;
`;

const DoodleFrame: React.FC<{ color: string; index: number }> = ({
  children,
  color = "grey",
  index = 0,
}) => {
  return (
    <DoodleContainer>
      <Corner color={color} cornerIndex={index} position="topLeft" />
      <Corner color={color} cornerIndex={index} position="topRight" />
      <Corner color={color} cornerIndex={index} position="bottomLeft" />
      <Corner color={color} cornerIndex={index} position="bottomRight" />
      {children}
    </DoodleContainer>
  );
};

export default DoodleFrame;
