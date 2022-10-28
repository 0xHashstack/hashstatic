import {
  AspectRatio,
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function Benefits() {
  return (
    <Box
      // bgColor="background"
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="fit-content"
      paddingY={{ base: "4rem", lg: "8rem" }}
    >
      <VStack
        // paddingX={{ base: "3rem", md: "1.5rem", lg: "16rem" }}
        width={{ base: "90%", xl: "85%", "2xl": "80%" }}
        gap={{ base: "2rem", xl: "2rem", "2xl": "3rem" }}
      >
        <Text
          fontSize={{ base: "4xl", md: "3xl", lg: "5xl" }}
          textColor="white"
          // opacity="60%"
        >
          Benefits
        </Text>
        <Grid
          templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3, 1fr)" }}
          templateRows={{ base: "repeat(6,1fr)", md: "repeat(2,1fr)" }}
          gap={{ base: "3rem", xl: "6rem" }}
          width="100%"
        >
          <GridItem height="100%">
            <VStack
              borderStyle="solid"
              borderWidth="0.15rem"
              borderColor="card-border"
              bgColor="backed_by-black"
              borderRadius="2xl"
              paddingX={{ base: "1rem", lg: "2rem" }}
              justifyContent="space-around"
              paddingY="3rem"
              gap="1rem"
              height="100%"
            >
              <AspectRatio ratio={202 / 167} maxWidth="100%" minWidth="60%">
                <Image
                  src="/illustrations/card1-illustration.svg"
                  alt="Card 1 Illustration"
                />
              </AspectRatio>
              <Text
                textAlign="center"
                textColor="hero-grey"
                lineHeight="20px"
                fontSize="0.9rem"
                opacity="60%"
              >
                Earn interest on long-term assets instead of keeping them
                dormant on centralised exchanges/cold wallets
              </Text>
            </VStack>
          </GridItem>
          <GridItem
            marginTop={{ base: "0rem", md: "3rem", lg: "6rem" }}
            height="100%"
          >
            <VStack
              borderStyle="solid"
              borderWidth="0.15rem"
              borderColor="card-border"
              bgColor="backed_by-black"
              borderRadius="2xl"
              paddingX={{ base: "1rem", lg: "2rem" }}
              justifyContent="space-around"
              paddingY="3rem"
              gap="1rem"
              height="100%"
            >
              <AspectRatio ratio={204 / 243} maxWidth="100%" minWidth="60%">
                <Image
                  src="/illustrations/card2-illustration.svg"
                  alt="Card 1 Illustration"
                />
              </AspectRatio>
              <Text
                textAlign="center"
                textColor="hero-grey"
                lineHeight="20px"
                fontSize="0.9rem"
                opacity="60%"
              >
                Hedge against inflation
              </Text>
            </VStack>
          </GridItem>
          <GridItem height="100%">
            <VStack
              borderStyle="solid"
              borderWidth="0.15rem"
              borderColor="card-border"
              bgColor="backed_by-black"
              borderRadius="2xl"
              paddingX={{ base: "1rem", lg: "2rem" }}
              justifyContent="space-around"
              paddingY="3rem"
              gap="1rem"
              height="100%"
            >
              <AspectRatio ratio={203 / 246} maxWidth="100%" minWidth="60%">
                <Image
                  src="/illustrations/card3-illustration.svg"
                  alt="Card 1 Illustration"
                />
              </AspectRatio>
              <Text
                textAlign="center"
                textColor="hero-grey"
                lineHeight="20px"
                fontSize="0.9rem"
                opacity="60%"
              >
                Do not sell your crypto assets at bottom in a bear market to
                meet your cash crunch.
              </Text>
            </VStack>
          </GridItem>
          <GridItem height="100%">
            <VStack
              borderStyle="solid"
              borderWidth="0.15rem"
              borderColor="card-border"
              bgColor="backed_by-black"
              borderRadius="2xl"
              paddingX={{ base: "1rem", lg: "2rem" }}
              justifyContent="space-around"
              paddingY="3rem"
              gap="1rem"
              height="100%"
            >
              <AspectRatio ratio={204 / 243} maxWidth="100%" minWidth="60%">
                <Image
                  src="/illustrations/card4-illustration.svg"
                  alt="Card 1 Illustration"
                />
              </AspectRatio>
              <Text
                textAlign="center"
                textColor="hero-grey"
                lineHeight="20px"
                fontSize="0.9rem"
                opacity="60%"
              >
                Traders can finance new ICO investments by borrowing Ether,
                using their existing portfolio as collateral
              </Text>
            </VStack>
          </GridItem>
          <GridItem
            height="100%"
            marginTop={{ base: "0rem", md: "3rem", lg: "6rem" }}
          >
            <VStack
              borderStyle="solid"
              borderWidth="0.15rem"
              borderColor="card-border"
              bgColor="backed_by-black"
              borderRadius="2xl"
              paddingX={{ base: "1rem", lg: "2rem" }}
              justifyContent="space-around"
              paddingY="3rem"
              gap="1rem"
              height="100%"
            >
              <AspectRatio ratio={198 / 212} maxWidth="100%" minWidth="60%">
                <Image
                  src="/illustrations/card5-illustration.svg"
                  alt="Card 1 Illustration"
                />
              </AspectRatio>
              <Text
                textAlign="center"
                textColor="hero-grey"
                lineHeight="20px"
                fontSize="0.9rem"
                opacity="60%"
              >
                Liquidation discounts incentivises arbitrageurs upto to step in
                & liquidate borrowers exposure, eliminating protocol&apos;s risk
              </Text>
            </VStack>
          </GridItem>
          <GridItem height="100%">
            <VStack
              borderStyle="solid"
              borderWidth="0.15rem"
              borderColor="card-border"
              bgColor="backed_by-black"
              borderRadius="2xl"
              paddingX={{ base: "1rem", lg: "2rem" }}
              justifyContent="space-around"
              paddingY="3rem"
              gap="1rem"
              height="100%"
            >
              <AspectRatio ratio={176 / 231} maxWidth="100%" minWidth="60%">
                <Image
                  src="/illustrations/card6-illustration.svg"
                  alt="Card 1 Illustration"
                />
              </AspectRatio>
              <Text
                textAlign="center"
                textColor="hero-grey"
                lineHeight="20px"
                fontSize="0.9rem"
                opacity="60%"
              >
                Do not sell your crypto assets at bottom in a bear market to
                meet your cash crunch.
              </Text>
            </VStack>
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
}

export default Benefits;
