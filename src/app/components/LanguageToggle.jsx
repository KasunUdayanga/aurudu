"use client";

import PropTypes from "prop-types";
import { useLanguage } from "./LanguageContext";

const LANGUAGES = [
  { code: "si", label: "සිංහල" },
  { code: "en", label: "English" },
];

const COPY = {
  si: {
    title: "භාෂාව තෝරන්න",
    status: "ඔබ තෝරාගෙන ඇත්තේ සිංහලයි.",
  },
  en: {
    title: "Select language",
    status: "You selected English.",
  },
};

export default function LanguageToggle({ variant = "full" }) {
  const { language, setLanguage } = useLanguage();
  const text = COPY[language] ?? COPY.si;

  if (variant === "compact") {
    const nextLanguage = language === "si" ? "en" : "si";
    const buttonLabel = language === "si" ? "English" : "සිංහල";

    return (
      <div className="language-compact" aria-label="Language selector">
        <button
          type="button"
          className="language-button is-active"
          onClick={() => setLanguage(nextLanguage)}
        >
          {buttonLabel}
        </button>
      </div>
    );
  }

  return (
    <section className="language-section" aria-label="Language selector">
      <div className="language-card">
        <div>
          <h3>{text.title}</h3>
          <p className="language-status">{text.status}</p>
        </div>
        <div className="language-buttons">
          {LANGUAGES.map((item) => (
            <button
              key={item.code}
              type="button"
              className={`language-button ${
                language === item.code ? "is-active" : ""
              }`}
              onClick={() => setLanguage(item.code)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

LanguageToggle.propTypes = {
  variant: PropTypes.oneOf(["full", "compact"]),
};
