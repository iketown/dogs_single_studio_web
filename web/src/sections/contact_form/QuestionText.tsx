import React from "react";
import { useField } from "react-final-form";
import { Col, Form, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import classnames from "classnames";

const QuestionText: React.FC<{ question: any }> = ({ question }) => {
  const { answer_type, question_main, question_secondary, required } = question;
  const { input, meta } = useField(question_main);
  const hasError = meta.touched && meta.error;

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
    <Form.Group as={Row}>
      <Col xs={12} sm={6}>
        <Form.Label className={classnames("mb-0", { "text-danger": hasError })}>
          {required && (
            <OverlayTrigger
              placement="left"
              overlay={<Tooltip id={question_main}>required</Tooltip>}
            >
              <span className="text-muted">* </span>
            </OverlayTrigger>
          )}
          {question_main}
        </Form.Label>
        <Form.Text className="mt-0" muted>
          {question_secondary}
        </Form.Text>
        {meta.error && (
          <Form.Text className="text-danger">*{meta.error}</Form.Text>
        )}
      </Col>
      <Col xs={12} sm={6}>
        <Form.Control as="textarea" rows={rows}></Form.Control>
      </Col>
    </Form.Group>
  );
};

export default QuestionText;
