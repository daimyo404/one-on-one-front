import { Box, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { EntireContext } from "context/Context";

export default function SideBar(): JSX.Element {
  const { hoge, setHoge } = useContext(EntireContext);
  console.log(hoge);
  console.log("hoge");
  return (
    <Box width={"100%"} height={"100%"} backgroundColor={"#4682B4"}>
      <Heading>サイドバー{hoge}</Heading>
    </Box>
  );
}
