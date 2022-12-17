import { Button, Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <Flex
        backgroundColor={"#02A28F"}
        paddingTop={"1rem"}
        paddingBottom={"1rem"}
      >
        <Heading size="lg" color={"#FFFFFF"} paddingLeft={"4rem"} flexGrow={15}>
          1on1ログ
        </Heading>
        <Button
          color={"#FFFFFF"}
          variant="link"
          flexGrow={1}
          textAlign={"center"}
        >
          <Link href="./about">aaaa</Link>
        </Button>
        <Button
          color={"#FFFFFF"}
          variant="link"
          flexGrow={1}
          textAlign={"center"}
        >
          <Link href="./about">bbbb</Link>
        </Button>
        <Button
          color={"#FFFFFF"}
          variant="link"
          flexGrow={1}
          textAlign={"center"}
        >
          <Link href="./about">cccc</Link>
        </Button>
      </Flex>
    </>
  );
}
