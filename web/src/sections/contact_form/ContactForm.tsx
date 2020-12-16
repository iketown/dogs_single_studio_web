import axios from "axios";
import React, { useEffect, useRef } from "react";
import { Col, Container, Form } from "react-bootstrap";

import StateSelector from "./StateSelector";
import TextInput from "./TextInput";

//
//
const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (values) => {
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USERID;
    console.log({ values, userId });
    axios.post("/api/mailer", { values }).then((res) => {
      console.log({ res });
      console.log(res.data);
    });
  };

  return (
    <Container>
      <Form.Row>
        <Col>
          <TextInput label="First Name" name="contact.firstName" />
        </Col>
        <Col>
          <TextInput label="Last Name" name="contact.lastName" />
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <TextInput label="Street Address" name="contact.streetAddress" />
        </Col>
      </Form.Row>
      <Form.Row>
        <Col xs={12} sm={12} md={6}>
          <TextInput label="City" name="contact.city" />
        </Col>
        <Col xs={12} sm={6} md={3}>
          <StateSelector />
        </Col>
        <Col xs={12} sm={6} md={3}>
          <TextInput label="Zip Code" name="contact.zip" />
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <TextInput label="Phone" name="contact.phone" inputType="phone" />
        </Col>
        <Col>
          <TextInput label="Email" name="contact.email" inputType="email" />
        </Col>
        <Col>
          <TextInput
            label="Confirm Email"
            name="contact.email2"
            inputType="email"
          />
        </Col>
      </Form.Row>
    </Container>
  );
};

export default ContactForm;
