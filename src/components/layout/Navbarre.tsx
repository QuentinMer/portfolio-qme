import { useEffect, useState } from 'react'
import { LangSwitcher } from '../../hook/LangSwitch'
import { useI18n } from '../../i18n/useI18n'
import ButtonCta from "../ui/ButtonCta"

const navItems = [
  { id: 'about', label: 'nav.about', href: '#about' },
  { id: 'works', label: 'nav.work', href: '#works' },
  { id: 'skills', label: 'nav.skills', href: '#skills' },
  { id: 'contact', label: 'nav.contact', href: '#contact' },
]

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('about')
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useI18n()

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  // lock scroll quand menu mobile ouvert (optionnel mais mieux)
  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [isOpen])

  const linkClass = (isActive) => `
    relative inline-block pb-2
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:bg-accent
    after:transition-all after:duration-300
    ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
  `

  const onNavClick = (itemId) => {
    setActiveItem(itemId)
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl md:backdrop-blur-md border-b border-accent">
      {/* ===== DESKTOP: tu gardes ton layout ===== */}
      <div className="flex justify-between items-center mx-40 py-2">
        <span className="text-xl font-abril text-accent">2MERQ studio</span>

        <div className="md:w-150">
          <ul className="hidden md:flex justify-between items-center gap-20">
            {navItems.map((item) => {
              const isActive = activeItem === item.id
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => onNavClick(item.id)}
                    className={linkClass(isActive)}
                  >
                    {t(item.label)}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="hidden md:block">
          <ButtonCta />
        </div>
      </div>

      {/* ton switcher en desktop comme avant */}
      <div className="hidden md:block absolute top-2 right-2">
        <LangSwitcher />
      </div>

      {/* ===== MOBILE TOP BAR ===== */}
      <div className="md:hidden flex items-center justify-between px-6 py-3">
        <span className="text-xl font-abril text-accent">2MERQ studio</span>

        <div className="flex items-center gap-3">
          <LangSwitcher />

          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(v => !v)}
            className="relative h-10 w-10 border border-accent rounded-md"
          >
            <span
              className={`absolute left-1/2 top-1/2 h-[2px] w-5 -translate-x-1/2 -translate-y-1/2 bg-accent transition-all duration-300
                ${isOpen ? 'rotate-45' : '-translate-y-2'}
              `}
            />
            <span
              className={`absolute left-1/2 top-1/2 h-[2px] w-5 -translate-x-1/2 -translate-y-1/2 bg-accent transition-all duration-300
                ${isOpen ? 'opacity-0' : 'opacity-100'}
              `}
            />
            <span
              className={`absolute left-1/2 top-1/2 h-[2px] w-5 -translate-x-1/2 -translate-y-1/2 bg-accent transition-all duration-300
                ${isOpen ? '-rotate-45' : 'translate-y-2'}
              `}
            />
          </button>
        </div>
      </div>

      {/* ===== MOBILE FULLSCREEN MENU ===== */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        {/* overlay (clique pour fermer) */}
        <button
          aria-label="Close menu overlay"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/50"
        />

        {/* panel fullscreen */}
        <div className="fixed inset-0 z-50 backdrop-blur-xl bg-black/30">
          {/* on laisse un padding-top pour ne pas coller au bord */}
          <div className="h-full px-6 pt-24 pb-6 flex flex-col">
            {/* liens centrés */}
            <nav className="flex-1 flex items-center justify-center">
              <ul className="flex flex-col items-center gap-8 text-lg">
                {navItems.map((item) => {
                  const isActive = activeItem === item.id
                  return (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        onClick={() => onNavClick(item.id)}
                        className={linkClass(isActive)}
                      >
                        {t(item.label)}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>

            {/* CTA en bas full width */}
            <div className="w-full">
              {/* si ton ButtonCta n'accepte pas className, dis-moi et je te le modifie */}
              <div className="w-full [&>button]:w-full">
                <ButtonCta />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar