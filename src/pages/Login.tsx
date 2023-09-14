import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';

const Login: React.FC = () => {
  
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const { Login } = useContext(AuthContext); // Importe o contexto de autenticação

  async function handleLogin() {
    try {
      await Login(email, password, () => {
        navigate('/home'); // Chame navigate com a rota '/home' como argumento
      });
    } catch (e) {
      console.error('Erro ao fazer login bro: ', e);
    }
  }

  return (
    <div className="container mx-auto flex flex-col w-40 mt-20">
      <input
        type="text"
        placeholder="E-mail"
        value={email.toString()}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-5"
      />
      <input
        type="password"
        placeholder="Senha"
        value={password.toString()}
        onChange={(e) => setPassword(e.target.value)}
        className="mt-5"
      />
      <button
        onClick={handleLogin}
        className="mt-5 border-double border-4 border-sky-500"
      >
        login
      </button>
    </div>
  );
}

export default Login;