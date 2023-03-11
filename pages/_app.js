import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import Fonts from "../theme/Fonts";
import { theme } from "../theme/theme";
import "../styles/globals.css";
import { useEffect } from "react";

//Import clarity
import { clarity } from "react-microsoft-clarity";

/* Initializing amplitude analytics */

if (typeof window !== "undefined") {
  const amplitude = require("@amplitude/analytics-browser");
  /* Initializing amplitude analytics */
  amplitude.init("0c6ca142b8f758aec64963ebdea8fdb1", undefined, {
    defaultTracking: {
      sessions: true,
      pageViews: true,
      formInteractions: true,
      fileDownloads: true,
    },
  });
}

/* Initializing Clarity */

const clarityID = "ez93xhf6s8";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      clarity.init(clarityID);
    }
  }, []);

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta charset="utf-8" />
        <title>Hashstack</title>
        <meta
          content="Secure under-collateralised loans for personal & trading capital needs."
          name="description"
        />
        <meta content="Hashstack Finance" property="og:title" />
        <meta
          content="Borrow three times your collateral with Hashstack's under-collateralized lending protocol, Open. First of its kind in DeFi"
          property="og:description"
        />
        <meta
          content="https://hashstack.finance/images/meta_tag.jpeg"
          property="og:image"
        />
        <meta content="Hashstack Finance" property="twitter:title" />
        <meta
          content="Borrow three times your collateral with Hashstack's under-collateralized lending protocol, Open. First of its kind in DeFi."
          property="twitter:description"
        />
        <meta
          content="https://pbs.twimg.com/profile_banners/1328692273752592389/1625578013/1500x500"
          property="twitter:image"
        />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
