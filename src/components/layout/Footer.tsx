import { useI18n } from "../../i18n/useI18n";

const Footer = () => {
    const { t } = useI18n();
  return (
    <footer className="flex flex-col items-center justify-center my-10 border-t-2 border-orange-500 gap-5">
        <h5 className="text-2xl font-family-geist text-slate-50 text-center tracking-widest mt-12">{t("footer.title")}</h5>
        <a href="/img/cv.pdf" target="_blank" className="text-2xl font-family-geist text-slate-50 hover:text-orange-500 transition-colors">{t("footer.titlecv")}</a>
    </footer>
  )
}

export default Footer
