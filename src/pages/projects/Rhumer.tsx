import { useI18n } from '../../i18n/useI18n'
import ButtonCta from '../../components/ui/ButtonCta'

const Rhumer = () => {
  const { t } = useI18n()

  // 👉 Classe commune pour TOUTES les images
  const imageClass =
    "w-full border border-primary rounded-md shadow-md bg-bg-primary"

  return (
    <section id="rhumer" className="xl:mt-[10%] md:mt-[15%] mt-[20%]">
      <div className="xl:mx-[10%] md:mx-[5%] mx-2 space-y-40">

        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="font-jarka text-accent text-lg">
              UX/UI Case Study
            </span>

            <h1 className="text-5xl md:text-6xl font-abril uppercase leading-[0.95]">
              {t('project.rhumer.title')}
            </h1>

            <p className="font-jarka text-xl text-text-secondary max-w-[520px]">
              {t('project.rhumer.subtitle')}
            </p>
          </div>

          <img
            src="/imgs/projects/rhumer/hero-mobile.png"
            alt="Rhumer mobile app"
            className={`${imageClass} max-w-[360px] mx-auto`}
          />
        </div>

        {/* CONTEXT */}
        <div className="max-w-[620px] space-y-4">
          <h2 className="text-3xl font-abril uppercase">
            {t('project.rhumer.context.title')}
          </h2>

          <p className="font-jarka text-lg">
            {t('project.rhumer.context.text')}
          </p>
        </div>

        {/* OBJECTIVES */}
        <div className="max-w-[620px] space-y-4">
          <h2 className="text-3xl font-abril uppercase">
            {t('project.rhumer.objectives.title')}
          </h2>

          <ul className="font-jarka text-lg list-disc ml-5 space-y-1">
            <li>{t('project.rhumer.objective1')}</li>
            <li>{t('project.rhumer.objective2')}</li>
            <li>{t('project.rhumer.objective3')}</li>
          </ul>
        </div>

        {/* WIREFRAMES */}
        <div className="space-y-8">
          <div className="max-w-[620px] space-y-4">
            <h2 className="text-3xl font-abril uppercase">
              {t('project.rhumer.wireframes.title')}
            </h2>

            <p className="font-jarka text-lg">
              {t('project.rhumer.wireframes.text')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="/imgs/projects/rhumer/wireframe-1.png"
              alt="Rhumer wireframe 1"
              className={imageClass}
            />
            <img
              src="/imgs/projects/rhumer/wireframe-2.png"
              alt="Rhumer wireframe 2"
              className={imageClass}
            />
          </div>
        </div>

        {/* UI */}
        <div className="space-y-8">
          <div className="max-w-[620px] space-y-4">
            <h2 className="text-3xl font-abril uppercase">
              {t('project.rhumer.ui.title')}
            </h2>

            <p className="font-jarka text-lg">
              {t('project.rhumer.ui.text')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <img
              src="/imgs/projects/rhumer/ui-1.png"
              alt="Rhumer UI screen 1"
              className={imageClass}
            />
            <img
              src="/imgs/projects/rhumer/ui-2.png"
              alt="Rhumer UI screen 2"
              className={imageClass}
            />
            <img
              src="/imgs/projects/rhumer/hero-mobile.png"
              alt="Rhumer UI screen 3"
              className={imageClass}
            />
          </div>
        </div>

        {/* RESULT */}
        <div className="max-w-[620px] space-y-4">
          <h2 className="text-3xl font-abril uppercase">
            {t('project.rhumer.result.title')}
          </h2>

          <p className="font-jarka text-lg">
            {t('project.rhumer.result.text')}
          </p>
        </div>
        <ButtonCta
    labelKey="project.horecaseek.figma"
    href="https://www.figma.com/design/B1WssowPcoDSytvAwN77rM/Rhumer-app-mobile?node-id=0-1&t=az1VMldM8za2l02Z-1"
    variant="secondary"
    fullWidth={false}
  />
      </div>
    </section>
  )
}

export default Rhumer