import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CounterPage from './Counter'

createRoot(document.getElementById('root')).render(
  <CounterPage />
)
