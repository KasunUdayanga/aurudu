"use client";

import PropTypes from "prop-types";
import { useLanguage } from "./LanguageContext";

const LANGUAGES = [
  { code: "si", label: "සිංහල" },
  { code: "en", label: "English" },
  { code: "ta", label: "தமிழ்" },
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
  ta: {
    title: "மொழியை தேர்ந்தெடுக்கவும்",
    status: "நீங்கள் தமிழ் தேர்ந்தெடுத்துள்ளீர்கள்.",
  },
};

export default function LanguageToggle({ variant = "full" }) {
  const { language, setLanguage } = useLanguage();
  const text = COPY[language] ?? COPY.si;

  if (variant === "compact") {
    const ordered = ["si", "en", "ta"];
    const currentIndex = ordered.indexOf(language);
    const nextLanguage = ordered[(currentIndex + 1) % ordered.length];
    const buttonLabel =
      nextLanguage === "en"
        ? "English"
        : nextLanguage === "ta"
        ? "தமிழ்"
        : "සිංහල";

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
