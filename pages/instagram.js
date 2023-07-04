import { useEffect } from 'react';
import { useRouter } from 'next/router';

const DiscordRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the desired URL
    window.location.href = 'https://instagram.com/0xhashstack';
    // router.replace('https://instagram.com/0xhashstack');
  }, []);

  return null;
};

export default DiscordRedirect;
