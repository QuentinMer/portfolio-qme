import { useEffect, useMemo, useState } from "react";
import { useI18n } from "../../i18n/useI18n";

type ButtonCtaProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonCta({ onClick, className = "", ...props }: ButtonCtaProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { lang, t } = useI18n();

  // Convention de fichiers :
  // /img/cta-fr.svg
  // /img/cta-hover-fr.svg
  const base = useMemo(() => `/img/cta-${lang}.svg`, [lang]);
  const hover = useMemo(() => `/img/cta-hover-${lang}.svg`, [lang]);
  const src = isHovered ? hover : base;

  // Précharger la version hover pour éviter le "flash" au premier survol
  useEffect(() => {
    const img = new Image();
    img.src = hover;
  }, [hover]);

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      aria-label={t("cta.label", "Contact")}
      className={`p-0 bg-transparent border-0 ${className}`}
      {...props}
    >
      <img
        src={src}
        alt={t("cta.alt", "Signature / Contact")}
        className="w-50 md:w-50 xl:w-80 cursor-pointer hover:scale-105 transition-transform duration-200 select-none"
        draggable={false}
        // Pour un bouton "call to action", on évite le lazy
        loading="eager"
        decoding="async"
      />
    </button>
  );
}