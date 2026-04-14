"use client";

import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children, defaultLanguage = "si" }) {
  const [language, setLanguage] = useState(() => {
    if (typeof globalThis !== "undefined") {
      const stored = globalThis.localStorage?.getItem("aurudu-language");
      if (stored) {
        return stored;
      }
    }

    return defaultLanguage;
  });

  useEffect(() => {
    globalThis.localStorage?.setItem("aurudu-language", language);
    if (typeof document !== "undefined") {
      document.documentElement.dataset.language = language;
      document.documentElement.lang =
        language === "en" ? "en" : language === "ta" ? "ta" : "si";
    }
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

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
  defaultLanguage: PropTypes.string,
};

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
