'use client';

import { EXTERNAL_URLS } from '@/constants/urls';
import { useExternalRedirect } from '@/hooks/useExternalRedirect';

export default function MainnetRedirect() {
  useExternalRedirect(EXTERNAL_URLS.MAINNET);
  return null;
}
