import { useEffect } from 'react';
import { useRouter } from 'next/router';

const TwitterRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the desired URL
    window.location.href ='https://drive.google.com/drive/folders/1MwIGFymRuE8FWGDRCJjPBQwNBjhX_Dro';
  }, []);

  return null;
};

export default TwitterRedirect;