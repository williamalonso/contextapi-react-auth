import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import loginService from '../services/loginService';

const Login: React.FC = () => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      await loginService(email, password, () => {
        navigate('/home');
      });
    } catch(e) {
      console.error('Erro ao fazer login bro: ', e);
    }
  }
  
  return(
    <div className="container mx-auto flex flex-col w-40">
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