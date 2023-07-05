import { useEffect } from 'react';
import { useRouter } from 'next/router';

const MediumRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the desired URL
    window.location.href =' https://hashstack.medium.com';
  }, []);

  return null;
};

export default MediumRedirect;