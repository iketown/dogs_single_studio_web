import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import axios from "axios";
import { useBreederCtx } from "../layout/BreederContext";
import JTree from "../../../util/JTree";
import { Row, Col } from "react-bootstrap";
import useSWR from "swr";
import { imageBuilder } from "@util/sanityImage";

export const convertToMailChimp = (breeder: LayoutI) => {
  return {
    email: breeder.email,
    merge_fields: {
      FNAME: breeder.contact_firstName,
      LNAME: breeder.contact_lastName,
      ADDRESS: breeder.streetAddress,
      PHONE: breeder.phone,
      OLD_URL: breeder.kennel_domain_url,
      STATE: breeder.state,
      ZIP: breeder.zipCode,
      AKC_URL: breeder.akc_link,
      KENNEL: breeder.kennel_name,
      K_SUBTITLE: breeder.kennel_subtitle,
      SITE_IMG: imageBuilder.image(breeder.newsite_image).width(800).url(),
    },
    // location: {
    //   latitude: breeder.location.lat,
    //   longitude: breeder.location.lng,
    // },
  };
};

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const MailChimpForm = () => {
  const { breeder } = useBreederCtx();
  const { data, error, revalidate } = useSWR(
    `/api/mailer/mailchimp?email=${breeder.email}`,
    fetcher
  );
  // const { data: tags, error: tagsError, revalidate: revalTags } = useSWR(
  //   `/api/mailer/tags?email=${breeder.email}`,
  //   fetcher
  // );
  const handleCall = async () => {
    const response = await axios
      .post(`/api/mailer/mailchimp`, { breeder: convertToMailChimp(breeder) })
      .then((res) => res.data);
    console.log("axios response", response);
  };
  const handleTags = async () => {
    const response = await axios
      .post(`/api/mailer/tags`, {
        breeder: convertToMailChimp(breeder),
      })
      .then((res) => res.data);
    console.log("axios response", response);
  };
  return (
    <div>
      <Row>
        <Col xs={6}>
          <h3>breeder</h3>
          <JTree data={{ breeder }} />
        </Col>
        <Col xs={6}>
          <div>
            mailchimp <b>{data?.member?.email_address}</b>{" "}
            <button onClick={revalidate}>update</button>
          </div>
          <JTree data={data} />
          <JTree data={{ breeder }} />
          <JTree data={{ converted: convertToMailChimp(breeder) }} />
          {/* <JTree data={{ tags, tagsError }} /> */}
        </Col>
      </Row>
      <Button onClick={handleCall}>ADD MAILCHIMP</Button>
      <Button onClick={handleTags}>TAGS</Button>
    </div>
  );
};

export default MailChimpForm;
