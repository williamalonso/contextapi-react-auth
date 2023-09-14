import StyledGlobal from './StyledComponents/StyledGlobal';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthContext from './contexts/auth';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthContext.Provider value={{signed: true}}>
      <BrowserRouter>
        <StyledGlobal />
        <Routing />
      </BrowserRouter>
    </AuthContext.Provider>
  </React.StrictMode>
);