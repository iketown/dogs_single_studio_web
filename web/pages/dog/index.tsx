import React from "react";
import { NonDemoOnly } from "../../util/router/demo_settings";

const DogsIndex = () => {
  return (
    <NonDemoOnly>
      <div>Dogs index</div>
    </NonDemoOnly>
  );
};

export default DogsIndex;
