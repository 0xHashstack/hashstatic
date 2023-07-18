import { useEffect } from 'react';
import { useRouter } from 'next/router';

const TwitterRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the desired URL
    window.location.href ='https://github.com/0xHashstack/whitepaper/blob/main/Open protocol/v0.2/Open protocol v0.2.7.pdf';
  }, []);

  return null;
};

export default TwitterRedirect;