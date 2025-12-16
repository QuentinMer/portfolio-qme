import { useI18n } from "../../i18n/useI18n"

type ButtonCtaProps = {
  labelKey?: string
  href?: string
  fullWidth?: boolean
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'tertiary'
  type?: 'button' | 'submit'
}

const ButtonCta = ({
  labelKey = 'cta.navbar',
  href,
  onClick,
  fullWidth = false,
  variant = 'primary',
  type = 'button',
}: ButtonCtaProps) => {
  const { t } = useI18n()

  const base =
    'px-10 py-2 cursor-pointer transition-all duration-200 hover:shadow-md active:shadow-none text-center'

  const variants = {
    primary: 'bg-accent text-bg-primary hover:bg-hover rounded-sm',
    secondary:
      'bg-transparent border border-accent text-accent hover:bg-hover hover:text-bg-primary rounded-sm',
    tertiary:
      'bg-text-secondary rounded-full text-bg-primary hover:bg-text-primary py-4',
  }

  const width = fullWidth ? 'w-full block' : 'w-fit inline-block'
  const className = `${base} ${variants[variant]} ${width}`

  // Si onClick => button (modal)
  if (onClick) {
    return (
      <button type={type} onClick={onClick} className={className}>
        {t(labelKey)}
      </button>
    )
  }

  // Sinon lien
  return (
    <a href={href || '#'} className={className}>
      {t(labelKey)}
    </a>
  )
}

export default ButtonCta