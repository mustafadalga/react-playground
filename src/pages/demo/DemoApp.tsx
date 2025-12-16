import { useState, useEffect } from 'react';

export default function DemoApp() {
  const [token, setToken] = useState<string | null>(null);

  const addLog = (msg: string) => {
    console.log(msg);
  };

  // Listen for messages from iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.source !== 'auth0') return;
      console.log(event.data);
      setToken(JSON.stringify(event.data));
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);



  const checkAndAuth = () => {
    addLog('[APP] Checking for token...');
    
    if (token) {
      addLog('[APP] ✅ Token exists, no need for iframe');
      return;
    }

    addLog('[APP] ❌ No token, creating hidden iframe');
    
    // Create hidden iframe
    const iframe = document.createElement('iframe');
    iframe.src = '/auth-server';
    iframe.style.display = 'none';
    
    iframe.onload = () => {
      addLog('[APP] Iframe loaded');
      
      // Remove iframe after 2 seconds
      setTimeout(() => {
        iframe.remove();
        addLog('[APP] Iframe removed');
      }, 2000);
    };
    
    document.body.appendChild(iframe);
  };

  return (
    <div className='bg-white text-black'>
      <h1>Simple Silent Auth Demo</h1>
      
      <button 
        onClick={checkAndAuth}
        style={{ padding: '15px 30px', fontSize: '16px', cursor: 'pointer' }}
      >
        Check Auth
      </button>

      <div style={{ marginTop: '20px', padding: '20px', background: '#f0f0f0' }}>
        <strong>Token:</strong> {token || 'None'}
      </div>
    </div>
  );
}
