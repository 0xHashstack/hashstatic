'use client';

import { EXTERNAL_URLS } from '@/constants/urls';
import { useExternalRedirect } from '@/hooks/useExternalRedirect';

export default function WhitepaperRedirect() {
	useExternalRedirect(EXTERNAL_URLS.WHITEPAPER);
	return null;
}
