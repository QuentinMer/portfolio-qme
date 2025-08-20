import { useEffect, useState } from "react";
import { useI18n } from '../../i18n/useI18n'

const HEIGHT = 60; 

export default function Banner() {
  const { t } = useI18n()
  const [visible, setVisible] = useState(true);



  useEffect(() => {
    if (visible) {
      document.documentElement.style.setProperty("--banner-h", `${HEIGHT}px`);
    } else {
      document.documentElement.style.removeProperty("--banner-h");
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed top-0 inset-x-0 z-50"
      style={{ height: HEIGHT }}
    >
      <div className="h-full bg-orange-500/80 backdrop-blur supports-[backdrop-filter]:bg-orange-500/80                       text-black dark:text-black/90 flex items-center justify-center px-3
                      [padding-top:env(safe-area-inset-top)]">
        <p className="text-sm md:text-base font-medium font-family-geist text-center">
          {t("banner.text")} <strong className="text-slate-300">{t("banner.text2")}</strong>.
          {t("banner.text3")}
        </p>
        <button
          onClick={() => {
            setVisible(false);
          }}
          aria-label="Fermer la bannière"
          className="absolute right-2 md:right-3 inline-flex items-center font-family-decifer cursor-pointer justify-center
                     w-8 h-8 rounded-md hover:bg-black/10 hover:border-2 hover:border-black/50 focus:outline-none focus:ring-2
                     focus:ring-black/30"
        >
          X
        </button>
      </div>
    </div>
  );
}