import { Box, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

function Process() {
  return (
    <Box
      paddingTop={{ base: "4rem", md: "10rem", xl: "10rem" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      <Box
        bgImage={{ base: "none", md: "/illustrations/process_background.png" }}
        width={{ base: "95%", md: "90%", xl: "85%", "2xl": "80%" }}
        // bgColor="red"
        borderRadius="0.5rem"
        marginInline="auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingX={{ base: "1rem", md: "2rem", lg: "2.5rem", xl: "4rem" }}
        paddingY={{ base: "3rem", md: "2rem", lg: "2.5rem", xl: "4rem" }}
      >
        <VStack
          borderRadius="0.5rem"
          paddingY={{ base: "2rem", md: "3rem", xl: "4rem", "2xl": "5rem" }}
          paddingX={{ base: "1rem", md: "3rem", xl: "4rem", "2xl": "3rem" }}
          width="100%"
          bgColor="featured_by-background"
          // bgColor="white"
          spacing={{ base: "1rem", md: "1.75rem", xl: "3rem" }}
        >
          <Text
            fontSize={{ base: "1.125rem", md: "4xl", xl: "5xl" }}
            textColor="white"
            fontWeight={500}
          >
            Process
          </Text>
          <Image
            src="/illustrations/process_vertical.svg"
            display={{ base: "block", md: "none" }}
            alt="StarkNet Logo"
          />
          <Image
            src="/illustrations/process_horizontal.svg"
            display={{ base: "none", md: "block" }}
            alt="StarkNet Logo"
          />
        </VStack>
      </Box>
    </Box>
  );
}

export default Process;
