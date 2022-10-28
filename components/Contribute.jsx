import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
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
      paddingY={{ base: "6rem", xl: "8rem" }}
    >
      <VStack
        width={{ base: "90%", md: "60%", xl: "45%", "2xl": "35%" }}
        gap="2rem"
      >
        <Button
          as="a"
          borderWidth="0.1rem"
          borderColor="background"
          bgGradient={"linear(to-l, header-button-start, header-button-end )"}
          size="lg"
          color="white"
          href="/"
          _hover={{
            color: "header-link-hover",
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
        >
          Contribute
        </Button>
        <Text
          textAlign="center"
          textColor="hero-grey"
          lineHeight="20px"
          fontSize={{ base: "0.9rem", lg: "1.1rem" }}
          opacity="60%"
          // letterSpacing={{ base: "0.05rem", md: "0.08rem", xl: "0.1rem" }}
        >
          Learn more about Hashstack, chat with the team, others in the
          community, and have your say in shaping the future of decentralized
          finance.
        </Text>
        <HStack gap="2rem" justifyContent="space-between">
          <TwitterIcon
            fontSize="1.5rem"
            color="white"
            _hover={{ color: "footer-icon" }}
          />
          <InstagramIcon
            fontSize="1.5rem"
            color="white"
            _hover={{ color: "footer-icon" }}
          />
          <RedditIcon
            fontSize="1.5rem"
            color="white"
            _hover={{ color: "footer-icon" }}
          />
          <YoutubeIcon
            fontSize="1.5rem"
            color="white"
            _hover={{ color: "footer-icon" }}
          />
          <LinkedinIcon
            fontSize="1.5rem"
            color="white"
            _hover={{ color: "footer-icon" }}
          />
        </HStack>
      </VStack>
    </Box>
  );
}

export default Contribute;
