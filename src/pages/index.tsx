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
    <Box  >
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
