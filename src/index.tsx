import StyledGlobal from './StyledComponents/StyledGlobal';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './contexts/auth';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <StyledGlobal />
        <Routing />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);