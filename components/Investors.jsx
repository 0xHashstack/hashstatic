import {
  Box,
  Text,
  Grid,
  GridItem,
  VStack,
  Divider,
  Image,
} from "@chakra-ui/react";
import React from "react";

function Investors() {
  return (
    <Box
      // bgColor="background"
      display="flex"
      alignItems="center"
      justifyContent="center"
      paddingY={{ base: "4rem", xl: "8rem" }}
    >
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(3,1fr)",
          xl: "repeat(5,1fr)",
        }}
        rowGap={{ base: "4rem", md: "5rem" }}
        width={{ base: "90%", xl: "85%", "2xl": "80%" }}
      >
        <GridItem colSpan={{ base: 1, md: 3 }}>
          <VStack gap={{ base: "2rem", md: "1rem" }}>
            <Text
              textAlign="center"
              fontSize={{ base: "4xl", md: "3xl", xl: "5xl" }}
              textColor="white"
            >
              Investors
            </Text>
            <Grid
              opacity="60%"
              templateColumns={{ base: "repeat(2,1fr)", md: "repeat(3,1fr)" }}
              templateRows={{ base: "repeat(3,1fr)", md: "repeat(2,1fr)" }}
              rowGap={{ base: "2rem", md: "1.5rem", xl: "3rem" }}
              columnGap={{ base: "3rem", md: "3rem", xl: "6rem" }}
              padding="1rem"
              justifyContent={"space-between"}
              alignItems="center"
              borderRightStyle={{ base: "none", md: "none", xl: "solid" }}
              borderRightWidth="0.1rem"
              borderBottomStyle={{ base: "solid", md: "solid", xl: "none" }}
              borderBottomWidth="0.1rem"
              borderColor="whiteAlpha.500"
            >
              <GridItem display="flex" justifyContent="center">
                <Image src="/company_logos/ghaf.svg" alt="GHAF Logo" />
              </GridItem>
              <GridItem display="flex" justifyContent="center">
                <Image src="/company_logos/tokensoft.svg" alt="GHAF Logo" />
              </GridItem>
              <GridItem display="flex" justifyContent="center">
                <Image src="/company_logos/moonrock.svg" alt="GHAF Logo" />
              </GridItem>
              <GridItem display="flex" justifyContent="center">
                <Image src="/company_logos/blockwater.svg" alt="GHAF Logo" />
              </GridItem>
              <GridItem display="flex" justifyContent="center">
                <Image src="/company_logos/market_across.svg" alt="GHAF Logo" />
              </GridItem>
              <GridItem display="flex" justifyContent="center">
                <Image src="/company_logos/kane_and_rao.svg" alt="GHAF Logo" />
              </GridItem>
            </Grid>
          </VStack>
        </GridItem>

        <GridItem colSpan={{ base: 1, md: 3, xl: 2 }}>
          <VStack>
            <Grid
              templateRows={{
                base: "repeat(4,1fr)",
                md: "repeat(1,1fr)",
                xl: "repeat(8,1fr)",
              }}
              templateColumns={{
                base: "repeat(1,1fr)",
                md: "repeat(5,1fr)",
                xl: "repeat(1,1fr)",
              }}
              width="100%"
              paddingLeft="1rem"
              justifyContent="space-between"
            >
              <GridItem
                rowSpan={{ base: 3, md: 1, xl: 5 }}
                colSpan={2}
                display="flex"
                justifyContent="center"
              >
                <VStack
                  justifyContent="space-between"
                  paddingBottom="2rem"
                  alignItems="center"
                  height="100%"
                >
                  <Text
                    fontSize={{ base: "4xl", md: "3xl", xl: "5xl" }}
                    textColor="white"
                    marginBottom={{ base: "2rem", md: "1rem" }}
                  >
                    Audited By
                  </Text>
                  <Image
                    src="/company_logos/certik.svg"
                    alt="GHAF Logo"
                    opacity="60%"
                  />
                </VStack>
              </GridItem>
              <GridItem>
                <Divider
                  borderBottomColor="whiteAlpha.500"
                  borderBottomWidth="0.2rem"
                  borderBottomStyle={{ base: "solid", md: "none", xl: "solid" }}
                  borderLeftColor="whiteAlpha.500"
                  borderLeftWidth="0.2rem"
                  borderLeftStyle={{ base: "none", md: "solid", xl: "none" }}
                  orientation={{
                    base: "horizontal",
                    md: "vertical",
                    xl: "horizontal",
                  }}
                  //   orientation="vertical"
                />
              </GridItem>
              <GridItem
                colSpan={2}
                rowSpan={{ md: 1, xl: 2 }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Image src="/company_logos/immunef.svg" alt="GHAF Logo" />
                <Text
                  marginTop="0.5rem"
                  fontSize={{ md: "sm", lg: "sm" }}
                  textColor="white"
                >
                  (coming soon)
                </Text>
              </GridItem>
            </Grid>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Investors;
