import axios from "axios";
import React, { useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-final-form";

import FormSuccessScreen from "./FormSuccessScreen";
import { validate } from "./formValidate";

const FormWrapper: React.FC<{
  requiredQuestions: any[];
  form_success: any;
}> = ({ children, requiredQuestions, form_success }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (values) => {
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USERID;
    return axios.post("/api/mailer", { values }).then((res) => {
      console.log({ res });
      console.log(res.data);
    });
    // clear form values, redirect to conf page
  };

  return (
    <Form validate={validate(requiredQuestions)} onSubmit={handleSubmit}>
      {({ handleSubmit, values, submitSucceeded }) => {
        return (
          <>
            {submitSucceeded && <FormSuccessScreen {...{ form_success }} />}
            <form
              style={{ filter: submitSucceeded ? "blur(1px)" : "" }}
              ref={formRef}
              onSubmit={handleSubmit}
            >
              {children}
              <Button type="submit">Send</Button>
            </form>
          </>
        );
      }}
    </Form>
  );
};

export default FormWrapper;
