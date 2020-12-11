import React, { useLayoutEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";

import { useBreederCtx } from "../layout/BreederContext";

const FullPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PasswordPage: React.FC<any> = ({ children }) => {
  const [passwordOk, setPasswordOk] = useState(false);
  const [password, setPassword] = useState("");
  const { breeder } = useBreederCtx();
  const correctPW = `${breeder.kennel_name}`.toLowerCase();

  useLayoutEffect(() => {
    const date = localStorage.getItem("pw-date");
    const pw = localStorage.getItem("pw");

    const lastChecked = new Date(date).valueOf();
    const now = new Date().valueOf();
    const twoDays = 1000 * 60 * 60 * 24 * 2;
    const timeAgo = now - lastChecked;
    if (timeAgo < twoDays && pw === correctPW) {
      setPasswordOk(true);
    }
  }, []);
  const handleSubmit = () => {
    if (password.toLowerCase() === correctPW) {
      const date = new Date().toISOString();
      localStorage.setItem("pw-date", date);
      localStorage.setItem("pw", password);
      setPasswordOk(true);
    }
  };
  if (passwordOk) return children;
  return (
    <FullPage>
      <div style={{ overflow: "scroll", maxHeight: "50vh" }}>
        <h3>Welcome!</h3>
        <p>
          this preview site is exclusively for owner(s) / employees of{" "}
          <b>{breeder.kennel_name}</b>
        </p>
        <p>
          you should have received a password. if not, contact me at
          <a href="mailto:be@ike.works"> be@ike.works</a>
        </p>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </FullPage>
  );
};

export default PasswordPage;
