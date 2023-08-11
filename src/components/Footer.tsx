import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";
import DicordLogo from "../assets/Icons/dicordLogo";
import InfoIcon from "../assets/Icons/infoIcon";
import TwitterIcon from "../assets/Icons/twitterIcon";
import GithubIcon from "../assets/Icons/githubIcon";
import FileIcon from "../assets/Icons/fileIcon";
import QueryIcon from "../assets/Icons/queryIcon";
import InfoIconWhite from "../assets/Icons/infoIconWhite";
import Link from "next/link";
import TwitterIconWhite from "../assets/Icons/twitterIconWhite";
import DiscordLogoWhite from "../assets/Icons/discordLogoWhite";
import GithubIconWhite from "../assets/Icons/githubIconWhite";
import FileIconWhite from "../assets/Icons/fileIconWhite";
import QueryIconWhite from "../assets/Icons/queryIconWhite";

const Footer = () => {
  const [dashboardHover, setDashboardHover] = useState(0);
  const [isLargerThan750] = useMediaQuery("(min-height: 750px)");
  const [isHeightLargerThan880] = useMediaQuery("(min-height: 880px)");
  const [isLargerThan1800] = useMediaQuery("(min-width: 1800px)");
  const padBottom = isLargerThan750 ? "2.7rem" : "1rem";
  const padTop = isLargerThan750 ? "1rem" : "0rem";
  const [isWidthLessThan1050] = useMediaQuery("(max-width: 1050px)");
  return (
    <Box>
      {isHeightLargerThan880 && !isWidthLessThan1050 ? (
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          position="fixed"
          bottom="0"
          pt="1rem"
          pl="2rem"
          pr="2rem"
          pb="1rem"
          width="100%"
        >
          <Box display="flex" flexDirection="row" gap="2.5rem">
            <Text
              color="#00D395"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="20px"
              cursor="pointer"
            >
              HomePage
            </Text>
            <Text
              color="#fff"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="20px"
              cursor="pointer"
            >
              Use Cases
            </Text>
            <Link href="https://docs.hashstack.finance/" target="_blank">
              <Text
                color="#fff"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="20px"
                cursor="pointer"
              >
                Documentation
              </Text>
            </Link>
            <Text
              color="#fff"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="20px"
              cursor="pointer"
            >
              Tokenomics
            </Text>
            <Link href="https://hashstack.finance/c2e" target="_blank">
              <Text
                color="#fff"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="20px"
                cursor="pointer"
              >
                Contribute-2-Earn
              </Text>
            </Link>
            <Link href="https://hashstack.finance/whitepaper" target="_blank">
              <Text
                color="#fff"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="20px"
                cursor="pointer"
              >
                White Paper
              </Text>
            </Link>
          </Box>
          <Box display="flex" flexDirection="row" gap="2.5rem">
            <Box
              display="flex"
              width="40px"
              height="40px"
              padding="8px"
              justifyContent="center"
              alignItems="center"
              borderRadius="6px"
              border="1px solid #2B2F35"
              bg="#161B22"
              cursor="pointer"
              onMouseEnter={() => setDashboardHover(1)}
              onMouseLeave={() => setDashboardHover(0)}
              _hover={{
                background: "#4D59E8",
              }}
            >
              {dashboardHover == 1 ? <InfoIconWhite /> : <InfoIcon />}
            </Box>
            <Link href="https://x.com/0xhashstack" target="_blank">
              <Box
                display="flex"
                width="40px"
                height="40px"
                padding="8px"
                justifyContent="center"
                alignItems="center"
                borderRadius="6px"
                border="1px solid #2B2F35"
                bg="#161B22"
                cursor="pointer"
                _hover={{
                  background: "#4D59E8",
                }}
                onMouseEnter={() => setDashboardHover(2)}
                onMouseLeave={() => setDashboardHover(0)}
              >
                {dashboardHover == 2 ? <TwitterIconWhite /> : <TwitterIcon />}
              </Box>
            </Link>
            <Link href="https://discord.gg/hashstack" target="_blank">
              <Box
                display="flex"
                width="40px"
                height="40px"
                padding="8px"
                justifyContent="center"
                alignItems="center"
                borderRadius="6px"
                border="1px solid #2B2F35"
                bg="#161B22"
                cursor="pointer"
                _hover={{
                  background: "#4D59E8",
                }}
                onMouseEnter={() => setDashboardHover(3)}
                onMouseLeave={() => setDashboardHover(0)}
              >
                {dashboardHover == 3 ? <DiscordLogoWhite /> : <DicordLogo />}
              </Box>
            </Link>
            <Link href="https://github.com/0xHashstack/" target="_blank">
              <Box
                display="flex"
                width="40px"
                height="40px"
                padding="8px"
                justifyContent="center"
                alignItems="center"
                borderRadius="6px"
                border="1px solid #2B2F35"
                bg="#161B22"
                cursor="pointer"
                _hover={{
                  background: "#4D59E8",
                }}
                onMouseEnter={() => setDashboardHover(4)}
                onMouseLeave={() => setDashboardHover(0)}
              >
                {dashboardHover == 4 ? <GithubIconWhite /> : <GithubIcon />}
              </Box>
            </Link>
            <Link
              href="https://drive.google.com/drive/folders/1MwIGFymRuE8FWGDRCJjPBQwNBjhX_Dro"
              target="_blank"
            >
              <Box
                display="flex"
                width="40px"
                height="40px"
                padding="8px"
                justifyContent="center"
                alignItems="center"
                borderRadius="6px"
                border="1px solid #2B2F35"
                bg="#161B22"
                cursor="pointer"
                _hover={{
                  background: "#4D59E8",
                }}
                onMouseEnter={() => setDashboardHover(5)}
                onMouseLeave={() => setDashboardHover(0)}
              >
                {dashboardHover == 5 ? <FileIconWhite /> : <FileIcon />}
              </Box>
            </Link>
            <Link
              href="https://docs.hashstack.finance/hub/faqs"
              target="_blank"
            >
              <Box
                display="flex"
                width="40px"
                height="40px"
                padding="8px"
                justifyContent="center"
                alignItems="center"
                borderRadius="6px"
                border="1px solid #2B2F35"
                bg="#161B22"
                cursor="pointer"
                _hover={{
                  background: "#4D59E8",
                }}
                onMouseEnter={() => setDashboardHover(6)}
                onMouseLeave={() => setDashboardHover(0)}
              >
                {dashboardHover == 6 ? <QueryIconWhite /> : <QueryIcon />}
              </Box>
            </Link>
          </Box>
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          pt="1rem"
          pl="2rem"
          pr="2rem"
          pb="1rem"
          width="100%"
        >
          <Box display="flex" flexDirection="row" gap="2.5rem">
            <Text
              color="#4D59E8"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="20px"
              cursor="pointer"
            >
              HomePage
            </Text>
            <Text
              color="#fff"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="20px"
              cursor="pointer"
            >
              Use Cases
            </Text>
            <Link href="https://docs.hashstack.finance/" target="_blank">
              <Text
                color="#fff"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="20px"
                cursor="pointer"
              >
                Documentation
              </Text>
            </Link>
            <Text
              color="#fff"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="20px"
              cursor="pointer"
            >
              Tokenomics
            </Text>
            <Link href="https://hashstack.finance/c2e" target="_blank">
              <Text
                color="#fff"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="20px"
                cursor="pointer"
              >
                Contribute-2-Earn
              </Text>
            </Link>
            <Link href="https://hashstack.finance/whitepaper" target="_blank">
              <Text
                color="#fff"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="20px"
                cursor="pointer"
              >
                White Paper
              </Text>
            </Link>
          </Box>
          <Box display="flex" flexDirection="row" gap="2.5rem">
            <Box
              display="flex"
              width="40px"
              height="40px"
              padding="8px"
              justifyContent="center"
              alignItems="center"
              borderRadius="6px"
              border="1px solid #2B2F35"
              bg="#161B22"
              cursor="pointer"
              onMouseEnter={() => setDashboardHover(1)}
              onMouseLeave={() => setDashboardHover(0)}
              _hover={{
                background: "#4D59E8",
                border: "1px solid #2B2F35",
              }}
            >
              {dashboardHover == 1 ? <InfoIconWhite /> : <InfoIcon />}
            </Box>

            <Box
              display="flex"
              width="40px"
              height="40px"
              padding="8px"
              justifyContent="center"
              alignItems="center"
              borderRadius="6px"
              border="1px solid #2B2F35"
              bg="#161B22"
              cursor="pointer"
              _hover={{
                background: "#4D59E8",
                border: "1px solid #2B2F35",
              }}
              onMouseEnter={() => setDashboardHover(2)}
              onMouseLeave={() => setDashboardHover(0)}
            >
              <Link href="https://x.com/0xhashstack" target="_blank">
                {dashboardHover == 2 ? <TwitterIconWhite /> : <TwitterIcon />}
              </Link>
            </Box>

            <Box
              display="flex"
              width="40px"
              height="40px"
              padding="8px"
              justifyContent="center"
              alignItems="center"
              borderRadius="6px"
              border="1px solid #2B2F35"
              bg="#161B22"
              cursor="pointer"
              _hover={{
                background: "#4D59E8",
                border: "1px solid #2B2F35",
              }}
              onMouseEnter={() => setDashboardHover(3)}
              onMouseLeave={() => setDashboardHover(0)}
            >
              <Link href="https://discord.gg/hashstack" target="_blank">
                {dashboardHover == 3 ? <DiscordLogoWhite /> : <DicordLogo />}
              </Link>
            </Box>

            <Box
              display="flex"
              width="40px"
              height="40px"
              padding="8px"
              justifyContent="center"
              alignItems="center"
              borderRadius="6px"
              border="1px solid #2B2F35"
              bg="#161B22"
              cursor="pointer"
              _hover={{
                background: "#4D59E8",
                border: "1px solid #2B2F35",
              }}
              onMouseEnter={() => setDashboardHover(4)}
              onMouseLeave={() => setDashboardHover(0)}
            >
              <Link href="https://github.com/0xHashstack/" target="_blank">
                {dashboardHover == 4 ? <GithubIconWhite /> : <GithubIcon />}
              </Link>
            </Box>

            <Box
              display="flex"
              width="40px"
              height="40px"
              padding="8px"
              justifyContent="center"
              alignItems="center"
              borderRadius="6px"
              border="1px solid #2B2F35"
              bg="#161B22"
              cursor="pointer"
              _hover={{
                background: "#4D59E8",
                border: "1px solid #2B2F35",
              }}
              onMouseEnter={() => setDashboardHover(5)}
              onMouseLeave={() => setDashboardHover(0)}
            >
              <Link
                href="https://drive.google.com/drive/folders/1MwIGFymRuE8FWGDRCJjPBQwNBjhX_Dro"
                target="_blank"
              >
                {dashboardHover == 5 ? <FileIconWhite /> : <FileIcon />}
              </Link>
            </Box>

            <Box
              display="flex"
              width="40px"
              height="40px"
              padding="8px"
              justifyContent="center"
              alignItems="center"
              borderRadius="6px"
              border="1px solid #2B2F35"
              bg="#161B22"
              cursor="pointer"
              _hover={{
                background: "#4D59E8",
                border: "1px solid #2B2F35",
              }}
              onMouseEnter={() => setDashboardHover(6)}
              onMouseLeave={() => setDashboardHover(0)}
            >
              <Link
                href="https://docs.hashstack.finance/hub/faqs"
                target="_blank"
              >
                {dashboardHover == 6 ? <QueryIconWhite /> : <QueryIcon />}
              </Link>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Footer;
