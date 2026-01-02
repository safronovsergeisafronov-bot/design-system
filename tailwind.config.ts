import type { Config } from 'tailwindcss';
import { designTokens } from './styles/design-tokens';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: designTokens.colors.primary,
        secondary: designTokens.colors.secondary,
        neutral: designTokens.colors.neutral,
        success: designTokens.colors.semantic.success,
        warning: designTokens.colors.semantic.warning,
        error: designTokens.colors.semantic.error,
        info: designTokens.colors.semantic.info,
        // Category colors from screenshot
        terracotta: designTokens.colors.categories.terracotta,
        pink: designTokens.colors.categories.pink,
        navy: designTokens.colors.categories.navy,
        golden: designTokens.colors.categories.golden,
        sage: designTokens.colors.categories.sage,
        mint: designTokens.colors.categories.mint,
        mustard: designTokens.colors.categories.mustard,
        blue: designTokens.colors.categories.blue,
        coral: designTokens.colors.categories.coral,
        burgundy: designTokens.colors.categories.burgundy,
      },
      fontFamily: {
        sans: designTokens.typography.fontFamily.sans,
        secondary: designTokens.typography.fontFamily.secondary,
        serif: designTokens.typography.fontFamily.serif,
        mono: designTokens.typography.fontFamily.mono,
        display: designTokens.typography.fontFamily.display,
      } as any,
      fontSize: designTokens.typography.fontSize as any,
      fontWeight: designTokens.typography.fontWeight as any,
      lineHeight: designTokens.typography.lineHeight as any,
      letterSpacing: designTokens.typography.letterSpacing as any,
      spacing: designTokens.spacing,
      borderRadius: designTokens.borderRadius,
      boxShadow: designTokens.shadows,
      screens: designTokens.breakpoints,
      zIndex: designTokens.zIndex,
      transitionDuration: designTokens.transitions.duration,
      transitionTimingFunction: designTokens.transitions.timing,
    },
  },
  plugins: [],
};

export default config;
