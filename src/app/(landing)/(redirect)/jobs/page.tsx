'use client';

import { EXTERNAL_URLS } from '@/constants/urls';
import { useExternalRedirect } from '@/hooks/useExternalRedirect';

export default function JobsRedirect() {
  useExternalRedirect(EXTERNAL_URLS.JOBS);
  return null;
}
