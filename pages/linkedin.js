import { useEffect } from 'react';
import { useRouter } from 'next/router';

const DiscordRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the desired URL
    router.replace(' https://in.linkedin.com/company/0xhashstack');
  }, []);

  return null;
};

export default DiscordRedirect;
