import { getSubscriberHash, getListId, mailchimp } from "./helpers";

export default async (req, res) => {
  const list_id = getListId();
  console.log({ list_id });
  const subscriber_hash = getSubscriberHash(req);
  switch (req.method) {
    case "POST": {
      const { breeder } = req.body;
      const { email, merge_fields } = breeder;
      try {
        const member = await mailchimp.put(
          `/lists/${list_id}/members/${subscriber_hash}
        `,
          { email_address: email, merge_fields, status: "subscribed" }
        );
        res.json({ member });
        return;
      } catch (error) {
        const member = await mailchimp.post(`/lists/${list_id}/members`, {
          email_address: email,
          status: "subscribed",
          merge_fields,
        });
        res.json({ member });
        return;
      }
    }
    case "GET": {
      try {
        const member = await mailchimp.get(
          `/lists/${list_id}/members/${subscriber_hash}`
        );
        res.json({ member });
        return;
      } catch (error) {
        res.json({ nope: "subscriber not found" });
        return;
      }
    }
    default:
      res.end();
  }
};
