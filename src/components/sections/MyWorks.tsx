import { useState } from 'react'
import { useI18n } from '../../i18n/useI18n'
import ButtonCta from '../ui/ButtonCta'
import ProjectCard from '../ui/ProjectCard'

type ProjectKey = 'horecaseek' | 'rhumer' | null

const MyWorks = () => {
  const { t } = useI18n()
  const [activeProject, setActiveProject] = useState<ProjectKey>(null)

  return (
    <section id="works" className="xl:mt-[10%] md:mt-[15%] mt-[20%]">
      <div className="xl:mx-[10%] md:mx-[5%] mx-2">

        <div className="flex flex-col lg:flex-row gap-12 lg:min-h-[70vh]">

          {/* LEFT */}
          <div className="flex flex-col gap-8 lg:max-w-[620px]">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-abril uppercase leading-[0.95]">
              {t('works.h2')}
            </h2>

            <div className="space-y-1">
              <h3 className="text-3xl font-abril text-text-secondary">
                {t('works.h3')}
              </h3>
              <h3 className="text-3xl font-abril text-text-secondary">
                {t('works.h32')}
              </h3>
            </div>

            {/* PROJECT BUTTONS */}
            <div className="flex flex-col gap-8 w-full max-w-[620px] mt-16">
              <ButtonCta
                labelKey="cta.horecaseek"
                variant="tertiary"
                fullWidth
                onClick={() => setActiveProject('horecaseek')}
              />

              <ButtonCta
                labelKey="cta.rhumer"
                variant="tertiary"
                fullWidth
                onClick={() => setActiveProject('rhumer')}
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex justify-center xl:justify-end items-center">

            {activeProject === 'horecaseek' && (
              <ProjectCard
                key="horecaseek"
                imageSrc="/imgs/photos/desktop-horecaseek.png"
                eyebrow="UX/UI – Web App – 2025"
                title="HorecaSeek"
                description="Web app pour simplifier la recherche de restaurants"
                tags={['web app', 'ux ui', 'responsive']}
              >
                <ButtonCta
                  key="link-horecaseek"
                  labelKey="cta.header1"
                  href="/projects/horecaseek"
                  fullWidth
                />
              </ProjectCard>
            )}

            {activeProject === 'rhumer' && (
              <ProjectCard
                key="rhumer"
                imageSrc="/imgs/photos/mobile-rhumer.png"
                eyebrow="UX/UI – Mobile App – 2025"
                title="Rhumer"
                description="Application mobile pour découvrir et explorer des rhums"
                tags={['mobile app', 'ux ui', 'branding']}
              >
                <ButtonCta
                  key="link-rhumer"
                  labelKey="cta.header1"
                  href="/projects/rhumer"
                  fullWidth
                />
              </ProjectCard>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}

export default MyWorks