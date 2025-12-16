import React from "react"
import { useI18n } from "../../i18n/useI18n"

type ApproachCardProps = {
  step: number
  titleKey: string
  itemKeys: string[]
  descriptionKey: string
  icon?: React.ReactNode
}

const ApproachCard = ({
  step,
  titleKey,
  itemKeys,
  descriptionKey,
  icon,
}: ApproachCardProps) => {
  const { t } = useI18n()

  return (
    <article
      className="
        relative w-full
        rounded-xl border border-black/15 bg-bg-primary shadow-sm overflow-hidden
        h-[420px]  /* ✅ toutes la même hauteur */
        flex flex-col
      "
    >
      {/* HEADER (hauteur fixe) */}
      <div className="relative px-5 pt-5 pb-5 h-[190px]">
        {/* Icon top-right */}
        <div className="absolute right-5 top-5 text-accent">
          <span className="[&>svg]:w-9 [&>svg]:h-9">{icon}</span>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <div className="text-2xl font-abril leading-none">{step}.</div>
          <h3 className="text-2xl font-abril leading-tight">
            {t(titleKey)}
          </h3>
        </div>

        {/* items : si un jour ça dépasse, ça scroll aussi */}
        <ul className="mt-5 flex flex-col gap-2 text-text-secondary max-h-[110px] overflow-auto pr-2">
          {itemKeys.map((k) => (
            <li key={k} className="font-jarka">
              {t(k)}
            </li>
          ))}
        </ul>
      </div>

      {/* FOOTER (prend le reste, texte contenu) */}
      <div className="bg-neutral-900 text-bg-primary p-6 text-sm leading-relaxed flex-1 overflow-auto pr-3">
        {t(descriptionKey)}
      </div>
    </article>
  )
}

export default ApproachCard