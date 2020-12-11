import { contentVariants } from "@components/layout/Layout";
import axios from "axios";
import { motion } from "framer-motion";
import groq from "groq";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  Table,
  Row,
  Col,
} from "react-bootstrap";
import useSWR from "swr";
import md5 from "md5";
import JTree from "../../../util/JTree";
import sanityClient from "../../../util/sanityClient";
import { convertToMailChimp } from "../../../src/components/forms/MailChimpForm";

export const list_id = "5306c03fed";

const TemplatePage = ({ breeders }) => {
  const {
    query: { mailchimp_id },
  } = useRouter();
  const { data: mcMembers, error, revalidate: membersRefetch } = useSWR(
    `/api/mailer/mcrequest?path=/lists/${list_id}/segments/${mailchimp_id}/members`
  );
  const { data: tagInfo, error: tagError, revalidate: tagRefetch } = useSWR(
    `/api/mailer/mcrequest?path=/lists/${list_id}/segments/${mailchimp_id}`
  );

  const handleAdd = (email_address: string) => {
    axios
      .post(`/api/mailer/mcrequest`, {
        mcRequest: {
          method: "POST",
          path: `/lists/${list_id}/segments/${mailchimp_id}/members`,
          body: { email_address },
        },
      })
      .then((response) => {
        membersRefetch();
        console.log(response);
      });
  };
  const handleRemove = (email_address: string) => {
    const email_hash = md5(email_address);
    axios
      .post(`/api/mailer/mcrequest`, {
        mcRequest: {
          method: "DELETE",
          path: `/lists/${list_id}/segments/${mailchimp_id}/members/${email_hash}`,
        },
      })
      .then((response) => {
        membersRefetch();
        console.log(response);
      });
  };
  const handleUpdate = async (breeder) => {
    const response = await axios
      .post(`/api/mailer/mailchimp`, { breeder: convertToMailChimp(breeder) })
      .then((res) => res.data);
    console.log("axios response", response);
  };

  const breederRows = breeders?.map((breeder) => {
    const { _id, email, kennel_name } = breeder;
    const inGroup = mcMembers?.members?.find(
      ({ email_address }) => email_address === email
    );
    return (
      <tr key={_id}>
        <td>{kennel_name}</td>
        <td>{email}</td>
        <td>{inGroup ? "YES" : "NO"}</td>
        <td>
          {inGroup ? (
            <Button
              onClick={() => handleRemove(email)}
              size="sm"
              variant="danger"
            >
              remove
            </Button>
          ) : (
            <Button onClick={() => handleAdd(email)} size="sm">
              ADD
            </Button>
          )}
        </td>
        <td>
          <Button size="sm" onClick={() => handleUpdate(breeder)}>
            update
          </Button>
        </td>
      </tr>
    );
  });
  return (
    <motion.div
      variants={contentVariants}
      exit="exit"
      animate="in"
      initial="initial"
    >
      <Container>
        template page
        <FormControl type="text" />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>email</th>
              <th>IN</th>
            </tr>
          </thead>
          <tbody>{breederRows}</tbody>
        </Table>
        <Button onClick={membersRefetch}>refetch members</Button>
        <Row>
          <Col xs={12}>
            <h1>breeders</h1>
          </Col>
          <Col>
            <JTree data={{ breeders }} />
          </Col>
          <Col>
            <JTree data={{ mailBreeders: breeders.map(convertToMailChimp) }} />
          </Col>
        </Row>
        <JTree data={{ mcMembers }} />
        <JTree data={{ tagInfo }} />
      </Container>
    </motion.div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { mailchimp_id } = params;
  const templateQ = groq`
     *[ _type == 'breeder_site' && mailchimp_id == $mailchimp_id ][0]{
   "breeders": *[_type=='breeder' && references(^._id)]{
     kennel_name,
     _id,
     email,
     ...,
   }
}
  `;
  const data = await sanityClient.fetch(templateQ, { mailchimp_id });
  return { props: data };
};

export default TemplatePage;
