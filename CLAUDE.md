# SEO-Artikel Generator für anwaltskanzleizuerich.ch

## Projektstruktur (Astro)

```
src/
├── layouts/          # BaseLayout, PageLayout, ArticleLayout
├── components/       # Nav, Footer, Hero, ContactForm, CalloutBox, etc.
├── content/articles/ # SEO-Artikel als MDX
├── pages/            # index, impressum, datenschutz, [...slug]
├── styles/           # global.css (Tailwind)
└── data/             # practiceAreas.ts
```

## Quick Start

```bash
/seo-artikel [KEYWORD]
```

**Beispiel:**
```bash
/seo-artikel Anwalt für Arbeitsrecht
```

---

## Workflow

```
KEYWORD
   │
   ▼
┌──────────────────────────────────────────────────────────┐
│ PHASE 1: Competitor Analysis                             │
│ • Google-Suche aus SCHWEIZ (location: Switzerland)      │
│ • Top 10 URLs scrapen                                    │
│ • Wortanzahl zählen → Längster = unser Minimum!         │
│ • Design-Elemente notieren                               │
└────────────────────────┬─────────────────────────────────┘
                         │
                    ┌────┴────┐
                    ▼         ▼
┌───────────────────────┐ ┌───────────────────────────────┐
│ PHASE 2A: Scraping    │ │ PHASE 2B: Deep Research       │
│ • H1, H2, H3          │ │ • Statistiken                 │
│ • Entities            │ │ • Gesetzesänderungen          │
│ • Struktur            │ │ • Fakten die keiner hat       │
└───────────┬───────────┘ └───────────────┬───────────────┘
            └──────────────┬──────────────┘
                           ▼
┌──────────────────────────────────────────────────────────┐
│ PHASE 3: Content Creation                                │
│ • Wortanzahl ≥ längster Competitor                       │
│ • ABER: Kein Fluff! Mehr Infos, nicht mehr Füllwörter   │
│ • Gleicher Intent wie Top 10                             │
│ • Ähnliche Struktur wie Konkurrenz                       │
└────────────────────────┬─────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────┐
│ PHASE 4: SEO-Optimierung                                 │
│ • Title: Exact Keyword (max 60 Zeichen)                  │
│ • Description: Keyword + CTA (max 155 Zeichen)           │
│ • H1: Exact Keyword                                      │
│ • H2/H3: LSI-Keywords der Konkurrenz                     │
└────────────────────────┬─────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────┐
│ PHASE 5: Lesbarkeit                                      │
│ • Schweizer Hochdeutsch (ä, ö, ü)                        │
│ • Grammatik prüfen                                       │
└────────────────────────┬─────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────┐
│ PHASE 6: MDX + Speichern                                 │
│ • Output: src/content/articles/[keyword-slug].mdx        │
│ • Frontmatter mit SEO-Daten                              │
│ • CalloutBox Komponente für Info-Boxen                   │
│ • Markdown-Tabellen, Listen, Headings                    │
└────────────────────────┬─────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────┐
│ PHASE 7: POP-Optimierung (NEU!)                          │
│ • ngrok-URL vom User holen                               │
│ • pop_full_analysis durchführen                          │
│ • Score < 80%? → Empfehlungen umsetzen, repeat           │
│ • Score ≥ 80%? → ✅ Fertig!                              │
└──────────────────────────────────────────────────────────┘
```

---

## Wichtige Regeln

| Regel | Beschreibung |
|-------|--------------|
| **Wortanzahl** | ≥ längster Competitor (aber informationsdichter!) |
| **Kein Fluff** | Jeder Satz muss Mehrwert bieten |
| **Keine Wiederholungen** | Crawl-Budget nicht verschwenden |
| **Schweizer Suche** | location: Switzerland |
| **Schweizer Recht** | ZGB, ZPO - nicht deutsches Recht! |
| **Umlaute** | ä, ö, ü (NICHT ae, oe, ue) |
| **ss statt ß** | Schweizer Schreibweise |
| **Intent Match** | Service Page → Service Page |
| **POP-Score** | Mindestens 80% erreichen |

---

## Output-Format: MDX

```
src/content/articles/[keyword-slug].mdx
```

**Beispiel:**
```
src/content/articles/anwalt-fuer-familienrecht.mdx
src/content/articles/anwalt-fuer-arbeitsrecht.mdx
```

---

## Setup für POP-Optimierung

Vor Phase 7:

```bash
# Terminal 1: Dev Server
npm run dev

# Terminal 2: ngrok Tunnel
ngrok http 4321
```

Die ngrok-URL (z.B. `https://abc123.ngrok-free.app`) wird für die POP-Analyse benötigt.

---

## Nach Abschluss zeigt Claude:

```
✅ ARTIKEL ERSTELLT

📁 Datei: src/content/articles/[name].mdx

📊 STATISTIKEN:
   Wortanzahl:     [UNSERE] Wörter
   Längster Comp:  [THEIR] Wörter
   Differenz:      +[X] Wörter

🎯 SEO-ELEMENTE:
   Title / Description / H1

📈 POP-SCORE:
   Final Score:    [X]% ✅
   Durchläufe:     [X] Optimierungen

📝 STRUKTUR:
   H2/H3 Übersicht

🔑 TOP ENTITIES:
   Eingebaute Fachbegriffe

✨ VORTEILE VS. KONKURRENZ:
   Was macht unseren Artikel besser
```
