import { Heading } from "@chakra-ui/layout";

export default function Footer(): JSX.Element {
  return (
    <Heading
      height={"3rem"}
      width={"100vw"}
      boxSizing={"border-box"}
      backgroundColor={"#02A28F"}
      position={"absolute"}
      bottom={0}
      size="xs"
      color={"#FFFFFF"}
      textAlign={"center"}
      paddingTop={"1rem"}
    >
      Copyright © 2022 daimyo404 All Rights Reserved.
    </Heading>
  );
}
