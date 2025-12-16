import { useLang } from "../i18n/useLang";
import { useI18n } from "../i18n/useI18n";

export function LangSwitcher() {
  const { lang, setLang } = useLang();
  const { t } = useI18n();
  return (
    <div className="flex items-center gap-2 text-accent tracking-widest border border-accent py-2 px-2 rounded-sm">
      <span>{t('lang.change')}</span>

     <select value={lang} onChange={(e) => setLang(e.target.value as "fr" | "en")} className="cursor-pointer">
        <option value="fr">{t("common.language.french", "FR")}</option>
        <option value="en">{t("common.language.english", "EN")}</option>
      </select>
    </div>
  );
}