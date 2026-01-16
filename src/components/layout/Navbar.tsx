import { useState } from 'react'
import { useI18n } from '../../i18n/useI18n'
import ButtonCta from "../ui/ButtonCta"
import CardNav from '../ui/CardNav'
import { Link } from 'react-router-dom'


const navItems = [
  { id: 'header', label: 'nav.about', href: '#header' },
  { id: 'works', label: 'nav.work', href: '#works' },
  { id: 'skills', label: 'nav.skills', href: '#skills' },
  { id: 'contact', label: 'nav.contact', href: '#contact' },
]


const Navbar = () => {
  const { t } = useI18n()
  const [activeItem, setActiveItem] = useState('about')

  const linkClass = (isActive: boolean) => `
    relative inline-block pb-1
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:bg-accent
    after:transition-all after:duration-300
    ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
  `

  return (
    <header className="backdrop-blur-xl md:backdrop-blur-md border-b border-accent relative">
      {/* MOBILE */}



      <CardNav
        className="sm:hidden"
        links={[
          { label: t('nav.about'), href: '#header' },
          { label: t('nav.work'), href: '#works' },
          { label: t('nav.skills'), href: '#skills' },
          { label: t('nav.contact'), href: '#contact' },
        ]}
      />


      {/* DESKTOP */}
      <div className="hidden sm:block">
        <div className="flex justify-between items-center xl:mx-[10%] md:mx-[5%] sm:mx-2 py-2">
          <Link
            to="/"
            className="text-xl font-abril text-accent hover:opacity-80 transition"
          >
            2MERQ studio
          </Link>
          <ul className="flex xl:gap-20 md:gap-14 sm:gap-5">
            {navItems.map(item => {
              const isActive = activeItem === item.id
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => setActiveItem(item.id)}
                    className={linkClass(isActive)}
                  >
                    {t(item.label)}
                  </a>
                </li>
              )
            })}
          </ul>

          <ButtonCta
            labelKey="cta.navbar"
            href="/#contact"
            variant="primary"
          />
        </div>


      </div>
    </header>
  )
}

export default Navbar