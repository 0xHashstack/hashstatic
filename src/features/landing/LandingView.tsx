'use client';

import Footer from '@/components/Footer';
import Navbar from '@/features/landing/components/Navbar';
import RunningBanner from '@/components/RunningBanner';
import HeroSection from './components/HeroSection';
import MarketStats from './components/MarketStats';

export const LandingView = () => {
	return (
		<>
			<Navbar />
			<HeroSection />
			<MarketStats />
			{/* <RunningBanner />
			<Footer />  */}
		</>
	);
};

export default LandingView;
