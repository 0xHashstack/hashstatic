'use client';

import { EXTERNAL_URLS } from '@/constants/urls';
import { useExternalRedirect } from '@/hooks/useExternalRedirect';

export default function DocsRedirect() {
	useExternalRedirect(EXTERNAL_URLS.DOCS);
	return null;
}
