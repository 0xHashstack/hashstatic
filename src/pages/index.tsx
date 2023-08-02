import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Content from '../components/Content'
import MarketStats from '../components/MarketStats'
import RunningBanner from '../components/RunningBanner'
import Footer from '../components/Footer'
import { Box } from '@chakra-ui/react'
const Home: NextPage = () => {
  return (
    <Box  backgroundRepeat="no-repeat" overflowY="scroll" backgroundSize="cover">
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
