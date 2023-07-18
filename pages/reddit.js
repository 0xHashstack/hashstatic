import { useEffect } from 'react';
import { useRouter } from 'next/router';

const TwitterRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the desired URL
    window.location.href ='https://www.reddit.com/r/0xHashstack/';
  }, []);

  return null;
};

export default TwitterRedirect;