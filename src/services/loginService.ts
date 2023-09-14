async function loginService(email: string, password: string, navigate: () => void) {
  
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

export default loginService;