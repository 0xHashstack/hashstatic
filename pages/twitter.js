import { useEffect } from 'react';
import { useRouter } from 'next/router';

const TwitterRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the desired URL
    router.replace('https://twitter.com/0xHashstack');
  }, []);

  return null;
};

export default TwitterRedirect;
