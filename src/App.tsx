import React from 'react';
import RootNavigation from "./navigation";
import Providers from "./context";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Providers>
        <RootNavigation/>
      </Providers>
    </QueryClientProvider>
  );
}

export default App;
