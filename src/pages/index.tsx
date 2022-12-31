import Header from "../components/Header";
import Footer from "../components/Footer";
import CutomTable from "../components/CutomTable";
import { Box, Heading } from "@chakra-ui/layout";

export default function Home(): JSX.Element {
  return (
    <>
      <Box position={"relative"} minHeight={"100vh"}>
        <Header></Header>
        <Heading size="lg" color={"black"} paddingLeft={"4rem"} flexGrow={15}>
          1on1ログ
        </Heading>
        <CutomTable></CutomTable>
        <Footer></Footer>
      </Box>
    </>
  );
}
