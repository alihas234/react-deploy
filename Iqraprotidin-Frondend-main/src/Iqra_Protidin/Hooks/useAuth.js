import { useContext } from "react";
import { AuthProvider } from "../Context/AuthContext";
// Use Context Api
const useAuth = () => {
  return useContext(AuthProvider);
};

export default useAuth;
