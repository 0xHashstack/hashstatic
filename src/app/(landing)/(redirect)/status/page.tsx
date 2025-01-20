'use client';

import { EXTERNAL_URLS } from '@/constants/urls';
import { useExternalRedirect } from '@/hooks/useExternalRedirect';

export default function StatusRedirect() {
	useExternalRedirect(EXTERNAL_URLS.STATUS);
	return null;
}
