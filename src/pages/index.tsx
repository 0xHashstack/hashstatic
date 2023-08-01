import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Content from '../components/Content'
import MarketStats from '../components/MarketStats'
import RunningBanner from '../components/RunningBanner'
import Footer from '../components/Footer'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Banner/>
      <Navbar/>
      <Content/>
      <MarketStats/>
      <RunningBanner/>
      <Footer/>
    </div>
  )
}

export default Home
