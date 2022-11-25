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

const cardTextProps = {
  textAlign: "center",
  textColor: { base: "#D4D5F1", md: "#ADB5BD", xl: "#D4D5F1" },
  fontSize: { base: "0.9rem", md: "0.75rem", lg: "0.9rem", xl: "1rem" },
  letterSpacing: { md: "0.015rem" },
  lineHeight: { md: "1.25rem", xl: "1.5rem" },
  opacity: "100%",
};

const cardProps = {
  borderStyle: "solid",
  borderWidth: "0.07rem",
  borderColor: "card-border",
  bgColor: "backed_by-black",
  borderRadius: "0.5rem",
  paddingX: { base: "1rem", xl: "2rem" },
  justifyContent: "space-around",
  paddingY: { base: "3rem", md: "1rem", xl: "3rem" },
  spacing: { base: "1rem", md: "0rem", xl: "4rem" },
  height: "100%",
};

function Benefits() {
  return (
    <Box
      // bgColor="background"
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="fit-content"
      paddingTop={{ base: "4rem", md: "9rem", lg: "10rem" }}
      paddingBottom={{ md: "4rem", lg: "10rem" }}
    >
      <VStack
        // paddingX={{ base: "3rem", md: "1.5rem", lg: "16rem" }}
        width={{ base: "70%", md: "90%", xl: "85%", "2xl": "80%" }}
        spacing={{ base: "2rem", xl: "2rem", "2xl": "3rem" }}
      >
        <Text
          fontSize={{ base: "1.125rem", md: "4xl", xl: "5xl" }}
          textColor="white"
          // opacity="100%"
          fontWeight={500}
        >
          Benefits
        </Text>
        <Grid
          templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3, 1fr)" }}
          templateRows={{ base: "repeat(6,1fr)", md: "repeat(2,1fr)" }}
          columnGap={{
            base: "2rem",
            md: "1.5rem",
            lg: "3rem",
            xl: "5.5rem",
            "2xl": "6rem",
          }}
          rowGap={{ base: "3rem", md: "2.5rem", lg: "4rem", xl: "5.5rem" }}
          width="100%"
        >
          <GridItem height="100%">
            <VStack {...cardProps}>
              <AspectRatio ratio={202 / 167} maxWidth="100%" minWidth="60%">
                <Image
                  src="/illustrations/card1-illustration.svg"
                  alt="Card 1 Illustration"
                />
              </AspectRatio>
              <Text {...cardTextProps}>
                Earn interest on long-term assets instead of keeping them
                dormant on centralised exchanges or cold wallets.
              </Text>
            </VStack>
          </GridItem>
          <GridItem
            marginTop={{ base: "0rem", md: "2.5rem", lg: "4rem", xl: "4rem" }}
            height="100%"
          >
            <VStack {...cardProps}>
              <AspectRatio ratio={204 / 243} maxWidth="100%" minWidth="60%">
                <Image
                  src="/illustrations/card2-illustration.svg"
                  alt="Card 1 Illustration"
                />
              </AspectRatio>
              <Text {...cardTextProps}>
                Hedge your funds against inflation.
              </Text>
            </VStack>
          </GridItem>
          <GridItem height="100%">
            <VStack {...cardProps}>
              <AspectRatio ratio={203 / 246} maxWidth="100%" minWidth="60%">
                <Image
                  src="/illustrations/card3-illustration.svg"
                  alt="Card 1 Illustration"
                />
              </AspectRatio>
              <Text {...cardTextProps}>
                Do not sell your crypto assets at bottom in a bear market to
                meet your cash crunch.
              </Text>
            </VStack>
          </GridItem>
          <GridItem height="100%">
            <VStack {...cardProps}>
              <AspectRatio ratio={204 / 243} maxWidth="100%" minWidth="60%">
                <Image
                  src="/illustrations/card4-illustration.svg"
                  alt="Card 1 Illustration"
                />
              </AspectRatio>
              <Text {...cardTextProps}>
                Finance new ICO investments by borrowing using your existing
                portfolio as collateral.
              </Text>
            </VStack>
          </GridItem>
          <GridItem
            height="100%"
            marginTop={{ base: "0rem", md: "2.5rem", lg: "4rem", xl: "4rem" }}
          >
            <VStack {...cardProps}>
              <AspectRatio ratio={198 / 212} maxWidth="100%" minWidth="60%">
                <Image
                  src="/illustrations/card5-illustration.svg"
                  alt="Card 1 Illustration"
                />
              </AspectRatio>
              <Text {...cardTextProps}>
                Incentivised arbitrages through liquidation discounts offered by
                the protocol to liquidate borrower positions.
              </Text>
            </VStack>
          </GridItem>
          <GridItem height="100%">
            <VStack {...cardProps}>
              <AspectRatio ratio={176 / 231} maxWidth="100%" minWidth="60%">
                <Image
                  src="/illustrations/card6-illustration.svg"
                  alt="Card 1 Illustration"
                />
              </AspectRatio>
              <Text {...cardTextProps}>
                Use Hashstack’s 3x loan on collateral to continue growing your
                portfolio.
              </Text>
            </VStack>
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
}

export default Benefits;
