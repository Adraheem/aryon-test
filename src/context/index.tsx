import React from 'react';
import AuthContextProvider from "./authContext";

interface IProps {
  children: React.ReactNode;
}

function Providers({children}: IProps) {
  return (
    <AuthContextProvider>
      {children}
    </AuthContextProvider>
  );
}

export default Providers;
