
import { createRoot } from 'react-dom/client'
import NameProvider from './Parent'

createRoot(document.getElementById('root')).render(
  <NameProvider />
)
