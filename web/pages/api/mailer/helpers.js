import md5 from "md5";
const apiKey = process.env.MAILCHIMP_KEY;
import Mailchimp from "mailchimp-api-v3";

export const mailchimp = new Mailchimp(apiKey);

export const getSubscriberHash = (req) => {
  switch (req.method) {
    case "POST": {
      const email = req.body?.breeder?.email?.toLowerCase();
      return email && md5(email);
    }
    case "GET": {
      const email = req.query?.email?.toLowerCase();
      return email && md5(email);
    }
    default:
      return "";
  }
};

export const getListId = () => "5306c03fed";
export const list_id = "5306c03fed";
