import { useContext } from "react";
import { LangContext } from "./LangContext";

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
};
