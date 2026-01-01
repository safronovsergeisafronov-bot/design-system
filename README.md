# Worlex Design System

A comprehensive design system with design tokens and a visual style guide built with Next.js and Tailwind CSS.

## Features

- 🎨 Complete design token system
- 📐 Typography scale with multiple font families
- 🌈 Color palette (primary, secondary, neutral, and semantic colors)
- 📏 Spacing scale following Tailwind conventions
- 🔄 Border radius, shadows, and transitions
- 📱 Responsive breakpoints
- 🖼️ Visual style guide for easy reference

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the homepage.

Visit [http://localhost:3000/styleguide](http://localhost:3000/styleguide) to see the complete style guide.

### Build

```bash
npm run build
npm start
```

## Design Tokens

All design tokens are defined in `/styles/design-tokens.ts` and include:

- **Colors**: Primary, secondary, neutral, and semantic colors (success, warning, error, info)
- **Typography**: Font families, sizes, weights, line heights, and letter spacing
- **Spacing**: Complete spacing scale from 0 to 96
- **Border Radius**: From none to full (rounded)
- **Shadows**: Small to 2xl shadows plus inner shadow
- **Breakpoints**: Responsive breakpoints (sm, md, lg, xl, 2xl)
- **Z-Index**: Layering values
- **Transitions**: Duration and timing functions

## Customizing with Figma Values

### Option 1: Manual Extraction

1. Open your Figma design system: [Worlex Design System](https://www.figma.com/design/xUUnKPGTxf3gH4KdqveDd4/Worlex---Simple-Design-System)
2. Navigate to the Styles/Variables section
3. Copy the values from Figma
4. Update `/styles/design-tokens.ts` with the actual values

### Option 2: Using Figma MCP Server (Recommended)

To automatically sync design tokens from Figma, you can set up the Figma MCP server:

1. Install the Figma MCP server (if available in your MCP setup)
2. Configure it with your Figma access token
3. Run a script to extract and update design tokens automatically

**Note**: The current tokens are placeholder values. Replace them with your actual Figma design system values.

## Project Structure

```
design-system/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   └── styleguide/
│       └── page.tsx         # Style guide page
├── styles/
│   └── design-tokens.ts     # Design token definitions
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

## Usage in Components

Import and use design tokens in your components:

```tsx
import { designTokens } from '@/styles/design-tokens';

// Use in styles
const button = {
  backgroundColor: designTokens.colors.primary[500],
  borderRadius: designTokens.borderRadius.lg,
  padding: `${designTokens.spacing[4]} ${designTokens.spacing[6]}`,
};

// Or use Tailwind classes
<button className="bg-primary-500 rounded-lg px-6 py-4">
  Click me
</button>
```

## Contributing

When updating design tokens:

1. Update `/styles/design-tokens.ts` with new values
2. Ensure Tailwind config (`tailwind.config.ts`) references the tokens
3. Test changes in the style guide at `/styleguide`
4. Document any breaking changes

## License

MIT
