import React, {useContext} from 'react';
import AuthContext from '../contexts/auth';

const Login: React.FC = () => {

  const context = useContext(AuthContext);
  console.log(context);

  function handleLogin() {}
  
  return(
    <>
      <button onClick={handleLogin}>login</button>
    </>
  );
}

export default Login;