import React from "react";
import { useField } from "react-final-form";
import { Col, Form, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import classnames from "classnames";

const QuestionRadio: React.FC<{ question: any }> = ({ question }) => {
  const { options, question_main, question_secondary, required } = question;
  const { input, meta } = useField(question_main);
  const hasError = meta.touched && meta.error;
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
        {hasError && (
          <Form.Text className="text-danger">{meta.error}</Form.Text>
        )}
      </Col>
      <Col xs={12} sm={6}>
        <div>
          {options.map((opt) => {
            const handleChange = (e) => {
              input.onChange(e.target.value);
            };
            return (
              <Form.Check
                key={opt}
                onChange={handleChange}
                value={opt}
                label={opt}
                id={`${question_main}-${opt}`}
                checked={input.value === opt}
                inline
                type="radio"
              />
            );
          })}
        </div>
      </Col>
    </Form.Group>
  );
};

export default QuestionRadio;
