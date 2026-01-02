# Worlex Design System - Icon Library

## Naming Convention for Figma
Format: `icon-name/size`
Example: `home/24`, `user/16`, `search/32`

## Sizes
- 16px (xs) - Inline text
- 20px (sm) - Buttons, inputs
- 24px (md) - Navigation (default)
- 32px (lg) - Cards, headers
- 48px (xl) - Features, heroes

---

## Navigation & Actions (12 icons)
- home
- search
- menu
- close
- arrow-left
- arrow-right
- arrow-up
- arrow-down
- chevron-left
- chevron-right
- chevron-up
- chevron-down

## User & Account (6 icons)
- user
- user-circle
- users
- user-plus
- login
- logout

## Content & Media (10 icons)
- image
- video
- audio
- file
- document
- folder
- camera
- play
- pause
- volume

## Communication (6 icons)
- mail
- message
- chat
- phone
- bell
- notification

## Actions & Status (16 icons)
- plus
- minus
- edit
- delete
- trash
- save
- download
- upload
- check
- check-circle
- x-circle
- info
- alert-circle
- alert-triangle
- loading
- refresh

## Settings & Tools (10 icons)
- settings
- filter
- calendar
- clock
- map
- location
- lock
- unlock
- eye
- eye-off

## E-commerce & Business (6 icons)
- shopping-cart
- shopping-bag
- credit-card
- dollar
- tag
- gift

## Social & Sharing (6 icons)
- heart
- star
- share
- bookmark
- thumbs-up
- thumbs-down

## Learning & Education (6 icons)
- book
- book-open
- graduation-cap
- trophy
- target
- award

---

## Total Icons: 78

## Additional Icons to Consider (Optional)
- help-circle
- link
- external-link
- copy
- clipboard
- code
- terminal
- database
- server
- cloud
- cloud-upload
- cloud-download
- wifi
- bluetooth
- battery
- power
- zap (lightning/energy)
- sun
- moon
- flag
- grid
- list
- layout
- sidebar
- maximize
- minimize
- more-vertical
- more-horizontal
- mic
- mic-off
- video-camera
- video-off
- printer
- compass
- layers
- package
- pie-chart
- bar-chart
- trending-up
- trending-down
- activity

---

## Figma Setup Instructions

### Step 1: Create Frame Structure
1. Create a main frame called "Icons/Worlex"
2. Inside, create 5 sub-frames for each size:
   - Icons/16px
   - Icons/20px
   - Icons/24px
   - Icons/32px
   - Icons/48px

### Step 2: Icon Components
For each icon, create 5 variants (one per size):
```
Component Name: icon-name
Variants: 16, 20, 24, 32, 48
```

### Step 3: Design Guidelines
- **Stroke Width:**
  - 16px icons: 1.5px stroke
  - 20px icons: 1.5px stroke
  - 24px icons: 2px stroke
  - 32px icons: 2px stroke
  - 48px icons: 2.5px stroke

- **Corner Radius:**
  - Rounded line caps and joins
  - 2px internal corner radius where applicable

- **Color:**
  - Default: currentColor (inherits from text)
  - Primary: #801C1E
  - Neutral: #111111

- **Grid:**
  - Use pixel-perfect grid for each size
  - Keep 2px padding from edges (e.g., 24px icon has 20px drawable area)

### Step 4: Export Settings
- Format: SVG
- Remove fill, use stroke only
- Outline strokes: NO (keep as strokes for easier editing)
- Include: id, class
- Flatten: NO

### Step 5: Component Properties
Add these properties to each icon component:
- Size (16, 20, 24, 32, 48)
- Color (Default, Primary, Neutral)
- State (Default, Hover, Active, Disabled)

---

## CSS Classes (for HTML/React)

```css
.icon {
  display: inline-block;
  line-height: 0;
  flex-shrink: 0;
}

.icon-xs { width: 16px; height: 16px; }
.icon-sm { width: 20px; height: 20px; }
.icon-md { width: 24px; height: 24px; }
.icon-lg { width: 32px; height: 32px; }
.icon-xl { width: 48px; height: 48px; }
```

## React/SVG Usage Example

```tsx
// Icon component
interface IconProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 'md', className }) => {
  const sizeMap = {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 32,
    xl: 48,
  };

  return (
    <svg
      width={sizeMap[size]}
      height={sizeMap[size]}
      className={`icon icon-${size} ${className}`}
      aria-hidden="true"
    >
      <use href={`/icons/sprite.svg#${name}`} />
    </svg>
  );
};

// Usage
<Icon name="home" size="md" />
<Icon name="user" size="lg" className="text-primary-500" />
```

---

## Recommended Icon Libraries for Reference

If you need actual SVG files to start with, consider these sources:

1. **Lucide Icons** (https://lucide.dev)
   - Clean, consistent, open source
   - MIT license
   - Stroke-based design

2. **Heroicons** (https://heroicons.com)
   - By Tailwind CSS creators
   - Outline and solid variants
   - MIT license

3. **Feather Icons** (https://feathericons.com)
   - Minimal, consistent
   - MIT license
   - Perfect for stroke-based designs

4. **Phosphor Icons** (https://phosphoricons.com)
   - Multiple weights
   - Very comprehensive
   - MIT license

## Quick Start: Using Lucide Icons

```bash
npm install lucide-react
```

```tsx
import { Home, User, Search, Menu } from 'lucide-react';

<Home size={24} strokeWidth={2} />
<User size={16} strokeWidth={1.5} />
```

---

## Checklist for Icon System Implementation

- [ ] Choose icon source (custom design or library)
- [ ] Create Figma components with all 5 sizes
- [ ] Set up consistent stroke widths
- [ ] Export SVGs
- [ ] Create SVG sprite file
- [ ] Add CSS classes
- [ ] Create React/Vue component wrapper
- [ ] Document usage in style guide
- [ ] Add accessibility labels (aria-label)
- [ ] Test in all breakpoints
