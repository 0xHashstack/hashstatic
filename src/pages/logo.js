import { useEffect } from 'react';
import { useRouter } from 'next/router';

const TwitterRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the desired URL
    window.location.href ='https://drive.google.com/drive/folders/1ysun5L45Ib4MZAOGr8v9BK-CpZuMpXJr';
  }, []);

  return null;
};

export default TwitterRedirect;