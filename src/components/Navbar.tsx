import React, { useState } from 'react'
import { Box, Flex, HStack, Text, useMediaQuery } from '@chakra-ui/react'
import HashstackLogo from '../assets/Icons/hashstackLogo'
import DicordLogo from '../assets/Icons/dicordLogo'
import { useRouter } from 'next/router'
import DiscordLogoWhite from '../assets/Icons/discordLogoWhite'
import Link from 'next/link'
import HashstackLogoMobile from '../assets/Icons/hashstackLogoMobile'
const Navbar = () => {
  const router = useRouter();
  const [dashboardHover, setDashboardHover] = useState(false);
  const [isLessThan1210] = useMediaQuery('(max-width: 1210px)')
  const [isLessThan500] = useMediaQuery('(max-width: 500px)')
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      w="100%"
      p={isLessThan500 ?"1rem 1rem":"0 2rem"}
      bg="transparent"
      color="white" // Assuming the text color should be white
    >
      {/* Left side with "Hashstack" text */}
      <Box display="flex" flexDirection="row" cursor="pointer" >
        {isLessThan500 ? <HashstackLogoMobile/>: <HashstackLogo />}
       
      </Box>

      {/* Right side with launch app and Discord app logos */}
      {!isLessThan500 ? <Box display="inline-flex" alignItems="center" gap="8px" height="64px" padding="16px 0px" justifyContent="center" flexShrink="0">
        {/* Assuming you have the logo for launch app in an image file */}

        <Box display="flex" height="40px" width="109px" alignItems="center" justifyContent="center" gap="8px" border="1px solid #4D59E8" borderRadius="4px" color="#4D59E8" cursor="pointer" _hover={{
          background: "#4D59E8",
          color: "#fff"
        }}
        >
          <Link href="https://testnet.hashstack.finance" target="_blank">
            <Text fontFamily="Inter" fontSize="14px" fontStyle="normal" fontWeight="500" lineHeight="20px" letterSpacing="-0.15px">Launch App</Text>
          </Link>
        </Box>

        <Box display="flex" width="40px" height="40px" padding="8px" justifyContent="center" alignItems="center" borderRadius="6px" border="1px solid #2B2F35" bg="#161B22" cursor="pointer" _hover={{
          background: "#4D59E8",
        }}
          onMouseEnter={() => setDashboardHover(true)}
          onMouseLeave={() => setDashboardHover(false)}
        >
          <Link href="https://discord.gg/hashstack" target='_blank'>
            {dashboardHover ? <DiscordLogoWhite /> : <DicordLogo />}
          </Link>

        </Box>
      </Box> : ""}

    </Flex>
  )
}

export default Navbar