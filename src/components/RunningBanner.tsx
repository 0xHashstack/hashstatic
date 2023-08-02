import { Box, Text, Image, useBreakpointValue, useMediaQuery } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'
import Marquee from "react-fast-marquee";
import { urls } from '../consts/urls'

import JediswapLogo from '../assets/Icons/jediswapLogo';
import MySwapLogo from '../assets/Icons/myswapLogo';
import YagiLogo from '../assets/Icons/yagiLogo';
import PragmaLogo from '../assets/Icons/pragmaLogo';

const RunningBanner = () => {
    const [isLargerThan800] = useMediaQuery('(min-width: 1800px)')
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
        <Box display="flex" mb="2rem">
            <Box flexShrink="0" zIndex="1" display="flex" bg="#000" padding="0px 10px">
                <Text color="#fff" width="100px" fontFamily="inter" fontSize="14px" fontWeight="600" lineHeight="40px" textAlign="center">
                    We Work with
                </Text>
            </Box>
            <Box display="flex" width="100%" overflow="hidden">
                <Marquee
                    style={{
                        display: "flex",

                        justifyContent: "center",
                        // alignItems: "baseline",
                        background: "rgba(217, 217, 217, 0.06)",
                        overflow: "hidden",
                        // textAlign:"center",
                        // marginTop:"0.2rem"
                    }}
                    gradientColor={[12, 8, 34]}
                    pauseOnHover={true}
                    speed={20}
                // speed={speed}
                // gradient={isGradientVisible}

                >

                    <Link href={urls["JediSwap"]} target="_blank">
                        <Image
                            marginInline={isLargerThan800? "4rem":"2rem"}
                            src="/logos/jediSwapLogo.svg"
                            opacity="70%"
                            _hover={{ opacity: "100%" }}
                            transition="0.2s"
                            alt="GHAF Logo"
                            maxWidth="100%"
                            maxHeight="100px"
                        />
                    </Link>

                    <Link href={urls["MySwap"]} target="_blank">
                        <Image
                            marginInline={isLargerThan800? "4rem":"2rem"}
                            src="/logos/mySwapLogo.svg"
                            opacity="70%"
                            _hover={{ opacity: "100%" }}
                            transition="0.2s"
                            alt="GHAF Logo"
                            maxWidth="100%"
                            maxHeight="100px"
                        />
                    </Link>

                    <Link href={urls["Yagi"]} target="_blank">
                        <Image
                            marginInline={isLargerThan800? "4rem":"2rem"}
                            src="/logos/yagiLogo.svg"
                            opacity="70%"
                            _hover={{ opacity: "100%" }}
                            transition="0.2s"
                            alt="GHAF Logo"
                            maxWidth="100%"
                            maxHeight="100px"
                        />
                    </Link>

                    <Link href={urls["Pragma"]} target="_blank">
                        <Image
                            marginInline={isLargerThan800? "4rem":"2rem"}
                            src="/logos/pragmaLogo.svg"
                            opacity="70%"
                            _hover={{ opacity: "100%" }}
                            transition="0.2s"
                            alt="GHAF Logo"
                            maxWidth="100%"
                            maxHeight="100px"
                        />
                    </Link>


                    <Link href={urls["JediSwap"]} target="_blank">
                        <Image
                            marginInline={isLargerThan800? "4rem":"2rem"}
                            src="/logos/jediSwapLogo.svg"
                            opacity="70%"
                            _hover={{ opacity: "100%" }}
                            transition="0.2s"
                            alt="GHAF Logo"
                            maxWidth="100%"
                            maxHeight="100px"
                        />
                    </Link>


                    <Link href={urls["MySwap"]} target="_blank">
                        <Image
                            marginInline={isLargerThan800? "4rem":"2rem"}
                            src="/logos/mySwapLogo.svg"
                            opacity="70%"
                            _hover={{ opacity: "100%" }}
                            transition="0.2s"
                            alt="GHAF Logo"
                            maxWidth="100%"
                            maxHeight="100px"
                        />
                    </Link>


                    <Link href={urls["Yagi"]} target="_blank">
                        <Image
                            marginInline={isLargerThan800? "4rem":"2rem"}
                            src="/logos/yagiLogo.svg"
                            opacity="70%"
                            _hover={{ opacity: "100%" }}
                            transition="0.2s"
                            alt="GHAF Logo"
                            maxWidth="100%"
                            maxHeight="100px"
                        />
                    </Link>


                    <Link href={urls["Pragma"]} target="_blank">
                        <Image
                            marginInline={isLargerThan800? "4rem":"2rem"}
                            src="/logos/pragmaLogo.svg"
                            opacity="70%"
                            _hover={{ opacity: "100%" }}
                            transition="0.2s"
                            alt="GHAF Logo"
                            maxWidth="100%"
                            maxHeight="100px"
                        />
                    </Link>
                    <Link href={urls["JediSwap"]} target="_blank">
                        <Image
                            marginInline={isLargerThan800? "4rem":"2rem"}
                            src="/logos/jediSwapLogo.svg"
                            opacity="70%"
                            _hover={{ opacity: "100%" }}
                            transition="0.2s"
                            alt="GHAF Logo"
                            maxWidth="100%"
                            maxHeight="100px"
                        />
                    </Link>

                    <Link href={urls["MySwap"]} target="_blank">
                        <Image
                            marginInline={isLargerThan800? "4rem":"2rem"}
                            src="/logos/mySwapLogo.svg"
                            opacity="70%"
                            _hover={{ opacity: "100%" }}
                            transition="0.2s"
                            alt="GHAF Logo"
                            maxWidth="100%"
                            maxHeight="100px"
                        />
                    </Link>

                    <Link href={urls["Yagi"]} target="_blank">
                        <Image
                            marginInline={isLargerThan800? "4rem":"2rem"}
                            src="/logos/yagiLogo.svg"
                            opacity="70%"
                            _hover={{ opacity: "100%" }}
                            transition="0.2s"
                            alt="GHAF Logo"
                            maxWidth="100%"
                            maxHeight="100px"
                        />
                    </Link>

                    <Link href={urls["Pragma"]} target="_blank">
                        <Image
                            marginInline={isLargerThan800? "4rem":"2rem"}
                            src="/logos/pragmaLogo.svg"
                            opacity="70%"
                            _hover={{ opacity: "100%" }}
                            transition="0.2s"
                            alt="GHAF Logo"
                            maxWidth="100%"
                            maxHeight="100px"
                        />
                    </Link>



                </Marquee>
            </Box>

        </Box>
    )
}

export default RunningBanner