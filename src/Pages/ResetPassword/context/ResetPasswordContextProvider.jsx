import ResetPasswordContext from "./ResetPasswordContext";

const ResetPasswordContextProvider = ({ children }) => {
  return <ResetPasswordContext.Provider value={{}}>{children}</ResetPasswordContext.Provider>;
};

export default ResetPasswordContextProvider;
