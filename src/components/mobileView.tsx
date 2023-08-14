import { Box, useMediaQuery, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import Link from 'next/link'
import OffchainAPI from '../services/offChainApiCalls'
import AlchemyLogo from '../assets/Icons/alchemyLogo'
import StarknetLogo from '../assets/Icons/starknetLogo'
import RunningBanner from './RunningBanner'
import Marquee from 'react-fast-marquee'
import { urls } from '../consts/urls'
import { useDrawContext } from '../context/DrawerContext'

const MobileView = () => {
    // const [isLessThan500] = useMediaQuery('(max-width: 500px)')
    const [utilRate, setUtilRate] = useState<any>();
    const [dashboardHover, setDashboardHover] = useState(0);
    const { isDrawerOpen, toggleDrawer } = useDrawContext();
    useEffect(() => {
        const fetchData = async () => {
            const promise = await OffchainAPI.httpGet('/api/metrics/urm_platform/daily')
            const response: any = promise[promise?.length - 1];
            setUtilRate(Number(response?.totalPlatformURM / 100))
        }
        fetchData();
    }, [])
    return (
        <Box >
            <Navbar />
            <Box display="flex" flexDirection="column" background="transparent" p="0 2rem">
                <Box mt="2rem" display="flex" justifyContent="center" mb="1.5rem" 
                // display="flex"
                // justifyContent={isLessThan1250 ?"center":""}
                >
                    {/* <AnimatedFrame/> */}
                    <Image
          src="/giftry.gif"
          alt="GHAF Logo"
          maxWidth="100%"
        // maxHeight="100px"

        />
                    {/* <video autoPlay loop muted height={200}>
                        <source src="/landingPage_illustration.mp4" type="video/mp4" />
                    </video> */}
                </Box>
                <Box mb="1rem" mt="1rem" background="linear-gradient(90deg, rgba(2, 1, 15, 0.00) 0%, rgba(255, 255, 255, 0.25) 44.18%, rgba(236, 236, 237, 0.23) 62.33%, rgba(2, 1, 15, 0.00) 100%)" height="35px" display="flex" alignItems="center" justifyContent="center">
        <Text fontSize="16px" fontWeight="500" lineHeight="20px" letterSpacing="-0.15px" >
          Update: Hashstack&apos;s v1 public testnet is live
        </Text>
        </Box>
                <Box display="flex" flexDirection="column" justifyContent="center">
                    <Image
                        src="/maxBorrow.svg"
                        alt="GHAF Logo"
                        maxWidth="100%"
                        height={40}
                    />
                    <Text color="#858786" fontFamily="inter"
                        fontSize="18px"
                        textAlign="center"
                        fontStyle="normal" fontWeight="300" lineHeight="normal" letterSpacing="0.64px" mt="0.7rem" whiteSpace="nowrap">
                        of your collateral for liquidity
                        <br />
                        mining,trading needs.</Text>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" mt="1rem">
                    <Box display="flex" height="40px" width="109px" textAlign="center" alignItems="center" justifyContent="center" gap="8px" border="1px solid #CACAD1" borderRadius="4px" color="#CACAD1" cursor="pointer" bg="transparent"
                    >
                        <Link href="https://testnet.hashstack.finance" target="_blank">
                            <Text fontFamily="Inter" fontSize="14px" fontStyle="normal" fontWeight="500" lineHeight="20px" letterSpacing="-0.15px">Launch App</Text>
                        </Link>
                    </Box>

                </Box>
                <Box display="flex" flexDirection="row" justifyContent="space-around" mt="2rem">
                    <Box>
                        <Text color="#BDBFC1" fontSize="14px" fontWeight="500" fontStyle="normal" fontFamily="inter" mb="0" whiteSpace="nowrap">
                            Utilization Rate
                        </Text>
                        <Text color="#00D395" textAlign="center" fontFamily="inter" fontSize="24px" fontStyle="normal" fontWeight="600" lineHeight="40px" mt="0.4rem" whiteSpace="nowrap">
                            {utilRate ? `${utilRate}%` : ""}
                        </Text>
                    </Box>
                    <Box>
                        <Text color="#BDBFC1" fontSize="14px" fontWeight="500" fontStyle="normal" fontFamily="inter" mb="0" whiteSpace="nowrap">
                            Total value locked
                        </Text>
                        <Text color="#00D395" textAlign="center" fontFamily="inter" fontSize="24px" fontStyle="normal" fontWeight="600" lineHeight="40px" mt="0.4rem" whiteSpace="nowrap">
                            $16.44m
                        </Text>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="column" mt="2rem">
                <Box textAlign="center" mb="1rem">
                    Powered by
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="space-around" >
                    <Box cursor="pointer">
                        <Link href="https://www.starknet.io/en" target="_blank">
                        <Image
                        src="/logos/starknetLogo.svg"
                        alt="GHAF Logo"
                        maxWidth="100%"
                        height={25}
                    />
                        </Link>
                    </Box>
                    <Box cursor="pointer">
                        <Link href="https://www.alchemy.com" target="_blank">
                        <Image
                        src="/logos/alchemyLogo.svg"
                        alt="GHAF Logo"
                        maxWidth="100%"
                        height={25}
                    />
                        </Link>
                    </Box>

                </Box>
            </Box>
            <Box  display="flex" justifyContent="center" textAlign="center" padding="0px 10px" mt="2rem">
                    <Text color="#fff" width="100px" fontFamily="inter" fontSize="14px" fontWeight="600" lineHeight="40px" textAlign="center">
                        We Work with
                    </Text>
            </Box>

            </Box>
            <Box width="100%" background="rgba(217, 217, 217, 0.06)" overflow="hidden" paddingY="1.2rem" mb="2rem">
                    {!isDrawerOpen &&            <Marquee
                        style={{
                            display: "flex",
                            // background:"blue",
    
                            // justifyContent: "center",
                            alignItems: "baseline",
                            // textAlign:"center",
                            paddingTop: "2px",
                            paddingBottom: "2px"
    
                            // padding:"2.5px 0"
                            // height:"21px",
                            // background: "rgba(217, 217, 217, 0.06)",
                            // overflow: "hidden",
                            // textAlign:"center",
                            // marginTop:"0.2rem"
                        }}
                        gradientColor={[12, 8, 34]}
                        pauseOnHover={true}
                        speed={40}
                    // speed={speed}
                    // gradient={isGradientVisible}
    
                    >
                        <Box display="flex" flexGrow="1" ml="1rem" justifyContent="center">
                            <Box
                                onMouseEnter={() => setDashboardHover(1)}
                                onMouseLeave={() => setDashboardHover(0)}
                            >
                                {dashboardHover == 1 ? <Link href={urls["JediSwap"]} target="_blank">
                                    <Image
                                        marginInline= "2rem"
                                        src="/logos/jediSwapLogoActive.svg"
                                        opacity="70%"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="GHAF Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
    
                                    />
                                </Link> : <Link href={urls["JediSwap"]} target="_blank">
                                    <Image
                                        marginInline="2rem"
                                        src="/logos/jediSwapLogo.svg"
                                        opacity="70%"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="GHAF Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
                                    />
                                </Link>}
                            </Box>
                            <Box
                                onMouseEnter={() => setDashboardHover(2)}
                                onMouseLeave={() => setDashboardHover(0)}
                            >
                                {dashboardHover == 2 ? <Link href={urls["MySwap"]} target="_blank">
                                    <Image
                                        marginInline="2rem"
                                        src="/logos/mySwapLogoActive.svg"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="GHAF Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
                                    />
                                </Link> : <Link href={urls["MySwap"]} target="_blank">
                                    <Image
                                        marginInline="2rem"
                                        src="/logos/mySwapLogo.svg"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="GHAF Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
                                    />
                                </Link>}
                            </Box>
                            <Box
                                onMouseEnter={() => setDashboardHover(3)}
                                onMouseLeave={() => setDashboardHover(0)}
                            >
                                {dashboardHover == 3 ? <Link href={urls["Yagi"]} target="_blank">
                                    <Image
                                        marginInline="2rem"
                                        src="/logos/yagiLogoActive.svg"
                                        opacity="70%"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="GHAF Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
                                    />
                                </Link> : <Link href={urls["Yagi"]} target="_blank">
                                    <Image
                                        marginInline="2rem"
                                        src="/logos/yagiLogo.svg"
                                        opacity="70%"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="GHAF Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
                                    />
                                </Link>}
    
    
    
                            </Box>
                            <Box
                                onMouseEnter={() => setDashboardHover(4)}
                                onMouseLeave={() => setDashboardHover(0)}
                            >
                                {dashboardHover == 4 ? <Link href={urls["Pragma"]} target="_blank">
                                    <Image
                                        marginInline="2rem"
                                        src="/logos/pragmaLogoActive.svg"
                                        opacity="70%"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="GHAF Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
                                    />
                                </Link> : <Link href={urls["Pragma"]} target="_blank">
                                    <Image
                                        marginInline="2rem"
                                        src="/logos/pragmaLogo.svg"
                                        opacity="70%"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="GHAF Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
                                    />
                                </Link>}
                            </Box>
                            <Box
                                onMouseEnter={() => setDashboardHover(5)}
                                onMouseLeave={() => setDashboardHover(0)}
                            >
                                {dashboardHover == 5 ? <Link href={urls["JediSwap"]} target="_blank">
                                    <Image
                                        marginInline="2rem"
                                        src="/logos/jediSwapLogoActive.svg"
                                        opacity="70%"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="GHAF Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
    
                                    />
                                </Link> : <Link href={urls["JediSwap"]} target="_blank">
                                    <Image
                                        marginInline="2rem"
                                        src="/logos/jediSwapLogo.svg"
                                        opacity="70%"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="GHAF Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
                                    />
                                </Link>}
                            </Box>
                            <Box
                                onMouseEnter={() => setDashboardHover(6)}
                                onMouseLeave={() => setDashboardHover(0)}
                            >
                                {dashboardHover == 6 ? <Link href={urls["MySwap"]} target="_blank">
                                    <Image
                                        marginInline="2rem"
                                        src="/logos/mySwapLogoActive.svg"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="GHAF Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
                                    />
                                </Link> : <Link href={urls["MySwap"]} target="_blank">
                                    <Image
                                        marginInline="2rem"
                                        src="/logos/mySwapLogo.svg"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="GHAF Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
                                    />
                                </Link>}
                            </Box>
                            <Box
                                onMouseEnter={() => setDashboardHover(7)}
                                onMouseLeave={() => setDashboardHover(0)}
                            >
                                {dashboardHover == 7 ? <Link href={urls["Yagi"]} target="_blank">
                                    <Image
                                        marginInline="2rem"
                                        src="/logos/yagiLogoActive.svg"
                                        opacity="70%"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="GHAF Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
                                    />
                                </Link> : <Link href={urls["Yagi"]} target="_blank">
                                    <Image
                                        marginInline="2rem"
                                        src="/logos/yagiLogo.svg"
                                        opacity="70%"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="GHAF Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
                                    />
                                </Link>}
    
    
    
                            </Box>
                            <Box
                                onMouseEnter={() => setDashboardHover(8)}
                                onMouseLeave={() => setDashboardHover(0)}
                            >
                                {dashboardHover == 8 ? <Link href={urls["Pragma"]} target="_blank">
                                    <Image
                                        marginInline="2rem"
                                        src="/logos/pragmaLogoActive.svg"
                                        opacity="70%"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="GHAF Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
                                    />
                                </Link> : <Link href={urls["Pragma"]} target="_blank">
                                    <Image
                                        marginInline="2rem"
                                        src="/logos/pragmaLogo.svg"
                                        opacity="70%"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="GHAF Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
                                    />
                                </Link>}
                            </Box>
    
    
                            <Box
                                onMouseEnter={() => setDashboardHover(9)}
                                onMouseLeave={() => setDashboardHover(0)}
                            >
                                {dashboardHover == 9 ? <Link href={urls["JediSwap"]} target="_blank">
                                    <Image
                                        marginInline="2rem"
                                        src="/logos/jediSwapLogoActive.svg"
                                        opacity="70%"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="GHAF Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
    
                                    />
                                </Link> : <Link href={urls["JediSwap"]} target="_blank">
                                    <Image
                                        marginInline="2rem"
                                        src="/logos/jediSwapLogo.svg"
                                        opacity="70%"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="GHAF Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
                                    />
                                </Link>}
                            </Box>
                            <Box
                                onMouseEnter={() => setDashboardHover(10)}
                                onMouseLeave={() => setDashboardHover(0)}
                            >
                                {dashboardHover == 10 ? <Link href={urls["MySwap"]} target="_blank">
                                    <Image
                                        marginInline="2rem"
                                        src="/logos/mySwapLogoActive.svg"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="GHAF Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
                                    />
                                </Link> : <Link href={urls["MySwap"]} target="_blank">
                                    <Image
                                        marginInline="2rem"
                                        src="/logos/mySwapLogo.svg"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="GHAF Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
                                    />
                                </Link>}
                            </Box>
    
    
    
                        </Box>
    
                    </Marquee>}

            </Box>
        </Box>
    )
}

export default MobileView