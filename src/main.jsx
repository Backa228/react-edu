import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import { AppProviders } from './context/AppProviders.jsx'
import { BrowserRouter } from "react-router-dom";

// const initialUserValue = {
//   username: "Andriy",
//   inLoggedIn: true
// }

createRoot(document.getElementById('root')).render(
  // <StrictMode>
<BrowserRouter>
  <AppProviders>
    <App />
  </AppProviders>
</BrowserRouter>
  // </StrictMode>,
)
