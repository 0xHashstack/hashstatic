import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function Milestones() {
  const processIllustration = useBreakpointValue({
    base: "/illustrations/milestones_vertical.svg",
    md: "/illustrations/milestones_horizontal.svg",
  });
  return (
    <Box
      paddingY={{ base: "4rem", md: "3rem", xl: "5rem" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      <Box
        bgImage={{ base: "none", md: "/illustrations/process_background.png" }}
        width={{ base: "90%", xl: "85%", "2xl": "80%" }}
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
          paddingY={{ base: "2rem", md: "3rem", xl: "4rem", "2xl": "6rem" }}
          paddingX={{ base: "1rem", md: "3rem", xl: "4rem", "2xl": "6rem" }}
          width="100%"
          bgColor="featured_by-background"
          gap={{ base: "2rem", xl: "32" }}
        >
          <Text
            fontSize={{ base: "4xl", md: "3xl", lg: "5xl" }}
            textColor="white"
          >
            Milestones
          </Text>
          <Image src={processIllustration} width="100%" alt="StarkNet Logo" />
          <Grid templateColumns="repeat(6,1fr)" gap="1rem">
            <GridItem
              colSpan={{ base: 2, md: 1 }}
              borderRadius="1rem"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              padding={{ base: "1rem", "2xl": "2rem" }}
              bgColor="backed_by-black"
            >
              <Text
                align="center"
                color="white"
                fontSize={{ base: "1.3rem", "2xl": "2.5rem" }}
              >
                100 mn
              </Text>
            </GridItem>
            <GridItem
              borderRadius="1rem"
              colSpan={{ base: 2, md: 1 }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              padding={{ base: "1rem", "2xl": "2rem" }}
              bgColor="backed_by-black"
            >
              <Text
                align="center"
                color="white"
                fontSize={{ base: "1.3rem", "2xl": "2.5rem" }}
              >
                100 mn
              </Text>
            </GridItem>
            <GridItem
              borderRadius="1rem"
              colSpan={{ base: 2, md: 1 }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              padding={{ base: "1rem", "2xl": "2rem" }}
              bgColor="backed_by-black"
            >
              <Text
                align="center"
                color="white"
                fontSize={{ base: "1.3rem", "2xl": "2.5rem" }}
              >
                100 mn
              </Text>
            </GridItem>
            <GridItem
              borderRadius="1rem"
              colSpan={{ base: 2, md: 1 }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              padding={{ base: "1rem", "2xl": "2rem" }}
              bgColor="backed_by-black"
            >
              <Text
                align="center"
                color="white"
                fontSize={{ base: "1.3rem", "2xl": "2.5rem" }}
              >
                100 mn
              </Text>
            </GridItem>
            <GridItem
              borderRadius="1rem"
              colSpan={{ base: 2, md: 1 }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              padding={{ base: "1rem", "2xl": "2rem" }}
              bgColor="backed_by-black"
            >
              <Text
                align="center"
                color="white"
                fontSize={{ base: "1.3rem", "2xl": "2.5rem" }}
              >
                100 mn
              </Text>
            </GridItem>
            <GridItem
              borderRadius="1rem"
              colSpan={{ base: 2, md: 1 }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              padding={{ base: "1rem", "2xl": "2rem" }}
              bgColor="backed_by-black"
            >
              <Text
                align="center"
                color="white"
                fontSize={{ base: "1.3rem", "2xl": "2.5rem" }}
              >
                100 mn
              </Text>
            </GridItem>
          </Grid>
        </VStack>
      </Box>
    </Box>
  );
}

export default Milestones;
