import JTree from "@util/JTree";
import axios from "axios";
import React, { useEffect, useRef } from "react";
import { Button, Container } from "react-bootstrap";
import { Form } from "react-final-form";

import { useDemo } from "../../hooks/useDemo";
import { validate } from "./formValidate";

const FormWrapper: React.FC<{
  requiredQuestions?: any[];
  send_to_email?: string;
  success_page_slug?: string;
}> = ({
  children,
  requiredQuestions = [],
  send_to_email,
  success_page_slug,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { mixedPush } = useDemo();

  const handleSubmit = async (values) => {
    return axios
      .post("/api/mailer", { values, send_to_email })
      .then((res) => {
        console.log({ res });
        console.log(res.data);
      })
      .then(() => {
        if (success_page_slug) {
          mixedPush("/[page_slug]", `/${success_page_slug}`);
        } else {
          mixedPush("/", "/");
        }
      });
    // clear form values, redirect to conf page
  };

  return (
    <Form validate={validate(requiredQuestions)} onSubmit={handleSubmit}>
      {({ handleSubmit, values, submitSucceeded }) => {
        return (
          <>
            <form className="my-4" ref={formRef} onSubmit={handleSubmit}>
              {children}
              <Container>
                <div className="my-4">
                  <Button
                    style={{
                      color: "white",
                      backgroundColor: "var(--color-darkB)",
                      border: "1px solid var(--color-darkA)",
                    }}
                    block
                    type="submit"
                  >
                    Send
                  </Button>
                </div>
              </Container>
            </form>
          </>
        );
      }}
    </Form>
  );
};

export default FormWrapper;
