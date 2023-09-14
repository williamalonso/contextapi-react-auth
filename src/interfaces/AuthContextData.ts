interface AuthContextData {
  signed: boolean;
  Login(
    email:string,
    password:string,
    navigate:()=>void
  ): Promise<void>;
}

export default AuthContextData;