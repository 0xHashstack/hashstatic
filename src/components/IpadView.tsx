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
import DicordLogo from '../assets/Icons/dicordLogo'
import DiscordLogoWhite from '../assets/Icons/discordLogoWhite'
import FileIcon from '../assets/Icons/fileIcon'
import FileIconWhite from '../assets/Icons/fileIconWhite'
import GithubIcon from '../assets/Icons/githubIcon'
import GithubIconWhite from '../assets/Icons/githubIconWhite'
import InfoIcon from '../assets/Icons/infoIcon'
import InfoIconWhite from '../assets/Icons/infoIconWhite'
import QueryIcon from '../assets/Icons/queryIcon'
import QueryIconWhite from '../assets/Icons/queryIconWhite'
import TwitterIcon from '../assets/Icons/twitterIcon'
import TwitterIconWhite from '../assets/Icons/twitterIconWhite'

const IpadView = () => {
    // const [isLessThan500] = useMediaQuery('(max-width: 500px)')
    const [utilRate, setUtilRate] = useState<any>();
    const [dashboardHover, setDashboardHover] = useState(0);
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
            <Banner />
            <Navbar />
            <Box display="flex" flexDirection="column" background="transparent" p="0 2rem">
                <Box mt="2rem" display="flex" justifyContent="center" mb="1.5rem"
                // display="flex"
                // justifyContent={isLessThan1250 ?"center":""}
                >
                    {/* <AnimatedFrame/> */}
                    {/* <Image
          src="/frame.svg"
          alt="GHAF Logo"
          maxWidth="100%"
        // maxHeight="100px"

        /> */}
                    <video autoPlay loop height={400}>
                        <source src="/landingPage_illustration.mp4" type="video/mp4" />
                    </video>
                </Box>
                <Box display="flex" flexDirection="column" justifyContent="center">
                    <Image
                        src="/maxBorrow.svg"
                        alt="GHAF Logo"
                        maxWidth="100%"
                        height={70}
                    />
                    <Text color="#858786" fontFamily="inter"
                        fontSize="28px"
                        textAlign="center"
                        fontStyle="normal" fontWeight="300" lineHeight="normal" letterSpacing="0.64px" mt="0.7rem" whiteSpace="nowrap">
                        of your collateral for liquidity
                        <br />
                        mining,trading needs.</Text>
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="center" gap="3rem" mt="2rem">
                    <Box>
                        <Text color="#BDBFC1" fontSize="20px" fontWeight="500" fontStyle="normal" fontFamily="inter" mb="0" whiteSpace="nowrap">
                            Utilization Rate
                        </Text>
                        <Text color="#00D395" textAlign="center" fontFamily="inter" fontSize="28px" fontStyle="normal" fontWeight="600" lineHeight="40px" mt="0.4rem" whiteSpace="nowrap">
                            {utilRate ? `${utilRate}%` : ""}
                        </Text>
                    </Box>
                    <Box>
                        <Text color="#BDBFC1" fontSize="20px" fontWeight="500" fontStyle="normal" fontFamily="inter" mb="0" whiteSpace="nowrap">
                            Total value locked
                        </Text>
                        <Text color="#00D395" textAlign="center" fontFamily="inter" fontSize="28px" fontStyle="normal" fontWeight="600" lineHeight="40px" mt="0.4rem" whiteSpace="nowrap">
                            $16.44m
                        </Text>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="column" mt="2rem">
                <Box textAlign="center" mb="1rem" fontSize="20px">
                    Powered by
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="center" gap="3rem" >
                    <Box cursor="pointer">
                        <Link href="https://www.starknet.io/en" target="_blank">
                        <Image
                        src="/logos/starknetLogo.svg"
                        alt="GHAF Logo"
                        maxWidth="100%"
                        height={30}
                    />
                        </Link>
                    </Box>
                    <Box cursor="pointer">
                        <Link href="https://www.alchemy.com" target="_blank">
                        <Image
                        src="/logos/alchemyLogo.svg"
                        alt="GHAF Logo"
                        maxWidth="100%"
                        height={30}
                    />
                        </Link>
                    </Box>

                </Box>
            </Box>


            </Box>
            <Box display="flex" mt="1.5rem">
            <Box zIndex="1" display="flex" bg="#000" padding="0px 8px" height="63px">
                    <Text color="#fff" width="100px" fontFamily="inter" fontSize="12px" fontWeight="600" lineHeight="40px" textAlign="center">
                        We Work with
                    </Text>
            </Box>
            <Box width="100%" background="rgba(217, 217, 217, 0.06)" overflow="hidden" paddingY="0.8rem" mb="2rem">

            <Marquee
                        style={{
                            display: "flex",
                            // background:"blue",
                            marginTop:"0.4rem",
    
                            // justifyContent: "center",
                            alignItems: "baseline",
                            // textAlign:"center",
                            paddingTop: "2.5px",
                            paddingBottom: "2.5px"
    
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
    
                    </Marquee>
            </Box>
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="center" gap="2.5rem" mb="2rem">
        <Box display="flex" width="40px" height="40px" padding="8px" justifyContent="center" alignItems="center" borderRadius="6px" border="1px solid #2B2F35" bg="#161B22" cursor="pointer"

          _hover={{
            background:"#4D59E8",
          }}
          
        >
          <InfoIcon/>
  
        </Box>
        <Link href="https://x.com/0xhashstack" target="_blank">
          <Box display="flex" width="40px" height="40px" padding="8px" justifyContent="center" alignItems="center" borderRadius="6px" border="1px solid #2B2F35" bg="#161B22" cursor="pointer" 
                    _hover={{
                      background:"#4D59E8",
                    }}

          >
            <TwitterIcon/>
            
          </Box>
        </Link>
          <Link href="https://discord.gg/hashstack" target="_blank">
        <Box display="flex" width="40px" height="40px" padding="8px" justifyContent="center" alignItems="center" borderRadius="6px" border="1px solid #2B2F35" bg="#161B22" cursor="pointer"
                  _hover={{
                    background:"#4D59E8",
                  }}

        >
          <DicordLogo/>
            
        </Box>
          </Link>
          <Link href="https://github.com/0xHashstack/" target="_blank">
        <Box display="flex" width="40px" height="40px" padding="8px" justifyContent="center" alignItems="center" borderRadius="6px" border="1px solid #2B2F35" bg="#161B22" cursor="pointer"
                  _hover={{
                    background:"#4D59E8",
                  }}

        >
          <GithubIcon />
            
        </Box>
          </Link>
          <Link href="https://drive.google.com/drive/folders/1MwIGFymRuE8FWGDRCJjPBQwNBjhX_Dro" target="_blank">
        <Box display="flex" width="40px" height="40px" padding="8px" justifyContent="center" alignItems="center" borderRadius="6px" border="1px solid #2B2F35" bg="#161B22" cursor="pointer"
                  _hover={{
                    background:"#4D59E8",
                  }}
        >
          <FileIcon />
        </Box>
          </Link>
          <Link href="https://docs.hashstack.finance/hub/faqs" target='_blank'>
          
        <Box display="flex" width="40px" height="40px" padding="8px" justifyContent="center" alignItems="center" borderRadius="6px" border="1px solid #2B2F35" bg="#161B22" cursor="pointer"
                  _hover={{
                    background:"#4D59E8",
                  }}
        >
          <QueryIcon />
        </Box>
          </Link>
      </Box>
        </Box>
    )
}

export default IpadView