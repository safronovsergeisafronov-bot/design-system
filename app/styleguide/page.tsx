'use client';

import { designTokens } from '@/styles/design-tokens';

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-4xl font-bold text-neutral-900">
            Worlex Design System
          </h1>
          <p className="text-neutral-600 mt-2">
            Complete visual reference for design tokens and styles
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Colors Section */}
        <section id="colors">
          <h2 className="text-3xl font-bold mb-8 text-neutral-900">Colors</h2>

          {/* Primary Colors */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
              Primary Colors
            </h3>
            <div className="grid grid-cols-11 gap-2">
              {Object.entries(designTokens.colors.primary).map(([key, value]) => (
                <ColorSwatch
                  key={key}
                  name={`primary-${key}`}
                  value={value}
                  label={key}
                />
              ))}
            </div>
          </div>

          {/* Secondary Colors */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
              Secondary Colors
            </h3>
            <div className="grid grid-cols-11 gap-2">
              {Object.entries(designTokens.colors.secondary).map(([key, value]) => (
                <ColorSwatch
                  key={key}
                  name={`secondary-${key}`}
                  value={value}
                  label={key}
                />
              ))}
            </div>
          </div>

          {/* Neutral Colors */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
              Neutral Colors
            </h3>
            <div className="grid grid-cols-11 gap-2">
              {Object.entries(designTokens.colors.neutral).map(([key, value]) => (
                <ColorSwatch
                  key={key}
                  name={`neutral-${key}`}
                  value={value}
                  label={key}
                />
              ))}
            </div>
          </div>

          {/* Semantic Colors */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
              Semantic Colors
            </h3>

            {Object.entries(designTokens.colors.semantic).map(([semanticName, shades]) => (
              <div key={semanticName} className="mb-6">
                <h4 className="text-lg font-medium mb-3 text-neutral-700 capitalize">
                  {semanticName}
                </h4>
                <div className="grid grid-cols-9 gap-2">
                  {Object.entries(shades).map(([key, value]) => (
                    <ColorSwatch
                      key={key}
                      name={`${semanticName}-${key}`}
                      value={value}
                      label={key}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography Section */}
        <section id="typography">
          <h2 className="text-3xl font-bold mb-8 text-neutral-900">Typography</h2>

          {/* Font Families */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
              Font Families
            </h3>
            <div className="space-y-4">
              {Object.entries(designTokens.typography.fontFamily).map(([name, fonts]) => (
                <div
                  key={name}
                  className="bg-white p-6 rounded-lg border border-neutral-200"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-semibold text-neutral-700 capitalize">
                      {name}
                    </span>
                    <code className="text-sm text-neutral-500">
                      font-{name}
                    </code>
                  </div>
                  <p
                    className="text-2xl"
                    style={{ fontFamily: fonts.join(', ') }}
                  >
                    The quick brown fox jumps over the lazy dog
                  </p>
                  <code className="text-xs text-neutral-500 mt-2 block">
                    {fonts.join(', ')}
                  </code>
                </div>
              ))}
            </div>
          </div>

          {/* Font Sizes */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
              Font Sizes
            </h3>
            <div className="space-y-4">
              {Object.entries(designTokens.typography.fontSize).map(([name, [size, { lineHeight }]]) => (
                <div
                  key={name}
                  className="bg-white p-6 rounded-lg border border-neutral-200"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <code className="text-sm font-semibold text-neutral-700">
                      text-{name}
                    </code>
                    <span className="text-sm text-neutral-500">
                      {size} / {lineHeight}
                    </span>
                  </div>
                  <p style={{ fontSize: size, lineHeight }}>
                    The quick brown fox jumps over the lazy dog
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Font Weights */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
              Font Weights
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(designTokens.typography.fontWeight).map(([name, weight]) => (
                <div
                  key={name}
                  className="bg-white p-6 rounded-lg border border-neutral-200"
                >
                  <div className="text-sm text-neutral-500 mb-2">
                    font-{name} ({weight})
                  </div>
                  <p className="text-xl" style={{ fontWeight: weight }}>
                    Aa Bb Cc
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spacing Section */}
        <section id="spacing">
          <h2 className="text-3xl font-bold mb-8 text-neutral-900">Spacing</h2>
          <div className="grid grid-cols-4 gap-6">
            {Object.entries(designTokens.spacing).map(([name, value]) => (
              <div
                key={name}
                className="bg-white p-4 rounded-lg border border-neutral-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <code className="text-sm font-semibold text-neutral-700">
                    {name}
                  </code>
                  <span className="text-xs text-neutral-500">{value}</span>
                </div>
                <div className="bg-primary-500 rounded" style={{ width: value, height: '24px' }} />
              </div>
            ))}
          </div>
        </section>

        {/* Border Radius Section */}
        <section id="border-radius">
          <h2 className="text-3xl font-bold mb-8 text-neutral-900">
            Border Radius
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {Object.entries(designTokens.borderRadius).map(([name, value]) => (
              <div
                key={name}
                className="bg-white p-6 rounded-lg border border-neutral-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <code className="text-sm font-semibold text-neutral-700">
                    rounded-{name}
                  </code>
                  <span className="text-xs text-neutral-500">{value}</span>
                </div>
                <div
                  className="bg-primary-500 w-24 h-24"
                  style={{ borderRadius: value }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Shadows Section */}
        <section id="shadows">
          <h2 className="text-3xl font-bold mb-8 text-neutral-900">Shadows</h2>
          <div className="grid grid-cols-2 gap-6">
            {Object.entries(designTokens.shadows).map(([name, value]) => (
              <div
                key={name}
                className="bg-white p-8 rounded-lg border border-neutral-200"
              >
                <div className="mb-4">
                  <code className="text-sm font-semibold text-neutral-700">
                    shadow-{name}
                  </code>
                </div>
                <div
                  className="bg-white w-full h-32 rounded-lg flex items-center justify-center"
                  style={{ boxShadow: value }}
                >
                  <span className="text-neutral-400 text-sm">Shadow preview</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Breakpoints Section */}
        <section id="breakpoints">
          <h2 className="text-3xl font-bold mb-8 text-neutral-900">
            Breakpoints
          </h2>
          <div className="space-y-4">
            {Object.entries(designTokens.breakpoints).map(([name, value]) => (
              <div
                key={name}
                className="bg-white p-6 rounded-lg border border-neutral-200 flex items-center justify-between"
              >
                <div>
                  <code className="text-lg font-semibold text-neutral-700">
                    {name}
                  </code>
                  <p className="text-sm text-neutral-500 mt-1">
                    @media (min-width: {value})
                  </p>
                </div>
                <span className="text-2xl font-bold text-primary-500">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Transitions Section */}
        <section id="transitions">
          <h2 className="text-3xl font-bold mb-8 text-neutral-900">
            Transitions
          </h2>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
              Duration
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(designTokens.transitions.duration).map(([name, value]) => (
                <div
                  key={name}
                  className="bg-white p-4 rounded-lg border border-neutral-200 text-center"
                >
                  <code className="text-sm font-semibold text-neutral-700">
                    duration-{name}
                  </code>
                  <p className="text-xs text-neutral-500 mt-2">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
              Timing Functions
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(designTokens.transitions.timing).map(([name, value]) => (
                <div
                  key={name}
                  className="bg-white p-4 rounded-lg border border-neutral-200"
                >
                  <code className="text-sm font-semibold text-neutral-700">
                    ease-{name}
                  </code>
                  <p className="text-xs text-neutral-500 mt-2">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-neutral-600">
          <p>
            Worlex Design System • Extract values from{' '}
            <a
              href="https://www.figma.com/design/xUUnKPGTxf3gH4KdqveDd4/Worlex---Simple-Design-System"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:underline"
            >
              Figma
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

// Color Swatch Component
function ColorSwatch({
  name,
  value,
  label,
}: {
  name: string;
  value: string;
  label: string;
}) {
  const isDark = parseInt(label) >= 600 || label === '900' || label === '950';

  return (
    <div className="group relative">
      <div
        className="aspect-square rounded-lg border border-neutral-300 cursor-pointer hover:scale-105 transition-transform"
        style={{ backgroundColor: value }}
        title={`${name}: ${value}`}
      >
        <div
          className={`absolute inset-0 flex items-end justify-center pb-2 ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}
        >
          <span className="text-xs font-medium opacity-80">{label}</span>
        </div>
      </div>
      <div className="mt-1 text-center">
        <code className="text-xs text-neutral-600">{value}</code>
      </div>
    </div>
  );
}
