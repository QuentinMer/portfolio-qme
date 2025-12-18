import ButtonCta from "../ui/ButtonCta";
import { useI18n } from '../../i18n/useI18n'
import ProjectCard from "../ui/ProjectCard"


const MyWorks = () => {
  const { t } = useI18n()



  return (

    <section id="works" className="xl:mt-[10%] md:mt-[15%] mt-[20%]">
      <div className="xl:mx-[10%] md:mx-[5%] mx-2">
        {/* 2 columns */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:min-h-[70vh]">
          {/* LEFT */}
          <div className="flex flex-col gap-8 lg:max-w-[620px]">

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-abril uppercase leading-[0.95]">
              {t('works.h2')}
            </h2>

            <div className="space-y-1">
              <h3 className="text-3xl font-abril text-text-secondary">{t('works.h3')}</h3>
              <h3 className="text-3xl font-abril text-text-secondary">{t('works.h32')}</h3>
            </div>

            <div className="flex flex-col gap-8 w-full max-w-[620px] mt-16">
              <ButtonCta
                labelKey="cta.header1"
                href="#contact"
                variant="tertiary"
                fullWidth
              />
              <ButtonCta
                labelKey="cta.header2"
                href="#works"
                variant="tertiary"
                fullWidth
              />
              <ButtonCta
                labelKey="cta.header2"
                href="#works"
                variant="tertiary"
                fullWidth
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex xl:justify-end justify-center items-center md:items-center ">
            <ProjectCard
              imageSrc="/imgs/photos/desktop-horecaseek.png"
              eyebrow="EYEBROWN (UX/UI – Webflow – 2025)"
              title="Horecaseek"
              description="web app pour une recherche de restaurant"
              tags={['web app', 'ux ui', 'responsive']}
            >
              <ButtonCta
                labelKey="cta.header1"
                href="/projects/eyebrown"
                fullWidth
              />
            </ProjectCard>

          </div>

        </div>
      </div>
    </section>

  )
}

export default MyWorks
