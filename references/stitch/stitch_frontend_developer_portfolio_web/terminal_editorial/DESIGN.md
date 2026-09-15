---
name: Terminal Editorial
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e2bfb3'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#a98a7f'
  outline-variant: '#5a4138'
  surface-tint: '#ffb59a'
  primary: '#ffb59a'
  on-primary: '#5b1b00'
  primary-container: '#ff6a2b'
  on-primary-container: '#5c1b00'
  inverse-primary: '#a83900'
  secondary: '#c6c7c5'
  on-secondary: '#2f3130'
  secondary-container: '#454746'
  on-secondary-container: '#b5b5b3'
  tertiary: '#c7c6c6'
  on-tertiary: '#2f3131'
  tertiary-container: '#999999'
  on-tertiary-container: '#303132'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59a'
  on-primary-fixed: '#380d00'
  on-primary-fixed-variant: '#812900'
  secondary-fixed: '#e2e3e1'
  secondary-fixed-dim: '#c6c7c5'
  on-secondary-fixed: '#1a1c1b'
  on-secondary-fixed-variant: '#454746'
  tertiary-fixed: '#e3e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display:
    fontFamily: Inter
    fontSize: 4rem
    fontWeight: '400'
    lineHeight: '1.05'
    letterSpacing: -0.035em
  display-mobile:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: '400'
    lineHeight: '1.15'
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 1.75rem
    fontWeight: '500'
    lineHeight: '1.25'
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: '1.65'
    letterSpacing: '0'
  mono-body:
    fontFamily: Space Mono
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.7'
    letterSpacing: -0.01em
  mono-label:
    fontFamily: Space Mono
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  mono-meta:
    fontFamily: Space Mono
    fontSize: 0.75rem
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

The design system embodies a technical, editorial, and nostalgic aesthetic crafted for a high-caliber frontend engineer. It bridges the discipline of contemporary digital product engineering with the tactile romanticism of early personal computing—evoking the quiet hum of CRT monitors, pristine 3.5-inch floppies, metallic optical discs, and structured terminal directories.

### Tone and Personality
- **Rigorous & Engineered:** Code-conscious, structured, and intentional down to single-pixel alignments.
- **Editorial Minimalism:** Quiet, confident use of deep obsidian space, precise hairline divisions, and deliberate text rhythms instead of decorative noise.
- **Nostalgic Cybernetics:** Subtle nods to computing artifacts, monospaced metadata keys (`rol :`, `inicio :`), and glowing accent points that humanize the interface.

### Target Audience
Engineering leads, technical founders, and product design directors seeking a frontend developer who commands both architectural code quality and obsessive visual execution.

## Colors

The palette relies on deep, near-black values to emulate a darkened development environment, contrasted with soft off-whites that prevent ocular fatigue and a high-voltage phosphor orange for intentional interaction highlights.

### Surface Roles
- **Base Canvas (`#101010`):** Absorptive, deep obsidian for root viewport backgrounds.
- **Surface Secondary (`#181818`):** Raised panels, card containers, code blocks, and interactive hover planes.
- **Surface Elevated (`#222222`):** Floating dialogs, popovers, and active navigation badges.

### Text & Hairline Roles
- **Primary Text (`#F2F2F0`):** High legibility off-white for headlines, core project descriptors, and active states.
- **Secondary Text (`#A3A3A3`):** Neutral gray for long-form narrative body and supporting paragraphs.
- **Metadata & Key Labels (`#8F8F8F`):** Technical low-contrast tone for prompt tokens, timeline markers, and sub-labels.
- **Structural Separators (`#2C2C2C`):** Hairline boundary lines, terminal grid divides, and footer delimiters.

### Accent
- **Signal Orange (`#FF6A2B`):** Reserved strictly for active route indicators, terminal status dots, links on hover, and live production badges.

## Typography

Typography establishes an intentional dichotomy between modern product craftsmanship (`Inter`) and the vintage CLI environment (`Space Mono`).

### Application Hierarchy
- **Editorial Statements & Hero:** Inter regular with tight negative tracking (`-0.035em`) creates a fluid, magazine-like presence for personal intros and high-impact case study titles.
- **Narrative Copy:** Inter regular at `0.9375rem` / `1.125rem` ensures effortless reading across extended project retrospective narratives.
- **System Interface & Metadata:** Space Mono drives all machine-adjacent moments: real-time clocks (`10:33:18 PM`), terminal keys (`rol :`, `inicio :`, `fin :`, `tecnologías :`), route breadcrumbs, tech stack badges, and footer links.
- **Casing Rules:** Monospaced metadata and headings utilize lowercase formatting (e.g., `alfredo castañeda`, `frontend engineer`, `conéctate conmigo`) to reinforce the authentic command-line aesthetic.

## Layout & Spacing

The layout is built around a structured 12-column grid bound to a maximum content width of `1280px`, combined with full-width horizontal hairline delimiters to frame each section.

### Layout Model
- **Outer Margins:** Expansive margins (`3rem` desktop, `1.25rem` mobile) establish an unhurried, gallery-like perimeter.
- **Column Alignments:** Metadata key-value pairings utilize asymmetrical offsets (e.g., `rol :` and its value aligned across 2–4 column units) reflecting classic terminal data tables.
- **Section Dividers:** Discrete content chapters (Hero, Work Details, Stack, Contact) are separated by hairline borders with `space-2xl` to `space-3xl` vertical padding, ensuring distinct modular flow without heavy visual containers.

## Elevation & Depth

This design system avoids soft diffuse shadows, floating neomorphic cards, and colored dropshadows. Depth is strictly tectonic and architectural.

### Elevation Strategies
- **Low-Contrast Outlines:** Hairline 1px borders colored `#2C2C2C` define component envelopes, card perimeters, and split screens.
- **Tonal Layers:** Elevation is expressed by stepping the surface value from canvas (`#101010`) to container (`#181818`) to active layer (`#222222`).
- **Phosphor Accent Anchors:** Interactive status points use a subtle 4px blur glow (`rgba(255, 106, 43, 0.4)`) evocative of an LED indicator on legacy audio/computing gear.
- **CRT / Retro Layering:** Nostalgic skeuomorphic assets (diskettes, folders, CD-ROMs, and classic Macintosh consoles) sit directly on the dark canvas, utilizing authentic metallic reflection and subtle physical contact shadows rather than UI drop shadows.

## Shapes

The shape system is crisp, precise, and utilitarian. It prioritizes the industrial, geometric feel of vintage hardware enclosures and terminal windows.

### Geometry Standards
- **Base Geometry (`roundedness: 1`):** Surfaces, interactive chips, and code snippets use `4px` (`0.25rem`) corner radii, retaining structural firmness while avoiding raw, jagged sharp vertices.
- **Medium Panels (`rounded-lg`):** Interactive cards, modal drawers, and image viewports use `8px` (`0.5rem`).
- **Retro Artifacts:** Folder tabs and physical media maintain their natural die-cut silhouettes, contrasting sharply with the clean, orthogonal web layout.

## Components

### Navigation & Utility Bar
- **Structure:** Fixed or pinned top bar with a 1px border-bottom (`#2C2C2C`) and subtle background backdrop filter blur (`12px`) over `#101010/85`.
- **Elements:** Author identifier in lowercase Inter medium (`alfredo castañeda / frontend engineer`) paired on the right with monospaced uppercase/lowercase navigation items (`inicio`, `work`, `cv`, `contacto`).
- **Active State:** Marked with Signal Orange (`#FF6A2B`) text and an optional `3px` circular indicator dot.

### Metadata Key-Value Displays
- **Key Label:** Space Mono in `#8F8F8F`, formatted with trailing colon and space (`rol :`, `inicio :`, `tecnologías :`).
- **Value:** Space Mono or Inter in `#F2F2F0`, regular or medium weight.
- **Arrangement:** Horizontally staged across the column grid for project summaries and case study technical overviews.

### Buttons & Interactive Links
- **Ghost Terminal Button:** Monospaced label enclosed in a 1px `#2C2C2C` border with `4px` border-radius. On hover: border transitions to `#8F8F8F` with background shifting to `#181818`.
- **Inline Text Links:** Underlined with a 1px solid hairline (`#8F8F8F`) offset by `4px`. On hover, the link transitions to `#FF6A2B` with matching underline color.
- **Status Dot Links:** Lead with a `6px` colored dot (e.g., `#FF6A2B` for email/action, `#E2B340` for GitHub, `#3898EC` for LinkedIn) followed by the link label in Space Mono.

### Project Cards & Case Study Rows
- **Layout:** Minimalist horizontal or split grid rows divided by horizontal hairline lines. No bulky cards with heavy bevels.
- **Interactive State:** Hovering over a project title shifts the background to `#181818` with smooth `150ms` easing, gently revealing case study metrics and live demo indicators.

### Tech Stack Chips
- **Styling:** Monospaced lowercase text (`react`, `typescript`, `vite`, `tailwind`) wrapped in `#181818` background with a subtle `#2C2C2C` border, `4px` padding inline (`8px`), and `2px` vertical padding.

### Code & Terminal Blocks
- **Styling:** Inset `#141414` background, hairline border in `#2C2C2C`, with a faux terminal header containing window dots and monospaced file path indicator.