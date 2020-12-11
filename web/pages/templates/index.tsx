import BreederTable from "@components/admin/BreederTable";
import React, { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import sanityClient from "@util/sanityClient";
import groq from "groq";
import JTree from "@util/JTree";
import Link from "next/link";
import { motion } from "framer-motion";
import useSWR from "swr";
import { list_id } from "./[mailchimp_id]/index";
const BreedersIndex = ({ templates }) => {
  const { data, error } = useSWR(
    `/api/mailer/mcrequest?path=/lists/${list_id}/segments/`
  );
  if (process.env.NODE_ENV !== "development") return <div>nothing here</div>;

  return (
    <motion.div key="breeder_index">
      {templates?.map(({ _id, template_id, mailchimp_id, title }) => {
        return (
          <Link
            href={`/templates/[mailchimp_id]`}
            as={`/templates/${mailchimp_id}`}
          >
            <a key={_id}>{title}</a>
          </Link>
        );
      })}
      <JTree data={templates} />
      <JTree data={data} />
    </motion.div>
  );
};

export const getServerSideProps = async () => {
  const templateListQ = groq`
    *[ _type == 'breeder_site' ]{
   template_id,
   mailchimp_id,
   _id,
   title
 }
  `;

  const templates = await sanityClient.fetch(templateListQ);
  return { props: { templates } };
};

export default BreedersIndex;
