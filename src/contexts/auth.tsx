import React, {createContext} from 'react';

const AuthContext = createContext({});

export const AuthProvider: React.FC = ({ children }) => {
  return(
    <AuthContext.Provider value={{ signed:true }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;