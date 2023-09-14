import React, {createContext, ReactNode} from 'react';

// Aqui estamos definindo a forma dos dados que serão fornecidos pelo Contexto
interface AuthContextData {
  signed: boolean;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

// Dentro do componente AuthProvider, você usa <AuthContext.Provider> para fornecer o contexto aos componentes filhos. Neste caso, você está definindo o valor do contexto como { signed: true }, indicando que o usuário está autenticado. Isso é apenas um exemplo; você pode substituir esse valor real com base na lógica de autenticação de sua aplicação.
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  return(
    <AuthContext.Provider value={{ signed:true }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;