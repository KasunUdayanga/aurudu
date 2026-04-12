"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import AuruduCountdown from "./components/AuruduCountdown";
import LanguageToggle from "./components/LanguageToggle";
import { useLanguage } from "./components/LanguageContext";

const SunScene = dynamic(() => import("./components/SunScene"), { ssr: false });

const COPY = {
  si: {
    headerBadge: "🌾 2026 අලුත් අවුරුද්ද",
    headerTagline: "සම්ප්‍රදායික කෑම රසවත් වෙලා!",
    headerDate: "12–15 අප්‍රේල්",
    heroLabel: "අවුරුදු සුභ පැතුම්",
    heroTitle: "සුභ අලුත් අවුරුද්දක් වේවා! 🎉",
    heroBody:
      "ඔබටත් ඔබේ පවුලටත් සතුට, සෞභාග්‍ය සහ සාමය උදා වන අලුත් අවුරුද්දක් වෙයිවා. ඊළඟ අවුරුදු උත්සවය සදහා ඔබගේ මිතුරන් එක්කර ගන්න සහ නව සප්ත වර්ණ වලින් සැරසෙන්න.",
    primaryCta: "සුභ පැතුම් බෙදාගන්න",
    secondaryCta: "උත්සව සැලසුම බලන්න",
    cards: [
      {
        title: "කාලය",
        body: "අප්‍රේල් 12 - 15 අතර සරුසාර පහන් රැස්වීම්.",
      },
      {
        title: "රසම රස කෑම",
        body: "කවුම්, කොකිස්, අලුවා, ගුලි ආදිය අලුත් රසකින්.",
      },
      {
        title: "ගෘහ ශුභ සැරසිලි",
        body: "මල් වැල්, සිත්තරා, සහ ධජ වලින් නව අලංකාරයක්.",
      },
      {
        title: "පවුල් ක්‍රීඩා",
        body: "කනමේනිය, කොට්ටා පොර, සහ අලුත් ක්‍රීඩා.",
      },
    ],
    cubeFaces: ["සතුට", "සෞභාග්‍ය", "සාමය", "ආදරය", "ආරක්ෂාව", "සහෘදය"],
    highlightTitle: "අලුත් වර්ණ 4ක තේමාව",
    highlightBody:
      "සැප, උණුසුම් සහ සෞඛ්‍ය ප්‍රාර්ථනාවට අදාළ වර්ණ භාවිතා කරලා තියෙයි.",
    waveTitle: "අවුරුදු දින සැලැස්ම",
    waveBody: "ඔබගේ පවුලේ හැමෝම එක්ව සතුටින් පවතින දිනක ගමනක් සැලසුම් කරගන්න.",
    waveCards: [
      {
        title: "අලුත් අවුරුදු උදාව",
        body: "අලුත් පහන් දැල්වීම හා සෙරෙන්දූ.",
        icon: "🌞",
      },
      {
        title: "පවුල් නර්තන",
        body: "රබාන වාදනය හා සෙල්ලම්.",
        icon: "🥁",
      },
      {
        title: "සුභ පැතුම්",
        body: "මිතුරන්ටත් ආදරවන්තයන්ටත් එකට.",
        icon: "🌺",
      },
    ],
    nekathTitle: "අවුරුදු නෙකත්",
    nekathBody: "නිවැරදි වේලාවන් අනුගමනය කරමින් ආශීර්වාදය වැඩිකර ගන්න.",
    nekathCards: [
      { title: "නව සඳ බැලීම", body: "අප්‍රේල් 13 ඉරිදා ප.ව. 10:23" },
      {
        title: "පුජා කාලය (පුණ්‍ය කාලය)",
        body: "අප්‍රේල් 14 සඳුදා පෙ.ව. 05:18 සිට 05:54 දක්වා",
      },
      { title: "අලුත් අවුරුදු උදාව", body: "අප්‍රේල් 14 සඳුදා පෙ.ව. 04:43" },
      { title: "ආහාර පිසීම", body: "අප්‍රේල් 14 සඳුදා පෙ.ව. 06:12" },
      {
        title: "වැඩ ඇරඹීම හා ගනුදෙනු",
        body: "අප්‍රේල් 14 සඳුදා පෙ.ව. 07:02",
      },
      { title: "හිසතෙල් ගෑම", body: "අප්‍රේල් 16 බදාදා පෙ.ව. 09:17" },
    ],
    galleryTitle: "අවුරුදු මතක",
    galleryBody: "අවුරුදු සම්ප්‍රදායන් සිහිපත් කරන අලුත් රූප පෙළකි.",
    galleryItems: [
      {
        title: "පහන් දැල්වීම",
        body: "අලුත් අවුරුදු උදාවට පහන් දැල්වීමේ චාරිත්‍රය.",
        image: "/aurudu/oil-lamp.svg",
      },
      {
        title: "කවුම්",
        body: "අපේම රසවත් අවුරුදු කෑම.",
        image: "/aurudu/kavum.svg",
      },
      {
        title: "රබාන",
        body: "පවුල් නර්තනට රබානේ තාලය.",
        image: "/aurudu/raban.svg",
      },
    ],
  },
  en: {
    headerBadge: "🌾 Sinhala & Tamil New Year 2026",
    headerTagline: "Traditional treats are ready!",
    headerDate: "12–15 April",
    heroLabel: "Aurudu Wishes",
    heroTitle: "Happy Sinhala & Tamil New Year! 🎉",
    heroBody:
      "Wishing you and your family a year filled with happiness, prosperity, and peace. Bring your friends together and celebrate with warm festive colors.",
    primaryCta: "Share your wishes",
    secondaryCta: "View the celebration plan",
    cards: [
      {
        title: "Time",
        body: "Joyful gatherings from April 12 to 15.",
      },
      {
        title: "Sweet treats",
        body: "Kavum, kokis, aluwa, and more prepared fresh.",
      },
      {
        title: "Home décor",
        body: "Floral garlands, flags, and traditional ornaments.",
      },
      {
        title: "Family games",
        body: "Kana-maniya, pillow fights, and new games.",
      },
    ],
    cubeFaces: ["Joy", "Prosperity", "Peace", "Love", "Safety", "Unity"],
    highlightTitle: "Four festive colors",
    highlightBody: "Colors inspired by warmth, wellbeing, and abundance.",
    waveTitle: "Festival day plan",
    waveBody: "Plan a day where everyone comes together in joy.",
    waveCards: [
      {
        title: "New Year dawn",
        body: "Lighting the oil lamp and blessings.",
        icon: "🌞",
      },
      {
        title: "Family dance",
        body: "Raban beats and joyful games.",
        icon: "🥁",
      },
      {
        title: "Good wishes",
        body: "Share love with friends and family.",
        icon: "🌺",
      },
    ],
    nekathTitle: "Nekath times",
    nekathBody: "Follow the auspicious times to receive blessings.",
    nekathCards: [
      { title: "New moon sighting", body: "Sunday April 13, 10:23 PM" },
      {
        title: "Punya kala (auspicious period)",
        body: "Monday April 14, 05:18 AM to 05:54 AM",
      },
      { title: "New Year dawn", body: "Monday April 14, 04:43 AM" },
      { title: "Cooking time", body: "Monday April 14, 06:12 AM" },
      { title: "Work & transactions", body: "Monday April 14, 07:02 AM" },
      { title: "Anointing the head", body: "Wednesday April 16, 09:17 AM" },
    ],
    galleryTitle: "Aurudu moments",
    galleryBody: "A small gallery celebrating traditional New Year customs.",
    galleryItems: [
      {
        title: "Lighting the oil lamp",
        body: "A sacred ritual that begins the celebrations.",
        image: "/aurudu/oil-lamp.svg",
      },
      {
        title: "Kavum",
        body: "Sweet treats prepared for the festive table.",
        image: "/aurudu/kavum.svg",
      },
      {
        title: "Raban",
        body: "Rhythms of the traditional hand drum.",
        image: "/aurudu/raban.svg",
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

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-8 text-sm font-medium text-ink/80">
        <span className="rounded-full border border-white/40 bg-white/70 px-4 py-2 shadow-sm">
          {text.headerBadge}
        </span>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline">{text.headerTagline}</span>
          <span className="rounded-full bg-aurudu-green/90 px-3 py-1 text-white">
            {text.headerDate}
          </span>
        </div>
      </header>

      <LanguageToggle />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-6 pb-16 pt-12 lg:flex-row lg:items-center">
        <section className="flex flex-1 flex-col gap-6">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-aurudu-red">
            <span className="h-1 w-10 rounded-full bg-aurudu-red" />
            <span>{text.heroLabel}</span>
          </div>
          <h1 className="aurudu-title text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {text.heroTitle}
          </h1>
          <p className="max-w-xl text-lg leading-8 text-ink/80">
            {text.heroBody}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="aurudu-button aurudu-button-primary">
              {text.primaryCta}
            </button>
            <button className="aurudu-button aurudu-button-ghost">
              {text.secondaryCta}
            </button>
          </div>

          <AuruduCountdown />

          <div className="grid gap-4 sm:grid-cols-2">
            {text.cards.map((card) => (
              <div key={card.title} className="aurudu-card">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-1 flex-col items-center gap-6">
          <div className="sun-canvas" aria-hidden="true">
            <SunScene />
          </div>
          <div className="aurudu-lanterns">
            <span />
            <span />
            <span />
          </div>

          <div className="aurudu-portal">
            <div className="aurudu-cube">
              <div className="face front">{text.cubeFaces[0]}</div>
              <div className="face back">{text.cubeFaces[1]}</div>
              <div className="face right">{text.cubeFaces[2]}</div>
              <div className="face left">{text.cubeFaces[3]}</div>
              <div className="face top">{text.cubeFaces[4]}</div>
              <div className="face bottom">{text.cubeFaces[5]}</div>
            </div>
          </div>

          <div className="aurudu-highlight">
            <h4>{text.highlightTitle}</h4>
            <p>{text.highlightBody}</p>
          </div>
        </section>
      </main>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="aurudu-wave">
          <div>
            <h2 className="text-2xl font-semibold">{text.waveTitle}</h2>
            <p className="text-ink/80">{text.waveBody}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {text.waveCards.map((card) => (
              <div key={card.title} className="aurudu-chip">
                <span>{card.icon}</span>
                <div>
                  <strong>{card.title}</strong>
                  <p>{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="aurudu-nekath">
          <div>
            <h2 className="text-2xl font-semibold">{text.nekathTitle}</h2>
            <p className="text-ink/80">{text.nekathBody}</p>
          </div>
          <div className="aurudu-nekath-grid">
            {text.nekathCards.map((card) => (
              <div key={card.title} className="aurudu-nekath-card">
                <h4>{card.title}</h4>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="aurudu-gallery">
          <div>
            <h2 className="text-2xl font-semibold">{text.galleryTitle}</h2>
            <p className="text-ink/80">{text.galleryBody}</p>
          </div>
          <div className="aurudu-gallery-grid">
            {text.galleryItems.map((item) => (
              <div key={item.title} className="aurudu-gallery-card">
                <div className="aurudu-gallery-image">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={240}
                    height={240}
                  />
                </div>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
