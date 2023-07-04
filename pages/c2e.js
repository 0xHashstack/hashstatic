import { useEffect } from 'react';
import { useRouter } from 'next/router';

const DiscordRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the desired URL
    router.replace('https://zealy.io/c/hashstack/questboard');
  }, []);

  return null;
};

export default DiscordRedirect;
