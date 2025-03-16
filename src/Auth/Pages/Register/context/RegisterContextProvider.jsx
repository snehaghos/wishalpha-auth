import RegisterContext from "./RegisterContext";

const RegisterContextProvider = ({ children }) => {
  return <RegisterContext.Provider value={{}}>{children}</RegisterContext.Provider>;
};

export default RegisterContextProvider;
