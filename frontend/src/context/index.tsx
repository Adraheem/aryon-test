import React from 'react';
import AuthContextProvider from "./authContext";
import FilterContextProvider from "./filterContext";
import ThemeContextProvider from "./themeContext";

interface IProps {
  children: React.ReactNode;
}

function Providers({children}: IProps) {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <FilterContextProvider>
          {children}
        </FilterContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default Providers;
