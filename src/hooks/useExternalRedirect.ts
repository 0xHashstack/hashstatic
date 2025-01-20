import { useEffect } from 'react';

export const useExternalRedirect = (url: string) => {
  useEffect(() => {
    window.location.href = url;
  }, [url]);
};
