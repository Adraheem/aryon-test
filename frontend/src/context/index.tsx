import React from 'react';
import AuthContextProvider from "./authContext";
import FilterContextProvider from "./filterContext";

interface IProps {
  children: React.ReactNode;
}

function Providers({children}: IProps) {
  return (
    <AuthContextProvider>
      <FilterContextProvider>
        {children}
      </FilterContextProvider>
    </AuthContextProvider>
  );
}

export default Providers;
