import groq from "groq";
import { getFontDefinitionFromManifest } from "next/dist/next-server/server/font-utils";
import React, { useEffect, useState } from "react";
import axios from "axios";
import sanityClient from "../../util/sanityClient";
import { imageBuilder } from "../../util/sanityImage";
import { Button } from "react-bootstrap";
import JTree from "../../util/JTree";
import { CSVLink } from "react-csv";

const query = groq`
 *[_type == 'breeder']{
   contact_firstName,
   _id,
   _updatedAt,
   email,
   kennel_name,
   kennel_domain_url,
   domain_url_fake, 
   akc_link,
   newsite_image,
   "site_id": sites[0]-> template_id,
   "dogA_name": *[_type=="dog" && references(^._id)][0].name,
   "dogA_slug": *[_type=="dog" && references(^._id)][0].slug.current,
   "dogB_name": *[_type=="dog" && references(^._id)][1].name,
   "dogB_slug": *[_type=="dog" && references(^._id)][1].slug.current,
 }
`;

const ExportCsvPage = () => {
  const [breeders, setBreeders] = useState();
  const [headers, setHeaders] = useState<string[]>([]);
  useEffect(() => {
    const getData = async () => {
      const _data = await sanityClient.fetch(query);
      const dataWithImg = _data
        .filter((b) => !b._id.includes("drafts"))
        .map((b) => {
          b.newsiteUrl =
            b.newsite_image &&
            imageBuilder.image(b.newsite_image).width(800).format("jpg").url();
          delete b.newsite_image;
          return b;
        });
      const _headers = Object.keys(
        dataWithImg.reduce((obj, b) => {
          Object.keys(b).forEach((headerName) => {
            if (!obj[headerName]) obj[headerName] = true;
          });
          return obj;
        }, {})
      );
      setBreeders(dataWithImg);
      setHeaders(_headers);
    };
    getData();
  }, []);

  const handleGoogleSheets = async () => {
    const response = await axios
      .post(`/api/google/sheets`, { headers, breeders })
      .then((response) => response.data);
    console.log("goog response", response);
  };
  return (
    <div>
      {breeders && (
        <Button className="my-4" onClick={handleGoogleSheets}>
          UPDATE GOOGLE SHEET
        </Button>
      )}
      {/* {breeders && (
        <CSVLink data={breeders}>
          <div className="my-4">DOWNLOAD CSV</div>
        </CSVLink>
      )} */}
      {breeders && <JTree data={breeders} />}
    </div>
  );
};

export default ExportCsvPage;
