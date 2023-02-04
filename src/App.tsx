import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Wrapper from './components/Wrapper/Wrapper';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
});

type Props = {}

const App: React.FC<Props> = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper/>
    </QueryClientProvider>
  )
}

export default App
