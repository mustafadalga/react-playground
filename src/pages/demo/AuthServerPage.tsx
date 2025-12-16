import { useEffect } from 'react';

export default function AuthServerPage() {
  useEffect(() => {
    const payload = { source:'auth0',test: 123 };
    
    console.log('[IFRAME] Sending payload to parent:', payload);
    window.parent.postMessage(payload, '*');
  }, []);

  return <div>Hidden iframe page</div>;
}
