'use client';

import { EXTERNAL_URLS } from '@/constants/urls';
import { useExternalRedirect } from '@/hooks/useExternalRedirect';

export default function DiscordRedirect() {
	useExternalRedirect(EXTERNAL_URLS.DISCORD);
	return null;
}
