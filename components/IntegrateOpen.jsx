import {
  AspectRatio,
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { urls } from "../consts/urls";

function IntegrateOpen() {
  return (
    <Box
      paddingTop={{ base: "3rem", md: "5rem", xl: "12rem", "2xl": "12rem" }}
      paddingBottom={{
        base: "4.7rem",
        md: "8rem",
        xl: "12rem",
        "2xl": "15rem",
      }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      <VStack
        alignItems="center"
        justifyContent="center"
        spacing={{ base: "2rem", xl: "2rem", "2xl": "3rem" }}
        width="100%"
      >
        <Text
          fontSize={{ base: "1.125rem", md: "4xl", xl: "5xl" }}
          textColor="white"
          fontWeight={500}
        >
          Integrate Open
        </Text>
        <Box
          bgImage="/illustrations/integrate_open_background.png"
          bgRepeat="no-repeat"
          backgroundSize="100% 100%"
          width={{
            base: "90%",
            md: "90%",
            ipadLandscape: "85%",
            xl: "85%",
            "2xl": "80%",
          }}
          borderRadius={{ base: "0.5rem", md: "0.5rem" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding={{ base: "1rem", md: "2rem", lg: "2.5rem", xl: "4rem" }}
        >
          <VStack width="100%" spacing="2rem">
            <Grid
              gap="2rem"
              width="100%"
              padding={{ base: "2rem", xl: "3rem", "2xl": "6rem" }}
              bgColor="background"
              templateColumns={{
                base: "repeat(6,1fr)",
                md: "repeat(10,1fr)",
                xl: "repeat(6,1fr)",
              }}
              borderRadius="0.5rem"
            >
              <GridItem
                colSpan={{ base: 6, md: 6, xl: 4 }}
                display="flex"
                alignItems="center"
                // height="100%"
              >
                <AspectRatio ratio={776 / 377} width="100%">
                  <Image
                    src="/illustrations/integrate_open_sushicode.png" //image needs touchup, prolly get a svg or higher res image
                    alt="Sushicode snippet"
                  />
                </AspectRatio>
              </GridItem>
              <GridItem
                display="flex"
                flexDirection="column"
                justifyContent="space-evenly"
                // height="100%"
                colSpan={{ base: 6, md: 4, xl: 2 }}
              >
                <VStack
                  spacing={{
                    base: "2.5rem",
                    md: "1.5rem",
                    ipadLandscape: "1rem",
                    xl: "2rem",
                  }}
                  justifyContent="space-around"
                  height="100%"
                >
                  {" "}
                  <HStack width="100%">
                    <Text
                      display="inline-flex"
                      alignItems="end"
                      fontWeight="bold"
                      as="span"
                      fontSize={{
                        base: "3rem",
                        md: "2rem",
                        xl: "2.5rem",
                        "2xl": "3rem",
                      }}
                      lineHeight="1rem"
                      alignSelf="flex-start"
                      textColor="#DEE2E6"
                      opacity="30%"
                    >
                      1
                    </Text>{" "}
                    <Text
                      as="span"
                      fontSize={{ base: "0.75rem", md: "0.7rem", xl: "0.9rem" }}
                      color="white"
                    >
                      Clone this repo - https://github.com/
                      0xHashstack/Layer3Integration-contracts
                    </Text>
                  </HStack>
                  <HStack width="100%">
                    <Text
                      display="inline-flex"
                      alignItems="end"
                      fontWeight="bold"
                      as="span"
                      fontSize={{
                        base: "3rem",
                        md: "2rem",
                        xl: "2.5rem",
                        "2xl": "3rem",
                      }}
                      lineHeight="1rem"
                      alignSelf="flex-start"
                      textColor="#DEE2E6"
                      opacity="30%"
                    >
                      2
                    </Text>{" "}
                    <Text
                      as="span"
                      fontSize={{ base: "0.75rem", md: "0.7rem", xl: "0.9rem" }}
                      color="white"
                    >
                      Create a branch `dapp_integration`. Ex:
                      `sushiswap_integration`
                    </Text>
                  </HStack>
                  <HStack width="100%">
                    <Text
                      display="inline-flex"
                      alignItems="end"
                      fontWeight="bold"
                      as="span"
                      fontSize={{
                        base: "3rem",
                        md: "2rem",
                        xl: "2.5rem",
                        "2xl": "3rem",
                      }}
                      lineHeight="1rem"
                      alignSelf="flex-start"
                      textColor="#DEE2E6"
                      opacity="30%"
                    >
                      3
                    </Text>{" "}
                    <Text
                      as="span"
                      fontSize={{ base: "0.75rem", md: "0.7rem", xl: "0.9rem" }}
                      color="white"
                    >
                      {" "}
                      Push code with below specification [attached function
                      signatures required in below screenshot]
                    </Text>
                  </HStack>
                  <HStack width="100%">
                    <Text
                      display="inline-flex"
                      alignItems="end"
                      fontWeight="bold"
                      as="span"
                      fontSize={{
                        base: "3rem",
                        md: "2rem",
                        xl: "2.5rem",
                        "2xl": "3rem",
                      }}
                      lineHeight="1rem"
                      alignSelf="flex-start"
                      textColor="#DEE2E6"
                      opacity="30%"
                    >
                      4
                    </Text>{" "}
                    <Text
                      as="span"
                      fontSize={{ base: "0.75rem", md: "0.7rem", xl: "0.9rem" }}
                      color="white"
                    >
                      Create a pull request and tag @hashstack-dev-team for a
                      review
                    </Text>
                  </HStack>
                </VStack>
              </GridItem>
            </Grid>
            <Grid
              templateColumns="repeat(3,1fr)"
              gap={{ base: "1rem", md: "2rem" }}
              width="100%"
              backgroundColor="transparent"
            >
              <GridItem colSpan={{ base: 3, md: 1 }}>
                <Link href={urls["article1"]} target="_blank">
                  <HStack
                    backgroundColor="background"
                    paddingX="0.6rem"
                    paddingY="0.5rem"
                    spacing={{
                      base: "1rem",
                      sm: "1.5rem",
                      md: "1rem",
                      xl: "1.5rem",
                    }}
                    height="100%"
                    borderRadius="0.5rem"
                    sx={{
                      boxShadow:
                        "0rem 0.25rem 0.25rem 0.0625rem rgba(0, 0, 0, 0.4)",
                    }}
                    _hover={{
                      boxShadow:
                        "0.3rem 0.3rem 0.5rem 0.1rem rgba(0, 0, 0, 0.5)",
                    }}
                    transition="0.2s"
                  >
                    {" "}
                    <AspectRatio
                      ratio={128 / 91}
                      minWidth={{
                        base: "35%",
                        md: "40%",
                        lg: "40%",
                        xl: "40%",
                      }}
                    >
                      <Image
                        src="/illustrations/integrate_open_article_1.png" //image needs touchup, prolly get a svg or higher res image
                        alt="Sushicode snippet"
                        borderRadius="0.5rem"
                      />
                    </AspectRatio>
                    <Text
                      fontSize={{
                        base: "0.8rem",
                        md: "0.6rem",
                        lg: "0.8rem",
                        xl: "1rem",
                      }}
                      color="white"
                      width="100%"
                    >
                      Deconstructing Hashstack’s Dynamic Interest algorithm
                      (DIAL)
                    </Text>
                  </HStack>
                </Link>
              </GridItem>
              <GridItem colSpan={{ base: 3, md: 1 }}>
                <Link href={urls["article2"]} target="_blank">
                  <HStack
                    backgroundColor="background"
                    paddingX="0.6rem"
                    paddingY="0.5rem"
                    spacing={{
                      base: "1rem",
                      sm: "1.5rem",
                      md: "1rem",
                      xl: "1.5rem",
                    }}
                    height="100%"
                    borderRadius="0.5rem"
                    sx={{
                      boxShadow:
                        "0rem 0.25rem 0.25rem 0.0625rem rgba(0, 0, 0, 0.4)",
                    }}
                    _hover={{
                      boxShadow:
                        "0.3rem 0.3rem 0.5rem 0.1rem rgba(0, 0, 0, 0.5)",
                    }}
                    transition="0.2s"
                  >
                    {" "}
                    <AspectRatio
                      ratio={128 / 91}
                      minWidth={{
                        base: "35%",
                        md: "40%",
                        lg: "40%",
                        xl: "40%",
                      }}
                    >
                      <Image
                        src="/illustrations/integrate_open_article_2.png" //image needs touchup, prolly get a svg or higher res image
                        alt="Sushicode snippet"
                        borderRadius="0.5rem"
                      />
                    </AspectRatio>
                    <Text
                      fontSize={{
                        base: "0.8rem",
                        md: "0.6rem",
                        lg: "0.8rem",
                        xl: "1rem",
                      }}
                      color="white"
                      width="100%"
                    >
                      Solving the asset utilisation problem in defi lending
                    </Text>
                  </HStack>
                </Link>
              </GridItem>
              <GridItem colSpan={{ base: 3, md: 1 }}>
                <Link href={urls["article3"]} target="_blank">
                  <HStack
                    backgroundColor="background"
                    paddingX="0.6rem"
                    paddingY="0.5rem"
                    spacing={{
                      base: "1rem",
                      sm: "1.5rem",
                      md: "1rem",
                      xl: "1.5rem",
                    }}
                    height="100%"
                    borderRadius="0.5rem"
                    sx={{
                      boxShadow:
                        "0rem 0.25rem 0.25rem 0.0625rem rgba(0, 0, 0, 0.4)",
                    }}
                    _hover={{
                      boxShadow:
                        "0.3rem 0.3rem 0.5rem 0.1rem rgba(0, 0, 0, 0.5)",
                    }}
                    transition="0.2s"
                  >
                    {" "}
                    <AspectRatio
                      ratio={128 / 91}
                      minWidth={{
                        base: "35%",
                        md: "40%",
                        lg: "40%",
                        xl: "40%",
                      }}
                    >
                      <Image
                        src="/illustrations/integrate_open_article_3.png" //image needs touchup, prolly get a svg or higher res image
                        alt="Sushicode snippet"
                        borderRadius="0.5rem"
                      />
                    </AspectRatio>
                    <Text
                      fontSize={{
                        base: "0.8rem",
                        md: "0.6rem",
                        lg: "0.8rem",
                        xl: "1rem",
                      }}
                      color="white"
                      width="100%"
                    >
                      Hashstack’s public testnet is live
                    </Text>
                  </HStack>
                </Link>
              </GridItem>
            </Grid>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}

export default IntegrateOpen;
