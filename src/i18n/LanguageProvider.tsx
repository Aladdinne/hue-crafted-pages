import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { dictionaries, LANGS, type Dict, type Lang } from "./translations";

const STORAGE_KEY = "souitech-lang";

type Ctx = { lang: Lang; dir: "ltr" | "rtl"; setLang: (l: Lang) => void; t: Dict };

const LanguageContext = createContext<Ctx>({
  lang: "fr",
  dir: "ltr",
  setLang: () => {},
  t: dictionaries.fr,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && stored in dictionaries) setLangState(stored);
  }, []);

  const dir = LANGS.find((l) => l.code === lang)?.dir ?? "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, dir, setLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
