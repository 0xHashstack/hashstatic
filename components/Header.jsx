import {
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { urls } from "../consts/urls";
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
      paddingY={4}
      backdropFilter="auto"
      backdropBlur="0.5rem"
      boxShadow="md"
      textColor="header-white"
      bg="header-black-translucent"
    >
      <Flex
        borderBottomRadius="1rem"
        width={{ base: "90%", md: "90%", xl: "85%", "2xl": "80%" }}
        alignItems="center"
        justifyContent={{
          base: "space-between",
          md: "space-between",
          xl: "space-between",
        }}
        mx="auto"
      >
        <Flex alignItems="center">
          <HStack
            fontSize={{
              base: "1.3rem",
              md: "2xl",
              xl: "3xl",
            }}
            textColor="white"
            // paddingLeft={{ xl: "2rem" }}
          >
            <Image
              boxSize={{
                base: "1.7rem",
                md: "3rem",
              }}
              src="/company_logos/hashstack.svg"
              // src="/company_logos/doge.png"
              alt="Company Logo"
            />
            <Link
              _hover={{ textDecoration: "none" }}
              href="/"
              target="_blank"
              title="Hashstack Homepage"
            >
              <Box
                href="/"
                fontWeight="medium"
                display="flex"
                alignItems="start"
                justifyContent="center"
                lineHeight="1rem"
              >
                Hashstack
              </Box>
            </Link>
          </HStack>
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
          <Button
            as="a"
            variant="link"
            href={urls.About}
            target="_blank"
            _hover={{ color: "header-link-hover" }}
          >
            About
          </Button>
          <Button
            as="a"
            variant="link"
            href="https://hashstack.crew3.xyz/questboard"
            target="_blank"
            _hover={{ color: "header-link-hover" }}
          >
            Contribute-2-Earn
          </Button>
          <Button
            as="a"
            variant="link"
            href={urls.Community}
            target="_blank"
            _hover={{ color: "header-link-hover" }}
          >
            Community
          </Button>
          <Button
            as="a"
            href={urls.Developers}
            target="_blank"
            variant="link"
            _hover={{ color: "header-link-hover" }}
          >
            Developers
          </Button>
          <Button
            as="a"
            href={urls.Invest}
            target="_blank"
            variant="link"
            _hover={{ color: "header-link-hover" }}
          >
            Invest
          </Button>
        </HStack>
        <HStack display="flex" alignItems="center" spacing={{ md: "2.5rem" }}>
          <Button
            borderWidth="0.1rem"
            as="a"
            href="https://spearmint.xyz/p/hashstack"
            target="_blank"
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
            fontWeight={500}
          >
            Join Waitlist
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
        <Button
          w="full"
          href={urls.Community}
          target="_blank"
          as="a"
          variant="link"
        >
          Community
        </Button>
        <Button
          w="full"
          href={urls.Whitepaper}
          target="_blank"
          as="a"
          variant="link"
        >
          Whitepaper
        </Button>
        <Button
          w="full"
          href={urls.Contracts}
          target="_blank"
          as="a"
          variant="link"
        >
          Contracts
        </Button>
        <Button w="full" href={urls.Docs} target="_blank" as="a" variant="link">
          Docs
        </Button>
      </VStack>
    </Box>
  );
}

export default Header;
