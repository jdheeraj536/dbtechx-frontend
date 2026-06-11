import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async' // Ye import add kiya
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider> {/* HelmetProvider se wrap kiya */}
      <App />
    </HelmetProvider>
  </StrictMode>,
)