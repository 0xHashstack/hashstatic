'use client';

import { EXTERNAL_URLS } from '@/constants/urls';
import { useExternalRedirect } from '@/hooks/useExternalRedirect';

export default function TwitterRedirect() {
	useExternalRedirect(EXTERNAL_URLS.TWITTER);
	return null;
}
