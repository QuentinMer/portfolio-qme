import { useState } from "react";
import Magnet from "../../bloc/Animations/Magnet/Magnet";
import ButtonCta from "../ui/ButtonCta";
import Modal from "../ui/Modale";
import ContactForm from "../form/ContactForm";
import { useI18n } from "../../i18n/useI18n";
import I18nImage from "../../i18n/I18nImage";

export default function Intro() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useI18n();


  return (
    <div className="m-3 xl:m-4 flex flex-col md:flex-row justify-between items-center md:gap-x-36 px-10 pb-5 xl:my-24">
      <I18nImage
        basePath="/img/designer"
        altKey="intro.image.alt"
        className="w-100 md:w-100 md:h-120 xl:w-150 xl:h-120 pt-12 md:pt-0"
      />

      <div className="flex flex-col gap-10 md:justify-end items-center justify-center md:items-end">
        <div className="flex flex-col gap-10 items-center md:items-end xl:mx-12 xl:ps-36">
          <p className="text-xl md:text-2xl text-slate-100 text-center md:text-end font-family-geist pt-24 flex tracking-wide">
            {t("intro.accroche")}
          </p>

          <Magnet>
            <ButtonCta onClick={() => setIsModalOpen(true)} />
          </Magnet>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-4xl mt-14 py-2 md:py-4 font-bold mb-4 font-family-decifer text-center tracking-widest">{t("intro.cta")}</h2>
        <ContactForm onSubmitted={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
}