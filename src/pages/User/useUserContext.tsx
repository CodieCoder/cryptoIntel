import { useContext } from "react";
import UserContext from "./context";

const useUserProvider = () => {
  const userContext = useContext(UserContext);
  return userContext;
};

export default useUserProvider;
