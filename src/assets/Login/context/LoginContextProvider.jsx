import LoginContext from "./LoginContext";

const LoginContextProvider = ({ children }) => {
  return <LoginContext.Provider value={{}}>{children}</LoginContext.Provider>;
};

export default LoginContextProvider;
