import React, { useEffect, useMemo, useState } from "react";
import { LangContext, type Lang } from "./LangContext";

type Messages = Record<string, string>;

const LS_KEY = "lang";
const detectBrowserLang = (): Lang =>
  (navigator.language || "en").slice(0, 2).toLowerCase() === "fr" ? "fr" : "en";

async function loadMessages(lang: Lang): Promise<Messages> {
  const mod = await import(`../locales/${lang}.json`);
  return mod.default as Messages;
}

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(() => (localStorage.getItem(LS_KEY) as Lang) || detectBrowserLang());
  const [messages, setMessages] = useState<Messages>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let alive = true;
    setReady(false);
    loadMessages(lang).then((m) => {
      if (!alive) return;
      setMessages(m);
      setReady(true);
    });
    document.documentElement.lang = lang;
    localStorage.setItem(LS_KEY, lang);
    return () => { alive = false; };
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggle: () => setLang(lang === "fr" ? "en" : "fr"),
      messages,
      ready
    }),
    [lang, messages, ready]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

