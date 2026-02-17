# SEO-Artikel Generator (Astro/MDX)

Erstelle einen SEO-optimierten Artikel für das Keyword: **$ARGUMENTS**

## Workflow

Führe die folgenden Schritte SEQUENTIELL aus. Jeder Schritt baut auf dem vorherigen auf.

---

### PHASE 1: Competitor Analysis (Agent 1)

1. Suche mit `firecrawl_search` nach dem Keyword "$ARGUMENTS":
   - **location: "Switzerland"** (WICHTIG: Suche aus Schweizer Perspektive!)
   - limit: 10
   - Sprache: Deutsch

2. Scrape die Top 5-7 relevantesten Ergebnisse mit `firecrawl_scrape` (nur markdown Format)

3. Extrahiere und dokumentiere für JEDEN Competitor:
   - **URL**
   - **Page Type** (Service Page, Blog, Ratgeber, Lexikon etc.)
   - **H1**
   - **Alle H2/H3 Subheadings** (exakte Formulierungen notieren!)
   - **Wichtige Entities/Terms** (Fachbegriffe, die häufig vorkommen)
   - **Content-Struktur** (wie ist die Seite aufgebaut? Welche Sektionen?)
   - **Design-Elemente** (Tabellen, Listen, Boxen, CTAs, Icons etc.)
   - **EXAKTE Wortanzahl** (zählen!)

4. Bestimme die **MAXIMALE Wortanzahl** der Top 10 → Das ist unser Mindestziel

**Output Phase 1:**
- Strukturierte Analyse aller Competitors
- Höchste Wortanzahl: [ZAHL] Wörter → Unser Minimum!
- Dominanter Page-Type
- Typische Design-Elemente

---

### PHASE 2: Deep Research (Agent 2)

1. Führe zusätzliche Recherche durch mit `WebSearch` zu:
   - Rechtliche Grundlagen zum Thema (Schweizer Recht)
   - Aktuelle Entwicklungen/Urteile
   - Häufige Fragen (FAQ-Potenzial)
   - Statistiken oder Fakten
2. Identifiziere Informationslücken bei den Competitors
3. Sammle zusätzliche wertvolle Informationen, die KEIN Competitor hat

**Output Phase 2:** Zusätzliche Research-Erkenntnisse (diese machen uns informationsdichter!)

---

### PHASE 3: Content Creation (Agent 3)

Basierend auf Phase 1 + 2, erstelle einen neuen Artikel mit folgenden Regeln:

**WORTANZAHL (KRITISCH!):**
- Minimum: Höchste Wortanzahl der Top 10 Competitors (aus Phase 1)
- ABER: Kein Fluff! Jedes Wort muss Mehrwert bieten
- Mehr Wörter durch MEHR INFORMATIONEN, nicht durch Aufblähen
- Nutze die Deep Research Erkenntnisse (Phase 2) um mehr Substanz zu liefern

**INTENT MATCHING:**
- Analysiere den dominanten Page-Type der Top 10 (aus Phase 1)
- Erstelle den GLEICHEN Typ (Service Page = Service Page, Blog = Blog)

**STRUKTUR WIE KONKURRENZ:**
- Übernimm die typische Sektions-Struktur der Top 10
- Ähnliche H2/H3-Aufteilung
- Gleiche Design-Elemente (Tabellen, Listen, Boxen etc.)

**CONTENT-QUALITÄT:**
- Informationsdichter als ALLE Competitors (mehr Fakten pro Absatz)
- KEIN FLUFF - jeder Satz muss Mehrwert bieten
- KEINE Wiederholungen
- Schweizer Rechtsperspektive (nicht deutsches Recht!)

**Output Phase 3:** Vollständiger Artikel-Entwurf (mind. [X] Wörter)

---

### PHASE 4: SEO-Optimierung (Agent 4)

Optimiere den Artikel aus Phase 3:

**META-DATEN:**
- `title`: Exact Match Keyword "$ARGUMENTS" enthalten, max. 60 Zeichen
- `description`: Keyword enthalten (wenn grammatikalisch sinnvoll), max. 155 Zeichen, Call-to-Action

**HEADING-OPTIMIERUNG:**
- H1: Exact Match Keyword "$ARGUMENTS"
- H2/H3: LSI Keywords basierend auf Competitor-Subheadings (Phase 1)

**CONTENT-OPTIMIERUNG:**
- Alle wichtigen Entities der Top 10 Competitors einbauen
- Keyword-Dichte natürlich halten (nicht keyword-stuffing)
- Semantisch verwandte Begriffe verwenden

**Output Phase 4:** SEO-optimierter Artikel

---

### PHASE 5: Lesbarkeit & Finalisierung (Agent 5)

Überprüfe und verbessere die Lesbarkeit OHNE SEO-Optimierungen zu ändern:

- Satzlänge variieren
- Fachbegriffe bei Erstverwendung kurz erklären
- Aktive Sprache bevorzugen
- Klare Übergänge zwischen Abschnitten
- Rechtschreibung und Grammatik prüfen
- **Schweizer Hochdeutsch:** ä, ö, ü (NICHT ae, oe, ue!) und ss (nicht ß)

---

### PHASE 6: MDX-Generierung & Speicherung

**Output-Format: MDX mit Frontmatter + Astro-Komponenten**

Erstelle die Datei: `src/content/articles/[keyword-slug].mdx`

**Frontmatter-Template:**
```yaml
---
title: "[SEO-OPTIMIERTER TITEL - max 60 Zeichen]"
h1: "[H1 mit Exact Match Keyword]"
description: "[SEO-DESCRIPTION - max 155 Zeichen]"
keywords: "[Keyword1, Keyword2, ...]"
canonical: "https://anwaltskanzleizuerich.ch/[keyword-slug]"
heroImage: "[Unsplash URL passend zum Thema]"
heroSubtitle: "[Kurzer Untertitel für Hero-Section]"
breadcrumbLabel: "[Label für Breadcrumb]"
schema:
  "@type": "LegalService"
  name: "Anwaltskanzlei Zürich - [Rechtsgebiet]"
  description: "[Schema Description]"
  areaServed:
    "@type": "City"
    name: "Zürich"
  priceRange: "CHF 300-500/Stunde"
---
```

**Nach dem Frontmatter:**
```mdx
import CalloutBox from '../../components/CalloutBox.astro';

## Heading 2

Content...

<CalloutBox type="info" title="Wichtig">
Info-Box Inhalt
</CalloutBox>

### Heading 3

| Spalte 1 | Spalte 2 |
|----------|----------|
| Daten    | Daten    |
```

**Verfügbare CalloutBox-Typen:**
- `info` (blau) - Allgemeine Informationen
- `warning` (rot) - Warnungen, häufige Fehler
- `success` (grün) - Tipps, positive Hinweise
- `gold` (gold) - Kanzlei-spezifische Hinweise

**MDX-Regeln:**
- Headings als Markdown (## und ###)
- Tabellen als Markdown-Tabellen
- Listen als Markdown-Listen
- **Fett** und *kursiv* als Markdown
- Info-Boxen als `<CalloutBox>` Komponente
- KEIN rohes HTML verwenden

---

### PHASE 7: POP-Optimierung (Score ≥ 80%)

**ZIEL:** Der Artikel muss einen POP-Score von mindestens 80% erreichen.

**VORBEREITUNG (einmalig pro Session):**
Der User muss in separaten Terminals folgendes starten:

```bash
# Terminal 1: Astro Dev Server
npm run dev

# Terminal 2: ngrok Tunnel
ngrok http 4321
# → Gibt URL aus wie: https://abc123.ngrok-free.app
```

**OPTIMIERUNGS-LOOP:**

1. **Frage den User nach der ngrok-URL**

2. **Führe POP-Analyse durch:**
   ```
   pop_full_analysis(
     keyword: "$ARGUMENTS",
     targetUrl: "[NGROK-URL]/[keyword-slug]",
     locationName: "Switzerland",
     targetLanguage: "german"
   )
   ```

3. **Prüfe den Score:**
   - Score ≥ 80% → Fertig
   - Score < 80% → Weiter zu Schritt 4

4. **Empfehlungen umsetzen:**
   - Analysiere die POP-Recommendations
   - Passe den MDX-Content entsprechend an
   - Speichere die aktualisierte MDX-Datei

5. **Erneut prüfen** (max 3 Durchläufe)

---

## Wichtige Regeln

1. **Sprache:** Schweizer Hochdeutsch (ä, ö, ü - NICHT ae, oe, ue!)
2. **Rechtsperspektive:** Schweizer Recht, nicht deutsches Recht
3. **Wortanzahl:** Mindestens so viel wie längster Competitor
4. **Qualität:** Informationsdichter = mehr Fakten, nicht mehr Füllwörter
5. **Intent Match:** Der Artikel-Typ MUSS zum Search Intent passen
6. **Location:** Google-Suche immer aus Schweizer Perspektive
7. **Brand:** Die Seite ist für eine Anwaltskanzlei in Zürich
8. **Format:** MDX mit Frontmatter, NICHT HTML

---

## Nach Abschluss

Zeige eine Zusammenfassung:

```
✅ ARTIKEL ERSTELLT

📁 Datei: src/content/articles/[name].mdx

📊 STATISTIKEN:
   Wortanzahl:     [UNSERE] Wörter
   Längster Comp:  [THEIR] Wörter
   Differenz:      +[X] Wörter

🎯 SEO-ELEMENTE:
   Title:          [...]
   Description:    [...]
   H1:             [...]

📈 POP-SCORE:
   Final Score:    [X]% ✅
   Durchläufe:     [X] Optimierungen
   Top-Änderungen: [Was wurde angepasst]

📝 STRUKTUR:
   [Liste aller H2/H3]

🔑 TOP ENTITIES:
   [Liste der wichtigsten eingebauten Fachbegriffe]

✨ VORTEILE VS. KONKURRENZ:
   • Mehr Wörter aber informationsdichter
   • Zusätzliche Fakten: [...]
   • Bessere Struktur: [...]
   • POP-optimiert: [X]%
```
