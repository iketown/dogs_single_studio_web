import BlockContent from "@components/blockContent/BlockContent";
import { useBreederCtx } from "@components/layout/BreederContext";
import { imageBuilder } from "@util/sanityImage";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import styled from "styled-components";

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FormSuccessScreen: React.FC<{ form_success: any }> = ({
  form_success,
}) => {
  const { push } = useRouter();
  const { breeder } = useBreederCtx();
  // const imageUrl = imageBuilder.image(image).width(500).height(500).url();
  const handleDone = () => {
    push(`/home`, `/home`);
  };
  return (
    <Modal centered show={true} onHide={handleDone}>
      <Modal.Header>Application received</Modal.Header>
      <Modal.Body>
        <StyledPage>
          <Image height={400} width={300} src={`/images/shelties/dame1.jpg`} />
          <h4>Your application has been received</h4>
          <p>
            you can put a custom message here to let them know how long you
            usually take to respond.
          </p>
        </StyledPage>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleDone}>Home</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormSuccessScreen;
