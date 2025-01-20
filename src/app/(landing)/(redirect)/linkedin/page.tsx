'use client';

import { EXTERNAL_URLS } from '@/constants/urls';
import { useExternalRedirect } from '@/hooks/useExternalRedirect';

export default function LinkedinRedirect() {
  useExternalRedirect(EXTERNAL_URLS.LINKEDIN);
  return null;
}
