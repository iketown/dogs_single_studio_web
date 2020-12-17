import { NextApiRequest, NextApiResponse } from "next";
import requestIp from "request-ip";
import { initFB } from "../firebase";
import axios from "axios";
import moment from "moment";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = initFB();
    const ip = requestIp.getClientIp(req);
    const { path, breeder_slug } = req.body;
    const time = new Date().valueOf();
    const date = moment().format("ddd MM/DD hh:mm");

    const visitorDoc = db.collection("visitors").doc(ip);

    let visitor = await visitorDoc.get();

    if (!visitor.exists) {
      const IPSTACK_KEY = process.env.IPSTACK_KEY;

      const locData = await axios
        .get(`http://api.ipstack.com/${ip}?access_key=${IPSTACK_KEY}`)
        .then((res) => {
          const {
            country_code,
            ip,
            latitude,
            longitude,
            region_code,
            region_name,
            zip,
          } = res.data;
          return {
            country_code,
            ip,
            latitude,
            longitude,
            region_code,
            region_name,
            zip,
          };
        });
      await visitorDoc.set(
        { locData, last_seen: time, date, breeder_slug },
        { merge: true }
      );
    } else {
      await visitorDoc.set(
        { last_seen: time, date, breeder_slug },
        { merge: true }
      );
    }
    await visitorDoc.collection("pageViews").add({ path, time, date });
    res.json({ ok: true });
  } catch (error) {
    console.log("req error", error);
    res.json({ ok: false });
  }
};
