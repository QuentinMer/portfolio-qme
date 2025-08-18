import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import Navbar from './components/layout/Navbar.tsx'
import { LangProvider } from './i18n/LangProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangProvider>

    <div className='bg-black'>
      <div className='fixed top-0 left-0 right-0 z-50'>
      <Navbar/>
      </div>
      <App />
    </div>
    </LangProvider>
  </StrictMode>,
)
 