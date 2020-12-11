import React from "react";
import Corner1 from "./Corner1";
import Corner2 from "./Corner2";
import Corner3 from "./Corner3";
import Corner4 from "./Corner4";
import Corner5 from "./Corner5";
import Corner6 from "./Corner6";
import Corner8 from "./Corner8";
import styled from "styled-components";

type CornerPosition = "topLeft" | "topRight" | "bottomLeft" | "bottomRight";

const transform = {
  topLeft: `scaleY(-1)`,
  bottomLeft: ``,
  topRight: `scale(-1)`,
  bottomRight: `scaleX(-1)`,
};

const StyledCorner = styled.div<{ position: CornerPosition }>`
  position: absolute;
  width: 15%;
  top: ${(p) => (p.position.includes("top") ? "2px" : undefined)};
  bottom: ${(p) => (p.position.includes("bottom") ? "2px" : undefined)};
  left: ${(p) => (p.position.includes("Left") ? "2px" : undefined)};
  right: ${(p) => (p.position.includes("Right") ? "2px" : undefined)};
  transform: ${(p) => transform[p.position]};
  opacity: 0.7;
  z-index: 3;
`;
const corners = [Corner1, Corner2, Corner3, Corner4, Corner5, Corner6, Corner8];

const Corner: React.FC<{
  position: CornerPosition;
  cornerIndex: number;
  color: string;
}> = ({ position = "topLeft", cornerIndex = 0, color = "darkgrey" }) => {
  const ChosenCorner = corners[cornerIndex % corners.length] || Corner8;
  return (
    <StyledCorner position={position}>
      <ChosenCorner color={color} />
    </StyledCorner>
  );
};

export default Corner;
