import React from 'react'
import { Box } from '@chakra-ui/react'
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { useMediaQuery } from '@chakra-ui/react'
const Banner = () => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
  // console.log(isLargerThan800,"true")
  return (
    <Box 
        bg="#000"
        textAlign="center"
        // pt="100rem"
        color="#00D395"
        height="25px"
        fontSize="18px"
        fontStyle="normal"
        fontWeight="500"
        lineHeight="20px"
        width="100%"
        letterSpacing="-0.15px"
        textShadow=" 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        fontFamily="inter"
        p="0"
    >
        Update: Hashstack's v1 public testnet is live
    </Box>
  )
}

export default Banner