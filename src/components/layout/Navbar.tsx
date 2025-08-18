
import { useState } from 'react'
import { LangSwitcher } from '../../hook/LangSwitch'
import { useI18n } from '../../i18n/useI18n'

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('')
  const { t } = useI18n()

  return (
    <div className="backdrop-blur-xl md:backdrop-blur-md">
      <div className="absolute right-0 top-0 hidden md:block">
       <ul className="flex flex-row gap-15 text-slate-50 mx-12 pt-10 text-xl font-family-geist">
        
        <li 
          className={`cursor-pointer relative group gap-1 ${activeItem === 'works' ? '' : ''}`}
          onClick={() => setActiveItem('works')}
        >
          <a href="#works">{t("nav.work")}</a>
          <img 
            src="/img/underline.svg" 
            alt="underline" 
            className={`absolute -bottom-1 left-0 w-full h-auto transition-opacity duration-300 ${
              activeItem === 'works' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
          />
        </li>
        <li 
          className={`cursor-pointer relative group gap-1 ${activeItem === 'about' ? '' : ''}`}
          onClick={() => setActiveItem('about')}
        >
          <a href="#about">{t("nav.about")}</a>
          <img 
            src="/img/underline.svg" 
            alt="underline" 
            className={`absolute -bottom-1 left-0 w-full h-auto transition-opacity duration-300 ${
              activeItem === 'about' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
          />
        </li>
        <li 
          className={`cursor-pointer relative group gap-1 ${activeItem === 'contact' ? '' : ''}`}
          onClick={() => setActiveItem('contact')}
        >
          <a href="#contact">{t("nav.contact")}</a>
          <img 
            src="/img/underline.svg" 
            alt="underline" 
            className={`absolute -bottom-1 left-0 w-full h-auto transition-opacity duration-300 ${
              activeItem === 'contact' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
          />
        </li>
        <li>
         <LangSwitcher />

         </li>
       </ul>
      </div>
      <div>

      <div className='flex justify-between items-center p-5'>
        <div className='flex flex-col gap-2 justify-end items-end md:hidden'>
            <LangSwitcher />
      <ul className="flex flex-row gap-15 md:hidden text-slate-50 mx-auto text-xl font-family-geist">
        <li 
          className={`cursor-pointer relative group gap-1 ${activeItem === 'works' ? '' : ''}`}
          onClick={() => setActiveItem('works')}
          >
          <span>works</span>
          <img 
            src="/img/underline.svg" 
            alt="underline" 
            className={`absolute -bottom-1 left-0 w-full h-auto transition-opacity duration-300 ${
              activeItem === 'works' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
            />
        </li>
        <li 
          className={`cursor-pointer relative group gap-1 ${activeItem === 'about' ? '' : ''}`}
          onClick={() => setActiveItem('about')}
          >
          <span>about</span>
          <img 
            src="/img/underline.svg" 
            alt="underline" 
            className={`absolute -bottom-1 left-0 w-full h-auto transition-opacity duration-300 ${
              activeItem === 'about' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
            />
        </li>
        <li 
          className={`cursor-pointer relative group gap-1 ${activeItem === 'contact' ? '' : ''}`}
          onClick={() => setActiveItem('contact')}
          >
          <span>contact</span>
          <img 
            src="/img/underline.svg" 
            alt="underline" 
            className={`absolute -bottom-1 left-0 w-full h-auto transition-opacity duration-300 ${
              activeItem === 'contact' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
            />
        </li>
       </ul>
            </div>
       <img 
  src="/img/logo-orange.svg" 
  alt="logo" 
  className='w-30 h-30 hidden md:block backdrop-blur-md rounded-full cursor-pointer hover:scale-105 transition-transform duration-200' 
  onClick={() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setActiveItem('')
  }}
/>
        <hr className='border-slate-50 h-px w-full mx-4 hidden md:block' />
      </div>
  </div>
    </div>
  )
}

export default Navbar
