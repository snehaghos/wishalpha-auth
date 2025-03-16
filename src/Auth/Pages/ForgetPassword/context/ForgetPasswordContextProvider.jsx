import ForgetPasswordContext from "./ForgetPasswordContext";

const ForgetPasswordContextProvider = ({ children }) => {
  return <ForgetPasswordContext.Provider value={{}}>{children}</ForgetPasswordContext.Provider>;
};

export default ForgetPasswordContextProvider;
