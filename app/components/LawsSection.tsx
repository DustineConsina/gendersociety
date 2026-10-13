'use client';

import { useState } from 'react';

interface Law {
  id: string;
  name: string;
  year: string;
  type: string;
  summary: string;
  keyPoints: string[];
  penalty?: string;
  color: string;
  icon: string;
}

const laws: Law[] = [
  {
    id: 'ra9262',
    name: 'Republic Act 9262',
    year: '2004',
    type: 'National Law',
    summary:
      'Anti-Violence Against Women and Their Children (VAWC) Act. This landmark law protects women and children from physical, sexual, psychological, and economic abuse.',
    keyPoints: [
      'Covers intimate partner violence and family violence',
      'Provides protection orders (BPO, TPO, PPO)',
      'Recognizes psychological and economic abuse',
      'Grants victim-survivors free legal assistance',
      'Includes provisions for custody and support',
    ],
    penalty: 'Imprisonment of 6 months to 12 years depending on the act committed',
    color: '#7c3aed',
    icon: '🛡️',
  },
  {
    id: 'ra8353',
    name: 'Republic Act 8353',
    year: '1997',
    type: 'National Law',
    summary:
      'The Anti-Rape Law expanded the definition of rape, criminalized marital rape, and reclassified rape as a crime against persons rather than chastity.',
    keyPoints: [
      'Expanded rape definition beyond penile-vaginal to include objects and body parts',
      'Criminalized marital rape',
      'Shifted from "crime against chastity" to "crime against persons"',
      'Increased penalties and set tougher standards',
      'Protects male and female victims',
    ],
    penalty: 'Reclusion Perpetua (life imprisonment) up to the death penalty (before RA 9346)',
    color: '#db2777',
    icon: '⚖️',
  },
  {
    id: 'ra11313',
    name: 'Republic Act 11313',
    year: '2019',
    type: 'National Law',
    summary:
      'Safe Spaces Act (Bawal Bastos Law) addresses gender-based sexual harassment in streets, public spaces, online, and workplaces.',
    keyPoints: [
      'Covers catcalling, wolf-whistling, and misogynistic/homophobic slurs',
      'Addresses online sexual harassment and cyberstalking',
      'Applies to workplace sexual harassment regardless of hierarchy',
      'Requires creation of a Committee on Decorum and Investigation (CODI)',
      'Protects LGBTQIA+ individuals from discrimination',
    ],
    penalty: 'Fines from ₱1,000 to ₱500,000 and/or imprisonment of 1 day to 6 years',
    color: '#0891b2',
    icon: '🏙️',
  },
  {
    id: 'ra9995',
    name: 'Republic Act 9995',
    year: '2009',
    type: 'National Law',
    summary:
      'Anti-Photo and Video Voyeurism Act prohibits the taking, copying, selling, or distributing of photo or video coverage of a person\'s private acts without consent.',
    keyPoints: [
      'Prohibits unauthorized recording of private sexual acts',
      'Criminalizes sharing intimate images without consent (revenge porn)',
      'Covers digital distribution and social media sharing',
      'Protects victims from blackmail using intimate images',
    ],
    penalty: 'Imprisonment of 3 to 7 years and fines up to ₱500,000',
    color: '#d97706',
    icon: '📵',
  },
  {
    id: 'cedaw',
    name: 'CEDAW',
    year: '1979 (PH ratified 1981)',
    type: 'International Convention',
    summary:
      'Convention on the Elimination of All Forms of Discrimination Against Women — the international bill of rights for women, ratified by the Philippines.',
    keyPoints: [
      'Mandates equality between men and women in all areas',
      'Requires states to take measures to eliminate GBV',
      'Includes civil, political, economic, social, and cultural rights',
      'Establishes a reporting mechanism for country compliance',
      'Guides Philippine national laws on women\'s rights',
    ],
    color: '#6d28d9',
    icon: '🌐',
  },
  {
    id: 'beijing',
    name: 'Beijing Platform for Action',
    year: '1995',
    type: 'International Framework',
    summary:
      'Adopted at the Fourth World Conference on Women, this global framework identifies critical areas including violence against women and outlines concrete actions for governments.',
    keyPoints: [
      'Identified 12 critical areas of concern including GBV',
      'Called for legislative action to criminalize domestic violence',
      'Promoted gender-sensitive education and media',
      'Advocated for women\'s economic empowerment',
      'Influenced Philippine Magna Carta of Women (RA 9710)',
    ],
    color: '#059669',
    icon: '🕊️',
  },
];

export default function LawsSection() {
  const [selected, setSelected] = useState<string>(laws[0].id);

  const active = laws.find((l) => l.id === selected)!;

  return (
    <section id="laws" className="py-20 px-4 bg-indigo-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-purple-900/60 text-purple-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            ⚖️ Legal Framework
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Laws That{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa, #f472b6)' }}>
              Protect Us
            </span>
          </h2>
          <p className="text-purple-200 max-w-2xl mx-auto text-lg">
            Know your rights. These laws exist to protect you and every Filipino from gender-based violence.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Law selector */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {laws.map((law) => (
              <button
                key={law.id}
                onClick={() => setSelected(law.id)}
                className={`flex-shrink-0 lg:flex-shrink text-left p-4 rounded-xl border transition-all duration-200 ${
                  selected === law.id
                    ? 'border-transparent text-white shadow-lg'
                    : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
                style={
                  selected === law.id
                    ? { background: `linear-gradient(135deg, ${law.color}cc, ${law.color}88)` }
                    : {}
                }
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{law.icon}</span>
                  <div>
                    <div className="font-bold text-sm">{law.name}</div>
                    <div className="text-xs opacity-70">{law.year}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div
            key={active.id}
            className="lg:col-span-3 bg-white/5 backdrop-blur rounded-2xl border border-white/10 p-8 animate-fade-in-up"
          >
            <div className="flex items-start gap-4 mb-6">
              <span className="text-5xl">{active.icon}</span>
              <div>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full mb-2 inline-block"
                  style={{ background: `${active.color}30`, color: active.color }}
                >
                  {active.type}
                </span>
                <h3 className="text-2xl font-black text-white">{active.name}</h3>
                <p className="text-purple-300 text-sm">{active.year}</p>
              </div>
            </div>

            <p className="text-purple-100 mb-6 leading-relaxed">{active.summary}</p>

            <h4 className="text-white font-bold mb-3">Key Provisions:</h4>
            <ul className="space-y-2 mb-6">
              {active.keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-purple-200 text-sm">
                  <span
                    className="w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
                    style={{ backgroundColor: active.color }}
                  >
                    {i + 1}
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            {active.penalty && (
              <div
                className="p-4 rounded-xl border text-sm"
                style={{ backgroundColor: `${active.color}15`, borderColor: `${active.color}40` }}
              >
                <strong className="text-white">⚠️ Penalty: </strong>
                <span className="text-purple-200">{active.penalty}</span>
              </div>
            )}
          </div>
        </div>

        <p className="text-center text-purple-400 text-xs mt-8">
          Sources: Official Gazette of the Philippines · Commission on Human Rights PH · UN Women · CEDAW Committee
        </p>
      </div>
    </section>
  );
}
