import { useState } from 'react'
import { useI18n } from '../../i18n/useI18n'
import ContactModal from '../form/ContactModale'
import ButtonCta from '../ui/ButtonCta'

const Contact = () => {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)

  return (
    <section id="contact" className="xl:mt-[10%] md:mt-[15%] mt-[20%]">
      <div className="xl:mx-[10%] md:mx-[5%] mx-2">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:min-h-[70vh]">
          <div className="flex flex-col gap-8 lg:max-w-[620px]">
            <div className="flex flex-col gap-3">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-abril uppercase leading-[0.95]">
                {t('contact.h2')}
              </h2>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-abril uppercase leading-[0.95]">
                {t('contact.h22')}
              </h2>
            </div>

            <div className="space-y-3 mb-6">
              <h2 className="text-3xl font-abril text-text-secondary">{t('contact.h3')}</h2>
              <h2 className="text-3xl font-abril text-text-secondary">{t('contact.h32')}</h2>
            </div>

            {/* OUVRIR MODALE */}
            <div onClick={() => setOpen(true)}>
              <ButtonCta
                labelKey="cta.mail"
                href="#"
                fullWidth
                variant="primary"
              />
            </div>
          </div>

          <div className="flex-1 flex xl:justify-end justify-center items-center">
            <img
              src="/imgs/photos/profil2.png"
              alt="image de profil"
              className="w-1/2 md:w-9/10 max-w-[420px] h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  )
}

export default Contact