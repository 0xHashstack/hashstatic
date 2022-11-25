import {
  Box,
  Text,
  Grid,
  GridItem,
  VStack,
  Divider,
  Image,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { urls } from "../consts/urls";

function Investors() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      // paddingInline={{ base: "2rem", md: "0rem" }}
      paddingTop={{ base: "4rem", xl: "8rem" }}
      paddingBottom="2rem"
    >
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(3,1fr)",
          xl: "repeat(5,1fr)",
        }}
        rowGap={{ base: "0rem", md: "0rem", xl: "5rem" }}
        width={{ base: "90%", md: "90%", xl: "85%", "2xl": "80%" }}
        marginInline="auto"
      >
        <GridItem colSpan={{ base: 1, md: 3 }}>
          <VStack spacing={{ base: "2rem", md: "1rem" }}>
            <Text
              textAlign="center"
              fontSize={{ base: "1rem", md: "4xl", xl: "5xl" }}
              textColor="white"
              fontWeight={500}
            >
              Investors
            </Text>
            <Grid
              templateColumns={{ base: "repeat(2,1fr)", md: "repeat(3,1fr)" }}
              templateRows={{ base: "repeat(3,1fr)", md: "repeat(2,1fr)" }}
              rowGap={{ base: "2rem", md: "4rem", xl: "3rem" }}
              columnGap={{ base: "3rem", md: "3rem", xl: "6rem" }}
              padding="1rem"
              paddingRight={{ base: "1rem", xl: "4rem" }}
              paddingBottom={{ base: "2.5rem", md: "3rem", xl: "1rem" }}
              justifyContent={"space-between"}
              alignItems="center"
              borderRightStyle={{ base: "none", md: "none", xl: "solid" }}
              borderRightWidth="0.0625rem"
              borderColor="#858C94"
            >
              <GridItem display="flex" justifyContent="center">
                <Link href={urls["GHAF Capital"]} target="_blank">
                  <Image
                    src="/company_logos/ghaf.svg"
                    alt="GHAF Logo"
                    opacity="60%"
                    transition="0.2s"
                    _hover={{ opacity: "100%" }}
                  />
                </Link>
              </GridItem>
              <GridItem display="flex" justifyContent="center">
                <Link href={urls["Tokensoft"]} target="_blank">
                  <Image
                    src="/company_logos/tokensoft.svg"
                    alt="GHAF Logo"
                    opacity="60%"
                    transition="0.2s"
                    _hover={{ opacity: "100%" }}
                  />
                </Link>
              </GridItem>
              <GridItem display="flex" justifyContent="center">
                <Link href={urls["Moonrock ventures"]} target="_blank">
                  <Image
                    src="/company_logos/moonrock.svg"
                    alt="GHAF Logo"
                    opacity="60%"
                    transition="0.2s"
                    _hover={{ opacity: "100%" }}
                  />
                </Link>
              </GridItem>
              <GridItem display="flex" justifyContent="center">
                <Link href={urls["Blockwater Technologies"]} target="_blank">
                  <Image
                    src="/company_logos/blockwater.svg"
                    alt="GHAF Logo"
                    opacity="60%"
                    transition="0.2s"
                    _hover={{ opacity: "100%" }}
                  />
                </Link>
              </GridItem>
              <GridItem display="flex" justifyContent="center">
                <Link href={urls["Kane & Rao group"]} target="_blank">
                  <Image
                    src="/company_logos/kane_and_rao.svg"
                    alt="GHAF Logo"
                    opacity="60%"
                    transition="0.2s"
                    _hover={{ opacity: "100%" }}
                  />
                </Link>
              </GridItem>
              <GridItem display="flex" justifyContent="center">
                <Link href={urls["Market Across"]} target="_blank">
                  <Image
                    src="/company_logos/market_across.svg"
                    alt="GHAF Logo"
                    opacity="60%"
                    transition="0.2s"
                    _hover={{ opacity: "100%" }}
                  />
                </Link>
              </GridItem>
            </Grid>
            <Divider
              width={{ base: "80%", md: "100%" }}
              borderBottomStyle={{ base: "solid", md: "solid", xl: "none" }}
              borderBottomWidth="0.0625rem"
              borderColor="#858C94"
            />
          </VStack>
        </GridItem>

        <GridItem
          colSpan={{ base: 1, md: 3, xl: 2 }}
          paddingY={{ base: "2.75rem", xl: "0rem" }}
        >
          <Grid
            templateRows={{
              base: "repeat(4,1fr)",
              md: "repeat(1,1fr)",
              xl: "repeat(6,1fr)",
            }}
            templateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(5,1fr)",
              xl: "repeat(1,1fr)",
            }}
            width="100%"
            justifyContent="space-between"
          >
            <GridItem
              rowSpan={{ base: 3, md: 1, xl: 5 }}
              colSpan={2}
              display="flex"
              justifyContent="center"
              paddingTop={{ md: "2rem", xl: "0rem" }}
              paddingBottom="2rem"
            >
              <VStack
                justifyContent="space-between"
                alignItems="center"
                height="100%"
              >
                <Text
                  fontSize={{ base: "1rem", md: "4xl", xl: "5xl" }}
                  textColor="white"
                  marginBottom={{ base: "2rem", md: "1rem" }}
                  fontWeight={500}
                >
                  Audited by
                </Text>
                <Link
                  href={urls["Certik"]}
                  display="flex"
                  justifyContent="center"
                  target="_blank"
                >
                  <Image
                    src="/company_logos/certik.svg"
                    alt="GHAF Logo"
                    opacity="60%"
                    transition="0.2s"
                    _hover={{ opacity: "100%" }}
                    width={{ base: "80%", md: "100%" }}
                  />
                </Link>
              </VStack>
            </GridItem>
            <GridItem display="flex" alignItems="center">
              <Divider
                borderTopWidth="0.0625rem"
                borderTopStyle={{ base: "solid", md: "none", xl: "solid" }}
                borderLeftWidth="0.0625rem"
                borderLeftStyle={{ base: "none", md: "solid", xl: "none" }}
                orientation={{
                  base: "horizontal",
                  md: "vertical",
                  xl: "horizontal",
                }}
                width={{ base: "80%", md: "auto", xl: "80%" }}
                marginInline={{ base: "auto" }}
                height={{ md: "100%", xl: "0.0625rem" }}
                borderColor="#858C94"
              />
            </GridItem>
            <GridItem
              colSpan={2}
              rowSpan={{ md: 1, xl: 2 }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              paddingBottom={{ md: "2rem", xl: "0rem" }}
              paddingTop="2rem"
            >
              {/* <Link href={urls["Immunef"]} target="_blank"> */}
              <Image
                src="/company_logos/immunef.svg"
                alt="GHAF Logo"
                opacity="10%"
                transition="0.2s"
                // _hover={{ opacity: "30%" }}
                width={{ base: "70%", md: "auto" }}
              />
              {/* </Link> */}
              <Text
                marginTop="0.5rem"
                fontSize={{ md: "sm", lg: "sm" }}
                textColor="white"
              >
                (coming soon)
              </Text>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Investors;
