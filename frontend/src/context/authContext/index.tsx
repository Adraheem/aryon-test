import React, {createContext, useEffect, useState} from 'react';
import {IAuthContext, IAuthContextState} from "./types";
import {setAuthToken} from "../../services/api.service";

export const AuthContext = createContext<IAuthContext>({});

interface IProps {
  children: React.ReactNode
}

function AuthContextProvider({children}: IProps) {
  const [auth, setAuth] = useState<IAuthContextState>({});
  const [hydratedAuth, setHydratedAuth] = useState(false);

  useEffect(() => {
    if (!hydratedAuth) {
      const localStorageAuth = localStorage.getItem("auth");
      if (!!localStorageAuth) {
        const parsedAuth = JSON.parse(localStorageAuth);
        setAuth(parsedAuth);
        !!parsedAuth.token && setAuthToken(parsedAuth.token);
      }

      setHydratedAuth(true);
    }
  }, [hydratedAuth]);

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {!hydratedAuth ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
