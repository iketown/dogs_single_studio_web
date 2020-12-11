import React from "react";
import Layout from "./Layout";
import styled from "styled-components";
import Image from "next/image";

const CenterAll = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(#ffffffbb, #ffffffbb),
    url("/images/construction.jpg");
  background-size: cover;
`;
const UnderConstruction = ({ layout_info }) => {
  return (
    <Layout {...{ layout_info }}>
      <CenterAll>
        <h3>this page under construction</h3>
        <Image width={300} height={200} src={"/images/dogwork.gif"} />
      </CenterAll>
    </Layout>
  );
};

export default UnderConstruction;
