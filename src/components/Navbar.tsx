import React, { useState } from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Text,
  useDisclosure,
  useMediaQuery,
  Image,
} from "@chakra-ui/react";
import HashstackLogo from "../assets/Icons/hashstackLogo";
import DicordLogo from "../assets/Icons/dicordLogo";
import { useRouter } from "next/router";
import DiscordLogoWhite from "../assets/Icons/discordLogoWhite";
import Link from "next/link";
import HashstackLogoMobile from "../assets/Icons/hashstackLogoMobile";
import { useDrawContext } from '../context/DrawerContext'
const Navbar = () => {
  const router = useRouter();
  const { isDrawerOpen, toggleDrawer } = useDrawContext();
  const [dashboardHover, setDashboardHover] = useState(false);
  const [isLessThan1210] = useMediaQuery("(max-width: 1210px)");
  const [isLessThan500] = useMediaQuery("(max-width: 500px)");
  const [size, setSize] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = (newSize: any) => {
    setSize(newSize);
    toggleDrawer();
    onOpen();
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      w="100%"
      p={isLessThan500 ? "1rem 1rem" : "0 2rem"}
      bg="transparent"
      color="white" // Assuming the text color should be white
    >
      {/* Left side with "Hashstack" text */}
      <Box display="flex" flexDirection="row" cursor="pointer">
        {isLessThan500 ? <HashstackLogoMobile /> : <HashstackLogo />}
      </Box>

      {/* Right side with launch app and Discord app logos */}
      <Box
        display="inline-flex"
        alignItems="center"
        gap="8px"
        height="64px"
        padding="16px 0px"
        justifyContent="center"
        flexShrink="0"
      >
        {/* Assuming you have the logo for launch app in an image file */}
        {!isLessThan500 && <Box
          display="flex"
          height="40px"
          width="109px"
          alignItems="center"
          justifyContent="center"
          background="#EEEFF2"
          box-shadow= "0px 1px 0px 0px rgba(27, 31, 35, 0.10)"
          gap="8px"
          borderRadius="6px"
          color="#060216"
          cursor="pointer"
          _hover={{
            background:"#EEEFF2",
            color: "#060216",
          }}
        >
          <Link href="https://app.hashstack.finance/" target="_blank">
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="20px"
              letterSpacing="-0.15px"
            >
              Launch App
            </Text>
          </Link>
        </Box>}

        {isLessThan1210 && <Box onClick={() => handleClick("sm")}>
          <Image
            src="/hamburgerIcon.svg"
            alt="picture of author"
          // width={40}
          // height={40}
          />
        </Box>}

        <Drawer onClose={onClose} isOpen={isOpen} size={"sm"}>
          <DrawerOverlay />
          <DrawerContent zIndex={500}>
            {/* <DrawerCloseButton width="50%"  /> */}
            <DrawerBody >
              <Box display="flex" bg="#000" alignItems="center" height="100vh" flexDirection="column">
                <Box display="flex" flexDirection="row" cursor="pointer" mt="2rem">
                  {isLessThan500 ? <HashstackLogoMobile /> : <HashstackLogo />}
                </Box>
                <Text
                  color="#00D395"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="500"
                  width="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  lineHeight="20px"
                  cursor="pointer"
                  height="64px"
                  mt="2rem"
                  border="1px solid rgb(26, 26, 31)"
                  mb="0rem"
                >
                  Home
                </Text>
                <Text
                  color="#fff"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="20px"
                  cursor="pointer"
                  width="100%"
                  textAlign="center"
                  height="64px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="1px solid rgb(26, 26, 31)"
                  margin="0"
                  onClick={() => {
                    router.push('https://docs.hashstack.finance/')
                  }}
                >
                  Docs
                </Text>
                <Text
                  color="#fff"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="20px"
                  cursor="pointer"
                  width="100%"
                  textAlign="center"
                  height="64px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="1px solid rgb(26, 26, 31)"
                  margin="0"
                  onClick={() => {
                    router.push('https://docs.hashstack.finance/developers/')
                  }}
                >
                  Developers
                </Text>
                <Text
                  color="#fff"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="20px"
                  cursor="pointer"
                  width="100%"
                  textAlign="center"
                  height="64px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="1px solid rgb(26, 26, 31)"
                  margin="0"
                  onClick={() => {
                    router.push('https://docs.hashstack.finance/developers/supply-and-borrow/borrow/use-cases')
                  }}
                >
                  Use-cases
                </Text>
                <Text
                  color="#fff"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="20px"
                  cursor="pointer"
                  width="100%"
                  textAlign="center"
                  height="64px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="1px solid rgb(26, 26, 31)"
                  margin="0"
                >
                  Tokenomics
                </Text>
                <Box>
                </Box>
                <Text
                  color="#fff"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="20px"
                  cursor="pointer"
                  width="100%"
                  textAlign="center"
                  height="64px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="1px solid rgb(26, 26, 31)"
                  margin="0"
                  onClick={() => {
                    router.push('https://hashstack.finance/c2e')
                  }}
                >
                  Contribute-2-Earn
                </Text>
                <DrawerCloseButton width="48px" height="48px" borderRadius="8px" bg="rgba(255, 255, 255, 0.04)" mt="5rem" onClick={toggleDrawer} />
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex>
  );
};

export default Navbar;
