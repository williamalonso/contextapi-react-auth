import React, {createContext, ReactNode} from 'react';
import api from '../services/api';

// Aqui estamos definindo a forma dos dados que serão fornecidos pelo Contexto
interface AuthContextData {
  signed: boolean;
  Login(
    email:string,
    password:string,
    navigate:()=>void
  ): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  return(
    <AuthContext.Provider value={{ signed: true, Login }}>
      {children}
    </AuthContext.Provider>
  );
}

// chamar a api
async function Login(email: string, password: string, navigate: () => void) {
  try {

    const fakeData = {
      data: {
        token: 'DHFDHUDFH-DFDFJDH',
        user: {
          email: email,
          password: password,
        }
      }
    }

    await new Promise( (resolve) => setTimeout(resolve, 1000) );

    console.log('login bem sucedido:', fakeData);

    navigate();

    
  } catch(e) {
    console.error('Erro ao fazer login: ', e);
  }
}

export default AuthContext;