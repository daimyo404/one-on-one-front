import type { NextApiRequest, NextApiResponse } from "next";
import * as mysql from "mysql";
import { Connection } from "mysql";

type Data = {
  readonly name: string;
  readonly token: string;
};

// TODO: POSTで受けるようにする
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
  /* eslint @typescript-eslint/explicit-function-return-type: 0 */
) {
  const config = {
    host: process.env.HOST_NAME,
    user: process.env.DATABASE_USER_NAME,
    password: process.env.DATABASE_USER_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: 3306,
    //   ssl: {
    //     ca: fs.readFileSync('./BaltimoreCyberTrustRoot.crt.pem'),
    //   },
  };
  const conn: Connection = mysql.createConnection(config);

  const fetchUsers = () => {
    return new Promise((resolve, reject) => {
      conn.connect((err) => {
        if (err) reject(err);
        conn.query("SELECT * FROM users", (err, results) => {
          if (err) reject(err);
          resolve(results);
        });
        conn.end((err) => {
          if (err) reject(err);
        });
      });
    });
  };

  //NOTE: [RowDataPacket {key: value}]の形式で返却
  //TODO: any修正
  const usersAddRowDataPacket: any = await fetchUsers().catch((err) => {
    throw err;
  });

  console.log(usersAddRowDataPacket);

  const users = usersAddRowDataPacket.map((data) => {
    //NOTE: RowDataPacket {key: value}から
    //　　　 {key: value}を取得するため、stringify→parseを行う
    const convertedJson = JSON.stringify(data);
    const convertedObject = JSON.parse(convertedJson);
    return convertedObject;
  });

  console.log(users);

  return res.status(200).json(users);
}
