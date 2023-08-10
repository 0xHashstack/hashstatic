import { Box, Text, useMediaQuery, Image } from '@chakra-ui/react'
import React from 'react'
import MaxBorrow from '../assets/Icons/maxBorrow'

import BorrowTrade from '../assets/Images/Frame.png'
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
  return (
    <Box>
 <Box display="flex" flexDirection="row" p="0 2rem"  background="transparent" >
      <Box display="flex" flexDirection="column" mt={isLessThan1250 ?"6rem":"12rem"}>
        {isLessThan1250 ?        <Image
          src="/maxBorrowIpadView.svg"
          alt="GHAF Logo"
          maxWidth="100%"
          height="208px"
          width="295px"
        />:        <Image
          src="/maxBorrow.svg"
          alt="GHAF Logo"
          maxWidth="100%"
          height={ isHeightLargerThan1000 && isLargerThan1800? "110": isLargerThan1800 ?"100":isLargerThan1600 ?"90": ""}
        />}
        {isLessThan1250 ?        <Text color="#858786" fontFamily="inter" 
        fontSize={isLessThan1250?"28px": isHeightLargerThan1000 && isLargerThan1800 ?"46px": isLargerThan1800 ? "40px":"30px"} 
        fontStyle="normal" fontWeight="300" lineHeight="normal" letterSpacing="0.64px" mt="0.7rem">
          of your collateral for liquidity mining,
          trading needs.</Text>:        <Text color="#858786" fontFamily="inter" 
        fontSize={isLessThan1250?"28px": isHeightLargerThan1000 && isLargerThan1800 ?"46px": isLargerThan1800 ? "40px":isLargerThan1600?"36px": "30px"} 
        fontStyle="normal" fontWeight="300" lineHeight="normal" letterSpacing="0.64px" mt="0.7rem" whiteSpace="nowrap">
          of your collateral for liquidity mining,
          <br />
          trading needs.</Text>}

      </Box>
      <Box mt={isHeightLargerThan1000 && isLargerThan1800? "5rem":"4rem"} mr="1rem" ml={isLargerThan1800 ?"8rem":isLargerThan1700?"9rem": isLargerThan1600?"7rem":"5rem"}
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
                            <Image
          src="/giftry.gif"
          alt="GHAF Logo"
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