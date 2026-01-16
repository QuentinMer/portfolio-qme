import React, { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import ButtonCta from './ButtonCta'

type NavLink = {
  label: string
  href: string
  ariaLabel?: string
}

export interface CardNavProps {
  links: NavLink[]
  className?: string
  ease?: string
  baseColor?: string
  menuColor?: string
}

const CardNav: React.FC<CardNavProps> = ({
  links,
  className = '',
  ease = 'power3.out',
  baseColor = '#EBE7E1',
  menuColor = '#A46A43',
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const navRef = useRef<HTMLDivElement | null>(null)
  const itemsRef = useRef<HTMLLIElement[]>([])
  const tlRef = useRef<gsap.core.Timeline | null>(null)

  const calculateHeight = () => {
    const navEl = navRef.current
    if (!navEl) return 260

    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement | null
      if (contentEl) {
        const wasVisible = contentEl.style.visibility
        const wasPointerEvents = contentEl.style.pointerEvents
        const wasPosition = contentEl.style.position
        const wasHeight = contentEl.style.height

        contentEl.style.visibility = 'visible'
        contentEl.style.pointerEvents = 'auto'
        contentEl.style.position = 'static'
        contentEl.style.height = 'auto'

        void contentEl.offsetHeight

        const topBar = 60
        const padding = 16
        const contentHeight = contentEl.scrollHeight

        contentEl.style.visibility = wasVisible
        contentEl.style.pointerEvents = wasPointerEvents
        contentEl.style.position = wasPosition
        contentEl.style.height = wasHeight

        return topBar + contentHeight + padding
      }
    }
    return 260
  }

  const createTimeline = () => {
    const navEl = navRef.current
    if (!navEl) return null

    gsap.set(navEl, { height: 60, overflow: 'hidden' })
    gsap.set(itemsRef.current, { y: 24, opacity: 0 })

    const tl = gsap.timeline({ paused: true })

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.45,
      ease,
    })

    tl.to(
      itemsRef.current,
      { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.06 },
      '-=0.18'
    )

    return tl
  }

  useLayoutEffect(() => {
    const tl = createTimeline()
    tlRef.current = tl
    return () => {
      tl?.kill()
      tlRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ease, links])

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return

      tlRef.current.kill()
      const newTl = createTimeline()
      if (!newTl) return

      if (isExpanded) newTl.progress(1)
      tlRef.current = newTl
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded])

  const toggleMenu = () => {
    const tl = tlRef.current
    if (!tl) return

    if (!isExpanded) {
      setIsHamburgerOpen(true)
      setIsExpanded(true)
      tl.play(0)
    } else {
      setIsHamburgerOpen(false)
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false))
      tl.reverse()
    }
  }

  const setItemRef = (i: number) => (el: HTMLLIElement | null) => {
    if (el) itemsRef.current[i] = el
  }

  return (
    <div className={`card-nav-container ${className}`}>
      <nav
        ref={navRef}
        className="card-nav block h-[60px] p-0 rounded-sm shadow-md relative overflow-hidden will-change-[height]"
        style={{ backgroundColor: baseColor }}
      >
        {/* Top bar */}
        <div className="absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 pl-[1.1rem] z-[2]">
          <div className="flex items-center ps-2">
            <span className="text-xl text-accent">2MERQ studio</span>
          </div>
          <div
            className="group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px] pr-2"
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            style={{ color: menuColor }}
          >
            <div
              className={`w-[30px] h-[2px] bg-current transition-[transform,opacity] duration-300 ease-linear [transform-origin:50%_50%]
                ${isHamburgerOpen ? 'translate-y-[4px] rotate-45' : ''} group-hover:opacity-75`}
            />
            <div
              className={`w-[30px] h-[2px] bg-current transition-[transform,opacity] duration-300 ease-linear [transform-origin:50%_50%]
                ${isHamburgerOpen ? '-translate-y-[4px] -rotate-45' : ''} group-hover:opacity-75`}
            />
          </div>

        </div>

        {/* Content (links centered, gap-4) */}
        <div
          className={`
            card-nav-content absolute left-0 right-0 top-[60px] bottom-0
            p-4 flex flex-col items-center justify-center gap-4 z-[1]
            ${isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'}
          `}
          aria-hidden={!isExpanded}
        >
          <ul className="flex flex-col items-center gap-4">
            {links.map((lnk, i) => (
              <li key={`${lnk.label}-${i}`} ref={setItemRef(i)}>
              <a
                href={lnk.href}
                aria-label={lnk.ariaLabel || lnk.label}
                className={`
                  relative inline-block pb-1
                  text-lg text-text-primary
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-accent
                  after:transition-all after:duration-300
                  hover:after:w-full
                `}
              >
                {lnk.label}
              </a>
            </li>
            ))}
          </ul>

          <div className="w-full pt-2">
            <div className="w-full [&>button]:w-full [&>a]:w-full">
            <ButtonCta
            labelKey="cta.navbar"
            href="/#contact"
            variant="primary"
          />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default CardNav