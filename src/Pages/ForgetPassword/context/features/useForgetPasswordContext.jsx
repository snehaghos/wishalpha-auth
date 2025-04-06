import { useContext } from "react";
import ForgetPasswordContext from "../ForgetPasswordContext";

const useForgetPasswordContext = () => {
  return useContext(ForgetPasswordContext);
};

export default useForgetPasswordContext;
