"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children, defaultLanguage = "si" }) {
  const [language, setLanguage] = useState(defaultLanguage);

  useEffect(() => {
    const stored = window.localStorage.getItem("aurudu-language");
    if (stored) {
      setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("aurudu-language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
