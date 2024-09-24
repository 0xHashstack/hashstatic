import { Box, useMediaQuery, Image, Text, Skeleton, Fade } from '@chakra-ui/react'
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
import { useDrawContext } from '../context/DrawerContext'
import numberFormatter from './numberFormater'

const IpadView = () => {
    // const [isLessThan500] = useMediaQuery('(max-width: 500px)')
    const [utilRate, setUtilRate] = useState<any>();
    const { isDrawerOpen, toggleDrawer } = useDrawContext();
    const [dashboardHover, setDashboardHover] = useState(0);
    const [tvl, seTtvl] = useState<any>()
    const [showText1, setShowText1] = useState(true);

    // Array of texts and links
    const texts = [
        // {
        //     text: 'Restake - Cross-chain liquid staking solution ',
        //     link: 'https://testnet.restake.it/',
        // },
        {
            text: 'Content creators program ',
            link: 'https://hashstack.medium.com/introducing-hashstacks-content-creator-program-ccp-435aea9c9d83',
          },
          {
            text: 'Degen mode ',
            link: 'https://hashstack.medium.com/execute-optimal-strategies-with-degen-mode-eb63c6f23322',
          },
    ];

    // Function to toggle texts
    const toggleTexts = () => {
        setShowText1((prev: any) => !prev);
    };

    // Toggle texts every 4 seconds
    useEffect(() => {
        const interval = setInterval(toggleTexts, 5000);

        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const promise = await OffchainAPI.httpGet('/api/metrics/urm_platform/daily')
                const promiseTvl = await OffchainAPI.httpGet('/api/get-main-metrics');
                seTtvl(promiseTvl?.tvl)
                const response: any = promise[promise?.length - 1];
                setUtilRate(Number(response?.totalPlatformURM / 100))
            } catch (err) {
                setUtilRate(9);
                seTtvl(9000)
                console.log(err, "err")
            }
        }
        fetchData();
    }, [])

    return (
        <Box >
            <Navbar />
            <Box display="flex" flexDirection="column" background="transparent" p="0 2rem" alignItems="center">

                <Box mt="2rem" display="flex" justifyContent="center" mb="1.5rem"
                // display="flex"
                // justifyContent={isLessThan1250 ?"center":""}
                >
                    {/* <AnimatedFrame/> */}
                    <Image
                        src="/illustration.gif"
                        alt="Provider-Borrower Illustration animation"
                        maxWidth="100%"
                    // maxHeight="100px"

                    />
                    {/* <video autoPlay loop height={400}>
                        <source src="/landingPage_illustration.mp4" type="video/mp4" />
                    </video> */}
                </Box>
                <Box mt="2rem" mb="2rem" height="35px" display="flex" alignItems="center" justifyContent="center">
                    <Box fontSize="20px" fontWeight="500" lineHeight="20px" letterSpacing="-0.15px" ml="1.5rem" whiteSpace="nowrap" display="flex" alignItems="center">
                        <Text color="#00D395" mr="0.6rem" background="rgba(217, 217, 217, 0.10)" padding="9px 16px" borderRadius="10px">
                            Launched
                        </Text>
                        <Text
                            _hover={{ color: '#8C8C9B' }}
                            mr="0.6rem" background="rgba(217, 217, 217, 0.10)" padding="9px 16px" borderRadius="10px" display="flex" flexDirection="row"
                        >
                            <Link href={texts[0].link} target="_blank" >
                                {texts[0].text}
                                <Image
                                    src="/party_icon-01.svg"
                                    alt="mainnet v1 celebration icon"
                                    // mt="0.2rem"
                                    maxWidth="100%"
                                    height="20px"
                                // maxHeight="100px"
                                />
                            </Link>
                        </Text>
                    </Box>

                </Box>
                <Box mb="2rem"   height="35px" display="flex" alignItems="center"  >
                    <Text
                        _hover={{ color: '#8C8C9B' }}
                        background="rgba(217, 217, 217, 0.10)" padding="9px 23px" borderRadius="10px"
                        fontSize="20px" fontWeight="500" lineHeight="20px" letterSpacing="-0.15px" whiteSpace="nowrap"
                    >
                        <Link href={texts[1].link} target="_blank" style={{display:"flex",justifyContent:"center",gap:"0.3rem"}}>
                            {texts[1].text}
                            <Image
                                src="/dancing_man-01.svg"
                                alt=""
                                // mt="0.2rem"
                                maxWidth="100%"
                                height="20px"
                            // maxHeight="100px"
                            />
                        </Link>
                    </Text>
                </Box>

                <Box display="flex" flexDirection="column" justifyContent="center">
                    <Image
                        src="/maxBorrow.svg"
                        alt="hero title text"
                        maxWidth="100%"
                        height={70}
                    />
                    <Text color="#858786" fontFamily="inter"
                        fontSize="28px"
                        textAlign="center"
                        fontStyle="normal" fontWeight="300" lineHeight="normal" letterSpacing="0.64px" mt="0.7rem" whiteSpace="nowrap">
                        of your collateral for liquidity
                        <br />
                        mining & trading needs.</Text>
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="space-around" gap="3rem" mt="2rem">
                <Box>
                        <Text color="#8C8C9B" fontSize="20px" fontWeight="500" fontStyle="normal" fontFamily="inter" mb="0" whiteSpace="nowrap">
                            Utilization
                        </Text>
                        {utilRate ?
                            <Text color="#00D395" textAlign="center" fontFamily="inter" fontSize="28px" fontStyle="normal" fontWeight="600" lineHeight="40px" mt="0.4rem" whiteSpace="nowrap">
                                {utilRate ? `${utilRate}%` : ""}
                            </Text> :
                            <Box color="#00D395" textAlign="center" fontFamily="inter" fontSize="28px" fontStyle="normal" fontWeight="600" lineHeight="40px" mt="0.4rem" whiteSpace="nowrap">
                                <Skeleton
                                    width="6rem"
                                    height="1.4rem"
                                    startColor="#101216"
                                    endColor="#2B2F35"
                                    borderRadius="6px"
                                />
                            </Box>
                        }
                    </Box>
                    <Box>
                        <Text color="#8C8C9B" fontSize="20px" fontWeight="500" fontStyle="normal" fontFamily="inter" mb="0" whiteSpace="nowrap">
                            Liquidity Locked
                        </Text>
                        {tvl ?
                            <Text color="#00D395" textAlign="center" fontFamily="inter" fontSize="28px" fontStyle="normal" fontWeight="600" lineHeight="40px" mt="0.4rem" whiteSpace="nowrap">
                                {tvl ? `$${numberFormatter(tvl)}+` : ""}
                            </Text> :
                            <Box color="#00D395" textAlign="center" fontFamily="inter" fontSize="28px" fontStyle="normal" fontWeight="600" lineHeight="40px" mt="0.4rem" whiteSpace="nowrap">
                                <Skeleton
                                    width="6rem"
                                    height="1.4rem"
                                    startColor="#101216"
                                    endColor="#2B2F35"
                                    borderRadius="6px"
                                />
                            </Box>
                        }
                    </Box>
                </Box>
                <Box display="flex" flexDirection="column" mt="2rem">
                    <Box textAlign="center" mb="1rem" fontSize="20px" color="#8C8C9B">
                        Powered by
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" gap="3rem" >
                        <Box cursor="pointer">
                            <Link href="https://www.starknet.io/en" target="_blank">
                                <Image
                                    src="/logos/starknetLogo.svg"
                                    alt="Starknet Logo"
                                    maxWidth="100%"
                                    height={30}
                                />
                            </Link>
                        </Box>
                        <Box cursor="pointer">
                            <Link href="https://www.alchemy.com" target="_blank">
                                <Image
                                    src="/logos/alchemyLogo.svg"
                                    alt="Alchemy Logo"
                                    maxWidth="100%"
                                    height={30}
                                />
                            </Link>
                        </Box>

                    </Box>
                </Box>


            </Box>
            <Box display="flex" mt="2.5rem">
                <Box display="flex" bg="#000" padding="0px 8px" height="63px">
                    <Text color="#fff" width="100px" fontFamily="inter" fontSize="12px" fontWeight="600" lineHeight="40px" textAlign="center">
                        We work with
                    </Text>
                </Box>
                <Box width="100%" background="rgba(217, 217, 217, 0.06)" overflow="hidden" paddingY="0.8rem" mb="2rem">
                    {!isDrawerOpen && <Marquee
                        style={{
                            display: "flex",
                            // background:"blue",
                            zIndex: 100,
                            marginTop: "0.4rem",

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
                                        marginInline="2rem"
                                        src="/logos/jediSwapLogoActive.svg"
                                        opacity="70%"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="Jediswap Logo"
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
                                        alt="Jediswap Logo"
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
                                        alt="Myswap Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
                                    />
                                </Link> : <Link href={urls["MySwap"]} target="_blank">
                                    <Image
                                        marginInline="2rem"
                                        src="/logos/mySwapLogo.svg"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="Myswap Logo"
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
                                        alt="Yagi Logo"
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
                                        alt="Yagi Logo"
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
                                        alt="Pragma Logo"
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
                                        alt="Pragma Logo"
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
                                        alt="Jediswap Logo"
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
                                        alt="jediSwap Logo"
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
                                        alt="MySwap Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
                                    />
                                </Link> : <Link href={urls["MySwap"]} target="_blank">
                                    <Image
                                        marginInline="2rem"
                                        src="/logos/mySwapLogo.svg"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="Myswap Logo"
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
                                        alt="Yagi Logo"
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
                                        alt="Yagi Logo"
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
                                        alt="Pragma Logo"
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
                                        alt="Pragma Logo"
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
                                        alt="Jediswap Logo"
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
                                        alt="Jediswap Logo"
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
                                        alt="Myswap Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
                                    />
                                </Link> : <Link href={urls["MySwap"]} target="_blank">
                                    <Image
                                        marginInline="2rem"
                                        src="/logos/mySwapLogo.svg"
                                        _hover={{ opacity: "100%" }}
                                        transition="0.2s"
                                        alt="Myswap Logo"
                                        maxWidth="100%"
                                    // maxHeight="100px"
                                    />
                                </Link>}
                            </Box>



                        </Box>

                    </Marquee>}

                </Box>
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="center" gap="2.5rem" mb="2rem">
                {/* <Box display="flex" width="40px" height="40px" padding="8px" justifyContent="center" alignItems="center" borderRadius="6px" border="1px solid #2B2F35" bg="#161B22" cursor="pointer"

          _hover={{
            background:"#4D59E8",
          }}
          
        >
          <InfoIcon/>
  
        </Box> */}
                <Link href="https://x.com/0xhashstack" target="_blank">
                    <Box display="flex" width="40px" height="40px" padding="8px" justifyContent="center" alignItems="center" borderRadius="6px" border="1px solid #2B2F35" bg="#161B22" cursor="pointer"
                        _hover={{
                            background: "#4D59E8",
                        }}

                    >
                        <TwitterIcon />

                    </Box>
                </Link>
                <Link href="https://discord.gg/aPAH4mkT" target="_blank">
                    <Box display="flex" width="40px" height="40px" padding="8px" justifyContent="center" alignItems="center" borderRadius="6px" border="1px solid #2B2F35" bg="#161B22" cursor="pointer"
                        _hover={{
                            background: "#4D59E8",
                        }}

                    >
                        <DicordLogo />

                    </Box>
                </Link>
                <Link href="https://github.com/0xHashstack/" target="_blank">
                    <Box display="flex" width="40px" height="40px" padding="8px" justifyContent="center" alignItems="center" borderRadius="6px" border="1px solid #2B2F35" bg="#161B22" cursor="pointer"
                        _hover={{
                            background: "#4D59E8",
                        }}

                    >
                        <GithubIcon />

                    </Box>
                </Link>
                <Link href="https://drive.google.com/drive/folders/1ysun5L45Ib4MZAOGr8v9BK-CpZuMpXJr" target="_blank">
                    <Box display="flex" width="40px" height="40px" padding="8px" justifyContent="center" alignItems="center" borderRadius="6px" border="1px solid #2B2F35" bg="#161B22" cursor="pointer"
                        _hover={{
                            background: "#4D59E8",
                        }}
                    >
                        <FileIcon />
                    </Box>
                </Link>
                <Link href="https://docs.hashstack.finance/hub/faqs" target='_blank'>

                    <Box display="flex" width="40px" height="40px" padding="8px" justifyContent="center" alignItems="center" borderRadius="6px" border="1px solid #2B2F35" bg="#161B22" cursor="pointer"
                        _hover={{
                            background: "#4D59E8",
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
