import {
  AspectRatio,
  Box,
  Button,
  Fade,
  HStack,
  SlideFade,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { Image as ChakraImage } from "@chakra-ui/react";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

function Hero() {
  const renderVerticalImage = useBreakpointValue(
    {
      base: true,
      sm: true,
      md: true,
      lg: true,
      ipadLandscape: true,
      xl: false,
      "2xl": false,
    }
    // { ssr: false }
  );

  const [fadeIn, setFadeIn] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const shuffle = useCallback(() => {
    setTextIndex((oldValue) => (oldValue + 1) % 3);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 3000);
    return () => clearInterval(intervalID);
  }, [shuffle]);
  return (
    <Box height={{ base: "70vh", md: "90vh" }} display="flex">
      <Stack
        flexDirection={{ base: "column-reverse", xl: "row" }}
        marginLeft="auto"
        marginRight={{ base: "auto", xl: "0rem" }}
        width={{ base: "100%", xl: "90%" }}
        overflow="clip"
        // position="relative"
      >
        <VStack
          flexBasis={{ base: "60%", xl: "55%" }}
          height="100%"
          display="flex"
          alignItems={{ base: "center", xl: "flex-start" }}
          justifyContent={{ base: "flex-start", xl: "center" }}
          spacing={{
            base: "6rem",
            md: "4rem",
            ipadLandscape: "3rem",
            xl: "4rem",
            "2xl": "3rem",
          }}
          paddingY={{ md: "2rem" }}
          paddingX="2rem"
        >
          <VStack alignItems={{ base: "center", xl: "flex-start" }}>
            <HStack
              width={{ base: "100%", xl: "auto" }}
              justifyContent={{ base: "center", xl: "flex-start" }}
              gap={{ md: "0.5rem" }}
            >
              <Text
                textColor="hero-green"
                textAlign={{ base: "right", xl: "left" }}
                fontSize={{
                  base: "1.5rem",
                  md: "4rem",
                  ipadLandscape: "2.5rem",
                  xl: "3rem",
                  "2xl": "4rem",
                }}
                flexBasis={{ base: "50%", xl: "auto" }}
                whiteSpace="nowrap"
              >
                Move Over{" "}
              </Text>
              <Box flexBasis={{ base: "50%", md: "xl" }}>
                {textIndex === 0 && (
                  <SlideFade transition="30s" in offsetY="20px">
                    <Text
                      textColor="white"
                      textAlign={{ base: "left", xl: "left" }}
                      fontSize={{
                        base: "1.5rem",
                        md: "4rem",
                        ipadLandscape: "2.5rem",
                        xl: "3rem",
                        "2xl": "4rem",
                      }}
                      fontWeight={{ base: "bold" }}
                      // style={{ color: "white", fontWeight: "600" }}
                    >
                      Compound
                    </Text>
                  </SlideFade>
                )}
                {textIndex === 1 && (
                  <SlideFade transition="30s" in offsetY="20px">
                    <Text
                      textColor="hero-green"
                      textAlign={{ base: "left", xl: "left" }}
                      fontSize={{
                        base: "1.5rem",
                        md: "4rem",
                        ipadLandscape: "2.5rem",
                        xl: "3rem",
                        "2xl": "4rem",
                      }}
                      fontWeight={{ base: "bold" }}
                      color="white"
                    >
                      Maker Dao
                    </Text>
                  </SlideFade>
                )}
                {textIndex === 2 && (
                  <SlideFade transition="30s" in offsetY="20px">
                    <Text
                      textColor="hero-green"
                      textAlign={{ base: "left", xl: "left" }}
                      fontSize={{
                        base: "1.5rem",
                        md: "4rem",
                        ipadLandscape: "2.5rem",
                        xl: "3rem",
                        "2xl": "4rem",
                      }}
                      fontWeight={{ base: "bold" }}
                      color="white"
                    >
                      Aave
                    </Text>
                  </SlideFade>
                )}
              </Box>
            </HStack>
            <Text
              textColor="hero-grey"
              mt="1rem"
              width={{ md: "60%", xl: "90%", "2xl": "70%" }}
              fontSize={{
                base: "0.9rem",
                md: "1.5rem",
                ipadLandscape: "1.2rem",
                xl: "1rem",
              }}
              textAlign={{ base: "center", xl: "left" }}
            >
              Hashstack’s users are able to borrow upto{" "}
              <span style={{ color: "#2BDBBD" }}>328%</span> more loan on their
              collateral in comparison to Aave, Compound, MakerDao.
            </Text>
          </VStack>
          <HStack
            justifyContent={{ base: "center", xl: "flex-start" }}
            width="100%"
          >
            <Button
              borderWidth="0.1rem"
              borderColor="background"
              bgGradient={
                "linear(to-l, header-button-start, header-button-end )"
              }
              size="lg"
              color="white"
              // opacity="90%"
              _hover={{
                color: "header-link-hover",
              }}
              _active={{
                bgGradient:
                  "linear(to-l, header-button-start, header-button-end )",
                border: "white",
                borderWidth: "0.1rem",
                borderStyle: "solid",
              }}
              _focus={{
                border: "white",
                borderWidth: "0.1rem",
                borderStyle: "solid",
              }}
            >
              Testnet
            </Button>
            <Button
              fontSize="0.9rem"
              variant="ghost"
              color="white"
              opacity="80%"
              border="solid"
              borderColor="transparent"
              borderWidth="0.1rem"
              borderRadius="0.4rem"
              _hover={{ borderColor: "header-link-hover" }}
            >
              Whitepaper
            </Button>
          </HStack>

          <HStack
            width="100%"
            justifyContent={{ md: "center", xl: "flex-start" }}
            display={{ base: "none", md: "flex" }}
          >
            <Text textColor="hero-grey" fontSize="1.2rem" mr="0.5rem">
              Backed By
            </Text>
            <ChakraImage
              src="/company_logos/starknet.png"
              alt="StarkNet Logo"
            />
          </HStack>
        </VStack>
        <Box flexBasis={{ base: "50%", xl: "45%" }} position="relative">
          <AspectRatio
            position="absolute"
            right={{
              base: "5%",
              ipadLandscape: "25%",
              xl: "-15rem",
              "2xl": "-15rem",
            }}
            top={{
              base: "-6rem",
              md: "-12rem",
              ipadLandscape: "-10 rem",
              xl: "-5rem",
              "2xl": "-8rem",
            }}
            width={{ base: "90%", ipadLandscape: "50%", xl: "120%" }}
            ratio={996 / 943}
          >
            {renderVerticalImage ? (
              <Image
                src={"/illustrations/hero-illustration_vertical.svg"}
                alt="hero-illustration"
                // width="100%"
                layout="fill"
              />
            ) : (
              <Fade in={true}>
                <Image
                  src={"/illustrations/hero-illustration.png"}
                  alt="hero-illustration"
                  onLoad={() => {
                    setFadeIn(true);
                  }}
                  layout="fill"
                />
              </Fade>
            )}
          </AspectRatio>
        </Box>
      </Stack>
    </Box>
  );
}

export default Hero;
