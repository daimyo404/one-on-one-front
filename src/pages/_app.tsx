import type { AppProps } from "next/app";
// NOTE: ResetCSS
import "ress";
import { ChakraProvider } from "@chakra-ui/react";
import { ContextProvider } from "context/Context";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <ContextProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ContextProvider>
    </>
  );
}
