import { createContext } from "react";

export type Lang = "fr" | "en";
type Messages = Record<string, string>;

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  messages: Messages;
  ready: boolean;
};

export const LangContext = createContext<Ctx | null>(null);
