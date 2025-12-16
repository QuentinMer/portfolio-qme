import { useI18n } from "../../i18n/useI18n"

type ButtonCtaProps = {
  labelKey?: string        // clé i18n
  href?: string            // lien
  fullWidth?: boolean      // width: 100%
  variant?: 'primary' | 'secondary' | 'tertiary'
}

const ButtonCta = ({
  labelKey = 'cta.navbar',
  href = '#',
  fullWidth = false,
  variant = 'primary',
}: ButtonCtaProps) => {
  const { t } = useI18n()

  const base =
    'px-10 py-2 cursor-pointer transition-all duration-200 hover:shadow-md active:shadow-none text-center'

  const variants = {
    primary: 'bg-accent text-bg-primary hover:bg-hover rounded-sm',
    secondary: 'bg-transparent border border-accent text-accent hover:bg-hover hover:shadow-md active:shadow-none hover:text-bg-primary rounded-sm',
    tertiary: 'bg-text-secondary hover:shadow-md active:shadow-none rounded-full text-bg-primary hover:bg-text-primary active:bg-text-primary py-4',
  }

const width = fullWidth ? 'w-full block' : 'w-fit inline-block'
  return (
    <a href={href} className={`${base} ${variants[variant]} ${width}`}>
      {t(labelKey)}
    </a>
  )
}

export default ButtonCta