'use client';

import { EXTERNAL_URLS } from '@/constants/urls';
import { useExternalRedirect } from '@/hooks/useExternalRedirect';

export default function MediumRedirect() {
	useExternalRedirect(EXTERNAL_URLS.MEDIUM);
	return null;
}
