import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import MaxBorrow from '../assets/Icons/maxBorrow'
import Image from 'next/image'
import BorrowTrade from '../assets/Images/Frame.png'
const Content = () => {
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between" p="0 2rem">
        <Box display="flex" flexDirection="column" mt="10rem">
            <MaxBorrow/>
            <Text color="#858786" fontFamily="inter" fontSize="36px" fontStyle="normal" fontWeight="300" lineHeight="normal" letterSpacing="0.64px" mt="0.4rem">
                of your collateral for liquidity mining,
                <br/>
                trading needs.</Text>
        </Box>
        <Box mt="3rem">
            {/* <AnimatedFrame/> */}
            <Image
            src={BorrowTrade}
            alt="Image"
                
            />
        </Box>
    </Box>
  )
}

export default Content