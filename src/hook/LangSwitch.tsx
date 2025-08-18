import { useLang } from "../i18n/useLang";
import { useI18n } from "../i18n/useI18n";
import I18nImage from "../i18n/I18nImage";

export function LangSwitcher() {
  const { lang, setLang } = useLang();
  const { t } = useI18n();
  return (
    <div className="flex items-center gap-2 text-orange-500 font-family-decifer tracking-widest">
<I18nImage
  basePath="/img/icon-langue"
  altKey="icone-langue.alt"
  className="w-8 h-8 hidden md:block"
/>
     <select value={lang} onChange={(e) => setLang(e.target.value as "fr" | "en")}>
        <option value="fr">{t("common.language.french", "Français")}</option>
        <option value="en">{t("common.language.english", "English")}</option>
      </select>
    </div>
  );
}