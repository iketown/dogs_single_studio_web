import React from "react";
import { Form } from "react-bootstrap";
import { FieldInputProps } from "react-final-form";
import { useDynamicText } from "./useDynamic";
const AnswerRadio: React.FC<{
  question: any;
  input: FieldInputProps<any, HTMLElement>;
}> = ({ question, input }) => {
  const { answer_type, question_main, options } = question;
  const { replaceDynamicText } = useDynamicText();
  let rows;
  switch (answer_type) {
    case "text_short":
      rows = 1;
      break;
    case "text_med":
      rows = 3;
      break;
    case "text_long":
      rows = 5;
      break;
  }
  return (
    <Form.Control
      onChange={(e) => input.onChange(e.target.value)}
      value={input.value}
      as="select"
    >
      {options?.map(replaceDynamicText).map((opt) => {
        return (
          <option key={`${question_main}-${opt}`} value={opt}>
            {opt}
          </option>
        );
      })}
    </Form.Control>
  );
};

export default AnswerRadio;
