import { useEffect } from 'react';
import { useRouter } from 'next/router';

const VlogRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the desired URL
    window.location.href ='https://ipfs.io/ipfs/bafkreieam5z3qxmfloxace5wf74cqd35qtgdzs4ipxaqvv7c7hvufhtpju';
  }, []);

  return null;
};

export default VlogRedirect;