import { Button, Textarea } from "@chakra-ui/react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useState } from "react";

export default function Login(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onClick = async (email: string, password: string): Promise<void> => {
    const options: AxiosRequestConfig = {
      url: "api/register",
      method: "GET",
      params: {
        email,
        password,
      },
    };

    await axios(options)
      .then()
      .catch((e: AxiosError) => {
        throw Error(e.message);
      });
  };
  return (
    <>
      <Textarea
        onChange={(e) => setEmail(e.target.value)}
        placeholder="メールアドレス"
      />
      <Textarea
        onChange={(e) => setPassword(e.target.value)}
        placeholder="パスワード"
      />
      <Button
        color={"black"}
        onClick={(): void => {
          onClick(email, password)
            .then()
            .catch(() => {
              throw Error();
            });
        }}
      >
        登録
      </Button>
    </>
  );
}
