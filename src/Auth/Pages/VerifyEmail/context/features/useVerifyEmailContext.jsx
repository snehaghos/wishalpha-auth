import { useContext } from "react";
import VerifyEmailContext from "../VerifyEmailContext";

const useVerifyEmailContext = () => {
  return useContext(VerifyEmailContext);
};

export default useVerifyEmailContext;
