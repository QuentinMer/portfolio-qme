import { useI18n } from '../../i18n/useI18n'
import ButtonCta from '../ui/ButtonCta'

const Header = () => {
  const { t } = useI18n()

  return (
    <section id="header" className="scroll-mt-36 xl:mt-[5%] md:mt-[10%] mt-[20%]">
      <div className="xl:mx-[10%] md:mx-[5%] mx-2">
        {/* 2 columns */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:min-h-[70vh]">
          {/* LEFT */}
          <div className="flex flex-col gap-8 lg:max-w-[620px]">
            <div className="flex flex-row items-center text-xl gap-5">
              <span className="font-abril text-accent">Quentin Mercier</span>
              <span className="font-jarka">UX/UI designer</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-abril uppercase leading-[0.95]">
              {t('header.h1')}
            </h1>

            <div className="space-y-1">
              <h2 className="text-3xl font-abril text-text-secondary">{t('header.h2up')}</h2>
              <h2 className="text-3xl font-abril text-text-secondary">{t('header.h2down')}</h2>
            </div>

            <p className="font-jarka text-xl max-w-[520px]">
              {t('header.p')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[620px]">
              <ButtonCta
                labelKey="cta.header1"
                href="#works"
                fullWidth
              />
              <ButtonCta
                labelKey="cta.header2"
                href="#contact"
                variant="secondary"
                fullWidth
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex xl:justify-end justify-center items-center md:items-center ">
            <img
              src="/imgs/photos/girl.webp"
              alt="image de profil"
              className="w-1/2 md:w-9/10 max-w-[420px] h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Header