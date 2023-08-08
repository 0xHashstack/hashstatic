import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
import {DrawerContextProvider} from '../context/DrawerContext'
const theme = extendTheme({
  colors: {
    customBlue: {
      500: "#0969DA",
    },
  },
  fonts: {
    body: "Inter, sans-serif",
  },
});
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
        <Head>
        <meta httpEquiv="Cache-Control" content="no-cache, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <title>Hashstack | Under-collateralised loans | Defi</title>
        <meta
          name="description"
          content="Hashstack provides a permissionless zk-native money market protocol enabling secure under-collateralised loans to the crypto retail. Built on Starknet L2 [announcement], Hashstack leverages the capability of zero-knowledge proofs to provide a cost & capital-efficient lending solution."
        />
        <link rel="shortcut icon" href="/favicon-32x32.png"/>
      </Head>  
      <DrawerContextProvider>

    <Component {...pageProps} />
      </DrawerContextProvider>
    </>
)
}

export default MyApp
