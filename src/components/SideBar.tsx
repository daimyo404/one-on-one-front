import { Box, Heading } from "@chakra-ui/react";
import { useEntireContext } from "context/Context";
import ListIcon from "@mui/icons-material/List";

export default function SideBar(): JSX.Element {
  return (
    <Box width={"100%"} height={"100%"} backgroundColor={"#4682B4"}>
      <Heading>サイドバー</Heading>
      <ListIcon></ListIcon>
    </Box>
  );
}
