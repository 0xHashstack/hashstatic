import { Box, Text, useMediaQuery, Image, Fade } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import MaxBorrow from '../assets/Icons/maxBorrow'

import BorrowTrade from '../assets/Images/Frame.png'
import Link from 'next/link'
const Content = () => {
  const [isLargerThan1475] = useMediaQuery('(min-width: 1475px)')
  const [isLargerThan1800] = useMediaQuery('(min-width: 1800px)')
  const [isLargerThan1600] = useMediaQuery('(min-width: 1600px)')
  const [isLargerThan1700] = useMediaQuery('(min-width: 1700px)')
  const [isLessThan1250] = useMediaQuery('(max-width: 1250px)')
  const [isLessThan1350] = useMediaQuery('(max-width: 1350px)')
  const [isLessThan500] = useMediaQuery('(max-width: 500px)')
  const [isLessThan850] = useMediaQuery('(max-width: 850px)')
  const height = isLargerThan1475 == true ? 450 : 400;
  const [isHeightLargerThan1000] = useMediaQuery('(min-height: 1000px)')
  // const flexDirection=isLessThan1250 ?"column":"row";
  // console.log(isLessThan1250,"less")
  const [showText1, setShowText1] = useState(true);

  // Array of texts and links
  const texts = [
    {
      text: 'Airdrop for mainnet v1 ',
      link: 'https://app.hashstack.finance/',
    },
    {
      text: 'Referral Campaign is live ',
      link: 'https://your-other-link.com/',
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
  return (
    <Box>
      <Box display="flex" flexDirection="row" background="transparent" >
        <Box display="flex" flexDirection="column" mt={isLessThan1250 ? "6rem" : "7rem"} >
          <Box mb="4rem" height="44px" display="flex" alignItems="center">
            <Box fontSize="20px" fontWeight="500" lineHeight="20px" letterSpacing="-0.10px" ml="2rem" display="flex" alignItems="center">
              <Text color="#00D395" mr="0.6rem" background="rgba(217, 217, 217, 0.10)" padding="9px 16px" borderRadius="10px">
                Launched
              </Text>
              <Text
                _hover={{ color: '#8C8C9B' }}
                mr="0.6rem" background="rgba(217, 217, 217, 0.10)" padding="9px 16px" borderRadius="10px"
                whiteSpace="nowrap"
              >
                <Link href={texts[0].link} target="_blank">
                  {texts[0].text}
                  <Image
            src="/party_icon-01.svg"
            alt="Mainnet V1 Celebration Icon"
            // mt="0.2rem"
            maxWidth="100%"
            height="20px"
          // maxHeight="100px"
          />
                </Link>
              </Text>
              {/* <Text
                _hover={{ color: '#8C8C9B' }}
                mr="0.6rem" background="rgba(217, 217, 217, 0.10)" padding="9px 16px" borderRadius="10px"
                cursor="pointer"
                whiteSpace="nowrap"
              >
                <Link href={texts[1].link} target="_blank">
                  {texts[1].text}
                <Image
            src="/dancing_man-01.svg"
            alt=""
            maxWidth="100%"
            height="20px"
          // maxHeight="100px"
          />
                </Link>
              </Text> */}

            </Box>
          </Box>
          {isLessThan1250 ? <Image
            src="/maxBorrowIpadView.svg"
            alt="hero title text"
            maxWidth="100%"
            height="208px"
            width="295px"
            p="0 2rem"
          /> : <Image
            src="/maxBorrow.svg"
            alt="hero title text"
            maxWidth="100%"
            p="0 2rem"
            height={isHeightLargerThan1000 && isLargerThan1800 ? "110" : isLargerThan1800 ? "100" : isLargerThan1600 ? "90" : ""}
          />}
          {isLessThan1250 ? <Text color="#858786" fontFamily="inter" p="0 2rem"
            fontSize={isLessThan1250 ? "28px" : isHeightLargerThan1000 && isLargerThan1800 ? "46px" : isLargerThan1800 ? "40px" : "30px"}
            fontStyle="normal" fontWeight="300" lineHeight="normal" letterSpacing="0.64px" mt="0.7rem">
            of your collateral for liquidity mining &
            trading needs.</Text> : <Text color="#858786" fontFamily="inter" p="0 2rem"
              fontSize={isLessThan1250 ? "28px" : isHeightLargerThan1000 && isLargerThan1800 ? "46px" : isLargerThan1800 ? "40px" : isLargerThan1600 ? "36px" : "30px"}
              fontStyle="normal" fontWeight="300" lineHeight="normal" letterSpacing="0.64px" mt="0.7rem" whiteSpace="nowrap">
            of your collateral for liquidity mining &
            <br />
            trading needs.</Text>}

        </Box>
        <Box mt={isHeightLargerThan1000 && isLargerThan1800 ? "5rem" : "4rem"} mr="1rem" ml={isLargerThan1800 ? "8rem" : isLargerThan1700 ? "10rem" : isLargerThan1600 ? "7rem" : "5rem"}
        // display="flex"
        // justifyContent={isLessThan1250 ?"center":""}
        >
          {/* <AnimatedFrame/> */}
          {/* <Image
          src="/frame.svg"
          alt="Animation Logo"
          maxWidth="100%"
        // maxHeight="100px"

        /> */}
                            <Image
          src="/illustration.gif"
          alt="Provider-Borrower Illustration animation"
          maxWidth="100%"
          height={ isHeightLargerThan1000 && isLargerThan1800? "460": isLargerThan1800 ?"430":  isHeightLargerThan1000 && isLargerThan1600 ?"435": isLargerThan1600?"430":""}
        // maxHeight="100px"

          />
          {/* <video autoPlay loop height={isLessThan1350 ? 300:""}>
        <source src="/landingPage_illustration.mp4" type="video/mp4" />
      </video> */}
        </Box>
      </Box>
    </Box>

  )
}

export default Content