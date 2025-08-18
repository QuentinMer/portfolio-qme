import { useLang } from "./useLang";

type Vars = Record<string, string | number | boolean>;

export function useI18n() {
  const { messages, lang, ready } = useLang();

  const t = (key: string, fallback?: string, vars?: Vars) => {
    let s = messages[key] ?? fallback ?? key;
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        s = s.replace(new RegExp(`{${k}}`, "g"), String(v));
      }
    }
    return s;
  };

  return { t, lang, ready };
}