import mailgun from "mailgun-js";

const apiKey = process.env.MAILGUN_API_KEY;
const domain = "mg.ike.works";
const mg = mailgun({ apiKey, domain });

export const sendMail = async (data) => {
  return new Promise((resolve, reject) => {
    mg.messages().send(data, (err, body) => {
      resolve(body);
      if (err) {
        reject(err);
      }
    });
  });
};
