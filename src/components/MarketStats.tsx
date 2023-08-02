import React, { useEffect, useState } from 'react'
import { Box, Text, useMediaQuery } from '@chakra-ui/react'
import StarknetLogo from '../assets/Icons/starknetLogo'
import AlchemyLogo from '../assets/Icons/alchemyLogo'
import Link from 'next/link'
import OffchainAPI from '../services/offChainApiCalls'
const MarketStats = () => {
    const [utilRate, setUtilRate] = useState<any>();
    useEffect(()=>{
        const fetchData=async()=>{
            const promise=await OffchainAPI.httpGet('/api/metrics/urm_platform/daily')
            const response:any=promise[promise?.length-1];
            setUtilRate(Number(response?.totalPlatformURM/100))
        }
        fetchData();
    },[])
    const [isLargerThan1800] = useMediaQuery('(min-width: 1800px)')
    const gap=isLargerThan1800==true ? "60rem":"45rem";
    console.log(gap,"screen")
    return (
        <Box display="flex" flexDirection="row" gap={gap} mt="1rem" p="0 2rem">
            <Box display="flex" flexDirection="row" gap="50px">
                <Box>
                    <Text color="#BDBFC1" fontSize="14px" fontWeight="500" fontStyle="normal" fontFamily="inter" mb="0">
                        Utilization Rate
                    </Text>
                    <Text color="#00D395" textAlign="center" fontFamily="inter" fontSize="36px" fontStyle="normal" fontWeight="600" lineHeight="40px" mt="0.4rem">
                        {utilRate} %
                    </Text>
                </Box>
                <Box>
                    <Text color="#BDBFC1" fontSize="14px" fontWeight="500" fontStyle="normal" fontFamily="inter" mb="0">
                        Total value locked
                    </Text>
                    <Text color="#00D395" textAlign="center" fontFamily="inter" fontSize="36px" fontStyle="normal" fontWeight="600" lineHeight="40px" mt="0.4rem">
                        $ 15.44m
                    </Text>
                </Box>

            </Box>
            <Box display="flex" flexDirection="column" >
                <Box textAlign="center" mb="1rem">
                    Powered by
                </Box>
                <Box display="flex" flexDirection="row" gap="2rem" >
                    <Box cursor="pointer">
                        <Link href="https://www.starknet.io/en" target="_blank">
                            <StarknetLogo />
                        </Link>
                    </Box>
                    <Box cursor="pointer">
                        <Link href="https://www.alchemy.com" target="_blank">
                        <AlchemyLogo />
                        </Link>
                    </Box>

                </Box>
            </Box>

        </Box>
    )
}

export default MarketStats