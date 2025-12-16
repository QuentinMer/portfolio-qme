import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import Navbar from './components/layout/Navbar.tsx'
import { LangProvider } from './i18n/LangProvider.tsx'
import { LangSwitcher } from './hook/LangSwitch.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangProvider>

    <div className='bg-bg-primary'>
      <div className='fixed top-0 left-0 right-0 z-50'>
        <Navbar/>
      </div>
      <App />
    </div>
    <div>
    <div className="absolute fixed bottom-2 right-2">
          <LangSwitcher />
        </div>
      
    </div>
    </LangProvider>
  </StrictMode>,
)
 