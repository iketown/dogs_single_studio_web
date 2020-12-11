import { NextApiRequest, NextApiResponse } from "next";
import { GoogleSpreadsheet } from "google-spreadsheet";
import moment from "moment";

const doc = new GoogleSpreadsheet(
  "1bnUfcTBxNIuW17YYOTQA0tRkW251hKL7EqdXIILoel4"
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY,
  });
  try {
    const { headers, breeders } = req.body;
    await doc.loadInfo(); // loads properties and worksheets
    const sheet = doc.sheetsByTitle.breeders;
    // await sheet.clear();
    // await sheet.setHeaderRow(headers);
    // await sheet.addRows(breeders);
    const rows = await sheet.getRows();
    const rowsById = rows.reduce((obj, row) => {
      obj[row._id] = row;
      return obj;
    }, []);
    breeders.forEach(async (breeder, index) => {
      const row = rowsById[breeder._id];

      if (moment(breeder._updatedAt).isAfter(row._updatedAt)) {
        Object.entries(breeder).forEach(async ([key, val]) => {
          row[key] = val;
        });
        await row.save();
      }
    });

    return res.json({ ok: true });
  } catch (error) {
    res.json({ error });
  }
};
