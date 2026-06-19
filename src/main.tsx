import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloProvider } from './services/apolloClient'
import './index.css'
import App from './App.tsx'
import { apolloClient } from './services/apolloClient'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </StrictMode>,
)
