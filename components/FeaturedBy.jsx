import { Box, Image, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";

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
      paddingY={{ base: "4rem", md: "2rem" }}
    >
      <VStack width="100%" gap={{ base: "2rem", md: "2rem", "2xl": "3rem" }}>
        {" "}
        <Text
          fontSize={{ base: "4xl", md: "3xl", lg: "5xl" }}
          textColor="white"
          // opacity="60%"
        >
          Featured by
        </Text>
        <Box
          bgColor="featured_by-background"
          paddingX={{ base: "1rem", md: "2rem" }}
          paddingY={{ base: "2rem", md: "2rem" }}
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
          >
            <Image
              marginInline={{ base: "1rem", md: "2rem", xl: "4rem" }}
              src="/company_logos/bloomberg.svg"
              alt="GHAF Logo"
              maxWidth={{ base: "6rem", md: "100%" }}
            />
            <Image
              marginInline={{ base: "1rem", md: "2rem", xl: "4rem" }}
              src="/company_logos/nasdaq.svg"
              alt="GHAF Logo"
              maxWidth={{ base: "6rem", md: "100%" }}
            />
            <Image
              marginInline={{ base: "1rem", md: "2rem", xl: "4rem" }}
              src="/company_logos/yahoo_finance.svg"
              alt="GHAF Logo"
              maxWidth={{ base: "6rem", md: "100%" }}
            />
            <Image
              marginInline={{ base: "1rem", md: "2rem", xl: "4rem" }}
              src="/company_logos/coin_telegraph.svg"
              alt="GHAF Logo"
              maxWidth={{ base: "6rem", md: "100%" }}
            />
            <Image
              marginInline={{ base: "1rem", md: "2rem", xl: "4rem" }}
              src="/company_logos/coin_market_cap.svg"
              alt="GHAF Logo"
              maxWidth={{ base: "6rem", md: "100%" }}
            />
            <Image
              marginInline={{ base: "1rem", md: "2rem", xl: "4rem" }}
              src="/company_logos/investing.svg"
              alt="GHAF Logo"
              maxWidth={{ base: "6rem", md: "100%" }}
            />
            <Image
              marginInline={{ base: "1rem", md: "2rem", xl: "4rem" }}
              src="/company_logos/inc42.svg"
              alt="GHAF Logo"
              maxWidth={{ base: "6rem", md: "100%" }}
            />
          </Marquee>
        </Box>
      </VStack>
    </Box>
  );
}

export default FeaturedBy;
