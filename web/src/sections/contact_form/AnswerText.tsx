import React from "react";
import { Form } from "react-bootstrap";
import { FieldInputProps } from "react-final-form";

const AnswerText: React.FC<{
  question: any;
  input: FieldInputProps<any, HTMLElement>;
}> = ({ question, input }) => {
  const { answer_type } = question;
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
      value={input.value}
      onChange={(e) => input.onChange(e.target.value)}
      as="textarea"
      rows={rows}
    ></Form.Control>
  );
};

export default AnswerText;
