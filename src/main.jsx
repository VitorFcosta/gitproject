import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import App from './App.jsx'

// o "cérebro" do cache
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Se der erro, tenta de novo 1 vez 
      retry: 1,
      // Não refaz fetch quando a janela ganha foco
      refetchOnWindowFocus: false,
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
