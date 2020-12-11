import React from "react";

import QuestionRadio from "./QuestionRadio";
import QuestionText from "./QuestionText";

const FormSectionPicker: React.FC<{ question: any }> = ({ question }) => {
  switch (question?.answer_type) {
    case "radio":
      return <QuestionRadio {...{ question }} />;
    case "select":
      return (
        <div>
          <h3>select question</h3>
        </div>
      );
    case "text_short":
    case "text_med":
    case "text_long":
      return <QuestionText {...{ question }} />;

    default:
      return (
        <div>
          <h3 style={{ color: "red" }}>unknown type</h3>
        </div>
      );
  }
};

export default FormSectionPicker;
