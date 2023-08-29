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
  const [isWidthLessThan1350] = useMediaQuery("(max-width: 1350px)");
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
              Homepage
            </Text>
            <Link href="https://docs.hashstack.finance/developers/supply-and-borrow/borrow/use-cases" target="_blank">
            
            <Text
              color="#8C8C9B"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="20px"
              cursor="pointer"
              _hover={{color:"#00D395"}}
              
            >
              Use Cases
            </Text>
            </Link>
            <Link href="https://docs.hashstack.finance/" target="_blank">
              <Text
                color="#8C8C9B"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="20px"
                cursor="pointer"
                _hover={{color:"#00D395"}}
              >
                Documentation
              </Text>
            </Link>
            <Text
              color="#8C8C9B"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="20px"
              cursor="pointer"
              _hover={{color:"#00D395"}}
            >
              Tokenomics
            </Text>
            <Link href="https://hashstack.finance/c2e" target="_blank">
              <Text
                color="#8C8C9B"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="20px"
                cursor="pointer"
                _hover={{color:"#00D395"}}
              >
                Contribute-2-Earn
              </Text>
            </Link>
            <Link href="https://hashstack.finance/whitepaper" target="_blank">
              <Text
                color="#8C8C9B"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="20px"
                cursor="pointer"
                _hover={{color:"#00D395"}}
              >
                Whitepaper
              </Text>
            </Link>
          </Box>
          <Box display="flex" flexDirection="row" gap="2.5rem">
            <Link href="https://docs.hashstack.finance/hub/" target="_blank">
            
            <Box
              display="flex"
              width="40px"
              height="40px"
              padding="8px"
              justifyContent="center"
              alignItems="center"
              borderRadius="6px"
              
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
            </Link>
            <Link href="https://x.com/0xhashstack" target="_blank">
              <Box
                display="flex"
                width="40px"
                height="40px"
                padding="8px"
                justifyContent="center"
                alignItems="center"
                borderRadius="6px"
                
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
              href="https://drive.google.com/drive/folders/1ysun5L45Ib4MZAOGr8v9BK-CpZuMpXJr"
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
          <Box display="flex" flexDirection="row" gap={isWidthLessThan1350 ?"2rem":"2.5rem"}>
            <Text
              color="#00D395"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="20px"
              cursor="pointer"
            >
              Homepage
            </Text>
            <Link href="https://docs.hashstack.finance/developers/supply-and-borrow/borrow/use-cases" target="_blank">
            
            <Text
              color="#8C8C9B"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="20px"
              cursor="pointer"
              _hover={{color:"#00D395"}}
              
            >
              Use Cases
            </Text>
            </Link>
            <Link href="https://docs.hashstack.finance/" target="_blank">
              <Text
                color="#8C8C9B"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="20px"
                cursor="pointer"
                _hover={{color:"#00D395"}}
              
              >
                Documentation
              </Text>
            </Link>
            <Text
              color="#8C8C9B"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="20px"
              cursor="pointer"
              _hover={{color:"#00D395"}}
              
            >
              Tokenomics
            </Text>
            <Link href="https://hashstack.finance/c2e" target="_blank">
              <Text
                color="#8C8C9B"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="20px"
                cursor="pointer"
                _hover={{color:"#00D395"}}
              
              >
                Contribute-2-Earn
              </Text>
            </Link>
            <Link href="https://hashstack.finance/whitepaper" target="_blank">
              <Text
                color="#8C8C9B"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="20px"
                cursor="pointer"
                _hover={{color:"#00D395"}}
              
              >
                Whitepaper
              </Text>
            </Link>
          </Box>
          <Box display="flex" flexDirection="row" gap={isWidthLessThan1350 ?"1.5rem":"2.5rem"}>
            <Link href="https://docs.hashstack.finance/hub/" target="_blank">
            <Box
              display="flex"
              width="40px"
              height="40px"
              padding="8px"
              justifyContent="center"
              alignItems="center"
              borderRadius="6px"
              
              bg="#100F1D"
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
            </Link>
            <Link href="https://x.com/0xhashstack" target="_blank">
            <Box
              display="flex"
              width="40px"
              height="40px"
              padding="8px"
              justifyContent="center"
              alignItems="center"
              borderRadius="6px"
              bg="#100F1D"
              cursor="pointer"
              _hover={{
                background: "#4D59E8",
                border: "1px solid #2B2F35",
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
              
              bg="#100F1D"
              cursor="pointer"
              _hover={{
                background: "#4D59E8",
                border: "1px solid #2B2F35",
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
              
              bg="#100F1D"
              cursor="pointer"
              _hover={{
                background: "#4D59E8",
                border: "1px solid #2B2F35",
              }}
              onMouseEnter={() => setDashboardHover(4)}
              onMouseLeave={() => setDashboardHover(0)}
            >
          
                {dashboardHover == 4 ? <GithubIconWhite /> : <GithubIcon />}
            </Box>
              </Link>
              <Link
                href="https://drive.google.com/drive/folders/1ysun5L45Ib4MZAOGr8v9BK-CpZuMpXJr"
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
              
              bg="#100F1D"
              cursor="pointer"
              _hover={{
                background: "#4D59E8",
                border: "1px solid #2B2F35",
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
              
              bg="#100F1D"
              cursor="pointer"
              _hover={{
                background: "#4D59E8",
                border: "1px solid #2B2F35",
              }}
              onMouseEnter={() => setDashboardHover(6)}
              onMouseLeave={() => setDashboardHover(0)}
            >

                {dashboardHover == 6 ? <QueryIconWhite /> : <QueryIcon />}
            </Box>
              </Link>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Footer;
