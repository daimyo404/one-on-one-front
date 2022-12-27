import { css } from "@emotion/react";
import Header from "./components/Header";
import UserCardList from "./components/UserCardList";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/layout";
import Test1 from "./components/LoginForm";
import Test2 from "./components/Test2";

// type ApiResponse = {
//   name: string;
//   token: string;
// };

// export default function Home(props: ApiResponse) {
export default function Home() {
  return (
    <>
      <Box position={"relative"} minHeight={"100vh"}>
        <Header></Header>
        <UserCardList></UserCardList>
        <Footer></Footer>
      </Box>
    </>
  );
}
