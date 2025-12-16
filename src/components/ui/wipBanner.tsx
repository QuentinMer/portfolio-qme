import {  useState } from "react"
import { useI18n } from "../../i18n/useI18n"

type WipBannerProps = {
  /** clé i18n (ex: "banner.wip") */
  labelKey?: string
  /** clé i18n (ex: "banner.wipCta") */
  ctaKey?: string
  /** lien optionnel (ex: "#contact" ou "/projects") */
  href?: string
  /** fixe en haut ? */
  fixed?: boolean
  /** mémorise le "close" en localStorage */
  persist?: boolean
  /** clé de storage si persist=true */
  storageKey?: string
  className?: string
}

const WipBanner = ({
  labelKey = "banner.wip",
  ctaKey = "banner.wipCta",
  href = "#contact",
  fixed = true,
  persist = true,
  storageKey = "wip-banner-closed",
  className = "",
}: WipBannerProps) => {
  const { t } = useI18n()
  const [open, setOpen] = useState(true)


  const close = () => {
    setOpen(false)
    if (persist) localStorage.setItem(storageKey, "1")
  }

  if (!open) return null

  return (
    <div
      className={[
        "w-full bg-accent backdrop-blur-md py-4",
        fixed ? "fixed top-0 left-0 right-0 z-[999]" : "relative",
        className,
      ].join(" ")}
      role="status"
      aria-live="polite"
    >
      <div className="mx-auto max-w-6xl px-4 py-2 flex items-center gap-3">
        <span className="text-sm text-bg-primary">
          {t(labelKey)}
        </span>

        {href && (
          <a
            href={href}
            className="ml-auto text-sm text-bg-primary underline underline-offset-4 hover:opacity-80"
          >
            {t(ctaKey)}
          </a>
        )}

        <button
          type="button"
          onClick={close}
          aria-label="Close banner"
          className="ml-2 grid place-items-center h-8 w-8 rounded-sm border border-bg-primary hover:bg-hover/30"
        >
          <span className="text-lg leading-none text-bg-primary cursor-pointer">×</span>
        </button>
      </div>
    </div>
  )
}

export default WipBanner