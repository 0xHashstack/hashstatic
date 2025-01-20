'use client';

import { EXTERNAL_URLS } from '@/constants/urls';
import { useExternalRedirect } from '@/hooks/useExternalRedirect';

export default function C2ERedirect() {
	useExternalRedirect(EXTERNAL_URLS.ZEALY);
	return null;
}
