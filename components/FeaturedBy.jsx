import {
  Box,
  Image,
  Link,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";
import { urls } from "../consts/urls";

function FeaturedBy() {
  const speed = useBreakpointValue({
    base: 20,
    md: 40,
  });
  const isGradientVisible = useBreakpointValue({
    base: false,
    md: true,
  });
  return (
    <Box
      // bgColor="background"
      display="flex"
      alignItems="center"
      justifyContent="center"
      paddingTop={{ base: "4rem", md: "4rem", xl: "1rem" }}
      paddingBottom={{ base: "4rem", md: "2rem" }}
    >
      <VStack
        width="100%"
        spacing={{ base: "2rem", md: "2rem", "2xl": "3rem" }}
      >
        {" "}
        <Text
          fontSize={{ base: "1.125rem", md: "4xl", xl: "5xl" }}
          textColor="white"
          fontWeight={500}
        >
          Featured by
        </Text>
        <Box
          bgColor="featured_by-background"
          paddingX={{ base: "1rem", md: "2rem" }}
          paddingY={{ base: "2rem", md: "3rem" }}
          width="100%"
        >
          <Marquee
            style={{
              display: "flex",
              alignItems: "baseline",
            }}
            speed={speed}
            gradient={isGradientVisible}
            gradientColor={[12, 8, 34]}
            pauseOnHover={true}
          >
            <Link href={urls["Bloomberg"]} target="_blank">
              <Image
                marginInline={{ base: "1rem", md: "2rem", xl: "4rem" }}
                src="/company_logos/bloomberg.svg"
                opacity="50%"
                _hover={{ opacity: "100%" }}
                transition="0.2s"
                alt="GHAF Logo"
                maxWidth={{ base: "6rem", md: "100%" }}
              />
            </Link>
            <Link href={urls["Nasdaq"]} target="_blank">
              <Image
                marginInline={{ base: "1rem", md: "2rem", xl: "4rem" }}
                src="/company_logos/nasdaq.svg"
                alt="GHAF Logo"
                opacity="50%"
                _hover={{ opacity: "100%" }}
                transition="0.2s"
                maxWidth={{ base: "6rem", md: "100%" }}
              />
            </Link>
            <Link href={urls["YahooFinance"]} target="_blank">
              <Image
                marginInline={{ base: "1rem", md: "2rem", xl: "4rem" }}
                src="/company_logos/yahoo_finance.svg"
                alt="GHAF Logo"
                opacity="50%"
                _hover={{ opacity: "100%" }}
                transition="0.2s"
                maxWidth={{ base: "6rem", md: "100%" }}
              />
            </Link>
            <Link href={urls["Hackernoon"]} target="_blank">
              <Image
                marginInline={{ base: "1rem", md: "2rem", xl: "4rem" }}
                src="/company_logos/hackernoon.svg"
                alt="GHAF Logo"
                opacity="50%"
                _hover={{ opacity: "100%" }}
                transition="0.2s"
                maxWidth={{ base: "6rem", md: "100%" }}
              />
            </Link>
            <Link href={urls["CoinTelegraph"]} target="_blank">
              <Image
                marginInline={{ base: "1rem", md: "2rem", xl: "4rem" }}
                src="/company_logos/coin_telegraph.svg"
                alt="GHAF Logo"
                opacity="50%"
                _hover={{ opacity: "100%" }}
                transition="0.2s"
                maxWidth={{ base: "6rem", md: "100%" }}
              />
            </Link>
            <Link href={urls["Investing"]} target="_blank">
              <Image
                marginInline={{ base: "1rem", md: "2rem", xl: "4rem" }}
                src="/company_logos/investing.svg"
                alt="GHAF Logo"
                opacity="50%"
                _hover={{ opacity: "100%" }}
                transition="0.2s"
                maxWidth={{ base: "6rem", md: "100%" }}
              />
            </Link>
            <Link href={urls["Inc42"]} target="_blank">
              <Image
                marginInline={{ base: "1rem", md: "2rem", xl: "4rem" }}
                src="/company_logos/inc42.svg"
                alt="GHAF Logo"
                opacity="50%"
                _hover={{ opacity: "100%" }}
                transition="0.2s"
                maxWidth={{ base: "6rem", md: "100%" }}
              />
            </Link>
          </Marquee>
        </Box>
      </VStack>
    </Box>
  );
}

export default FeaturedBy;
