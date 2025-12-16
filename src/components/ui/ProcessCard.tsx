import React from "react"
import { useI18n } from "../../i18n/useI18n"

type ApproachCardProps = {
  step: number
  titleKey: string
  itemKeys: string[]      // ex: ["approach.analysis.item1", ...]
  descriptionKey: string
  icon?: React.ReactNode  // ex: <FiSearch />
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
    <article className="relative w-full max-w-[280px] rounded-xl border border-black/15 bg-bg-primary overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-10 pb-10 pt-5">
        {/* Icon top-right */}
        <div className="absolute right-5 top-5 text-accent">
          {/* taille forcée pour être sûr */}
          <span className="[&>svg]:w-9 [&>svg]:h-9">
            {icon}
          </span>
        </div>

        <div className="text-4xl font-abril leading-none pb-5">{step}.</div>

        <h3 className="mt-2 text-xl font-abril leading-tight">
          {t(titleKey)}
        </h3>

        <ul className="mt-5 flex flex-col gap-2 text-text-secondary">
          {itemKeys.map((k) => (
            <li key={k} className="font-jarka">
              {t(k)}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer (bloc sombre) */}
      <div className="mt-auto bg-neutral-900 text-bg-primary p-6 text-sm leading-relaxed min-h-[220px]">
        {t(descriptionKey)}
      </div>
    </article>
  )
}

export default ApproachCard