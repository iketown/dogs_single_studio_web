import React from "react";

const Spacer: React.FC<SectionPickerI> = ({ section }) => {
  return (
    <div
      style={{
        height: `${section.height || 1}rem`,
      }}
    ></div>
  );
};

export default Spacer;
