import { useContext } from "react";
import ResetPasswordContext from "../ResetPasswordContext";

const useResetPasswordContext = () => {
  return useContext(ResetPasswordContext);
};

export default useResetPasswordContext;
