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

function BackedByBar() {
  return (
    <Box
      display="flex"
      width="100%"
      bgColor="backed_by-black"
      justifyContent="center"
      paddingX={{ base: "2rem", md: "8rem", xl: "4rem", "2xl": "8rem" }}
      paddingY={{ base: "2rem", lg: "3rem" }}
    >
      <Grid
        width="100%"
        templateColumns="repeat(2,1fr)"
        rowGap={{ base: "3rem", md: "4rem" }}
      >
        <GridItem colSpan={{ base: "2", xl: "1" }}>
          <VStack gap="1rem">
            <Text
              align="center"
              fontSize={{
                base: "0.9rem",
                md: "1rem",
                xl: "1.2rem",
                "2xl": "1rem",
              }}
              textColor="backed_by-grey"
            >
              Backed By
            </Text>
            <HStack justifyContent="space-around" gap="2rem" height="10">
              <AspectRatio
                minWidth={{ base: "150px", md: "250px" }}
                ratio={241 / 46}
              >
                <Image src="/company_logos/starknet.png" alt="StarkNet Logo" />
              </AspectRatio>
              <AspectRatio
                minWidth={{ base: "150px", md: "250px" }}
                ratio={238 / 55}
              >
                <Image src="/company_logos/polygon.png" alt="StarkNet Logo" />
              </AspectRatio>
            </HStack>
          </VStack>
        </GridItem>
        <GridItem colSpan={{ base: "2", xl: "1" }}>
          <VStack gap="1rem" height="100%" justifyContent="space-between">
            <Text
              align="center"
              fontSize={{
                base: "0.9rem",
                md: "1rem",
                xl: "1.2rem",
                "2xl": "1rem",
              }}
              textColor="backed_by-grey"
            >
              Dapps Supported
            </Text>
            <HStack justifyContent="space-around" gap="2rem">
              <AspectRatio
                minWidth={{ base: "150px", md: "250px" }}
                ratio={221 / 42}
              >
                <Image src="/company_logos/zksync.png" alt="StarkNet Logo" />
              </AspectRatio>
              <AspectRatio
                minWidth={{ base: "150px", md: "250px" }}
                ratio={237 / 39}
              >
                <Image
                  src="/company_logos/polygon_zkevm.png"
                  alt="StarkNet Logo"
                />
              </AspectRatio>
            </HStack>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default BackedByBar;
