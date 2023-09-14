interface AuthContextData {
  signed: boolean;
  user: {
    email: string;
    password: string;
  };
  Login: (email: string, password: string, navigate: () => void) => Promise<void>;
  Logout: () => void;
}

export default AuthContextData;