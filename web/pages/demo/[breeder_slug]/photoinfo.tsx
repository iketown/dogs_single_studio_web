import React, { useEffect, useState } from "react";
import sanityClient from "@util/sanityClient";
import groq from "groq";
import { useRouter } from "next/router";
import JTree from "../../../util/JTree";
import { Table } from "react-bootstrap";
import { imageBuilder } from "../../../util/sanityImage";

const allBreedersQ = groq`
*[_type == 'breeder']
`;

const PhotoAndInfo = () => {
  const { query } = useRouter();
  const [allBreeders, setAllBreeders] = useState<LayoutI[]>();
  useEffect(() => {
    const { breeder_slug } = query;
    sanityClient.fetch(allBreedersQ).then(setAllBreeders);
  }, [query]);

  return (
    <div>
      photo and info
      <Table>
        {allBreeders?.map((listBreeder) => {
          const {
            kennel_domain_url,
            _id,
            email = "nope@ike.works",
            contact_firstName,
            kennel_name,
            slug,
            site_preview_img,
          } = listBreeder || {};
          const sitePreviewUrl = imageBuilder
            .image(site_preview_img)
            .width(800)
            .format("jpg")
            .url();
          return (
            <tr>
              {[
                _id,
                kennel_name,
                contact_firstName,
                slug?.current,
                email,
                kennel_domain_url,
                sitePreviewUrl,
              ].map((value) => {
                const href = `http://localhost:3001/demo/${slug?.current}`;
                return (
                  <td key={value}>
                    {/* <a href={href} target="_blank"> */}
                    {value}
                    {/* </a> */}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </Table>
      {allBreeders && <JTree data={allBreeders} />}
    </div>
  );
};

export default PhotoAndInfo;
