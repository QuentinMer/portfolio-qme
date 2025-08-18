import I18nImage from "../../i18n/I18nImage";
import { useI18n } from "../../i18n/useI18n";

const About = () => {
  const { t } = useI18n();
  return (
    <section id="about" className="py-24 md:pt-10 flex md:flex-row flex-col">
      <I18nImage
        basePath="/img/about"
        altKey="about.image.alt"
        className="w-full md:w-[65%] xl:w-[55%] hidden md:block"
      />
      <I18nImage
        basePath="/img/about-mobile"
        altKey="about.image-mobile.alt"
        className="w-full block md:hidden" />
      <div className="my-auto md:pb-10">

      <p className="text-start text-slate-100 xl:text-4xl text-2xl font-family-decifer tracking-widest mx-12 my-auto leading-relaxed">{t("about.quote")}</p>
      <p className="text-end text-slate-100 xl:text-2xl text-xl font-family-decifer tracking-widest mx-24 my-auto mt-6">— Tim Berners-Lee</p>
      </div>
    </section>
  )
}

export default About
