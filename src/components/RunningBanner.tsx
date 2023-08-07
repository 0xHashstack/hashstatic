import { Box, Text, Image, useBreakpointValue, useMediaQuery } from '@chakra-ui/react'
import Link from 'next/link';
import React, { useState } from 'react'
import Marquee from "react-fast-marquee";
import { urls } from '../consts/urls'

import JediswapLogo from '../assets/Icons/jediswapLogo';
import MySwapLogo from '../assets/Icons/myswapLogo';
import YagiLogo from '../assets/Icons/yagiLogo';
import PragmaLogo from '../assets/Icons/pragmaLogo';
import DicordLogo from '../assets/Icons/dicordLogo';
import DiscordLogoWhite from '../assets/Icons/discordLogoWhite';
import FileIcon from '../assets/Icons/fileIcon';
import FileIconWhite from '../assets/Icons/fileIconWhite';
import GithubIcon from '../assets/Icons/githubIcon';
import GithubIconWhite from '../assets/Icons/githubIconWhite';
import InfoIcon from '../assets/Icons/infoIcon';
import InfoIconWhite from '../assets/Icons/infoIconWhite';
import QueryIcon from '../assets/Icons/queryIcon';
import QueryIconWhite from '../assets/Icons/queryIconWhite';
import TwitterIcon from '../assets/Icons/twitterIcon';
import TwitterIconWhite from '../assets/Icons/twitterIconWhite';

const RunningBanner = () => {
    const [isLargerThan1800] = useMediaQuery('(min-width: 1800px)')
    const [isLessThan1210] = useMediaQuery('(max-width: 1210px)')
    const [dashboardHover, setDashboardHover] = useState(0);
    const [isHeightLargerThan850] = useMediaQuery('(min-height: 850px)')
    const [iconDashboardHover, setIconDashboardHover] = useState(0);
    const [isWidthLessThan1050] = useMediaQuery('(max-width: 1050px)')
    // const speed = useBreakpointValue({
    //     base: 20,
    //     md: 40,

    //   },{
    //     fallback:"md"
    //   });
    //   const speedDetails = speed ? speed.details : null;
    //   const isGradientVisible:any = useBreakpointValue({
    //     base: false,
    //     md: true,
    //   });
    return (
        <Box>
            {isHeightLargerThan850 && !isWidthLessThan1050 ?            <Box display="flex" position="fixed" bottom="90">
                <Box zIndex="1" display="flex" bg="#000" padding="0px 10px">
                    <Text color="#fff" width="100px" fontFamily="inter" fontSize="14px" fontWeight="600" lineHeight="40px" textAlign="center">
                        We Work with
                    </Text>
                </Box>
                <Box width="100%" background="rgba(217, 217, 217, 0.06)" overflow="hidden" paddingY="1.2rem" >
                    <Marquee
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
                                        src="/logos/mySwapLogoActive.svg"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="GHAF Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
                                    />
                                </Link> : <Link href={urls["MySwap"]} target="_blank">
                                    <Image
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
                                        src="/logos/mySwapLogoActive.svg"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="GHAF Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
                                    />
                                </Link> : <Link href={urls["MySwap"]} target="_blank">
                                    <Image
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
                                        src="/logos/mySwapLogoActive.svg"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="GHAF Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
                                    />
                                </Link> : <Link href={urls["MySwap"]} target="_blank">
                                    <Image
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
    
                    </Marquee>
                </Box>
    
            </Box>:            <Box display="flex">
                <Box zIndex="1" display="flex" bg="#000" padding="0px 10px">
                    <Text color="#fff" width="100px" fontFamily="inter" fontSize="14px" fontWeight="600" lineHeight="40px" textAlign="center">
                        We Work with
                    </Text>
                </Box>
                <Box width="100%" background="rgba(217, 217, 217, 0.06)" overflow="hidden" paddingY="1.2rem" >
                    <Marquee
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
                                        src="/logos/mySwapLogoActive.svg"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="GHAF Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
                                    />
                                </Link> : <Link href={urls["MySwap"]} target="_blank">
                                    <Image
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
                                        src="/logos/mySwapLogoActive.svg"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="GHAF Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
                                    />
                                </Link> : <Link href={urls["MySwap"]} target="_blank">
                                    <Image
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
                                        src="/logos/mySwapLogoActive.svg"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="GHAF Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
                                    />
                                </Link> : <Link href={urls["MySwap"]} target="_blank">
                                    <Image
                                        marginInline={isLargerThan1800 ? "3rem" : "2rem"}
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
    
                    </Marquee>
                </Box>

            </Box>}

        </Box>
        )
}

export default RunningBanner