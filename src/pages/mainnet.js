import { useEffect } from 'react';
import { useRouter } from 'next/router';

const TwitterRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the desired URL
    window.location.href ='https://app.hashstack.finance/v1/';
  }, []);

  return null;
};

export default TwitterRedirect;