import {
  Box,
  Divider,
  Grid,
  GridItem,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { urls } from "../consts/urls";
import {
  DiscordIcon,
  InstagramIcon,
  LinkedinIcon,
  MediumIcon,
  RedditIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./Icons";

function Footer() {
  return (
    <Box
      width="100%"
      backgroundColor="featured_by-background"
      paddingTop={{ base: "3rem", xl: "6rem" }}
      paddingBottom={{ base: "1rem", xl: "2rem" }}
      // paddingX={{ base: "2rem", md: "2rem", xl: "6rem", "2xl": "12rem" }}
    >
      <VStack
        spacing="2rem"
        alignItems="flex-start"
        width={{ base: "90%", xl: "80%" }}
        marginInline="auto"
      >
        <Grid
          width="100%"
          gap="2rem"
          templateColumns={{ base: "repeat(6,1fr)", md: "repeat(5,1fr)" }}
        >
          <GridItem colSpan={{ base: 6, md: 5, xl: 1 }}>
            <HStack alignItems="center">
              <Image
                boxSize={{
                  base: "3rem",
                  md: "3rem",
                  //   xl: "3rem",
                  //   "2xl": "4rem",
                }}
                src="/company_logos/hashstack.svg"
                // src="/company_logos/doge.png"
                alt="Company Logo"
              />
              <Link href="/ " target="_blank" title="Hashstack Homepage">
                <VisuallyHidden>Hashstack</VisuallyHidden>
                <Text
                  fontSize={{
                    base: "3xl",
                    md: "2xl",
                    xl: "3xl",
                  }}
                  fontWeight="medium"
                  color="white"
                >
                  Hashstack
                </Text>
              </Link>
            </HStack>
          </GridItem>
          <GridItem
            colSpan={{ md: 1, xl: 0 }}
            display={{ base: "none", md: "block", xl: "none" }}
          ></GridItem>
          <GridItem colSpan={{ base: 3, md: 1 }}>
            <VStack color="white" spacing="1rem" alignItems="flex-start">
              <Text fontSize="lg">Product</Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ fontWeight: "600", cursor: "pointer" }}
                transition="0.1s"
                target="_blank"
                href={urls.Testnet}
                opacity="60%"
              >
                Testnet
              </Text>
              {/* <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ fontWeight: "600", cursor: "pointer" }}
                transition="0.1s"
                target="_blank"
                href={urls["Integrate dApp"]}
                opacity="60%"
              >
                Integrate your dApp
              </Text> */}
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ fontWeight: "600", cursor: "pointer" }}
                transition="0.1s"
                target="_blank"
                href={urls.Hashstack_101}
                opacity="60%"
              >
                Hashstack 101
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ fontWeight: "600", cursor: "pointer" }}
                transition="0.1s"
                target="_blank"
                href={urls.Docs}
                opacity="60%"
              >
                Docs
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ fontWeight: "600", cursor: "pointer" }}
                transition="0.1s"
                target="_blank"
                href={urls.Hashnomics}
                opacity="60%"
              >
                Hashnomics
              </Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={{ base: 3, md: 1 }}>
            <VStack color="white" spacing="1rem" alignItems="flex-start">
              <Text fontSize="lg">Developers</Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ fontWeight: "600", cursor: "pointer" }}
                transition="0.1s"
                target="_blank"
                href={urls.Whitepaper}
                opacity="60%"
              >
                Whitepaper
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ fontWeight: "600", cursor: "pointer" }}
                transition="0.1s"
                target="_blank"
                href={urls["EIP 5299"]}
                opacity="60%"
              >
                EIP 5299
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ fontWeight: "600", cursor: "pointer" }}
                transition="0.1s"
                target="_blank"
                href={urls.Audit}
                opacity="60%"
              >
                Audit
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ fontWeight: "600", cursor: "pointer" }}
                transition="0.1s"
                target="_blank"
                href={urls.Bug_Bounty}
                opacity="60%"
              >
                Bug Bounty
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ fontWeight: "600", cursor: "pointer" }}
                transition="0.1s"
                target="_blank"
                href={urls.Blog}
                opacity="60%"
              >
                Blog
              </Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={{ base: 3, md: 1 }}>
            <VStack color="white" spacing="1rem" alignItems="flex-start">
              <Text fontSize="lg">General</Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ fontWeight: "600", cursor: "pointer" }}
                transition="0.1s"
                target="_blank"
                href={urls.Careers}
                opacity="60%"
              >
                Careers
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ fontWeight: "600", cursor: "pointer" }}
                transition="0.1s"
                target="_blank"
                href={urls["Branding Kit"]}
                opacity="60%"
              >
                Branding Kit
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ fontWeight: "600", cursor: "pointer" }}
                transition="0.1s"
                target="_blank"
                href={urls["Status Page"]}
                opacity="60%"
              >
                Status Page
              </Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={{ base: 3, md: 1 }}>
            <VStack color="white" spacing="1rem" alignItems="flex-start">
              <Text fontSize="lg">Community</Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ fontWeight: "600", cursor: "pointer" }}
                transition="0.1s"
                target="_blank"
                href={urls.Discord}
                opacity="60%"
              >
                Discord
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ fontWeight: "600", cursor: "pointer" }}
                transition="0.1s"
                target="_blank"
                href={urls.Twitter}
                opacity="60%"
              >
                Twitter
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ fontWeight: "600", cursor: "pointer" }}
                transition="0.1s"
                target="_blank"
                href={urls.Reddit}
                opacity="60%"
              >
                Reddit
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ fontWeight: "600", cursor: "pointer" }}
                transition="0.1s"
                target="_blank"
                href={urls.Medium}
                opacity="60%"
              >
                Medium
              </Text>
            </VStack>
          </GridItem>
        </Grid>
        <HStack
          width={{ base: "80%", md: "100%" }}
          spacing={{ base: "0.25rem", md: "0.5rem" }}
          justifyContent={{ base: "flex-start", md: "flex-end" }}
        >
          <a target="_blank" rel="noreferrer" href={urls.Discord}>
            <DiscordIcon
              fontSize="1.5rem"
              color="footer-icon"
              _hover={{ color: "white" }}
            />
          </a>

          <a target="_blank" rel="noreferrer" href={urls.Twitter}>
            <TwitterIcon
              fontSize="1.5rem"
              color="footer-icon"
              _hover={{ color: "white" }}
            />
          </a>

          <a target="_blank" rel="noreferrer" href={urls.Instagram}>
            <InstagramIcon
              fontSize="1.5rem"
              color="footer-icon"
              _hover={{ color: "white" }}
            />
          </a>

          <a target="_blank" rel="noreferrer" href={urls.Reddit}>
            <RedditIcon
              fontSize="1.5rem"
              color="footer-icon"
              _hover={{ color: "white" }}
            />
          </a>

          <a target="_blank" rel="noreferrer" href={urls.Linkedin}>
            <LinkedinIcon
              fontSize="1.5rem"
              color="footer-icon"
              _hover={{ color: "white" }}
            />
          </a>

          <a target="_blank" rel="noreferrer" href={urls.Medium}>
            <MediumIcon
              fontSize="1.5rem"
              color="footer-icon"
              _hover={{ color: "white" }}
            />
          </a>

          <a target="_blank" rel="noreferrer" href={urls.Youtube}>
            <YoutubeIcon
              fontSize="1.5rem"
              color="footer-icon"
              _hover={{ color: "white" }}
            />
          </a>
        </HStack>
        <Box width="100%">
          <Divider
            orientation="horizontal"
            opacity="20%"
            borderBottomWidth="0.1rem"
          />
          <Stack
            direction={{ base: "column", md: "row" }}
            width="100%"
            spacing="0.75rem"
            color={"white"}
            justifyContent="space-between"
            marginTop="1.5rem"
          >
            <HStack spacing="2rem">
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ fontWeight: "600", cursor: "pointer" }}
                transition="0.1s"
                target="_blank"
                href={urls["Terms Of Service"]}
                opacity="60%"
              >
                Terms of Service
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ fontWeight: "600", cursor: "pointer" }}
                transition="0.1s"
                target="_blank"
                href={urls["Privacy Policy"]}
                opacity="60%"
              >
                Privacy Policy
              </Text>
            </HStack>
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              as="a"
              _hover={{ fontWeight: "600", cursor: "pointer" }}
              transition="0.1s"
              target="_blank"
              href="/"
              opacity="60%"
            >
              © 2023 Hashstack Limited
            </Text>
          </Stack>
        </Box>
      </VStack>
    </Box>
  );
}

export default Footer;

// add a bit more margin in the footer
