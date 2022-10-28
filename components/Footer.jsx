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
      paddingBottom={{ base: "2rem", xl: "2rem" }}
      paddingX={{ base: "2rem", xl: "6rem", "2xl": "12rem" }}
    >
      <VStack gap="2rem" alignItems="flex-start">
        <Grid
          width="100%"
          gap="2rem"
          templateColumns={{ base: "repeat(6,1fr)", md: "repeat(5,1fr)" }}
        >
          <GridItem colSpan={{ base: 6, md: 5, xl: 1 }}>
            <Link
              href="/"
              target="_blank"
              title="Hashstack Homepage"
              display="flex"
              alignItems="center"
            >
              <Image
                boxSize={{
                  base: "3rem",
                  md: "4rem",
                  //   xl: "3rem",
                  //   "2xl": "4rem",
                }}
                src="/company_logos/hashstack.svg"
                alt="Company Logo"
              />
              <VisuallyHidden>Hashstack</VisuallyHidden>
              <Text
                fontSize={{ base: "3xl", md: "2xl", xl: "3xl", "2xl": "4xl" }}
                fontWeight="medium"
                ml="2"
                color="white
              "
              >
                Hashstack
              </Text>
            </Link>
          </GridItem>
          <GridItem
            colSpan={{ md: 1, xl: 0 }}
            display={{ base: "none", md: "block", xl: "none" }}
          ></GridItem>
          <GridItem colSpan={{ base: 3, md: 1 }}>
            <VStack color="white" gap="1rem" alignItems="flex-start">
              <Text fontSize="lg">Product</Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ textDecoration: "underline" }}
                target="_blank"
                href="/"
                opacity="60%"
              >
                Testnet
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ textDecoration: "underline" }}
                target="_blank"
                href="/"
                opacity="60%"
              >
                Integrate your dApp
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ textDecoration: "underline" }}
                target="_blank"
                href="/"
                opacity="60%"
              >
                Hashstack 101
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ textDecoration: "underline" }}
                target="_blank"
                href="/"
                opacity="60%"
              >
                Docs
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ textDecoration: "underline" }}
                target="_blank"
                href="/"
                opacity="60%"
              >
                Hashnomics
              </Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={{ base: 3, md: 1 }}>
            <VStack color="white" gap="1rem" alignItems="flex-start">
              <Text fontSize="lg">Developers</Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ textDecoration: "underline" }}
                target="_blank"
                href="/"
                opacity="60%"
              >
                Whitepaper
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ textDecoration: "underline" }}
                target="_blank"
                href="/"
                opacity="60%"
              >
                EIP 5299
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ textDecoration: "underline" }}
                target="_blank"
                href="/"
                opacity="60%"
              >
                Audit
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ textDecoration: "underline" }}
                target="_blank"
                href="/"
                opacity="60%"
              >
                Bug Bounty
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ textDecoration: "underline" }}
                target="_blank"
                href="/"
                opacity="60%"
              >
                Blog
              </Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={{ base: 3, md: 1 }}>
            <VStack color="white" gap="1rem" alignItems="flex-start">
              <Text fontSize="lg">General</Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ textDecoration: "underline" }}
                target="_blank"
                href="/"
                opacity="60%"
              >
                Careers
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ textDecoration: "underline" }}
                target="_blank"
                href="/"
                opacity="60%"
              >
                Branding Kit
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ textDecoration: "underline" }}
                target="_blank"
                href="/"
                opacity="60%"
              >
                Status Page
              </Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={{ base: 3, md: 1 }}>
            <VStack color="white" gap="1rem" alignItems="flex-start">
              <Text fontSize="lg">Community</Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ textDecoration: "underline" }}
                target="_blank"
                href="/"
                opacity="60%"
              >
                Discord
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ textDecoration: "underline" }}
                target="_blank"
                href="/"
                opacity="60%"
              >
                Twitter
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ textDecoration: "underline" }}
                target="_blank"
                href="/"
                opacity="60%"
              >
                Reddit
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                as="a"
                _hover={{ textDecoration: "underline" }}
                target="_blank"
                href="/"
                opacity="60%"
              >
                Medium
              </Text>
            </VStack>
          </GridItem>
        </Grid>
        <HStack
          width={{ base: "80%", md: "100%" }}
          gap={{ base: "0.25rem", md: "0.5rem" }}
          justifyContent={{ base: "flex-start", md: "flex-end" }}
        >
          {/* <Image
            src="/company_logos/discord.svg"
            fill="white"
            alt="GHAF Logo"
          /> */}
          <DiscordIcon fontSize="1.5rem" color="footer-icon" />
          <TwitterIcon fontSize="1.5rem" color="footer-icon" />
          <InstagramIcon fontSize="1.5rem" color="footer-icon" />
          <RedditIcon fontSize="1.5rem" color="footer-icon" />
          <LinkedinIcon fontSize="1.5rem" color="footer-icon" />
          <MediumIcon fontSize="1.5rem" color="footer-icon" />
          <YoutubeIcon fontSize="1.5rem" color="footer-icon" />
          {/* <Image src="/company_logos/twitter.svg" alt="GHAF Logo" />
          <Image src="/company_logos/instagram.svg" alt="GHAF Logo" />
          <Image src="/company_logos/reddit.svg" alt="GHAF Logo" />
          <Image src="/company_logos/linkedin.svg" alt="GHAF Logo" />
          <Image src="/company_logos/medium.svg" alt="GHAF Logo" />
          <Image src="/company_logos/youtube.svg" alt="GHAF Logo" /> */}
        </HStack>
        <Divider
          orientation="horizontal"
          opacity="20%"
          borderBottomWidth="0.20rem"
        />
        <Stack
          direction={{ base: "column", md: "row" }}
          width="100%"
          color={"white"}
          justifyContent="space-between"
        >
          <HStack gap="2rem">
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              as="a"
              _hover={{ textDecoration: "underline" }}
              target="_blank"
              href="/"
              opacity="60%"
            >
              Terms of Service
            </Text>
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              as="a"
              _hover={{ textDecoration: "underline" }}
              target="_blank"
              href="/"
              opacity="60%"
            >
              Privacy Policy
            </Text>
          </HStack>
          <Text
            fontSize={{ base: "xs", md: "sm" }}
            as="a"
            _hover={{ textDecoration: "underline" }}
            target="_blank"
            href="/"
            opacity="60%"
          >
            © 2022 Hashstack Limited
          </Text>
        </Stack>
      </VStack>
    </Box>
  );
}

export default Footer;

// add a bit more margin in the footer
