import { Box, Grid, GridItem, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

function Milestones() {
  return (
    <Box
      paddingTop={{ base: "4rem", md: "8rem", lg: "3rem", xl: "5rem" }}
      paddingBottom={{ base: "0rem", md: "3rem", lg: "3rem", xl: "5rem" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      <Box
        bgImage="/illustrations/milestone_background.png"
        bgRepeat="no-repeat"
        backgroundSize="100% 100%"
        width={{ base: "90%", xl: "85%", "2xl": "80%" }}
        borderRadius="1rem"
        marginInline="auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingX={{ base: "1rem", md: "2rem", lg: "2.5rem", xl: "4rem" }}
        paddingY={{ base: "1rem", md: "2rem", lg: "2.5rem", xl: "4rem" }}
      >
        <VStack
          borderRadius="0.5rem"
          paddingY={{ base: "2rem", md: "3rem", xl: "4rem", "2xl": "6rem" }}
          paddingX={{ base: "1rem", md: "3rem", xl: "4rem", "2xl": "6rem" }}
          width="100%"
          bgColor="featured_by-background"
          spacing={{ base: "2rem", xl: "32" }}
        >
          <Text
            fontSize={{ base: "1.125rem", md: "4xl", xl: "5xl" }}
            textColor="white"
            fontWeight={500}
          >
            Milestones
          </Text>
          <Image
            src={"/illustrations/milestones_vertical.svg"}
            width="100%"
            alt="StarkNet Logo"
            display={{ base: "block", md: "none" }}
          />
          <Image
            src={"/illustrations/milestones_horizontal.svg"}
            width="100%"
            alt="StarkNet Logo"
            display={{ base: "none", md: "block" }}
          />
          <Grid templateColumns="repeat(6,1fr)" gap="1rem" width="100%">
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
