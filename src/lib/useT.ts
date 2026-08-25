import { useLanguage } from "@/contexts/LanguageContext";
import en from "@/i18n/en.json";
import sq from "@/i18n/sq.json";

export function useT() {
  const { lang } = useLanguage();
  return lang === "sq" ? sq : en;
}
