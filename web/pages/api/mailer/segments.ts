import { getSubscriberHash, getListId, mailchimp } from "./helpers";
import { NextApiRequest, NextApiResponse } from "next";

const list_id = getListId();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const subscriber_hash = getSubscriberHash(req);
  switch (req.method) {
    case "POST": {
      const { action, obj } = req.body;
      switch (action) {
        case "CREATE_TAG": {
          // const { name, static_segment } = obj;
          console.log("creating tag");
          const response = await mailchimp.post(
            `/lists/${list_id}/segments`,
            obj
          );
          return res.json(response);
        }
      }
    }
    case "GET": {
      // handle getting a specific segment here
      const { mailchimp_id } = req.query;
      console.log("getting", mailchimp_id);

      try {
        const segments = await mailchimp.get(
          `/lists/${list_id}/segments/${mailchimp_id}`
        );
        return res.json(segments);
      } catch (error) {
        return mailchimp
          .get(`/lists/${list_id}/segments`)
          .then((response) => res.json(response));
      }
    }
  }
  res.end();
};
