import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { urls } from "../consts/urls";
import {
  InstagramIcon,
  LinkedinIcon,
  RedditIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./Icons";

function Contribute() {
  return (
    <Box
      // bgColor="background"
      display="flex"
      alignItems="center"
      justifyContent="center"
      paddingTop={{ base: "6rem", xl: "8rem" }}
      paddingBottom={{ base: "6rem", xl: "12rem" }}
    >
      <VStack
        width={{ base: "85%", md: "60%", xl: "45%", "2xl": "40%" }}
        spacing="2rem"
      >
        <Button
          as="a"
          borderWidth="0.1rem"
          borderColor="background"
          bgGradient={"linear(to-l, header-button-start, header-button-end )"}
          size="lg"
          color="white"
          href="https://hashstack.crew3.xyz/questboard"
          target="_blank"
          transition="1s"
          padding={{ md: "1.8rem" }}
          _hover={{
            // bgColor: "header-link-hover",
            bgGradient:
              "linear(to-l, header-button-start, header-button-start )",
          }}
          _active={{
            bgGradient: "linear(to-l, header-button-start, header-button-end )",
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
          Contribute-2-Earn
        </Button>
        <Text
          textAlign="center"
          textColor="hero-grey"
          lineHeight={{ base: "1.25rem", md: "1.5rem" }}
          fontSize={{ base: "0.9rem", lg: "1.1rem" }}
          opacity="90%"
          // letterSpacing={{ base: "0.05rem", md: "0.08rem", xl: "0.1rem" }}
          fontWeight={500}
        >
          Learn more about Hashstack and join our community in shaping the
          future of decentralized finance.
        </Text>
        <HStack spacing="2rem" justifyContent="space-between">
          <a target="_blank" rel="noreferrer" href={urls.Twitter}>
            <TwitterIcon
              fontSize="1.5rem"
              color="contribute-icon"
              _hover={{ color: "white" }}
            />
          </a>
          <a target="_blank" rel="noreferrer" href={urls.Instagram}>
            <InstagramIcon
              fontSize="1.5rem"
              color="contribute-icon"
              _hover={{ color: "white" }}
            />
          </a>

          <a target="_blank" rel="noreferrer" href={urls.Reddit}>
            <RedditIcon
              fontSize="1.5rem"
              color="contribute-icon"
              _hover={{ color: "white" }}
            />
          </a>

          <a target="_blank" rel="noreferrer" href={urls.Youtube}>
            <YoutubeIcon
              fontSize="1.5rem"
              color="contribute-icon"
              _hover={{ color: "white" }}
            />
          </a>

          <a target="_blank" rel="noreferrer" href={urls.Linkedin}>
            <LinkedinIcon
              fontSize="1.5rem"
              color="contribute-icon"
              _hover={{ color: "white" }}
            />
          </a>
        </HStack>
      </VStack>
    </Box>
  );
}

export default Contribute;
