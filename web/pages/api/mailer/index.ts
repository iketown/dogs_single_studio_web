import { NextApiRequest, NextApiResponse } from "next";
import { sendMail } from "./sendMail";
import { createHtmlEmail, createTextEmail } from "./createEmail";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  // await connectMongo();
  const values = req.body.values;
  const { contact } = values;

  try {
    const data = {
      from: "Website Submission<noreply@ike.works>", // this has to come from the correct domain or it becomes spam
      to: "be@ike.works",
      subject: `form submission from ${contact.email} `,
      text: createTextEmail(values),
      html: createHtmlEmail(values),
    };
    await sendMail(data);
  } catch (error) {
    console.log("error!", error);
  }

  res.json({ body: req.body });
};
