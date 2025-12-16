import React from 'react'
import ReactDOM from 'react-dom/client'
import DemoApp from './pages/demo/DemoApp.tsx'
import AuthServerPage from './pages/demo/AuthServerPage.tsx'
import './index.css'

// Simple routing based on pathname
const App = () => {
  const path = window.location.pathname;
  
  if (path === '/auth-server') {
    return <AuthServerPage />;
  }
  
  return <DemoApp />;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
