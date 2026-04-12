"use client";

import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "./LanguageContext";

const targetDate = new Date("2026-04-14T00:00:00");

const buildTimeLeft = (now) => {
  const diff = targetDate.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, isLive: false };
};

export default function AuruduCountdown() {
  const { language } = useLanguage();
  const [timeLeft, setTimeLeft] = useState(() => buildTimeLeft(new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(buildTimeLeft(new Date()));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = useMemo(() => {
    const labels =
      language === "en"
        ? ["Days", "Hours", "Minutes", "Seconds"]
        : ["දින", "පැය", "මිනිත්තු", "තත්පර"];

    return [
      { label: labels[0], value: timeLeft.days },
      { label: labels[1], value: timeLeft.hours },
      { label: labels[2], value: timeLeft.minutes },
      { label: labels[3], value: timeLeft.seconds },
    ];
  }, [language, timeLeft]);

  let headingText = "තව ටිකක් බලාගන්න";
  if (language === "en") {
    headingText = "Almost there";
  }
  if (timeLeft.isLive) {
    headingText = language === "en" ? "Happy New Year!" : "අලුත් අවුරුද්ද ආවා!";
  }

  return (
    <div className="aurudu-countdown">
      <div>
        <p className="aurudu-countdown-title">
          {language === "en"
            ? "Time remaining for the New Year"
            : "අලුත් අවුරුදු උදාවට ඉතිරි කාලය"}
        </p>
        <h3 className="aurudu-countdown-heading">{headingText}</h3>
      </div>
      <div className="aurudu-countdown-grid">
        {items.map((item) => (
          <div key={item.label} className="aurudu-countdown-card">
            <span className="countdown-value">
              {String(item.value).padStart(2, "0")}
            </span>
            <span className="countdown-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
