# MOTION.md — tech-social (LOREM.SCENE)

**MOTION_INTENSITY:** `6` (James 2026-09-11 baseline ~6 for intentional demo motion)

## What moves
- Hero `TypewriterText` character reveal + block cursor pulse
- CRT scanline overlay (`body::before`)
- Hover glow / `transition-smooth` on cards and nav
- Sheet menu open/close

## Reduced motion
When `prefers-reduced-motion: reduce`:
- Typewriter renders full strings immediately (no delays/cursor pulse)
- CSS kills pulse/blink animations and short-circuits transitions
- Scanline overlay stays static/low opacity

## Bundle
All motion is app/CSS under CSP `script-src 'self'` — no CDN animation libs.
