import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import './i18n'
import { createContext } from 'react'

import MyContext = createContext()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyContext>
       <App />
    </MyContext>
  </StrictMode>,
)
