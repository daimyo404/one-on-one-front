import { Button, Textarea } from "@chakra-ui/react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useState } from "react";

//TODO: あとで直す
type Email = string;
type Password = string;

export default function Login() {
  const [email, setEmail] = useState<Email>("");
  const [password, setPassword] = useState<Password>("");

  const onClick = async (email: Email, password: Password) => {
    const options: AxiosRequestConfig = {
      url: "api/register",
      method: "GET",
      //   headers: { "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
      params: {
        email: email,
        password: password,
      },
    };

    console.log("👺👺");

    const result = await axios(options)
      //   .then((res: AxiosResponse<ApiResponse>) => {
      .then((res) => {
        return res.data;
      })
      .catch((e: AxiosError) => {
        console.log(e.message);
        console.log(e);
      });

    console.log(result);
    console.log(email);
    console.log(password);
  };
  return (
    <>
      <Textarea
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <Textarea
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <Button
        color={"black"}
        onClick={() => {
          onClick(email, password);
        }}
      >
        登録
      </Button>
    </>
  );
}
