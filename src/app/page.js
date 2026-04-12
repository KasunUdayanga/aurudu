"use client";

import dynamic from "next/dynamic";
import AuruduCountdown from "./components/AuruduCountdown";
import LanguageToggle from "./components/LanguageToggle";
import { useLanguage } from "./components/LanguageContext";

const SunScene = dynamic(() => import("./components/SunScene"), {
  ssr: false,
});

const COPY = {
  si: {
    headerBadge: "🌾 2026 සිංහල හා தமிழ் අලුත් අවුරුද්ද",
    headerTagline: "සම්ප්‍රදායික රසකැවිලි සමඟ සතුටු වෙමු!",
    headerDate: "අප්‍රේල් 12 – 15",
    heroLabel: "අවුරුදු උත්සවය",
    heroTitle: "සුභ අලුත් අවුරුද්දක් වේවා! 🎉",
    heroBody:
      "ඔබටත් ඔබේ පවුලේ සියලු දෙනාටත් සතුට, සෞභාග්‍ය සහ සාමය පිරි අලුත් අවුරුද්දක් වේවා. මිතුරන් සමඟ එක්වී සතුටින් මෙම උත්සවය සමරන්න.",

    cards: [
      {
        title: "කාලය",
        body: "අප්‍රේල් 12 සිට 15 දක්වා සතුටු උත්සව සමය.",
      },
      {
        title: "රසකැවිලි",
        body: "කවුම්, කොකිස්, අලුවා සහ තවත් රසවත් කෑම.",
      },
      {
        title: "ගෙවල් සැරසිලි",
        body: "මල්, කොඩි සහ සම්ප්‍රදායික අලංකාර.",
      },
      {
        title: "පවුල් ක්‍රීඩා",
        body: "කනමේනිය, කොට්ටා පොර සහ විනෝද ක්‍රීඩා.",
      },
    ],

    cubeFaces: ["සතුට", "සෞභාග්‍ය", "සාමය", "ආදරය", "ආරක්ෂාව", "එකමුතුව"],

    highlightTitle: "අවුරුදු වර්ණ තේමාව",
    highlightBody:
      "උණුසුම, සතුට සහ සෞඛ්‍යය නියෝජනය කරන වර්ණ වලින් සැරසෙන්න.",


nekathTitle: "අලුත් අවුරුදු නැකත් 2026",
nekathBody: "මෙවර අවුරුදු නැකත් සම්පූර්ණයෙන් පහතින් දැක්වේ.",

nekathCards: [
  {
    title: "නව සඳ බැලීම",
    body: "අප්‍රේල් 20 වන දින සහ මැයි 19 වන දින සිදු කරයි.",
  },
  {
    title: "පරණ අවුරුද්ද සඳහා ස්නානය",
    body: "අප්‍රේල් 13 වන දින දිවුල් පත් යොදා ස්නානය කිරීම.",
  },
  {
    title: "අලුත් අවුරුදු උදාව",
    body: "අප්‍රේල් 14 වන දින පෙ.ව. 09:32 ට.",
  },
  {
    title: "පුන්‍ය කාලය",
    body: "පෙ.ව. 03:56 සිට පෙ.ව. 09:32 දක්වා.",
  },
  {
    title: "ආහාර පිසීම",
    body: "අප්‍රේල් 14 පෙ.ව. 10:41 ට.",
  },
  {
    title: "වැඩ ඇරඹීම, ගනුදෙනු කිරීම",
    body: "අප්‍රේල් 14 දින ප.ව. 12:05 ට.",
  },
  {
    title: "හිසතෙල් ගෑම",
    body: "අප්‍රේල් 15 පෙ.ව. 06:54 ට.",
  },
  {
    title: "රැකියා සඳහා පිටත්ව යාම",
    body: "අප්‍රේල් 20 පෙ.ව. 06:27 ට.",
  },
],

  },

  en: {
    headerBadge: "🌾 Sinhala & Tamil New Year 2026",
    headerTagline: "Celebrate with traditional sweets!",
    headerDate: "April 12 – 15",
    heroLabel: "New Year Festival",
    heroTitle: "Happy Sinhala & Tamil New Year! 🎉",
    heroBody:
      "Wishing you and your family happiness, prosperity, and peace in the coming year. Celebrate together with warmth and joy.",



    cubeFaces: ["Joy", "Prosperity", "Peace", "Love", "Safety", "Unity"],

    highlightTitle: "Festive colors",
    highlightBody:
      "Celebrate with colors symbolizing warmth, health, and happiness.",


nekathTitle: "Sinhala & Tamil New Year Nekath 2026",
nekathBody: "Here are the official auspicious times for the New Year.",

nekathCards: [
  {
    title: "New moon",
    body: "April 20 and May 19.",
  },
  {
    title: "Bath for old year",
    body: "April 13 using herbal leaves (Divul leaves).",
  },
  {
    title: "New Year dawn",
    body: "April 14 at 09:32 AM.",
  },
  {
    title: "Punya kala",
    body: "From 03:56 AM to 09:32 AM.",
  },
  {
    title: "Cooking time",
    body: "April 14 at 10:41 AM.",
  },
  {
    title: "Work & transactions",
    body: "April 14 at 12:05 PM.",
  },
  {
    title: "Oil anointing",
    body: "April 15 at 06:54 AM.",
  },
  {
    title: "Leaving for work",
    body: "April 20 at 06:27 AM.",
  },
],

  },
};

export default function Home() {
  const { language } = useLanguage();
  const text = COPY[language] ?? COPY.si;

  return (
    <div className="relative flex min-h-screen flex-col bg-aurudu-sky text-ink">
      <div className="aurudu-glow" aria-hidden="true" />

      <header className="aurudu-header">
        <span className="rounded-full border border-white/40 bg-white/70 px-5 py-2.5 shadow-sm">
          {text.headerBadge}
        </span>
        <div className="header-language">
          <LanguageToggle variant="compact" />
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-6 pb-16 pt-12 lg:flex-row lg:items-center">
        <section className="flex flex-1 flex-col gap-6">


          <h1 className="aurudu-title text-4xl sm:text-5xl lg:text-6xl">
            {text.heroTitle}
          </h1>

          <p className="max-w-xl text-lg text-ink/80">
            {text.heroBody}
          </p>


          <AuruduCountdown />


        </section>

        <section className="flex flex-1 flex-col items-center gap-6">
          <div className="sun-canvas">
            <SunScene />
          </div>

          <div className="aurudu-highlight">
            <h4>{text.highlightTitle}</h4>
            <p>{text.highlightBody}</p>
          </div>
        </section>
      </main>

    
      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="aurudu-nekath">
          <h2 className="text-2xl font-semibold">{text.nekathTitle}</h2>
          <p className="text-ink/80">{text.nekathBody}</p>

          <div className="aurudu-nekath-grid">
            {text.nekathCards.map((card) => (
              <div
                key={card.title}
                className={`aurudu-nekath-card ${
                  card.title.includes("උදාව") ? "ring-2 ring-aurudu-red" : ""
                }`}
              >
                <h4>{card.title}</h4>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
