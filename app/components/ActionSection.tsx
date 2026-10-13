'use client';

import { useState } from 'react';

const actions = [
  {
    id: 'pledge',
    icon: '✊',
    title: 'Take the Pledge',
    description: 'Commit to stand against gender-based violence in your home, workplace, and community.',
    color: '#7c3aed',
  },
  {
    id: 'learn',
    icon: '📚',
    title: 'Educate Yourself',
    description: 'Learn about GBV, gender equality, and how systemic change happens.',
    color: '#db2777',
  },
  {
    id: 'support',
    icon: '💙',
    title: 'Support Survivors',
    description: 'Listen without judgment, believe them, and connect them to professional help.',
    color: '#0891b2',
  },
  {
    id: 'speak',
    icon: '📢',
    title: 'Speak Up',
    description: 'Challenge sexist jokes, call out harassment, and model respectful behavior.',
    color: '#d97706',
  },
];

export default function ActionSection() {
  const [pledged, setPledged] = useState(false);
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const commitments = [
    'I will believe and support survivors',
    'I will speak out against violence and harassment',
    'I will educate myself on gender issues',
    'I will not remain silent when I witness GBV',
    'I will share this knowledge with my community',
  ];

  const handlePledge = () => {
    if (name.trim()) {
      setSubmitted(true);
    }
  };

  const toggleCheck = (item: string) => {
    setCheckedItems((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <section id="action" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            🚀 Take Action
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-indigo-950 mb-4">
            Be Part of the{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #7c3aed, #db2777)' }}
            >
              Solution
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Every person has a role to play. Here's how you can make a difference today.
          </p>
        </div>

        {/* Action cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {actions.map((action) => (
            <div
              key={action.id}
              className="card-hover bg-white rounded-2xl p-6 border border-purple-100 shadow-md text-center"
            >
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl"
                style={{ backgroundColor: `${action.color}15` }}
              >
                {action.icon}
              </div>
              <h3 className="font-bold text-indigo-900 mb-2">{action.title}</h3>
              <p className="text-gray-600 text-sm">{action.description}</p>
            </div>
          ))}
        </div>

        {/* Pledge section */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-950 to-purple-900 rounded-3xl p-8 md:p-10 shadow-2xl">
            {!submitted ? (
              <>
                <div className="text-center mb-8">
                  <span className="text-5xl">🤝</span>
                  <h3 className="text-2xl font-black text-white mt-4 mb-2">Sign the Pledge</h3>
                  <p className="text-purple-200 text-sm">
                    Add your name to commit to a future free from gender-based violence.
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {commitments.map((item) => (
                    <label
                      key={item}
                      className="flex items-start gap-3 cursor-pointer group"
                    >
                      <div
                        className={`w-5 h-5 rounded flex-shrink-0 border-2 flex items-center justify-center transition-all mt-0.5 ${
                          checkedItems[item]
                            ? 'border-purple-400 bg-purple-500'
                            : 'border-white/30 bg-white/10 group-hover:border-purple-400'
                        }`}
                        onClick={() => toggleCheck(item)}
                      >
                        {checkedItems[item] && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="text-purple-100 text-sm">{item}</span>
                    </label>
                  ))}
                </div>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name (first name is fine)"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 mb-4 text-sm"
                />

                <button
                  onClick={handlePledge}
                  disabled={!name.trim()}
                  className="w-full py-3 rounded-xl font-bold text-white transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #db2777)' }}
                >
                  ✊ I Take This Pledge
                </button>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-4 animate-bounce">🎉</div>
                <h3 className="text-2xl font-black text-white mb-3">
                  Thank you, {name}!
                </h3>
                <p className="text-purple-200 mb-6">
                  Your pledge has been recorded. Share this with others and inspire more people to join the movement.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    className="px-6 py-2.5 rounded-full text-white font-semibold text-sm"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #db2777)' }}
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: 'EqualVoice PH — End GBV',
                          text: `I just pledged to stand against gender-based violence. Join me! 💜`,
                          url: window.location.href,
                        });
                      }
                    }}
                  >
                    📤 Share This Page
                  </button>
                  <button
                    className="px-6 py-2.5 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10"
                    onClick={() => { setSubmitted(false); setName(''); setCheckedItems({}); }}
                  >
                    ↩ Sign Again
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
