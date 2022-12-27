// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("process.env.PROJECT_ID");
  console.log(process.env.API_KEY);
  console.log(process.env.AUTU_DOMAIN);
  console.log(process.env.PROJECT_ID);
  res.status(200).json({ name: "John Doe" });
}
