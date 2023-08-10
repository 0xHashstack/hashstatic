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
import { useDrawContext } from '../context/DrawerContext';

const RunningBanner = () => {
    const [isLargerThan1800] = useMediaQuery('(min-width: 1800px)')
    const [isLessThan1210] = useMediaQuery('(max-width: 1210px)')
    const [dashboardHover, setDashboardHover] = useState(0);
    const [isHeightLargerThan880] = useMediaQuery('(min-height: 880px)')
    const [iconDashboardHover, setIconDashboardHover] = useState(0);
    const [isWidthLessThan1050] = useMediaQuery('(max-width: 1050px)')
    const { isDrawerOpen, toggleDrawer } = useDrawContext();
    console.log(isDrawerOpen,"open")
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
            {isHeightLargerThan880 && !isWidthLessThan1050 ? <Box display="flex" position="fixed" bottom="90">
                <Box display="flex" bg="#000" padding="0px 10px">
                    <Text color="#fff" width="100px" fontFamily="inter" fontSize="14px" fontWeight="600" lineHeight="40px" textAlign="center">
                        We Work with
                    </Text>
                </Box>
                <Box width="100%" background="rgba(217, 217, 217, 0.06)" overflow="hidden" paddingY="1.2rem" >
                    {!isDrawerOpen && <Marquee
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

                    </Marquee>}

                </Box>

            </Box> : <Box display="flex" height={isLessThan1210 ? "50px" : ""}>
                <Box display="flex" bg="#000" padding={isLessThan1210 ? "0px 10px" : "0 10px"} >
                    <Text color="#fff" width="100px" fontFamily="inter" fontSize="14px" fontWeight="600" lineHeight={isLessThan1210 ? "25px" : "40px"} >
                        We Work with
                    </Text>
                </Box>
                <Box width="100%" background="rgba(217, 217, 217, 0.06)" overflow="hidden" paddingY={isLessThan1210 ? "0.9rem" : "1.2rem"} >
                    {!isDrawerOpen &&                    <Marquee
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

                    </Marquee>}

                </Box>
                {isLessThan1210 && <Box display="flex" justifyContent="center" alignItems="center" flexDirection="row" gap="2.5rem" ml="1rem" mr="1rem">
                    <Box display="flex" width="40px" height="40px" padding="8px" justifyContent="center" alignItems="center" borderRadius="6px" border="1px solid #2B2F35" bg="#161B22" cursor="pointer"
                        onMouseEnter={() => setIconDashboardHover(1)}
                        onMouseLeave={() => setIconDashboardHover(0)}
                        _hover={{
                            background: "#4D59E8",
                        }}

                    >
                        {iconDashboardHover == 1 ? <InfoIconWhite /> : <InfoIcon />}

                    </Box>
                    <Link href="https://x.com/0xhashstack" target="_blank">
                        <Box display="flex" width="40px" height="40px" padding="8px" justifyContent="center" alignItems="center" borderRadius="6px" border="1px solid #2B2F35" bg="#161B22" cursor="pointer"
                            _hover={{
                                background: "#4D59E8",
                            }}
                            onMouseEnter={() => setIconDashboardHover(2)}
                            onMouseLeave={() => setIconDashboardHover(0)}
                        >
                            {iconDashboardHover == 2 ? <TwitterIconWhite /> : <TwitterIcon />}

                        </Box>
                    </Link>
                    <Link href="https://discord.gg/hashstack" target="_blank">
                        <Box display="flex" width="40px" height="40px" padding="8px" justifyContent="center" alignItems="center" borderRadius="6px" border="1px solid #2B2F35" bg="#161B22" cursor="pointer"
                            _hover={{
                                background: "#4D59E8",
                            }}
                            onMouseEnter={() => setIconDashboardHover(3)}
                            onMouseLeave={() => setIconDashboardHover(0)}
                        >
                            {iconDashboardHover == 3 ? <DiscordLogoWhite /> : <DicordLogo />}

                        </Box>
                    </Link>
                    <Link href="https://github.com/0xHashstack/" target="_blank">
                        <Box display="flex" width="40px" height="40px" padding="8px" justifyContent="center" alignItems="center" borderRadius="6px" border="1px solid #2B2F35" bg="#161B22" cursor="pointer"
                            _hover={{
                                background: "#4D59E8",
                            }}
                            onMouseEnter={() => setIconDashboardHover(4)}
                            onMouseLeave={() => setIconDashboardHover(0)}
                        >
                            {iconDashboardHover == 4 ? <GithubIconWhite /> : <GithubIcon />}

                        </Box>
                    </Link>
                    <Link href="https://drive.google.com/drive/folders/1MwIGFymRuE8FWGDRCJjPBQwNBjhX_Dro" target="_blank">
                        <Box display="flex" width="40px" height="40px" padding="8px" justifyContent="center" alignItems="center" borderRadius="6px" border="1px solid #2B2F35" bg="#161B22" cursor="pointer"
                            _hover={{
                                background: "#4D59E8",
                            }}
                            onMouseEnter={() => setIconDashboardHover(5)}
                            onMouseLeave={() => setIconDashboardHover(0)}
                        >
                            {iconDashboardHover == 5 ? <FileIconWhite /> : <FileIcon />}


                        </Box>
                    </Link>
                    <Link href="https://docs.hashstack.finance/hub/faqs" target='_blank'>

                        <Box display="flex" width="40px" height="40px" padding="8px" justifyContent="center" alignItems="center" borderRadius="6px" border="1px solid #2B2F35" bg="#161B22" cursor="pointer"
                            _hover={{
                                background: "#4D59E8",
                            }}
                            onMouseEnter={() => setIconDashboardHover(6)}
                            onMouseLeave={() => setIconDashboardHover(0)}
                        >
                            {iconDashboardHover == 6 ? <QueryIconWhite /> : <QueryIcon />}

                        </Box>
                    </Link>
                </Box>}

            </Box>}

        </Box>
    )
}

export default RunningBanner