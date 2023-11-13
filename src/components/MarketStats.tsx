import React, { useEffect, useState } from 'react'
import { Box, Text, useMediaQuery } from '@chakra-ui/react'
import StarknetLogo from '../assets/Icons/starknetLogo'
import AlchemyLogo from '../assets/Icons/alchemyLogo'
import Link from 'next/link'
import OffchainAPI from '../services/offChainApiCalls'
import numberFormatter from './numberFormater'
const MarketStats = () => {
    const [utilRate, setUtilRate] = useState<any>(9);
    const [tvl, seTtvl] = useState<any>(3000)
    useEffect(()=>{
        const fetchData=async()=>{
            const promise=await OffchainAPI.httpGet('/api/metrics/urm_platform/daily')
            const promiseTvl=await OffchainAPI.httpGet('/api/get-main-metrics');
            seTtvl(promiseTvl?.tvl)
            const response:any=promise[promise?.length-1];
            setUtilRate(Number(response?.totalPlatformURM/100))
        }
        fetchData();
    },[])
    const [isLargerThan1800] = useMediaQuery('(min-width: 1800px)')
    const [isLessThan1475] = useMediaQuery('(max-width: 1475px)')
    const [isLessThan1375] = useMediaQuery('(max-width: 1375px)')
    const [isLargerThan750] = useMediaQuery('(min-height: 750px)')
    const [isLargerThan1600] = useMediaQuery('(min-width: 1600px)')
    const [isLargerThan1700] = useMediaQuery('(min-width: 1700px)')
    const [isHeightLargerThan1000] = useMediaQuery('(min-height: 1000px)')
    const [isLessThan1250] = useMediaQuery('(max-width: 1250px)')
    const margTop=isLargerThan750 ? "2.5rem":"3rem"
    const [isHeightLargerThan880] = useMediaQuery('(min-height: 880px)')
    const gap=isHeightLargerThan1000 && isLargerThan1800?"57rem": isLargerThan1800==true ? "54rem": isLargerThan1700 ?"51rem":   isLargerThan1600?"49rem":isLessThan1375?"26rem": isLessThan1475==true?"30rem":"39rem";
    const [isWidthLessThan1050] = useMediaQuery('(max-width: 1050px)')
    const [isWidthLessThan1130] = useMediaQuery('(max-width: 1130px)')

    return (

        <Box>
            {isHeightLargerThan880 && !isWidthLessThan1050  ?            <Box display="flex" flexDirection="row" gap={gap} mt={margTop} p="0 2rem"  position="fixed" bottom="170"
        // justifyContent={isLargerThan1600 ? "space-around":""} 
       
        >
            <Box display="flex" flexDirection="row" gap="50px">
                <Box>
                    <Text color="#8C8C9B" fontSize="14px" fontWeight="500" fontStyle="normal" fontFamily="inter" mb="0" whiteSpace="nowrap">
                        Utilization Rate
                    </Text>
                    <Text color="#00D395" textAlign="center" fontFamily="inter" fontSize="36px" fontStyle="normal" fontWeight="600" lineHeight="40px" mt="0.4rem" whiteSpace="nowrap">
                        {utilRate? `${utilRate}%`:""}
                    </Text>
                </Box>
                <Box>
                    <Text color="#8C8C9B" fontSize="14px" fontWeight="500" fontStyle="normal" fontFamily="inter" mb="0" whiteSpace="nowrap">
                        Total Value Locked
                    </Text>
                    <Text color="#00D395" textAlign="center" fontFamily="inter" fontSize="36px" fontStyle="normal" fontWeight="600" lineHeight="40px" mt="0.4rem" whiteSpace="nowrap">
                    ${numberFormatter(tvl)}+
                    </Text>
                </Box>

            </Box>
            <Box display="flex" flexDirection="column" >
                <Box textAlign="center" mb="1rem" color="#8C8C9B">
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

            </Box>:            <Box display="flex" flexDirection="row" gap={isWidthLessThan1130 ?"15rem" :isLessThan1250? "20rem": gap} mt={margTop} p="0 2rem" 
        // justifyContent={isLargerThan1600 ? "space-around":""} \
        // alignItems="center"
       
        >
            <Box display="flex" flexDirection="row" gap="50px">
                <Box>
                    <Text color="#8C8C9B" fontSize="14px" fontWeight="500" fontStyle="normal" fontFamily="inter" mb="0" whiteSpace="nowrap">
                        Utilization Rate
                    </Text>
                    <Text color="#00D395" textAlign="center" fontFamily="inter" fontSize="36px" fontStyle="normal" fontWeight="600" lineHeight="40px" mt="0.4rem" whiteSpace="nowrap">
                        {utilRate? `${utilRate}%`:""}
                    </Text>
                </Box>
                <Box>
                    <Text color="#8C8C9B" fontSize="14px" fontWeight="500" fontStyle="normal" fontFamily="inter" mb="0" whiteSpace="nowrap">
                        Total Value Locked
                    </Text>
                    <Text color="#00D395" textAlign="center" fontFamily="inter" fontSize="36px" fontStyle="normal" fontWeight="600" lineHeight="40px" mt="0.4rem" whiteSpace="nowrap">
                    ${numberFormatter(tvl)}+
                    </Text>
                </Box>

            </Box>
            <Box display="flex" flexDirection="column">
                <Box textAlign="center" mb="1rem" color="#8C8C9B">
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

            </Box>}


        </Box>
    )
}

export default MarketStats