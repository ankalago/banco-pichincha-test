import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from './globalStyles'
import Layout from './components/Layout/Layout';

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
      <GlobalStyle />
      <Layout/>
    </QueryClientProvider>
  )
}

export default App
