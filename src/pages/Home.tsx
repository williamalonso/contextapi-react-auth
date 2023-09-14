import React, {useContext} from 'react';
import AuthContext from '../contexts/auth';

const Home: React.FC = () => {

  const context = useContext(AuthContext);
  console.log('home ->', context);

  return(
    <>
      <h1>Home</h1>
    </>
  );
}

export default Home;