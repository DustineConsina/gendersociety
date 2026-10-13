'use client';

import { useEffect, useRef, useState } from 'react';

interface StatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel: string;
  color: string;
  icon: string;
}

function StatCard({ value, suffix = '', prefix = '', label, sublabel, color, icon }: StatProps) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [visible, value]);

  return (
    <div
      ref={ref}
      className="card-hover bg-white rounded-2xl p-6 shadow-lg border border-purple-100 text-center group"
    >
      <div
        className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl stat-pulse"
        style={{ backgroundColor: `${color}20` }}
      >
        {icon}
      </div>
      <div
        className="text-4xl font-black mb-1 counter-num"
        style={{ color }}
      >
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="font-bold text-indigo-900 text-sm mb-1">{label}</div>
      <div className="text-gray-500 text-xs leading-relaxed">{sublabel}</div>
    </div>
  );
}

export default function StatsSection() {
  const stats: StatProps[] = [
    {
      value: 1,
      suffix: ' in 3',
      label: 'Women Affected by GBV',
      sublabel: '1 in 3 women worldwide experience physical or sexual violence in their lifetime.',
      color: '#db2777',
      icon: '🚺',
    },
    {
      value: 736,
      suffix: 'M+',
      label: 'Women Globally',
      sublabel: 'Over 736 million women have experienced intimate partner or non-partner sexual violence (WHO, 2021).',
      color: '#7c3aed',
      icon: '🌍',
    },
    {
      value: 137,
      label: 'Women Killed Daily',
      sublabel: 'Approximately 137 women are killed by a family member every day worldwide (UNODC, 2020).',
      color: '#dc2626',
      icon: '🔴',
    },
    {
      value: 58,
      suffix: '%',
      label: 'PH Women Abused',
      sublabel: '58% of Filipino women experience physical, sexual, or emotional violence from their partner (PSA, 2022).',
      color: '#d97706',
      icon: '🇵🇭',
    },
    {
      value: 107,
      suffix: 'K+',
      label: 'VAWC Cases (2022)',
      sublabel: 'Over 107,000 VAWC cases were reported to the PNP in 2022 — only a fraction of actual incidents.',
      color: '#0891b2',
      icon: '📋',
    },
    {
      value: 40,
      suffix: '%',
      label: 'Cases Go Unreported',
      sublabel: 'An estimated 40% or more of GBV cases go unreported due to shame, fear, and lack of support (UN Women).',
      color: '#6d28d9',
      icon: '🔇',
    },
  ];

  return (
    <section id="statistics" className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            📊 By The Numbers
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-indigo-950 mb-4">
            The Reality of{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #7c3aed, #db2777)' }}>
              Gender-Based Violence
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            These numbers represent real lives. Understanding the scale is the first step toward change.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>

        {/* Data sources */}
        <div className="mt-10 p-5 bg-purple-50 rounded-2xl border border-purple-100">
          <p className="text-xs text-gray-500 text-center">
            <strong className="text-purple-700">Sources:</strong> World Health Organization (WHO) 2021 · United Nations Office on Drugs and Crime (UNODC) 2020 ·
            UN Women · Philippine Statistics Authority (PSA) 2022 · Philippine National Police (PNP) 2022
          </p>
        </div>
      </div>
    </section>
  );
}
