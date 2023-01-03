import type { AppProps } from "next/app";
// NOTE: ResetCSS
import "ress";
import { ChakraProvider } from "@chakra-ui/react";
import { EntireContextProvider } from "context/Context";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <ChakraProvider>
        <EntireContextProvider>
          <Component {...pageProps} />
        </EntireContextProvider>
      </ChakraProvider>
    </>
  );
}
