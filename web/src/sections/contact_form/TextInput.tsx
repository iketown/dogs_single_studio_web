import React from "react";
import { Form, FormControlProps } from "react-bootstrap";
import { useField } from "react-final-form";

interface TextInputI {
  label: string;
  name: string;
  placeholder?: string;
  helpText?: string;
  inputType?: string;
}
const TextInput: React.FC<TextInputI> = ({
  label,
  name,
  helpText,
  inputType = "text",
  placeholder,
}) => {
  const { input, meta } = useField(name);
  return (
    <Form.Group controlId="formBasicEmail">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        isInvalid={meta.touched && meta.error}
        {...input}
        type={inputType}
        placeholder={placeholder}
      />
      {helpText && <Form.Text className="text-muted">{helpText}</Form.Text>}
      {meta.touched && meta.error && (
        <div className="invalid-feedback">{meta.error}</div>
      )}
    </Form.Group>
  );
};

export default TextInput;
