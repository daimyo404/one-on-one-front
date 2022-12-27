import type { NextApiRequest, NextApiResponse } from "next";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

type Data = {
  name: string;
};

// export default function hoge(req: NextApiRequest, res: NextApiResponse<Data>) {
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("👺");
  const { email, password } = req.query;

  const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTU_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
  };

  console.log(firebaseConfig);

  // res.status(200).json({ name: "John Doe" });
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  const auth = getAuth();

  const result = await createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });

  console.log("result");
  console.log(result);
  res.status(200).json({ name: "John Doe" });
}
