import { useContext } from "react";
import LoginContext from "../LoginContext";

const useLoginContext = () => {
  return useContext(LoginContext);
};

export default useLoginContext;
