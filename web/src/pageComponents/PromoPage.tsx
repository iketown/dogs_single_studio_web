import React from "react";
import styled from "styled-components";
import { FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url("/images/stripepaper.jpg");
  background-size: cover;
`;
const PromoPage = () => {
  return (
    <div>
      <Centered>
        <h2>breeder.page</h2>
        <div className="text-muted">Websites for Dog Breeders</div>
        <hr />
        <a href="mailto:be@ike.works">
          <h4>
            <FaEnvelope className="mr-2" />
            contact brian
          </h4>
        </a>{" "}
        for a demo.
        <div style={{ position: "absolute", bottom: "1rem", right: "1rem" }}>
          <Image
            width={"100px"}
            height={"150px"}
            src="/images/dog_sculpture.png"
          />
        </div>
      </Centered>
    </div>
  );
};

export default PromoPage;
