'use client';

import { EXTERNAL_URLS } from '@/constants/urls';
import { useExternalRedirect } from '@/hooks/useExternalRedirect';

export default function BlogRedirect() {
  useExternalRedirect(EXTERNAL_URLS.BLOG);
  return null;
}
