import {
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Text,
  useDisclosure,
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { HamburgerMenuIcon } from "./Icons";

function Header() {
  const mobileNav = useDisclosure();
  return (
    <Box
      position="sticky"
      display="flex"
      zIndex="10"
      top="0"
      w="full"
      paddingX={4}
      paddingY={4}
      backdropFilter="auto"
      backdropBlur="0.5rem"
      boxShadow="md"
      textColor="header-white"
      bg="header-black-translucent"
    >
      <Flex
        borderBottomRadius="1rem"
        width={{ base: "100%", md: "80%" }}
        alignItems="center"
        justifyContent={{ base: "space-between", lg: "space-between" }}
        mx="auto"
      >
        <Flex alignItems="center">
          <Link
            href="/"
            title="Hashstack Homepage"
            display="flex"
            alignItems="center"
          >
            <Image
              boxSize={{ base: "3rem", md: "4rem" }}
              src="/company_logos/hashstack.svg"
              alt="Company Logo"
            />
            <VisuallyHidden>Hashstack</VisuallyHidden>
          </Link>
          <Text fontSize="2xl" fontWeight="medium" ml="2">
            Hashstack
          </Text>
        </Flex>
        <HStack
          spacing="20"
          mr={1}
          color="brand.500"
          display={{
            base: "none",
            xl: "inline-flex",
          }}
        >
          <Button as="a" variant="link" _hover={{ color: "header-link-hover" }}>
            Community
          </Button>
          <Button as="a" variant="link" _hover={{ color: "header-link-hover" }}>
            Whitepaper
          </Button>
          <Button as="a" variant="link" _hover={{ color: "header-link-hover" }}>
            Contracts
          </Button>
          <Button as="a" variant="link" _hover={{ color: "header-link-hover" }}>
            Docs
          </Button>
        </HStack>
        <HStack display="flex" alignItems="center" spacing={1}>
          <Button
            borderWidth="0.1rem"
            borderColor="background"
            bgGradient={"linear(to-l, header-button-start, header-button-end )"}
            size="lg"
            color="white"
            display={{ base: "none", md: "inline-flex" }}
            transitionDuration="3s"
            _hover={{
              // bgColor: "header-link-hover",
              bgGradient:
                "linear(to-l, header-button-start, header-button-start )",
            }}
            _active={{
              bgGradient:
                "linear(to-l, header-button-start, header-button-end )",
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
            Testnet
          </Button>
          <Box
            display={{
              base: "inline-flex",
              xl: "none",
            }}
          >
            <IconButton
              display={{
                base: "flex",
                xl: "none",
              }}
              aria-label="Open menu"
              fontSize="20px"
              color="white"
              _dark={{
                color: "inherit",
              }}
              variant="ghost"
              icon={<HamburgerMenuIcon />}
              onClick={mobileNav.onOpen}
            />
          </Box>
        </HStack>
      </Flex>
      <VStack
        pos="absolute"
        top={0}
        left={0}
        right={0}
        display={mobileNav.isOpen ? "flex" : "none"}
        flexDirection="column"
        p={2}
        pb={4}
        m={2}
        bg="header-black"
        spacing={3}
        rounded="sm"
        shadow="sm"
      >
        <CloseButton
          aria-label="Close menu"
          onClick={mobileNav.onClose}
          icon={<HamburgerMenuIcon color="white" />}
        />
        <Button w="full" variant="ghost">
          Community
        </Button>
        <Button w="full" variant="ghost">
          Whitepaper
        </Button>
        <Button w="full" variant="ghost">
          Contracts
        </Button>
        <Button w="full" variant="ghost">
          Docs
        </Button>
      </VStack>
    </Box>
  );
}

export default Header;
