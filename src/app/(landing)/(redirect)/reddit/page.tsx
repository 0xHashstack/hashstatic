'use client';

import { EXTERNAL_URLS } from '@/constants/urls';
import { useExternalRedirect } from '@/hooks/useExternalRedirect';

export default function RedditRedirect() {
	useExternalRedirect(EXTERNAL_URLS.REDDIT);
	return null;
}
