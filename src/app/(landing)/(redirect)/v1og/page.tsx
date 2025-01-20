'use client';

import { EXTERNAL_URLS } from '@/constants/urls';
import { useExternalRedirect } from '@/hooks/useExternalRedirect';

export default function V1ogRedirect() {
	useExternalRedirect(EXTERNAL_URLS.V1OG);
	return null;
}
