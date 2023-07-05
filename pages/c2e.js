import { useEffect } from 'react';
import { useRouter } from 'next/router';

const DiscordRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the desired URL
    window.location.href = 'https://zealy.io/c/hashstack/questboard';
  }, []);

  return null;
};

export default DiscordRedirect;