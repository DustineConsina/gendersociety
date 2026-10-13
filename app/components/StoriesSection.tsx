'use client';

import { useState } from 'react';

interface Story {
  id: number;
  name: string;
  age: string;
  location: string;
  type: string;
  quote: string;
  story: string;
  outcome: string;
  color: string;
  emoji: string;
}

const stories: Story[] = [
  {
    id: 1,
    name: 'Maria*',
    age: '32',
    location: 'Quezon City, Metro Manila',
    type: 'Domestic Violence',
    quote: '"It took me five years to realize that love doesn\'t mean pain."',
    story:
      'Maria endured five years of physical and psychological abuse from her husband. She was isolated from her family, controlled financially, and threatened whenever she tried to leave. After her daughter witnessed an incident, Maria found the courage to seek help at a Women\'s Crisis Center.',
    outcome:
      'With the help of a social worker, Maria filed for a Barangay Protection Order under RA 9262. She now lives independently with her two children and works as a livelihood training facilitator for other survivors.',
    color: '#db2777',
    emoji: '🌸',
  },
  {
    id: 2,
    name: 'Ana*',
    age: '19',
    location: 'Cebu City',
    type: 'Online Sexual Harassment',
    quote: '"My photos were shared without my consent. I was blamed, but I fought back."',
    story:
      'After a breakup, Ana\'s ex-partner shared intimate photos online as revenge. She faced intense cyberbullying and had to temporarily leave school. Ana documented the harassment and reported to the PNP Anti-Cybercrime Group.',
    outcome:
      'Her ex-partner was charged under RA 9995 (Anti-Photo Voyeurism Act) and RA 10175 (Cybercrime Prevention Act). Ana returned to school, became an advocate for online safety, and now volunteers with a digital rights organization.',
    color: '#7c3aed',
    emoji: '💜',
  },
  {
    id: 3,
    name: 'Ligaya*',
    age: '45',
    location: 'Davao City',
    type: 'Economic Abuse',
    quote: '"He controlled every peso. I didn\'t even know what our bank account held."',
    story:
      'Ligaya\'s husband controlled all finances, kept her from working, and used economic deprivation as a tool of control for over a decade. She didn\'t initially recognize this as a form of abuse.',
    outcome:
      'Through a community-based women\'s support group, Ligaya learned that economic abuse is covered under RA 9262. She received free legal assistance and livelihood support, eventually launching her own small business.',
    color: '#d97706',
    emoji: '🌻',
  },
];

export default function StoriesSection() {
  const [active, setActive] = useState<number>(0);

  const current = stories[active];

  return (
    <section id="stories" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            💬 Survivor Voices
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-indigo-950 mb-4">
            Real Stories,{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #7c3aed, #db2777)' }}>
              Real Strength
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            These are composite stories based on documented cases, shared with permission. Names have been changed.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {stories.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border-2 ${
                active === i
                  ? 'text-white border-transparent shadow-lg scale-105'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-purple-300'
              }`}
              style={
                active === i
                  ? { background: `linear-gradient(135deg, ${s.color}, ${s.color}cc)`, borderColor: 'transparent' }
                  : {}
              }
            >
              <span>{s.emoji}</span>
              {s.name}
            </button>
          ))}
        </div>

        {/* Story card */}
        <div
          key={current.id}
          className="animate-fade-in-up max-w-4xl mx-auto bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-3xl flex-shrink-0"
              style={{ backgroundColor: `${current.color}20` }}
            >
              {current.emoji}
            </div>
            <div>
              <h3 className="text-2xl font-black text-indigo-950">{current.name}</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="text-sm text-gray-500">Age {current.age}</span>
                <span className="text-gray-300">•</span>
                <span className="text-sm text-gray-500">{current.location}</span>
                <span className="text-gray-300">•</span>
                <span
                  className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                  style={{ backgroundColor: `${current.color}15`, color: current.color }}
                >
                  {current.type}
                </span>
              </div>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="quote-block pl-6 py-4 pr-4 rounded-xl mb-6 italic text-lg text-indigo-800 font-medium">
            {current.quote}
          </blockquote>

          {/* Story */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
                <span>📖</span> Her Story
              </h4>
              <p className="text-gray-700 leading-relaxed text-sm">{current.story}</p>
            </div>
            <div>
              <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
                <span>✨</span> The Outcome
              </h4>
              <p className="text-gray-700 leading-relaxed text-sm">{current.outcome}</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white rounded-xl border border-purple-100 text-center">
            <p className="text-xs text-gray-400">
              * Names changed to protect privacy. Stories are based on documented cases from Women\'s Crisis Centers and legal aid organizations in the Philippines.
            </p>
          </div>
        </div>

        {/* Warning signs accordion */}
        <div className="mt-16">
          <h3 className="text-2xl font-black text-indigo-950 text-center mb-8">
            ⚠️ Recognize the Warning Signs
          </h3>
          <div className="max-w-3xl mx-auto space-y-3">
            {[
              {
                title: 'Physical Abuse',
                signs: ['Unexplained injuries', 'Partner makes excuses for your injuries', 'You feel afraid of your partner\'s reactions', 'Partner threatens violence'],
                color: '#dc2626',
              },
              {
                title: 'Psychological / Emotional Abuse',
                signs: ['Constant criticism and humiliation', 'Isolation from family and friends', 'Gaslighting (making you question reality)', 'Extreme jealousy and controlling behavior'],
                color: '#7c3aed',
              },
              {
                title: 'Economic Abuse',
                signs: ['Partner controls all finances', 'Prevented from working or studying', 'Allowance is withheld as punishment', 'Forced to account for every expense'],
                color: '#d97706',
              },
              {
                title: 'Online / Digital Abuse',
                signs: ['Partner monitors your devices and accounts', 'Threats to share intimate images', 'Harassment through social media', 'Using technology to stalk or track you'],
                color: '#0891b2',
              },
            ].map((item) => (
              <details
                key={item.title}
                className="group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="font-semibold text-indigo-900">{item.title}</span>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 pb-4">
                  <ul className="space-y-2">
                    {item.signs.map((sign, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-red-400 mt-0.5">⚠</span>
                        {sign}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
