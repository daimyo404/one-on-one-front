import { Heading } from "@chakra-ui/layout";
import { Box, CardBody, CardFooter, Image, Stack } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import CustomForm from "./elements/CustomForm";
import CustomButton from "./elements/CustomButton";
import router from "next/router";
import { useEntireContext } from "context/Context";

export default function RegisterTemplate(): JSX.Element {
  const { email, setEmail } = useEntireContext();
  const { password, setPassword } = useEntireContext();

  const onChangeMailForm = (value) => {
    setEmail(value);
    console.log("hoge");
  };

  const onChangePasswordForm = (value) => {
    setPassword(value);
  };

  const onClickHandler = async (): Promise<void> => {
    const options: AxiosRequestConfig = {
      url: "api/register",
      method: "POST",
      data: {
        email,
        password,
      },
    };

    await axios(options)
      .then(() => {
        return router.push("/");
      })
      .catch((e: AxiosError) => {
        throw Error(e.message);
      });
  };

  return (
    <Box
      position={"relative"}
      width={"100vw"}
      height={"100vh"}
      backgroundColor={"#E2EDF6"}
    >
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
        height={"24rem"}
        width={"52rem"}
        backgroundColor={"#FFFFFF"}
      >
        <Stack>
          <CardBody>
            <Heading size="md">1on1支援サービス（仮）</Heading>
            <Box height={"0.5rem"} />
            <Heading size="md">ユーザー登録ページ</Heading>
            <Box height={"2rem"} />
            <CustomForm
              inputWidth={"24rem"}
              isRequired={true}
              labelName={"メールアドレス"}
              placeholder={"入力してください"}
              onChange={onChangeMailForm}
            ></CustomForm>
            <Box height={"1rem"} />
            <CustomForm
              inputWidth={"24rem"}
              isRequired={true}
              labelName={"パスワード"}
              placeholder={"入力してください"}
              onChange={onChangePasswordForm}
            ></CustomForm>
          </CardBody>

          <CardFooter>
            <CustomButton onClickHandler={onClickHandler}></CustomButton>
          </CardFooter>
        </Stack>
        <Image
          objectFit="cover"
          maxW={{ base: "100%" }}
          src="image/deskwork_check_man_simple.png"
          alt="Deskwork Check Man"
          padding={"4rem 4rem 4rem 4rem"}
        />
      </Card>
    </Box>
  );
}
