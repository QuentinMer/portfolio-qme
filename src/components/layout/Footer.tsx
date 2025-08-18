import { useI18n } from "../../i18n/useI18n";

const Footer = () => {
    const { t } = useI18n();
  return (
    <footer className="flex flex-col items-center justify-center my-24 border-t-2 border-orange-500">
        <h5 className="text-2xl font-family-decifer text-slate-50 text-center mb-5 tracking-widest mt-12">{t("footer.title")}</h5>
    </footer>
  )
}

export default Footer
