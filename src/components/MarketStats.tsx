import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import StarknetLogo from '../assets/Icons/starknetLogo'
import AlchemyLogo from '../assets/Icons/alchemyLogo'
const MarketStats = () => {
    return (
        <Box display="flex" flexDirection="row" gap="45rem" mt="1rem" p="0 2rem">
            <Box display="flex" flexDirection="row" gap="50px">
                <Box>
                    <Text color="#BDBFC1" fontSize="14px" fontWeight="500" fontStyle="normal" fontFamily="inter" mb="0">
                        Utilization Rate
                    </Text>
                    <Text color="#00D395" textAlign="center" fontFamily="inter" fontSize="36px" fontStyle="normal" fontWeight="600" lineHeight="40px" mt="0.4rem">
                        33.03 %
                    </Text>
                </Box>
                <Box>
                    <Text color="#BDBFC1" fontSize="14px" fontWeight="500" fontStyle="normal" fontFamily="inter" mb="0">
                        Total value locked
                    </Text>
                    <Text color="#00D395" textAlign="center" fontFamily="inter" fontSize="36px" fontStyle="normal" fontWeight="600" lineHeight="40px" mt="0.4rem">
                        $ 1.44m
                    </Text>
                </Box>

            </Box>
            <Box display="flex" flexDirection="column" >
                <Box textAlign="center" mb="1rem">
                    Powered by
                </Box>
                <Box display="flex" flexDirection="row" gap="2rem" >
                    <Box cursor="pointer">
                        <StarknetLogo />
                    </Box>
                    <Box cursor="pointer">

                        <AlchemyLogo />
                    </Box>

                </Box>
            </Box>

        </Box>
    )
}

export default MarketStats