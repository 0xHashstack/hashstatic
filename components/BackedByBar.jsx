import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const boxProps = {
  flexBasis: { base: "45%", md: "45%", xl: "18%" },
  marginBottom: { base: "2rem", md: "4rem" },
  justifyContent: "center",
  alignItems: "center",
  // bgColor: "red",
  height: "4rem",
  padding: { base: "0rem", md: "0rem" },
};

function BackedByBar() {
  return (
    <Box
      {...boxProps}
      display="flex"
      width="100%"
      height="100%"
      bgColor="backed_by-black"
      justifyContent="center"
      paddingX={{
        base: "1rem",
        md: "3rem",
        lg: "5rem",
        xl: "5rem",
        "2xl": "5rem",
      }}
      paddingTop={{ base: "2rem", md: "5rem", xl: "4rem" }}
    >
      <VStack
        width={{ base: "100%", "2xl": "90%" }}
        spacing={{
          base: "2rem",
          md: "3rem",
          lg: "4rem",
          xl: "3rem",
          "2xl": "3rem",
        }}
      >
        <Text
          align="center"
          fontSize={{
            base: "1.125rem",
            md: "2rem",
            xl: "2rem",
            "2xl": "2rem",
          }}
          textColor="backed_by-grey"
          fontWeight={500}
        >
          Partners and Integrations
        </Text>

        <Flex
          width="100%"
          justifyContent="center"
          direction="row"
          flexWrap="wrap"
          gap={{ lg: "2%", xl: "3%", "2xl": "4%" }}
        >
          <Box {...boxProps} display="flex">
            {/* <AspectRatio
              minWidth={{ base: "9.3rem", md: "15rem" }}
              ratio={251 / 62}
            >
              <Image src="/company_logos/braavos.png" alt="Braavos Logo" />
            </AspectRatio> */}
            <a target="_blank" href="https://braavos.app" rel="noreferrer">
              <Image
                cursor={{ base: "pointer" }}
                src="/company_logos/braavos.png"
                alt="Braavos Logo"
              />
            </a>
          </Box>
          <Box {...boxProps} display="flex">
            {/* <AspectRatio
              minWidth={{ base: "8.125rem", md: "15rem" }}
              ratio={219 / 74}
            >
              <Image src="/company_logos/empiric.png" alt="Empiric Logo" />
            </AspectRatio> */}
            <a
              target="_blank"
              href="https://www.empiric.network/"
              rel="noreferrer"
            >
              <Image
                cursor={{ base: "pointer" }}
                src="/company_logos/pragma.png"
                width="93%"
                alt="Pragma Logo"
              />
            </a>
          </Box>
          <Box {...boxProps} display="flex">
            {/* <AspectRatio
              minWidth={{ base: "7.25rem", md: "15rem", xl: "13rem" }}
              ratio={831 / 218}
            >
              <Image src="/company_logos/myswap.png" width="80%" alt="Myswap Logo" />
            </AspectRatio> */}
            <a target="_blank" href="https://www.myswap.xyz/" rel="noreferrer">
              <Image
                cursor={{ base: "pointer" }}
                src="/company_logos/myswap.png"
                width={{
                  base: "90%",
                  md: "70%",
                  lg: "60%",
                  xl: "90%",
                  "2xl": "80%",
                }}
                alt="Myswap Logo"
              />
            </a>
          </Box>
          <Box {...boxProps} display="flex">
            {/* <AspectRatio
              minWidth={{ base: "4rem", md: "10rem", xl: "7rem" }}
              ratio={222 / 73}
            >
              <Image src="/company_logos/yagi.png" alt="Yagi Logo" />
            </AspectRatio> */}
            <a href="https://yagi.fi/" target="_blank" rel="noreferrer">
              <Image
                cursor={{ base: "pointer" }}
                width={{ base: "60%", md: "50%", lg: "40%", xl: "60%" }}
                src="/company_logos/yagi.png"
                alt="Yagi Logo"
              />
            </a>
          </Box>

          {/* <Box {...boxProps} display="flex">
            <AspectRatio
              minWidth={{ base: "8.125rem", md: "15rem" }}
              ratio={219 / 74}
            >
              <Image src="/company_logos/empiric.png" alt="Empiric Logo" />
            </AspectRatio>
            <Image src="/company_logos/empiric.png" alt="Empiric Logo" />
          </Box>
          <Box {...boxProps} display="flex">
            <AspectRatio
              minWidth={{ base: "9.3rem", md: "15rem" }}
              ratio={251 / 62}
            >
              <Image src="/company_logos/braavos.png" alt="Braavos Logo" />
            </AspectRatio>
            <Image src="/company_logos/braavos.png" alt="Braavos Logo" />
          </Box>
          <Box {...boxProps} display="flex">
            <AspectRatio
              minWidth={{ base: "4rem", md: "10rem", xl: "7rem" }}
              ratio={222 / 73}
            >
              <Image src="/company_logos/yagi.png" alt="Yagi Logo" />
            </AspectRatio>
            <Image src="/company_logos/yagi.png" width="50%" alt="Yagi Logo" />
          </Box>
          <Box {...boxProps} display={{ base: "flex", md: "none", xl: "flex" }}>
            <AspectRatio
              minWidth={{ base: "8.125rem", md: "15rem" }}
              ratio={219 / 74}
            >
              <Image src="/company_logos/empiric.png" alt="Empiric Logo" />
            </AspectRatio>
            <Image src="/company_logos/empiric.png" alt="Empiric Logo" />
          </Box> */}
        </Flex>
      </VStack>
    </Box>
  );
}

export default BackedByBar;
