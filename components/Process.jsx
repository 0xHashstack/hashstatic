import { Box, Image, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import React from "react";

function Process() {
  const processIllustration = useBreakpointValue({
    base: "/illustrations/process_vertical.svg",
    md: "/illustrations/process_horizontal.svg",
  });
  return (
    <Box
      // bgColor="background"
      paddingY={{ base: "4rem", md: "3rem", xl: "5rem" }}
      //   paddingX={{ md: "3rem", lg: "16rem" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      <Box
        bgImage={{ base: "none", md: "/illustrations/process_background.png" }}
        width={{ base: "90%", xl: "85%", "2xl": "80%" }}
        // bgColor="red"
        borderRadius="0.5rem"
        marginInline="auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingX={{ base: "1rem", md: "3rem", xl: "4rem" }}
        paddingY={{ base: "3rem", md: "3rem", xl: "4rem" }}
      >
        <VStack
          borderRadius="0.5rem"
          paddingY={{ base: "2rem", md: "3rem", xl: "4rem", "2xl": "3rem" }}
          paddingX={{ base: "1rem", md: "3rem", xl: "4rem", "2xl": "3rem" }}
          width="100%"
          bgColor="featured_by-background"
          // bgColor="white"
          gap={{ base: "2rem", xl: "3rem" }}
        >
          <Text
            fontSize={{ base: "4xl", md: "3xl", lg: "5xl" }}
            textColor="white"
          >
            Process
          </Text>
          <Image src={processIllustration} alt="StarkNet Logo" />
        </VStack>
      </Box>
    </Box>
  );
}

export default Process;
