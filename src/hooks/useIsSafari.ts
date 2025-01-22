import { useEffect, useState } from 'react';

export const useIsSafari = () => {
	const [isSafari, setIsSafari] = useState(false);

	useEffect(() => {
		const userAgent = window.navigator.userAgent.toLowerCase();
		const isSafariCheck =
			userAgent.includes('safari') && !userAgent.includes('chrome');
		setIsSafari(isSafariCheck);
	}, []);

	return isSafari;
};
