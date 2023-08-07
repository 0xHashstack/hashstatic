import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Content from '../components/Content'
import MarketStats from '../components/MarketStats'
import RunningBanner from '../components/RunningBanner'
import Footer from '../components/Footer'
import { Box, useMediaQuery } from '@chakra-ui/react'
const Home: NextPage = () => {
  const [isLargerThan1700] = useMediaQuery('(min-width: 1700px)')
  const [isLessThan1210] = useMediaQuery('(max-width: 1210px)')
  return (
    <Box background="linear-gradient(to bottom left,#7331ea47 0%,#000 55%, #7331ea33 89%),
    radial-gradient(circle at top right, #7331ea33 55%, transparent 100%)"
      height="100vh"
      overflowX="hidden"
      overflowY="scroll"
      backgroundRepeat="no-repeat"
      flexWrap="wrap"
    >
      <Banner />
      <Navbar />
      <Box ml={isLargerThan1700 ?"4rem":"0rem"}>
        <Content />
        <MarketStats />

      </Box>
      <RunningBanner />
      {!isLessThan1210 &&<Footer />}
      
      
    </Box>
  )
}

export default Home
