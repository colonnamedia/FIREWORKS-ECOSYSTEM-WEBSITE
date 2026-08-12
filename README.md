# FireWorks Eco — Project Brief
**By Colonna Media | Pittsburgh, PA**

---

## Overview
FireWorks Eco is the main hub website for Colonna Media's AI-powered business growth ecosystem. It connects four tools into one platform for local businesses — website building, marketing strategy, content/social campaigns, and SEO.

**Live URL:** https://fireworks-eco.com  
**Hosted on:** Vercel  
**Repo:** GitHub (browser-based workflow, no CLI)

---

## Tech Stack
| Layer | Technology |
|---|---|
| Frontend | Single-file HTML (vanilla JS, no framework) |
| Fonts | Space Grotesk (headings), Inter (body) via Google Fonts |
| Email | Resend (`noreply@fireworks-websitebuilder.com`) |
| Hosting | Vercel |
| Backend | Vercel Serverless Functions (Node.js) |
| Version Control | GitHub |

---

## File Structure
```
fireworks-eco/
├── index.html                  ← Full site (home + careers, JS routing)
├── website-builder-intake.html ← 5-step gamified intake form
├── vercel.json                 ← Vercel routing config
├── package.json                ← Resend dependency
└── api/
    └── contact.js              ← Email handler (careers + website builder)
```

---

## Pages
### Home Page
- **Hero** — Pittsburgh skyline photo background, fireworks canvas animation, network node animation, growth metrics (+47% leads, +63% content, +38% visibility, 3x faster launch)
- **Stats Bar** — 4 business growth stats
- **Your Business, Connected** — Animated SVG ecosystem map with data packets flowing between tools
- **The FireWorks Ecosystem** — 4 tool cards with live links and growth % indicators
- **How It Works** — 4-step process
- **Built For** — Industry grid (Fitness, Contractors, Restaurants, etc.)
- **Final CTA** — Dark section driving to ecosystem
- **Footer** — Links to all tools + Colonna Media

### Careers Page
- Hero with hiring message
- Open roles (Developers + Sales)
- Application form → emails to `colonnamedia@gmail.com` via Resend

---

## Ecosystem Tools
| Tool | URL | Status |
|---|---|---|
| Website Builder | https://fireworks-websitebuilder.com/Home | ✅ Live |
| Marketing Blueprint | https://www.fireworks-businessblueprint.com | ✅ Live |
| Campaign & Social Creator | https://www.fireworks-campaignbuilder.com | ✅ Live |
| SEO Engine | — | 🔜 Coming Soon |

---

## Email System
- **Provider:** Resend
- **API Key:** Stored in `api/contact.js`
- **From:** `noreply@fireworks-websitebuilder.com`
- **To:** `colonnamedia@gmail.com`
- **Handles two form types:**
  - `type: 'website-builder'` — intake form submissions
  - Default — careers applications

---

## Website Builder Intake Form (`website-builder-intake.html`)
5-step gamified form with XP progress bar:
1. **What are we building?** — Lead Gen Page / Full Website / Revamp / Not Sure
2. **Goals & Vibe** — 8 goal tiles (multi-select) + 4 vibe tiles
3. **About Your Business** — Name, business, email, phone, industry, **admin email**
4. **Pick Your Layout** — 8 visual mockup cards
5. **Any Details?** — Open notes field

On submit: sends full brief to `colonnamedia@gmail.com` via `/api/contact`

---

## Design System
| Variable | Value |
|---|---|
| Background | `#fafafa` |
| Foreground | `#1a1a2e` |
| Primary | `#e63946` (red) |
| Accent | `#f4722b` (orange) |
| Secondary | `#16213e` (dark navy) |
| Muted | `#f4f4f8` |
| Border | `#e8e8f0` |
| Heading Font | Space Grotesk 700 |
| Body Font | Inter 400/500 |

---

## Hero Animations
1. **Pittsburgh Skyline** — base64-embedded JPEG background
2. **Fireworks Engine** — Rocket + Particle classes, multi-color PALS palette, trails, bursts, glitter rings. Launches from bottom, bursts in top 35% of screen.
3. **Network Canvas** — 28 animated nodes with connecting lines
4. **Ecosystem Graphic** — Canvas-drawn orbiting nodes with animated data packets (desktop only)

---

## Deployment
1. Push changes to GitHub repo
2. Vercel auto-deploys on commit
3. Check Vercel dashboard for build status
4. Email logs available at resend.com → Logs

---

## Pending / Next Steps
- [ ] Fix hero gap on mobile (nav height offset)
- [ ] Add Pittsburgh fireworks image to repo root (or keep base64)
- [ ] Wire up SEO Engine when built
- [ ] Verify Resend domain `fireworks-websitebuilder.com` stays verified
- [ ] Consider moving Resend API key to Vercel environment variable
- [ ] Meta retargeting campaign for Punch Boxing (separate project)
- [ ] punchpgh.com Astro rebuild (separate project)

---

## Contacts
| Role | Name | Email |
|---|---|---|
| Owner | Anthony Colonna | colonnamedia@gmail.com |
| Referral Partner | Marty Dattilo | — |

---

*Last updated: August 2026 | Colonna Media*
