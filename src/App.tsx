import React from 'react';
import RootNavigation from "./navigation";
import Providers from "./context";

function App() {
  return (
    <Providers>
      <RootNavigation/>
    </Providers>
  );
}

export default App;
