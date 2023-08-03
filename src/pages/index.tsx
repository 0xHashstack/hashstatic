import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Content from '../components/Content'
import MarketStats from '../components/MarketStats'
import RunningBanner from '../components/RunningBanner'
import Footer from '../components/Footer'
import { Box } from '@chakra-ui/react'
const Home: NextPage = () => {
  return (
    <Box  background="linear-gradient(to bottom left,#7331ea47,#000, #7331ea33)">
      <Banner/>
      <Navbar/>
      <Content/>
      <MarketStats/>
      <RunningBanner/>
      <Footer/>
    </Box>
  )
}

export default Home
