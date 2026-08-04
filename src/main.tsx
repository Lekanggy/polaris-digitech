import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloProvider } from './services/apolloClient'
import './index.css'
import App from './App.tsx'
import { apolloClient } from './services/apolloClient'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // Ignore service worker registration errors so the app still works.
    });
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </StrictMode>,
)
