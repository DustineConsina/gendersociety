import Navbar from './components/Navbar';
import StatsSection from './components/StatsSection';
import LawsSection from './components/LawsSection';
import StoriesSection from './components/StoriesSection';
import ActionSection from './components/ActionSection';
import ResourcesSection from './components/ResourcesSection';
import MythFactQuiz from './components/MythFactQuiz';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ─── HERO ─── */}
      <section
        id="home"
        className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Background decorative circles */}
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10 animate-float"
          style={{ background: 'radial-gradient(circle, #f472b6, transparent)' }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full opacity-10 animate-float"
          style={{ background: 'radial-gradient(circle, #a78bfa, transparent)', animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full opacity-10 animate-float"
          style={{ background: 'radial-gradient(circle, #fbbf24, transparent)', animationDelay: '1s' }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
  

          {/* Main headline */}
          {/* Main headline — Tagalog */}
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
            <span
              className="text-transparent bg-clip-text animate-gradient"
              style={{
                backgroundImage: 'linear-gradient(135deg, #f472b6, #a78bfa, #fbbf24, #f472b6)',
              }}
            >
              Pero nay aminin mo,
            </span>
            <br />
            <span
              className="text-transparent bg-clip-text animate-gradient"
              style={{
                backgroundImage: 'linear-gradient(135deg, #fbbf24, #f472b6, #a78bfa, #fbbf24)',
              }}
            >
              Dapat pantay-pantay tayo
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/70 italic font-semibold mb-6 tracking-wide">
            Break the Silence. End the Violence.
          </p>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-4 leading-relaxed">
            Addressing <strong className="text-pink-300">Gender-Based Violence (GBV)</strong> in the Philippines
            through awareness, education, and empowerment.
          </p>

          {/* Claim */}
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3 mb-10 max-w-2xl">
            <p className="text-white/90 text-sm md:text-base italic">
              &ldquo;Gender-based violence is not a private matter — it is a public health emergency and a
              human rights violation that demands collective action.&rdquo;
            </p>
            <p className="text-purple-300 text-xs mt-2">— UN Women, 2023</p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#statistics"
              className="px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #db2777)' }}
            >
              See the Statistics →
            </a>
            <a
              href="#action"
              className="px-8 py-4 rounded-full text-white font-bold text-lg bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 transition-all duration-200 hover:scale-105"
            >
              Take Action Now
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 flex flex-col items-center gap-2 text-white/50 text-xs">
            <span>Scroll to explore</span>
            <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── MYTH OR FACT QUIZ ─── */}
      <MythFactQuiz />

      {/* ─── ABOUT ─── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
                🎯 Our Focus
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-indigo-950 mb-4 section-heading">
                What is Gender-Based Violence?
              </h2>
              <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-indigo-900">Gender-based violence (GBV)</strong> refers to harmful acts
                  directed at individuals based on their gender. It is rooted in gender inequality, the abuse of power,
                  and harmful norms. GBV includes — but is not limited to — physical, sexual, psychological, and
                  economic violence.
                </p>
                <p>
                  In the Philippines, GBV remains one of the most pressing human rights challenges. Despite landmark
                  legislation such as the{' '}
                  <strong className="text-purple-700">Anti-Violence Against Women and Their Children (VAWC) Act</strong>{' '}
                  and the <strong className="text-purple-700">Safe Spaces Act</strong>, thousands of cases are reported
                  annually — and countless more go unreported.
                </p>
                <p>
                  This platform is dedicated to raising awareness, sharing survivor perspectives, and connecting
                  communities to the legal tools and support systems that can help end this cycle.
                </p>
              </div>
            </div>

            {/* Key facts sidebar */}
            <div className="space-y-4">
              {[
                { label: 'Forms of GBV', value: '5+', detail: 'Physical, sexual, psychological, economic, digital', color: '#7c3aed' },
                { label: 'SDG Goal', value: '5.2', detail: 'Eliminate all forms of violence against women (UN 2030 Agenda)', color: '#db2777' },
                { label: 'Philippine Laws', value: '10+', detail: 'National laws specifically addressing gender-based violence', color: '#0891b2' },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="card-hover bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-100"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-3xl font-black"
                      style={{ color: fact.color }}
                    >
                      {fact.value}
                    </span>
                    <span className="text-sm font-bold text-indigo-900">{fact.label}</span>
                  </div>
                  <p className="text-gray-600 text-xs">{fact.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SDG strip */}
          <div
            className="mt-12 rounded-2xl p-6 text-white"
            style={{ background: 'linear-gradient(135deg, #1e1b4b, #4c1d95)' }}
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs text-purple-300 uppercase tracking-wide font-semibold mb-1">Aligned with UN Sustainable Development Goals</p>
                <p className="text-lg font-bold">
                  SDG 5: Gender Equality &nbsp;|&nbsp; SDG 10: Reduced Inequalities &nbsp;|&nbsp; SDG 16: Peace, Justice & Strong Institutions
                </p>
              </div>
              <div className="flex gap-3">
                {['🟣', '🔵', '🔴'].map((e, i) => (
                  <span key={i} className="text-3xl">{e}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <StatsSection />

      {/* ─── LAWS ─── */}
      <LawsSection />

      {/* ─── STORIES ─── */}
      <StoriesSection />

      {/* ─── TIMELINE ─── */}
      <section className="py-20 px-4 bg-indigo-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-purple-900/60 text-purple-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              📅 Progress Timeline
            </span>
            <h2 className="text-4xl font-black text-white mb-4">
              Key Milestones in{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa, #f472b6)' }}
              >
                Gender Rights
              </span>
            </h2>
            <p className="text-purple-200">Milestones in the fight for gender equality in the Philippines and globally.</p>
          </div>

          <div className="relative border-l-2 border-purple-700 ml-4 space-y-8">
            {[
              { year: '1979', event: 'CEDAW Adopted by UN General Assembly', detail: 'The "International Bill of Rights for Women" was adopted. The Philippines ratified it in 1981.', color: '#a78bfa' },
              { year: '1987', event: 'Philippine Constitution — Gender Equality Clause', detail: 'Article II, Section 14 of the Philippine Constitution recognizes the role of women in nation-building and ensures equal rights.', color: '#f472b6' },
              { year: '1994', event: 'Inter-American Convention on Violence Against Women', detail: 'First international treaty specifically addressing violence against women (Belém do Pará Convention), influencing global frameworks.', color: '#fbbf24' },
              { year: '1997', event: 'RA 8353 — Anti-Rape Law', detail: 'Reclassified rape as a crime against persons, recognized marital rape, and broadened the definition of rape.', color: '#34d399' },
              { year: '2004', event: 'RA 9262 — VAWC Act', detail: 'Landmark law protecting women and children from all forms of intimate partner and family violence.', color: '#60a5fa' },
              { year: '2019', event: 'RA 11313 — Safe Spaces Act', detail: 'Extended protection to online spaces and public areas, criminalizing catcalling and cyber harassment.', color: '#f472b6' },
              { year: '2022', event: 'PH Reports 107K+ VAWC Cases', detail: 'PSA 2022 data shows continued underreporting; government intensifies awareness campaigns and support mechanisms.', color: '#fb7185' },
              { year: '2030', event: 'UN SDG Target: End GBV Globally', detail: 'SDG 5.2 commits all nations to eliminate all forms of violence against women and girls by 2030.', color: '#a78bfa' },
            ].map((item, i) => (
              <div key={i} className="relative pl-8 timeline-item">
                <div className="text-xs font-bold text-purple-400 mb-1">{item.year}</div>
                <h3 className="font-bold text-white mb-1">{item.event}</h3>
                <p className="text-purple-200 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ACTION ─── */}
      <ActionSection />

      {/* ─── RESOURCES ─── */}
      <ResourcesSection />

      {/* ─── FOOTER ─── */}
      <footer className="bg-indigo-950 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">⚖️</span>
                <span className="font-black text-xl">
                  Equal<span className="text-purple-300">Voice</span>{' '}
                  <span className="text-pink-400">PH</span>
                </span>
              </div>
              <p className="text-purple-300 text-sm leading-relaxed">
                A gender-responsive digital platform promoting awareness, equality, and empowerment by addressing
                gender-based violence in the Philippines.
              </p>
              <p className="text-purple-400 text-xs mt-3">
                Midterm Project — Gender & Society
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-3">Quick Navigation</h4>
              <div className="space-y-2">
                {['Home', 'Statistics', 'Laws', 'Stories', 'Take Action', 'Resources'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(/\s/g, '')}`}
                    className="block text-purple-300 hover:text-white text-sm transition-colors"
                  >
                    → {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-3">Key References</h4>
              <div className="space-y-1 text-xs text-purple-300">
                <p>• World Health Organization (WHO), 2021</p>
                <p>• UN Women Annual Report, 2023</p>
                <p>• Philippine Statistics Authority (PSA), 2022</p>
                <p>• UNODC Global Study on Homicide, 2020</p>
                <p>• Commission on Human Rights PH</p>
                <p>• Philippine National Police (PNP), 2022</p>
                <p>• Official Gazette of the Philippines</p>
                <p>• CEDAW Committee Reports</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 text-center">
            <p className="text-purple-400 text-xs">
              This website is created for educational purposes as a midterm project for a Gender & Society course.
              If you are in immediate danger, please call <strong className="text-white">911</strong>.
            </p>
            <p className="text-purple-600 text-xs mt-2">
              © 2026 EqualVoice PH — Gender-Responsive Digital Platform
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
