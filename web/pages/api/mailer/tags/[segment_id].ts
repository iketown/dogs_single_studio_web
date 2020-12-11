import { NextApiRequest, NextApiResponse } from "next";
import { mailchimp, list_id } from "../helpers";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const segment_id = req.query.segment_id;
  // res.json({ ok: segment_id });
  mailchimp
    .get(`/lists/${list_id}/segments/${segment_id}`)
    .then((response) => res.json(response));
};
