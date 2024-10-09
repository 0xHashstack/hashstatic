import { useEffect } from 'react';
import { useRouter } from 'next/router';

const DiscordRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the desired URL
    window.location.href =' https://discord.gg/FpBhQ7M3d4';
  }, []);

  return null;
};

export default DiscordRedirect;