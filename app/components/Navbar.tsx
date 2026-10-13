'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#statistics', label: 'Statistics' },
    { href: '#laws', label: 'Laws' },
    { href: '#stories', label: 'Stories' },
    { href: '#action', label: 'Take Action' },
    { href: '#resources', label: 'Resources' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-indigo-950/95 backdrop-blur-sm navbar-scrolled' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="text-2xl">⚖️</span>
            <span className="font-bold text-white text-lg tracking-tight">
              Equal<span className="text-purple-300">Voice</span>{' '}
              <span className="text-pink-400">PH</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#action"
              className="ml-3 px-4 py-2 text-sm font-semibold text-white rounded-full transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #db2777)',
              }}
            >
              Get Help Now
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-indigo-950/98 backdrop-blur-sm rounded-b-2xl pb-4 px-2 mobile-menu-enter">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#action"
              onClick={() => setIsOpen(false)}
              className="block mx-4 mt-2 px-4 py-3 text-center text-white font-semibold rounded-full"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #db2777)' }}
            >
              Get Help Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
