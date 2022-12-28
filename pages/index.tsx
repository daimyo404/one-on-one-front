import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/layout";

// type ApiResponse = {
//   name: string;
//   token: string;
// };

// export default function Home(props: ApiResponse) {
export default function Home(): JSX.Element {
  return (
    <>
      <Box position={"relative"} minHeight={"100vh"}>
        <Header></Header>
        <Footer></Footer>
      </Box>
    </>
  );
}
