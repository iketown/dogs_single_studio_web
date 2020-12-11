import React from "react";

const BackgroundColor = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "white",
        zIndex: -2,
      }}
    ></div>
  );
};

export default BackgroundColor;
