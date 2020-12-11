import { NextApiRequest, NextApiResponse } from "next";
import { mailchimp } from "./helpers";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET": {
      const { path } = req.query;
      return mailchimp
        .request({
          method: "GET",
          path,
        })
        .then(res.json);
    }
    case "POST": {
      const { mcRequest } = req.body;
      console.log("mcRequest", mcRequest);
      return mailchimp.request(mcRequest).then(res.json).catch(res.json);
    }
  }
  res.json({ nope: "mm" });
};
