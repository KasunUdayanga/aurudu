import AuruduCountdown from "./components/AuruduCountdown";
import LanguageToggle from "./components/LanguageToggle";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-aurudu-sky text-ink">
      <div className="aurudu-glow" aria-hidden="true" />

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-8 text-sm font-medium text-ink/80">
        <span className="rounded-full border border-white/40 bg-white/70 px-4 py-2 shadow-sm">
          🌾 2026 අලුත් අවුරුද්ද
        </span>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline">සම්ප්‍රදායික කෑම රසවත් වෙලා!</span>
          <span className="rounded-full bg-aurudu-green/90 px-3 py-1 text-white">
            12–15 අප්‍රේල්
          </span>
        </div>
      </header>

      <LanguageToggle />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-6 pb-16 pt-12 lg:flex-row lg:items-center">
        <section className="flex flex-1 flex-col gap-6">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-aurudu-red">
            <span className="h-1 w-10 rounded-full bg-aurudu-red" />
            <span>Aurudu Wishes</span>
          </div>
          <h1 className="aurudu-title text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            සුභ අලුත් අවුරුද්දක් වේවා! 🎉
          </h1>
          <p className="max-w-xl text-lg leading-8 text-ink/80">
            ඔබටත් ඔබේ පවුලටත් සතුට, සෞභාග්‍ය සහ සාමය උදා වන අලුත් අවුරුද්දක්
            වෙයිවා. ඊළඟ අවුරුදු උත්සවය සදහා ඔබගේ මිතුරන් එක්කර ගන්න සහ නව සප්ත
            වර්ණ වලින් සැරසෙන්න.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="aurudu-button aurudu-button-primary">
              සුභ පැතුම් බෙදාගන්න
            </button>
            <button className="aurudu-button aurudu-button-ghost">
              උත්සව සැලසුම බලන්න
            </button>
          </div>

          <AuruduCountdown />

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="aurudu-card">
              <h3>කාලය</h3>
              <p>අප්‍රේල් 12 - 15 අතර සරුසාර පහන් රැස්වීම්.</p>
            </div>
            <div className="aurudu-card">
              <h3>රසම රස කෑම</h3>
              <p>කවුම්, කොකිස්, අලුවා, ගුලි ආදිය අලුත් රසකින්.</p>
            </div>
            <div className="aurudu-card">
              <h3>ගෘහ ශුභ සැරසිලි</h3>
              <p>මල් වැල්, සිත්තරා, සහ ධජ වලින් නව අලංකාරයක්.</p>
            </div>
            <div className="aurudu-card">
              <h3>පවුල් ක්‍රීඩා</h3>
              <p>කනමේනිය, කොට්ටා පොර, සහ අලුත් ක්‍රීඩා.</p>
            </div>
          </div>
        </section>

        <section className="flex flex-1 flex-col items-center gap-6">
          <div className="aurudu-lanterns">
            <span />
            <span />
            <span />
          </div>

          <div className="aurudu-portal">
            <div className="aurudu-cube">
              <div className="face front">සතුට</div>
              <div className="face back">සෞභාග්‍ය</div>
              <div className="face right">සාමය</div>
              <div className="face left">ආදරය</div>
              <div className="face top">ආරක්ෂාව</div>
              <div className="face bottom">සහෘදය</div>
            </div>
          </div>

          <div className="aurudu-highlight">
            <h4>අලුත් වර්ණ 4ක තේමාව</h4>
            <p>
              සැප, උණුසුම් සහ සෞඛ්‍ය ප්‍රාර්ථනාවට අදාළ වර්ණ භාවිතා කරලා තියෙයි.
            </p>
          </div>
        </section>
      </main>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="aurudu-wave">
          <div>
            <h2 className="text-2xl font-semibold">අවුරුදු දින සැලැස්ම</h2>
            <p className="text-ink/80">
              ඔබගේ පවුලේ හැමෝම එක්ව සතුටින් පවතින දිනක ගමනක් සැලසුම් කරගන්න.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="aurudu-chip">
              <span>🌞</span>
              <div>
                <strong>අලුත් අවුරුදු උදාව</strong>
                <p>අලුත් පහන් දැල්වීම හා සෙරෙන්දූ.</p>
              </div>
            </div>
            <div className="aurudu-chip">
              <span>🥁</span>
              <div>
                <strong>පවුල් නර්තන</strong>
                <p>රබාන වාදනය හා සෙල්ලම්.</p>
              </div>
            </div>
            <div className="aurudu-chip">
              <span>🌺</span>
              <div>
                <strong>සුභ පැතුම්</strong>
                <p>මිතුරන්ටත් ආදරවන්තයන්ටත් එකට.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="aurudu-nekath">
          <div>
            <h2 className="text-2xl font-semibold">අවුරුදු නෙකත්</h2>
            <p className="text-ink/80">
              නිවැරදි වේලාවන් අනුගමනය කරමින් ආශීර්වාදය වැඩිකර ගන්න.
            </p>
          </div>
          <div className="aurudu-nekath-grid">
            <div className="aurudu-nekath-card">
              <h4>නව සඳ බැලීම</h4>
              <p>අප්‍රේල් 13 ඉරිදා ප.ව. 10:23</p>
            </div>
            <div className="aurudu-nekath-card">
              <h4>පුජා කාලය (පුණ්‍ය කාලය)</h4>
              <p>අප්‍රේල් 14 සඳුදා පෙ.ව. 05:18 සිට 05:54 දක්වා</p>
            </div>
            <div className="aurudu-nekath-card">
              <h4>අලුත් අවුරුදු උදාව</h4>
              <p>අප්‍රේල් 14 සඳුදා පෙ.ව. 04:43</p>
            </div>
            <div className="aurudu-nekath-card">
              <h4>ආහාර පිසීම</h4>
              <p>අප්‍රේල් 14 සඳුදා පෙ.ව. 06:12</p>
            </div>
            <div className="aurudu-nekath-card">
              <h4>වැඩ ඇරඹීම හා ගනුදෙනු</h4>
              <p>අප්‍රේල් 14 සඳුදා පෙ.ව. 07:02</p>
            </div>
            <div className="aurudu-nekath-card">
              <h4>හිසතෙල් ගෑම</h4>
              <p>අප්‍රේල් 16 බදාදා පෙ.ව. 09:17</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
