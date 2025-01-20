'use client';

import { EXTERNAL_URLS } from '@/constants/urls';
import { useExternalRedirect } from '@/hooks/useExternalRedirect';

export default function CoreRedirect() {
	useExternalRedirect(EXTERNAL_URLS.CORE);
	return null;
}
