import React, { useEffect } from "react";
import axios from "axios";
import { GetServerSideProps } from "next";
import { getDogsData } from "@sanityQueries/dogPageQ";
import Layout from "@components/layout/Layout";
import DogsIndex from "@components/dogs/DogsIndex";

//
//
const Sires = (props) => {
  const { dogs, layout_info, sex } = props;
  return (
    <Layout {...{ layout_info }}>
      <DogsIndex {...{ dogs, sex }} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const sex = "female";
  const data = await getDogsData({ sex });
  return { props: { ...data, sex } };
};

export default Sires;
