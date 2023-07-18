import { useEffect } from 'react';
import { useRouter } from 'next/router';

const TwitterRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the desired URL
    window.location.href ='https://angel.co/company/hashstack/jobs';
  }, []);

  return null;
};

export default TwitterRedirect;