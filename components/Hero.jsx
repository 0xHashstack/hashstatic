import {
  AspectRatio,
  Box,
  Button,
  HStack,
  SlideFade,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Image as ChakraImage } from "@chakra-ui/react";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { urls } from "../consts/urls";
import heroIllustration from "../public/illustrations/hero-illustration.png";
import heroIllustrationVertical from "../public/illustrations/hero-illustration_vertical.png";
import heroIllustrationVerticalMobile from "../public/illustrations/hero-illustration_vertical_mobile.png";

function Hero() {
  const [textIndex, setTextIndex] = useState(0);

  const shuffle = useCallback(() => {
    setTextIndex((oldValue) => (oldValue + 1) % 3);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 3000);
    return () => clearInterval(intervalID);
  }, [shuffle]);
  return (
    <Box
      minHeight={{
        base: "90vh",
        xs: "60vh",
        sm: "70vh",
        md: "100vh",
        xl: "90vh",
      }}
      display="flex"
      overflowX="hidden"
      overflowY="hidden"
    >
      <Stack
        flexDirection={{ base: "column-reverse", xl: "row" }}
        justifyContent={{ base: "flex-end", xl: "center" }}
        marginLeft="auto"
        marginRight={{ base: "auto", xl: "0rem" }}
        width={{ base: "100%", xl: "90%" }}
      >
        <VStack
          flexBasis={{ base: "60%", md: "60%", lg: "60%", xl: "55%" }}
          height={{ base: "100%", xl: "auto" }}
          display="flex"
          alignItems={{ base: "center", xl: "flex-start" }}
          justifyContent={{ base: "flex-start", xl: "center" }}
          spacing={{
            base: "2.5rem",
            md: "4.625rem",
            ipadLandscape: "3rem",
            xl: "4rem",
            "2xl": "3.5rem",
          }}
          // paddingY={{ base: "0rem", md: "0rem", xl: "2rem" }}
          marginTop={{ base: "0rem", md: "4rem", xl: "2rem" }}
          marginBottom={{ base: "0rem", xs: "4rem", md: "4rem" }}
          paddingX={{ base: "2rem", xl: "0rem" }}
        >
          <VStack
            alignItems={{ base: "center", xl: "flex-start" }}
            spacing={{ md: "2.25rem" }}
          >
            <HStack
              width={{ base: "100%", xl: "auto" }}
              justifyContent={{ base: "center", xl: "flex-start" }}
              spacing={{ base: "0.5rem", md: "1rem" }}
              fontSize={{
                base: "1.5rem",
                sm: "2rem",
                md: "3.5rem",
                lg: "4rem",
                ipadLandscape: "3.5rem",
                xl: "3rem",
                "2xl": "4.5rem",
              }}
              lineHeight={{ base: "4.75rem" }}
            >
              <Text
                textColor="hero-green"
                textAlign={{ base: "right", xl: "left" }}
                flexBasis={{ base: "50%", xl: "auto" }}
                whiteSpace="nowrap"
                fontWeight={500}
              >
                Move Over{" "}
              </Text>
              <Box flexBasis={{ base: "50%", xl: "xl" }}>
                {textIndex === 0 && (
                  <SlideFade transition="30s" in offsetY="20px">
                    <Text
                      textColor="white"
                      textAlign="left"
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
                      textAlign="left"
                      fontWeight={{ base: "bold" }}
                      color="white"
                    >
                      MakerDAO
                    </Text>
                  </SlideFade>
                )}
                {textIndex === 2 && (
                  <SlideFade transition="30s" in offsetY="20px">
                    <Text
                      textColor="hero-green"
                      textAlign="left"
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
              // mt="1rem"
              width={{
                base: "100%",
                md: "70%",
                lg: "60%",
                ipadLandscape: "60%",
                xl: "70%",
                "2xl": "70%",
              }}
              lineHeight={{ base: "1.5rem", md: "2rem", xl: "1.5rem" }}
              fontSize={{
                base: "1rem",
                md: "1.4rem",
                lg: "1.5rem",
                ipadLandscape: "1.1rem",
                xl: "1rem",
                "2xl": "1.4rem",
              }}
              textAlign={{ base: "center", xl: "left" }}
              fontWeight="500"
              letterSpacing="0.01rem"
            >
              <span>
                Hashstack’s users enjoy up to{" "}
                <span style={{ color: "#2BDBBD" }}>328%</span> more loan on
                their collateral than Aave, Compound, or MakerDAO.
              </span>
            </Text>
          </VStack>

          <HStack
            justifyContent={{ base: "center", xl: "flex-start" }}
            width="100%"
            spacing={{ base: "0.65rem" }}
          >
            <Button
              as="a"
              href={urls.Testnet}
              target="_blank"
              borderWidth="0.1rem"
              borderColor="background"
              bgGradient={
                "linear(to-l, header-button-start, header-button-end )"
              }
              size="lg"
              color="white"
              // opacity="90%"
              _hover={{
                // bgColor: "header-link-hover",
                bgGradient:
                  "linear(to-l, header-button-start, header-button-start )",
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
              fontWeight={500}
            >
              Testnet
            </Button>
            <Button
              as="a"
              href={urls.Whitepaper}
              target="_blank"
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
          {/* </VStack> */}
        </VStack>
        <Box
          flexBasis={{ base: "40%", md: "40%", lg: "40%", xl: "45%" }}
          flexShrink="0"
          style={{ marginTop: "0rem" }}
          marginTop="0rem"
          position="relative"
        >
          <Box
            display={{ base: "none", md: "flex", xl: "none" }}
            maxWidth={{ md: "80%", lg: "80%" }}
            marginInline="auto"
            justifyContent="center"
          >
            <Image
              src={heroIllustrationVertical}
              alt="hero-illustration"
              priority
              placeholder="blur"
            />
          </Box>
          <Box
            display={{ base: "flex", md: "none" }}
            maxWidth={{ base: "70%", md: "80%", lg: "80%" }}
            marginInline="auto"
            justifyContent="center"
          >
            <Image
              src={heroIllustrationVerticalMobile}
              alt="hero-illustration"
              priority
              placeholder="blur"
            />
          </Box>

          <AspectRatio
            position="absolute"
            right={{
              base: "5%",
              ipadLandscape: "25%",
              xl: "-12rem",
              "2xl": "-16.5rem",
              "4k": "-30rem",
            }}
            top={{
              base: "-6rem",
              md: "-12rem",
              ipadLandscape: "-10 rem",
              xl: "-7rem",
              "2xl": "-9rem",
            }}
            minWidth={{ base: "90%", ipadLandscape: "50%", xl: "130%" }}
            ratio={996 / 943}
            display={{ base: "none", xl: "block" }}
          >
            <Image
              src={heroIllustration}
              alt="hero-illustration"
              layout="fill"
              priority
              placeholder="blur"
            />
          </AspectRatio>
        </Box>
      </Stack>
    </Box>
  );
}

export default Hero;
