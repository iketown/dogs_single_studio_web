import React from "react";
import { NonDemoOnly } from "../../util/router/demo_settings";

const OwnerIndex = () => {
  return (
    <NonDemoOnly>
      <div>
        <h1>owner page</h1>
        <p>here you can sign in and see your dashboard</p>
      </div>
    </NonDemoOnly>
  );
};

export default OwnerIndex;
