import { Box, useMediaQuery } from '@chakra-ui/react';
import Content from '@/components/Content';
import Footer from '@/components/Footer';
import IpadView from '@/components/IpadView';
import MarketStats from '@/components/MarketStats';
import MobileView from '@/components/mobileView';
import Navbar from '@/components/Navbar';
import RunningBanner from '@/components/RunningBanner';

export const LandingView = () => {
	const [isLessThan1210] = useMediaQuery('(max-width: 1210px)');
	const [isLessThan500] = useMediaQuery('(max-width: 500px)');
	const [isLessThan980] = useMediaQuery('(max-width: 980px)');

	if (isLessThan500) {
		return <MobileView />;
	}

	if (isLessThan980) {
		return <IpadView />;
	}

	return (
		<>
			<Navbar />
			<Box>
				<Content />
				<MarketStats />
			</Box>
			<RunningBanner />
			{!isLessThan1210 && <Footer />}
		</>
	);
};

export default LandingView;
