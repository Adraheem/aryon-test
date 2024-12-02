import {useContext, useMemo} from "react";
import {AuthContext} from "./index";
import {setAuthToken} from "../../services/api.service";

function useAuthContext() {
  const {auth, setAuth} = useContext(AuthContext);

  const isAuthenticated = useMemo(() => !!auth?.token, [auth?.token]);

  const login = (token: string) => {
    if (!!token && token.length > 0) {
      setAuthToken(token);
      !!setAuth && setAuth(prev => ({...prev, token}));
      localStorage.setItem("auth", JSON.stringify({...auth, token}));
    }
  }

  const logout = () => {
    !!setAuth && setAuth({});
    localStorage.removeItem("auth")
  }

  return {isAuthenticated, login, logout};
}

export default useAuthContext;
