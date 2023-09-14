import React, {createContext} from 'react';
import AuthContextData from '../interfaces/AuthContextData';
import AuthProviderProps from '../interfaces/AuthProviderProps';
import loginService from '../services/loginService';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const initialValue: AuthContextData = {
  signed: false,
  Login: loginService,
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  return(
    <AuthContext.Provider value={initialValue}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;