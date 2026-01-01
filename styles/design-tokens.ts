/**
 * Design Tokens
 *
 * This file contains all design tokens for the Worlex design system.
 * Primary color updated to #801C1E (Deep Red)
 * Last updated: 2026-01-02
 */

// ============================================================================
// COLORS
// ============================================================================

export const colors = {
  // Primary Colors (Deep Red palette)
  primary: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#801C1E',  // Main primary color
    600: '#6b1719',
    700: '#5a1315',
    800: '#450f11',
    900: '#3a0d0e',
    950: '#2a0909',
  },

  // Secondary Colors (Green palette from Figma)
  secondary: {
    50: '#ebffee',
    100: '#cff7d3',
    200: '#aff4c6',
    300: '#14ae5c',
    400: '#009951',
    500: '#02542d',  // Main secondary color
    600: '#014022',
    700: '#014022',
    800: '#014022',
    900: '#014022',
    950: '#014022',
  },

  // Neutral/Gray Colors (from Figma grayscale)
  neutral: {
    50: '#ffffff',
    100: '#f5f5f5',
    200: '#f2f2f2',
    300: '#e6e6e6',
    400: '#d9d9d9',
    500: '#b3b3b3',
    600: '#767676',
    700: '#5a5a5a',
    800: '#444444',
    900: '#2c2c2c',
    950: '#1e1e1e',
  },

  // Semantic Colors
  semantic: {
    success: {
      50: '#ebffee',
      100: '#cff7d3',
      200: '#aff4c6',
      300: '#14ae5c',
      400: '#009951',
      500: '#02542d',  // Main success color
      600: '#014022',
      700: '#014022',
      800: '#014022',
      900: '#014022',
    },
    warning: {
      50: '#fffbeb',
      100: '#fff1c2',
      200: '#e8b931',
      300: '#e5a000',
      400: '#bf6a02',
      500: '#975101',  // Main warning color
      600: '#682d02',
      700: '#522404',
      800: '#401b00',
      900: '#401b00',
    },
    error: {
      50: '#fde8e7',
      100: '#fdd2cf',
      200: '#fcb2ad',
      300: '#eb221e',
      400: '#bf0f0c',
      500: '#8f0b09',  // Main error color
      600: '#8f0b09',
      700: '#8f0b09',
      800: '#8f0b09',
      900: '#8f0b09',
    },
    info: {
      50: '#fae1fa',
      100: '#fae1fa',
      200: '#fae1fa',
      300: '#fae1fa',
      400: '#fae1fa',
      500: '#fae1fa',  // Main info color
      600: '#fae1fa',
      700: '#fae1fa',
      800: '#fae1fa',
      900: '#fae1fa',
    },
  },

  // Special Colors
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
  current: 'currentColor',
} as const;

// ============================================================================
// TYPOGRAPHY
// ============================================================================

export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
    serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
    mono: ['Roboto Mono', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
    display: ['Inter', 'system-ui', 'sans-serif'],
  },

  // Font sizes extracted from Figma (Title Hero: 72px, Title Page: 48px, Heading: 24px, etc.)
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],        // 12px
    sm: ['0.875rem', { lineHeight: '1.225rem' }],   // 14px - Body Small
    base: ['1rem', { lineHeight: '1.4rem' }],       // 16px - Body Base
    lg: ['1.125rem', { lineHeight: '1.575rem' }],   // 18px
    xl: ['1.25rem', { lineHeight: '1.5rem' }],      // 20px - Subheading
    '2xl': ['1.5rem', { lineHeight: '1.8rem' }],    // 24px - Heading
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
    '4xl': ['2rem', { lineHeight: '2.4rem' }],      // 32px - Subtitle
    '5xl': ['3rem', { lineHeight: '3.6rem' }],      // 48px - Title Page
    '6xl': ['3.75rem', { lineHeight: '4.5rem' }],   // 60px
    '7xl': ['4.5rem', { lineHeight: '5.4rem' }],    // 72px - Title Hero
    '8xl': ['6rem', { lineHeight: '6rem' }],        // 96px
    '9xl': ['8rem', { lineHeight: '8rem' }],        // 128px
  },

  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',      // Body text
    medium: '500',
    semibold: '600',    // Heading, Body Strong
    bold: '700',        // Title Hero, Title Page
    extrabold: '800',
    black: '900',
  },

  lineHeight: {
    none: '1',
    tight: '1.2',      // ~120% for titles
    snug: '1.375',
    normal: '1.4',     // ~140% for body text
    relaxed: '1.625',
    loose: '2',
  },

  letterSpacing: {
    tighter: '-0.03em',  // Title Hero: -2.16px on 72px = -0.03em
    tight: '-0.02em',    // Title Page: -0.96px on 48px = -0.02em
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

// ============================================================================
// SPACING
// ============================================================================

export const spacing = {
  0: '0px',
  0.5: '0.125rem',   // 2px
  1: '0.25rem',      // 4px
  1.5: '0.375rem',   // 6px
  2: '0.5rem',       // 8px
  2.5: '0.625rem',   // 10px
  3: '0.75rem',      // 12px
  3.5: '0.875rem',   // 14px
  4: '1rem',         // 16px
  5: '1.25rem',      // 20px
  6: '1.5rem',       // 24px
  7: '1.75rem',      // 28px
  8: '2rem',         // 32px
  9: '2.25rem',      // 36px
  10: '2.5rem',      // 40px
  11: '2.75rem',     // 44px
  12: '3rem',        // 48px
  14: '3.5rem',      // 56px
  16: '4rem',        // 64px
  20: '5rem',        // 80px
  24: '6rem',        // 96px
  28: '7rem',        // 112px
  32: '8rem',        // 128px
  36: '9rem',        // 144px
  40: '10rem',       // 160px
  44: '11rem',       // 176px
  48: '12rem',       // 192px
  52: '13rem',       // 208px
  56: '14rem',       // 224px
  60: '15rem',       // 240px
  64: '16rem',       // 256px
  72: '18rem',       // 288px
  80: '20rem',       // 320px
  96: '24rem',       // 384px
} as const;

// ============================================================================
// BORDER RADIUS
// ============================================================================

export const borderRadius = {
  none: '0px',
  sm: '0.125rem',    // 2px
  base: '0.25rem',   // 4px
  md: '0.375rem',    // 6px
  lg: '0.5rem',      // 8px
  xl: '0.75rem',     // 12px
  '2xl': '1rem',     // 16px
  '3xl': '1.5rem',   // 24px
  full: '9999px',
} as const;

// ============================================================================
// SHADOWS
// ============================================================================

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  none: 'none',
} as const;

// ============================================================================
// BREAKPOINTS
// ============================================================================

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ============================================================================
// Z-INDEX
// ============================================================================

export const zIndex = {
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  auto: 'auto',
} as const;

// ============================================================================
// TRANSITIONS
// ============================================================================

export const transitions = {
  duration: {
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms',
  },
  timing: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

// ============================================================================
// EXPORT ALL TOKENS
// ============================================================================

export const designTokens = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  breakpoints,
  zIndex,
  transitions,
} as const;

export default designTokens;
