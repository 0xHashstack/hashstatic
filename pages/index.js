import { Box } from "@chakra-ui/react";
import BackedByBar from "../components/BackedByBar";
import Benefits from "../components/Benefits";
import Contribute from "../components/Contribute";
import FeaturedBy from "../components/FeaturedBy";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IntegrateOpen from "../components/IntegrateOpen";
import Investors from "../components/Investors";
import Process from "../components/Process";
import Hero from "../components/Hero";
// import MilestonesAnimated from "../components/MilestonesAnimated";
import MilestonesAnimatedMobile from "../components/MilestonesAnimatedMobile";
import MilestonesAnimatedTemp from "../components/MilestonesAnimatedTemp";

export default function Home() {
  return (
    <Box
      bgImage={{
        base: "/illustrations/background-circles-mobile.png",
        md: "/illustrations/background-circles-min.png",
      }}
      bgColor="background"
      bgRepeat="no-repeat"
      bgSize="cover"
      fontFamily="Avenir"
    >
      <Header />
      <Hero />
      <BackedByBar />
      <Process />
      <Benefits />
      <MilestonesAnimatedTemp />
      {/* <MilestonesAnimated /> */}
      <MilestonesAnimatedMobile />
      <Investors />
      <Contribute />
      <FeaturedBy />
      <IntegrateOpen />
      <Footer />
    </Box>
  );
}
