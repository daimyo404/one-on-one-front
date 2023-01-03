import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "components/SideBar";
import CutomTable from "../components/CutomTable";
import { Box, Heading } from "@chakra-ui/layout";
import { EntireContextProvider } from "context/Context";

export default function Home(): JSX.Element {
  return (
    // NOTE: Grid Layoutは以下のイメージで配置
    //       <SideBar> <Header>
    //       <SideBar> <MainContents>
    //       <SideBar> <Footer>
    <>
      <EntireContextProvider>
        <Box
          display={"grid"}
          gridTemplateRows={"1fr 8fr 1fr"}
          gridTemplateColumns={"1fr 5fr"}
          minHeight={"100vh"}
        >
          <Box gridRow={"1 / 4"} gridColumn={"1 / 2"}>
            <SideBar></SideBar>
          </Box>
          <Box gridRow={"1 / 2"} gridColumn={"2 / 3"}>
            <Header></Header>
          </Box>
          <Box gridRow={"2 / 3"} gridColumn={"2 / 3"}>
            <Heading
              size="lg"
              color={"black"}
              paddingLeft={"4rem"}
              flexGrow={15}
            >
              1on1ログ
            </Heading>
            <CutomTable></CutomTable>
          </Box>
          <Box gridRow={"3 / 4"} gridColumn={"2 / 3"}>
            <Footer></Footer>
          </Box>
        </Box>
      </EntireContextProvider>
    </>
  );
}
