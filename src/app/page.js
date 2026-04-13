"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import LanguageToggle from "./components/LanguageToggle";
import { useLanguage } from "./components/LanguageContext";

const AuruduCountdown = dynamic(() => import("./components/AuruduCountdown"), {
  ssr: false,
});

const DotLottieBackdrop = dynamic(
  () => import("./components/DotLottieBackdrop"),
  { ssr: false }
);
const TransparentBirdsBackdrop = dynamic(
  () => import("./components/TransparentBirdsBackdrop"),
  { ssr: false }
);
const SunLottieBackdrop = dynamic(
  () => import("./components/SunLottieBackdrop"),
  { ssr: false }
);

const NEW_YEAR_TIME = new Date("2026-04-14T09:32:00+05:30");

const COPY = {
  si: {
    headerBadge: "🌾 2026 සිංහල හා හින්දු අලුත් අවුරුද්ද",
    heroBeforeTitle: "ලැබීමට නියමිත අලුත් අවුරුද්දට කසුන්ගෙන් සුභ පැතුම්! 🌸",
    heroAfterTitle: "ලැබුණු අලුත් අවුරුද්දට කසුන්ගෙන් සුභ පැතුම්! 🎉",

    heroBeforeBody:
      "ලැබෙන අලුත් අවුරුද්ද ඔබට සහ ඔබගේ පවුලට සතුට, සෞභාග්‍ය සහ සාමය උදා වේවා!",
    heroAfterBody:
      "මෙම අලුත් අවුරුද්ද ඔබට සහ ඔබගේ පවුලට සතුට, සෞභාග්‍ය සහ සාමය ගෙන ඒවා!",

    highlightTitle: "අවුරුදු වර්ණ තේමාව",
    highlightBody:
      "උණුසුම, සතුට සහ සෞඛ්‍යය නියෝජනය කරන වර්ණ වලින් සැරසිල ලස්සනට සමරන්න.",

    nekathTitle: "අලුත් අවුරුදු නැකත් 2026",
    nekathBody: "මෙවර අවුරුදු නැකත් සම්පූර්ණයෙන් පහතින් දැක්වේ.",

    nekathCards: [
      {
        title: "නව සඳ බැලීම",
        body: "අප්‍රේල් 20 සහ මැයි 19 දින.",
      },
      {
        title: "පරණ අවුරුද්ද සඳහා ස්නානය",
        body: "අප්‍රේල් 13 දිවුල් පත් යොදා ස්නානය.",
      },
      {
        title: "අලුත් අවුරුදු උදාව",
        body: "අප්‍රේල් 14 පෙ.ව. 09:32",
      },
      {
        title: "පුන්‍ය කාලය",
        body: "පෙ.ව. 03:56 සිට 09:32 දක්වා",
      },
      {
        title: "ආහාර පිසීම",
        body: "අප්‍රේල් 14 පෙ.ව. 10:41",
      },
      {
        title: "වැඩ ඇරඹීම",
        body: "අප්‍රේල් 14 ප.ව. 12:05",
      },
      {
        title: "හිසතෙල් ගෑම",
        body: "අප්‍රේල් 15 පෙ.ව. 06:54",
      },
      {
        title: "රැකියා සඳහා පිටත්ව යාම",
        body: "අප්‍රේල් 20 පෙ.ව. 06:27",
      },
    ],
  },

  en: {
    headerBadge: "🌾 Sinhala & Tamil New Year 2026",

    heroBeforeTitle: "Warm wishes from Kasun for the upcoming New Year! 🌸",
    heroAfterTitle: "Heartfelt New Year wishes from Kasun! 🎉",

    heroBeforeBody:
      "May the upcoming New Year bring happiness, prosperity, and peace to you and your loved ones.",
    heroAfterBody:
      "May this New Year bring happiness, prosperity, and peace to you and your family.",

    highlightTitle: "Festive colors",
    highlightBody:
      "Celebrate with colors symbolizing warmth, health, and happiness.",

    nekathTitle: "Sinhala & Tamil New Year Nekath 2026",
    nekathBody: "Official auspicious times for the New Year.",

    nekathCards: [
      { title: "New moon", body: "April 20 and May 19" },
      { title: "Bath for old year", body: "April 13" },
      { title: "New Year dawn", body: "April 14 at 09:32 AM" },
      { title: "Punya kala", body: "03:56 AM to 09:32 AM" },
      { title: "Cooking", body: "April 14 at 10:41 AM" },
      { title: "Work start", body: "April 14 at 12:05 PM" },
      { title: "Oil anointing", body: "April 15 at 06:54 AM" },
      { title: "Leaving for work", body: "April 20 at 06:27 AM" },
    ],
  },
};

export default function Home() {
  const { language } = useLanguage();
  const text = COPY[language] ?? COPY.si;

  // ✅ dynamic state
  const [isAfterNewYear, setIsAfterNewYear] = useState(
    new Date() >= NEW_YEAR_TIME
  );

  // ✅ auto update at exact time
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAfterNewYear(new Date() >= NEW_YEAR_TIME);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative flex min-h-screen flex-col bg-aurudu-sky text-ink"
      suppressHydrationWarning
    >
      <div className="aurudu-glow" />
      <DotLottieBackdrop />
      <TransparentBirdsBackdrop />
      <SunLottieBackdrop />

      <header className="aurudu-header">
        <span className="rounded-full border bg-white/70 px-5 py-2 shadow-sm">
          {text.headerBadge}
        </span>
        <LanguageToggle variant="compact" />
      </header>

      <main className="aurudu-main mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-6 pb-16 pt-12 lg:flex-row lg:items-center">
        {/* LEFT */}
        <section className="aurudu-hero flex flex-1 flex-col gap-6">
          <h1 className="aurudu-title text-4xl sm:text-5xl lg:text-6xl">
            {isAfterNewYear ? text.heroAfterTitle : text.heroBeforeTitle}
          </h1>

          <p className="max-w-xl text-lg text-ink/80">
            {isAfterNewYear ? text.heroAfterBody : text.heroBeforeBody}
          </p>

          <AuruduCountdown />
        </section>

        {/* RIGHT */}
        <section className="aurudu-visual flex flex-1 flex-col items-center gap-6">
          <div className="sun-canvas">
            <Image
              src="/aurudu/Screenshot 2026-04-13 000900.png"
              alt="Aurudu celebration"
              width={420}
              height={420}
              priority
            />
          </div>

          <div className="aurudu-highlight">
            <h4>{text.highlightTitle}</h4>
            <p>{text.highlightBody}</p>
          </div>
        </section>
      </main>

      {/* NEKATH */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="aurudu-nekath">
          <h2 className="text-2xl font-semibold">{text.nekathTitle}</h2>
          <p className="text-ink/80">{text.nekathBody}</p>

          <div className="aurudu-nekath-grid">
            {text.nekathCards.map((card) => (
              <div
                key={card.title}
                className={`aurudu-nekath-card ${
                  card.title.includes("උදාව") ||
                  card.title.includes("New Year dawn")
                    ? "ring-2 ring-aurudu-red scale-105"
                    : ""
                }`}
              >
                <h4>{card.title}</h4>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="pb-5 text-center text-sm text-ink/70">
        @Kasun Udayanga 2026
      </footer>
    </div>
  );
}
