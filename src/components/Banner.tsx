import React from 'react'
import { Box } from '@chakra-ui/react'
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { useMediaQuery } from '@chakra-ui/react'
const Banner = () => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
  const [isLessThan500] = useMediaQuery('(max-width: 500px)')
  return (
    <Box 
        bg="#000"
        textAlign="center"
        // pt="100rem"
        paddingTop="0.2rem"
        paddingBottom="0.2rem"
        color="#00D395"
        height="27px"
        fontSize={isLessThan500 ?"14px":"18px"}
        fontStyle="normal"
        fontWeight="500"
        lineHeight="20px"
        width="100%"
        letterSpacing="-0.15px"
        textShadow=" 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        fontFamily="inter"
        margin="0"
    >
        Update: V1 mainnet is live
    </Box>
  )
}

export default Banner