import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CounterApp from './CounterEffectApp'


createRoot(document.getElementById('root')).render(
  <CounterApp />
)
