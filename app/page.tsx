'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-neutral-900' : 'bg-neutral-50'}`}>
      {/* Navigation */}
      <nav className={`${isDark ? 'bg-neutral-800 border-neutral-700' : 'bg-white border-neutral-200'} border-b`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold">
            <Link href="/" className={isDark ? 'text-white' : 'text-neutral-900'}>
              Worlex Design System
            </Link>
          </div>
          <div className="flex items-center gap-8">
            <Link href="#colors" className={`${isDark ? 'text-neutral-300 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'}`}>
              Colors
            </Link>
            <Link href="#typography" className={`${isDark ? 'text-neutral-300 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'}`}>
              Typography
            </Link>
            <Link href="#spacing" className={`${isDark ? 'text-neutral-300 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'}`}>
              Spacing
            </Link>
            <Link href="/styleguide#icons" className={`${isDark ? 'text-neutral-300 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'}`}>
              Icons (287)
            </Link>
            <Link href="#components" className={`${isDark ? 'text-neutral-300 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'}`}>
              Components
            </Link>
            <Link href="#get-started" className={`${isDark ? 'text-neutral-300 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'}`}>
              Get Started
            </Link>
            <button
              onClick={() => setIsDark(!isDark)}
              className={`flex items-center gap-2 ${isDark ? 'text-neutral-300 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
              Dark
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-24 py-32">
        <div className="text-center max-w-5xl">
          <h1 className={`text-7xl font-bold mb-6 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Worlex Design System
          </h1>
          <p className={`text-xl mb-4 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            A comprehensive design system with design tokens and visual components
          </p>
          <p className={`text-xl mb-12 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            built with Next.js and Tailwind CSS
          </p>

          {/* Feature List */}
          <div className={`flex items-center justify-center gap-8 mb-12 text-base ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            <span>Complete Design Token System</span>
            <span>Typography Scale</span>
            <span>Color Palette</span>
            <span>Spacing Scale</span>
            <span>Visual Style Guide</span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/safronovsergeisafronov-bot/design-system"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
            >
              View on GitHub
            </a>
            <a
              href="https://www.figma.com/design/xUUnKPGTxf3gH4KdqveDd4/Worlex---Simple-Design-System"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary-600 transition-colors"
            >
              Figma Design
            </a>
            <Link
              href="/styleguide"
              className={`${isDark ? 'bg-neutral-700 hover:bg-neutral-600 text-white' : 'bg-white hover:bg-neutral-50 text-neutral-900'} border ${isDark ? 'border-neutral-600' : 'border-neutral-300'} px-8 py-4 rounded-lg font-semibold transition-colors`}
            >
              Explore Design System
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
