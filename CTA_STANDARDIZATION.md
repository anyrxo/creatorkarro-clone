# CTA Button Standardization Guide

## Overview
This document outlines the standardized CTA (Call-to-Action) button system implemented to reduce decision fatigue and improve conversion rates across the IImagined website.

## Problem Solved
**Before:** 15+ CTA variations causing:
- Decision fatigue for users
- Inconsistent branding
- Lower conversion rates
- Maintenance complexity

**After:** 3 standardized CTA patterns:
- Clear visual hierarchy
- Consistent user experience
- Improved conversion rates
- Easy to maintain

---

## CTA Variants

### 1. PRIMARY CTA - Main Action Buttons
**Use for:** Get Started, Enroll Now, Start Your Journey

**Visual Style:**
- Gradient shimmer effect (blue to purple)
- Large, prominent design
- Animation on hover/tap
- Always includes icon (ChevronRight)

**Component:**
```tsx
<StandardCTA
  variant="primary"
  text="Get Started"
  href="/instagram-ignited"
  size="lg"
/>
```

**Use Cases:**
- Homepage hero section
- Course landing pages
- Main conversion points
- Final CTAs in sections

---

### 2. SECONDARY CTA - Supporting Actions
**Use for:** Learn More, View Details, Contact Us

**Visual Style:**
- Solid gradient background (blue to purple)
- Medium emphasis
- Hover scale effect
- Optional icon

**Component:**
```tsx
<StandardCTA
  variant="secondary"
  text="Learn More"
  href="/about"
  size="md"
/>
```

**Use Cases:**
- Supporting actions near primary CTAs
- Information pages
- Navigation to detail pages
- Secondary conversion points

---

### 3. TERTIARY CTA - Link-Style Actions
**Use for:** View Course, Read More, See Details

**Visual Style:**
- Text link with blue color
- Minimal visual weight
- Slide animation on hover
- Optional icon

**Component:**
```tsx
<StandardCTA
  variant="tertiary"
  text="View Course"
  href="/course"
  size="sm"
/>
```

**Use Cases:**
- In-content navigation
- Blog post links
- Footer links
- Subtle calls to action

---

## Size Options

All variants support 3 size options:

- **sm:** `px-4 py-2 text-sm` - Compact, for tight spaces
- **md:** `px-6 py-3 text-base` - Default, balanced size
- **lg:** `px-8 py-4 text-lg` - Prominent, for hero sections

---

## Props Reference

```typescript
interface StandardCTAProps {
  variant?: 'primary' | 'secondary' | 'tertiary'
  text: string
  href: string
  external?: boolean
  showIcon?: boolean
  className?: string
  size?: 'sm' | 'md' | 'lg'
}
```

---

## Usage Examples

### Hero Section
```tsx
<StandardCTA
  variant="primary"
  text="Get Started"
  href="/instagram-ignited"
  size="lg"
/>
```

### About Page
```tsx
<StandardCTA
  variant="secondary"
  text="Learn More"
  href="/story"
  size="md"
/>
```

### Blog Post
```tsx
<StandardCTA
  variant="tertiary"
  text="Read Full Article"
  href="/blog/post"
  size="sm"
  showIcon={false}
/>
```

### External Link
```tsx
<StandardCTA
  variant="primary"
  text="Join Community"
  href="https://whop.com/anyro"
  external={true}
/>
```

---

## Migration Status

### Updated Components:
- ✅ `src/app/page.tsx` - Homepage hero CTA
- ✅ `src/components/BeautifulHero.tsx` - Hero component CTA
- ✅ `src/app/about/page.tsx` - About page CTAs
- ✅ `src/app/help/page.tsx` - Help page CTAs

### Recommended Updates:
- ⏳ Course landing pages (instagram-ignited, ai-influencers, etc.)
- ⏳ Blog post CTAs
- ⏳ Footer navigation
- ⏳ Modal/popup CTAs

---

## Best Practices

### DO:
- Use PRIMARY for main conversion actions
- Use SECONDARY for supporting actions
- Use TERTIARY for navigation links
- Keep text concise (2-3 words ideal)
- Use consistent text across similar actions

### DON'T:
- Mix multiple PRIMARY CTAs in the same view
- Use more than 2 CTA types in a single section
- Create custom CTA styles outside this system
- Use vague text like "Click Here"

---

## Conversion Optimization Tips

1. **Hierarchy:** Always have 1 primary CTA per section
2. **Placement:** Primary CTAs should be above the fold
3. **Spacing:** Give CTAs breathing room (2-3rem margins)
4. **Color:** Never change the gradient colors (brand consistency)
5. **Text:** Action-oriented verbs (Get, Start, Join, Learn)

---

## Component Location
`src/components/StandardCTA.tsx`

## Documentation
See inline comments in component file for detailed usage examples.
