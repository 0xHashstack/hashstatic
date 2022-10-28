import { Box, useBreakpointValue } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import BackedByBar from "../components/BackedByBar";
import Benefits from "../components/Benefits";
import Contribute from "../components/Contribute";
import FeaturedBy from "../components/FeaturedBy";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IntegrateOpen from "../components/IntegrateOpen";
import Investors from "../components/Investors";
import Milestones from "../components/Milestones";
import Process from "../components/Process";
import Hero from "../components/Hero";

export default function Home() {
  const processIllustration = useBreakpointValue({
    base: null,
    xl: "/illustrations/background-circles-min.png",
  });
  const processBackground = useBreakpointValue({
    base: "background",
  });

  // const HeroWithNoSSR = dynamic(() => import("../components/Hero"), {
  //   ssr: false,
  // });

  return (
    <Box
      bgImage={processIllustration}
      bgColor={processBackground}
      bgRepeat="no-repeat"
      bgSize="cover"
      // objectFit="cover"
      fontFamily="Avenir"
    >
      <Header />
      {/* <HeroWithNoSSR /> */}
      <Hero />
      <BackedByBar />
      <Process />
      <Benefits />
      <Milestones />
      <Investors />
      <Contribute />
      <FeaturedBy />
      <IntegrateOpen />
      <Footer />
    </Box>
  );
}
