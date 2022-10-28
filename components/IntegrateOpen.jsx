import {
  AspectRatio,
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function IntegrateOpen() {
  return (
    <Box
      paddingY={{ base: "3rem", md: "3rem", xl: "5rem" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      <VStack
        alignItems="center"
        justifyContent="center"
        gap={{ base: "2rem", xl: "2rem", "2xl": "3rem" }}
        width="100%"
      >
        <Text
          fontSize={{ base: "4xl", md: "3xl", xl: "5xl" }}
          textColor="white"
          // opacity="60%"
        >
          Integrate Open
        </Text>
        <Box
          bgImage="/illustrations/integrate_open_background.png"
          // bgColor="white"
          // borderStyle="solid"
          // borderWidth="1rem"
          bgRepeat="no-repeat"
          backgroundSize="100% 100%"
          width={{ base: "90%", md: "95%", xl: "85%", "2xl": "80%" }}
          borderRadius={{ base: "0.5rem", md: "0.5rem" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding={{ base: "1rem", md: "3rem", xl: "4rem" }}
        >
          <VStack width="100%" gap="2rem">
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
                height="100%"
              >
                <AspectRatio ratio={776 / 377} width="100%">
                  <Image
                    src="/illustrations/integrate_open_sushicode.svg" //image needs touchup, prolly get a svg or higher res image
                    alt="Sushicode snippet"
                  />
                </AspectRatio>
              </GridItem>
              <GridItem
                display="flex"
                flexDirection="column"
                justifyContent="space-evenly"
                height="100%"
                colSpan={{ base: 6, md: 4, xl: 2 }}
              >
                <VStack gap={{ base: "1rem", xl: "2rem" }}>
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
                      fontSize={{ base: "0.9rem", md: "0.7rem", xl: "0.9rem" }}
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
                      fontSize={{ base: "0.9rem", md: "0.7rem", xl: "0.9rem" }}
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
                      fontSize={{ base: "0.9rem", md: "0.7rem", xl: "0.9rem" }}
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
                      fontSize={{ base: "0.9rem", md: "0.7rem", xl: "0.9rem" }}
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
                <HStack
                  backgroundColor="background"
                  paddingX="0.6rem"
                  paddingY="0.5rem"
                  gap={{ sm: "1.5rem", md: "1rem", xl: "1.5rem" }}
                  borderRadius="0.5rem"
                >
                  {" "}
                  <AspectRatio
                    ratio={128 / 91}
                    minWidth={{ base: "35%", md: "20%", xl: "40%" }}
                  >
                    <Image
                      src="/illustrations/integrate_open_article.png" //image needs touchup, prolly get a svg or higher res image
                      alt="Sushicode snippet"
                      borderRadius="2rem"
                    />
                  </AspectRatio>
                  <VStack>
                    <Text
                      fontSize={{ base: "md", base: "sm", xl: "xl" }}
                      color="white"
                      textAlign="left"
                      width="100%"
                    >
                      Technical Article 2
                    </Text>
                    <Text
                      fontSize={{ base: "xs", md: "xx-small", xl: "sm" }}
                      color="white"
                      opacity="90%"
                    >
                      Lorem Ipsum is simply dummy text of the printing
                    </Text>
                  </VStack>
                </HStack>
              </GridItem>
              <GridItem colSpan={{ base: 3, md: 1 }}>
                <HStack
                  backgroundColor="background"
                  paddingX="0.6rem"
                  paddingY="0.5rem"
                  gap={{ sm: "1.5rem", md: "1rem", xl: "1.5rem" }}
                  borderRadius="0.5rem"
                >
                  {" "}
                  <AspectRatio
                    ratio={128 / 91}
                    minWidth={{ base: "35%", md: "20%", xl: "40%" }}
                  >
                    <Image
                      src="/illustrations/integrate_open_article.png" //image needs touchup, prolly get a svg or higher res image
                      alt="Sushicode snippet"
                      borderRadius="2rem"
                    />
                  </AspectRatio>
                  <VStack>
                    <Text
                      fontSize={{ base: "md", base: "sm", xl: "xl" }}
                      color="white"
                      textAlign="left"
                      width="100%"
                    >
                      Technical Article 2
                    </Text>
                    <Text
                      fontSize={{ base: "xs", md: "xx-small", xl: "sm" }}
                      color="white"
                      opacity="90%"
                    >
                      Lorem Ipsum is simply dummy text of the printing
                    </Text>
                  </VStack>
                </HStack>
              </GridItem>
              <GridItem colSpan={{ base: 3, md: 1 }}>
                <HStack
                  backgroundColor="background"
                  paddingX="0.6rem"
                  paddingY="0.5rem"
                  gap={{ sm: "1.5rem", md: "1rem", xl: "1.5rem" }}
                  borderRadius="0.5rem"
                >
                  {" "}
                  <AspectRatio
                    ratio={128 / 91}
                    minWidth={{ base: "35%", md: "20%", xl: "40%" }}
                  >
                    <Image
                      src="/illustrations/integrate_open_article.png" //image needs touchup, prolly get a svg or higher res image
                      alt="Sushicode snippet"
                      borderRadius="2rem"
                    />
                  </AspectRatio>
                  <VStack>
                    <Text
                      fontSize={{ base: "md", base: "sm", xl: "xl" }}
                      color="white"
                      textAlign="left"
                      width="100%"
                    >
                      Technical Article 2
                    </Text>
                    <Text
                      fontSize={{ base: "xs", md: "xx-small", xl: "sm" }}
                      color="white"
                      opacity="90%"
                    >
                      Lorem Ipsum is simply dummy text of the printing
                    </Text>
                  </VStack>
                </HStack>
              </GridItem>
            </Grid>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}

export default IntegrateOpen;
