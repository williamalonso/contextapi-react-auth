import React, { createContext, useState, useEffect } from 'react';
import AuthContextData from '../interfaces/AuthContextData';
import AuthProviderProps from '../interfaces/AuthProviderProps';
import loginService from '../services/loginService';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [signed, setSigned] = useState(false);
  const [user, setUser] = useState({ email: '', password: '' });

  useEffect(() => {
    // Verifique se os dados de autenticação estão presentes no localStorage
    const authToken = localStorage.getItem('authToken');
    const userEmail = localStorage.getItem('userEmail');

    if (authToken && userEmail) {
      setSigned(true);
      setUser({ email: userEmail, password: '' }); // Não armazene a senha no estado por razões de segurança
    }
  }, []);

  const Login = async (email: string, password: string, navigate: () => void) => {
    try {
      await loginService(email, password); // Chame o serviço de autenticação

      setSigned(true);
      setUser({ email, password });

      navigate();
    } catch (e) {
      console.error('Erro ao fazer login: ', e);
    }
  };

  const Logout = () => {
    // Limpe os dados de autenticação no localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');

    // Atualize o estado para indicar que o usuário não está autenticado
    setSigned(false);

    // Limpe os dados do usuário
    setUser({ email: '', password: '' });

  }

  const initialValue: AuthContextData = {
    signed,
    user,
    Login,
    Logout,
  };

  return (
    <AuthContext.Provider value={initialValue}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };