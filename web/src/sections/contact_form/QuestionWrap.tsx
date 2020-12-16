import classnames from "classnames";
import React from "react";
import {
  Col,
  Container,
  Form,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { useField } from "react-final-form";

import AnswerRadio from "./AnswerRadio";
import AnswerSelect from "./AnswerSelect";
import AnswerText from "./AnswerText";
import { useDynamicText } from "./useDynamic";

//
//
const QuestionWrap: React.FC<{ question: any }> = ({ question }) => {
  const {
    answer_type,
    options,
    question_main,
    question_secondary,
    required,
  } = question;
  const { input, meta } = useField(question_main);
  const hasError = meta.touched && meta.error;
  const { replaceDynamicText } = useDynamicText();
  const getAnswer = () => {
    switch (question?.answer_type) {
      case "radio":
        return <AnswerRadio {...{ question, input }} />;
      case "select":
        return <AnswerSelect {...{ question, input }} />;
      case "text_short":
      case "text_med":
      case "text_long":
        return <AnswerText {...{ question, input }} />;

      default:
        return (
          <div>
            <h3 style={{ color: "red" }}>unknown type</h3>
          </div>
        );
    }
  };

  return (
    <Container>
      <Form.Group as={Row}>
        <Col xs={12} sm={6}>
          <Form.Label
            className={classnames("mb-0", { "text-danger": hasError })}
          >
            {required && (
              <OverlayTrigger
                placement="left"
                overlay={
                  <Tooltip id={replaceDynamicText(question_main)}>
                    required
                  </Tooltip>
                }
              >
                <span className="text-muted">* </span>
              </OverlayTrigger>
            )}
            {replaceDynamicText(question_main)}
          </Form.Label>
          <Form.Text className="mt-0" muted>
            {replaceDynamicText(question_secondary)}
          </Form.Text>
          {hasError && (
            <Form.Text className="text-danger">{meta.error}</Form.Text>
          )}
        </Col>
        <Col xs={12} sm={6}>
          {getAnswer()}
        </Col>
      </Form.Group>
    </Container>
  );
};

export default QuestionWrap;
