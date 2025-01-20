'use client';

import { EXTERNAL_URLS } from '@/constants/urls';
import { useExternalRedirect } from '@/hooks/useExternalRedirect';

export default function InstagramRedirect() {
  useExternalRedirect(EXTERNAL_URLS.INSTAGRAM);
  return null;
}
