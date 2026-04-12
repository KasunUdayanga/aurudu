"use client";

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

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const text = COPY[language] ?? COPY.si;

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
