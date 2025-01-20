'use client';

import { EXTERNAL_URLS } from '@/constants/urls';
import { useExternalRedirect } from '@/hooks/useExternalRedirect';

export default function LogoRedirect() {
	useExternalRedirect(EXTERNAL_URLS.LOGO);
	return null;
}
