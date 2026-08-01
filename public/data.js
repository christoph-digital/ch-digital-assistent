// Mina – zentrale Datenstruktur (Inhalte).
// Alles Inhaltliche steht hier; index.html rendert daraus und enthaelt nur Shell + CSS.
//
// Karte: id, section, icon, accent, title, subtitle, description, tags[], links[],
//        status ('live'|'beta'|'experiment'|'retired'), effort ('klein'|'mittel'|'gross'),
//        difficulty (1-3), setupTime, timeSaved, updated ('MM/YYYY'), tools[]
// Verweis-Karte (Dedupe): { id, section, ref: '<ziel-karten-id>' }
// Sektion: id, level, parent, icon, accent, title, subtitle, lead, legend, type ('table'), muted
// Texte immer als { de, en }.

const SITE = {
  "ui": {
    "de": {
      "heroTitle": "CH Digitale Assistenz",
      "heroDesc": "Meine digitale Assistenz – alle Tools, Shortcuts, KI-Modelle, Workflows und Automationen auf einen Blick.",
      "heroDesc2": "Hier findest du alle Bausteine meiner digitalen Assistenz Mina – von Tools über Shortcuts bis zu Automationen. Die Workflows, Prompts und Vorlagen dahinter gebe ich auf Anfrage gerne direkt weiter.",
      "whyTitle": "🎯 Warum dieses Dashboard?",
      "whyGoalLabel": "Das Ziel:",
      "whyGoal": "Ich bin überzeugt, dass eine Assistenz heute mit digitalen Tools abbildbar ist. Dieses Dashboard bereitet meine Learnings so auf, dass jeder sie schnell übernehmen, anwenden und für sich weiterdenken kann.",
      "whyForLabel": "Für wen:",
      "whyFor": "Für alle, die Lust auf smarteres Arbeiten haben. Kein technisches Vorwissen nötig. Bei Rückfragen gerne jederzeit direkt bei mir melden – ich gebe die Workflows und Vorlagen gerne weiter.",
      "whyApproachLabel": "Der Ansatz:",
      "whyApproach": "Im Mittelpunkt steht das Verständnis für einen modernen Workplace – Arbeitsweise, Tools und möglichst viel Automatisierung. KI und Tools clever kombinieren statt einzeln nutzen.",
      "whyStartLabel": "Auf geht's:",
      "whyStart": "Einfach anfangen, experimentieren, iterieren. KI kann so viel, ist aber kein Ersatz fürs Denken, sondern hier u.a. eine Erweiterung der eigenen Produktivität.",
      "governanceTitle": "Governance immer einhalten",
      "governanceText": "Bei allen Tools, KI-Modellen und Workflows gilt: geltende Governance-, Compliance- und Datenschutzvorgaben immer einhalten. Besonders bei unternehmens- und personenbezogenen Daten – nur freigegebene Tools nutzen, sensible Inhalte bewusst behandeln.",
      "paceTitle": "Alles entwickelt sich extrem schnell – sprecht mich direkt an",
      "paceText": "Diese Übersicht ist eine Momentaufnahme: Tools, Modelle und Workflows ändern sich hier fast wöchentlich – manches ist schon nach kurzer Zeit überholt oder längst besser gelöst. Deshalb bei Interesse oder Rückfragen am besten direkt bei mir melden. Dann gebe ich den aktuellen Stand, die passenden Workflows, Prompts und Vorlagen direkt raus – schneller und aktueller, als diese Seite es abbilden kann.",
      "disclaimerTitle": "DISCLAIMER – Persönliche Arbeitsumgebung",
      "disclaimerText": "Dies ist mein persönliches digitales Arbeitssetup. Die Entwicklung im Bereich Künstliche Intelligenz ist extrem dynamisch – Tools, Funktionen und Best Practices ändern sich teils wöchentlich, einzelne Inhalte hier sind daher schnell überholt. Für den aktuellen Stand am besten direkt bei mir melden. Teile dieser Übersicht wurden mit Unterstützung von KI erstellt. Sie spiegelt meine individuellen Erfahrungen und Präferenzen wider und erhebt keinen Anspruch auf Allgemeingültigkeit.",
      "footer": "Christoph Haß · Possehl Digital · Stand: August 2026",
      "moreLabel": "Weitere …",
      "searchPlaceholder": "Nach Schlagwort suchen …",
      "filterEffort": "Aufwand",
      "filterCategory": "Kategorie",
      "filterTool": "Tool",
      "effortKlein": "Klein",
      "effortMittel": "Mittel",
      "effortGross": "Groß",
      "allCategories": "Alle Kategorien",
      "reset": "Filter zurücksetzen",
      "resultsOne": "Treffer",
      "resultsMany": "Treffer",
      "resultsNone": "Keine Treffer – Filter zurücksetzen?",
      "statusLive": "Live",
      "statusBeta": "Beta",
      "statusExperiment": "Experiment",
      "statusRetired": "Eingestellt",
      "metaSetup": "Setup",
      "metaDifficulty": "Schwierigkeit",
      "metaSaved": "Spart ca.",
      "updatedPrefix": "Stand",
      "copyLink": "Link zu dieser Karte kopieren",
      "copied": "Link kopiert",
      "refPrefix": "Details bei",
      "refJump": "→ Zur Karte",
      "toolClaude": "Claude",
      "toolOpenai": "OpenAI",
      "toolN8n": "n8n",
      "toolApple": "Apple",
      "toolMs365": "MS 365",
      "toolOther": "Sonstige",
      "costRequired": "Pflicht",
      "costOptional": "Optional",
      "costTbd": "TBD",
      "filterToggle": "Filter",
      "searchHint": "Suche über Schlagwörter und Titel"
    },
    "en": {
      "heroTitle": "CH Digital Assistant",
      "heroDesc": "My digital assistant setup – all tools, shortcuts, AI models, workflows and automations at a glance.",
      "heroDesc2": "Here you will find all the building blocks of my digital assistant Mina – from tools to shortcuts to automations. I am happy to share the workflows, prompts and templates behind them on request.",
      "whyTitle": "🎯 Why This Dashboard?",
      "whyGoalLabel": "The Goal:",
      "whyGoal": "I'm convinced that an assistant can be built with digital tools today. This dashboard presents my learnings in a way that anyone can quickly adopt, apply, and build upon.",
      "whyForLabel": "For Whom:",
      "whyFor": "For anyone who wants to work smarter. No technical knowledge required. Feel free to reach out to me directly with any questions – I'm happy to share the workflows and templates.",
      "whyApproachLabel": "The Approach:",
      "whyApproach": "The focus is on understanding a modern workplace – work methods, tools, and as much automation as possible. Combining AI and tools cleverly instead of using them separately.",
      "whyStartLabel": "Let's Go:",
      "whyStart": "Just start, experiment, iterate. AI can do so much, but it's not a replacement for thinking – it's an extension of your own productivity.",
      "governanceTitle": "Always follow governance",
      "governanceText": "For all tools, AI models and workflows: always comply with applicable governance, compliance and data protection rules. Especially with company and personal data – only use approved tools and handle sensitive content deliberately.",
      "paceTitle": "Things move extremely fast – just reach out to me directly",
      "paceText": "This overview is a snapshot: tools, models and workflows change almost weekly here – some of it is outdated or already solved better after a short time. So if you're interested or have questions, best to contact me directly. I'll share the current state, the matching workflows, prompts and templates right away – faster and more up to date than this page can be.",
      "disclaimerTitle": "DISCLAIMER – Personal Work Environment",
      "disclaimerText": "This is my personal digital work setup. The field of artificial intelligence is evolving extremely fast – tools, features and best practices sometimes change weekly, so individual items here become outdated quickly. For the current state, best to contact me directly. Parts of this overview were created with AI support. It reflects my individual experiences and preferences and does not claim universal validity.",
      "footer": "Christoph Haß · Possehl Digital · As of August 2026",
      "moreLabel": "More …",
      "searchPlaceholder": "Search by keyword …",
      "filterEffort": "Effort",
      "filterCategory": "Category",
      "filterTool": "Tool",
      "effortKlein": "Small",
      "effortMittel": "Medium",
      "effortGross": "Large",
      "allCategories": "All categories",
      "reset": "Reset filters",
      "resultsOne": "match",
      "resultsMany": "matches",
      "resultsNone": "No matches – reset the filters?",
      "statusLive": "Live",
      "statusBeta": "Beta",
      "statusExperiment": "Experiment",
      "statusRetired": "Retired",
      "metaSetup": "Setup",
      "metaDifficulty": "Difficulty",
      "metaSaved": "Saves approx.",
      "updatedPrefix": "As of",
      "copyLink": "Copy link to this card",
      "copied": "Link copied",
      "refPrefix": "Details in",
      "refJump": "→ Go to card",
      "toolClaude": "Claude",
      "toolOpenai": "OpenAI",
      "toolN8n": "n8n",
      "toolApple": "Apple",
      "toolMs365": "MS 365",
      "toolOther": "Other",
      "costRequired": "Required",
      "costOptional": "Optional",
      "costTbd": "TBD",
      "filterToggle": "Filters",
      "searchHint": "Searches keywords and titles"
    }
  },
  "sections": [
    {
      "id": "workplace",
      "level": 1,
      "icon": "🖥️",
      "accent": "marine",
      "title": {
        "de": "Workplace Design",
        "en": "Workplace Design"
      },
      "subtitle": {
        "de": "Apple-Ökosystem · Browser-First · Arbeitsumgebung",
        "en": "Apple Ecosystem · Browser-First · Work Environment"
      },
      "legend": {
        "de": "Workplace",
        "en": "Workplace"
      }
    },
    {
      "id": "ms365",
      "level": 2,
      "icon": "📧",
      "accent": "marine",
      "title": {
        "de": "MS 365",
        "en": "MS 365"
      },
      "subtitle": {
        "de": "Outlook · Teams · Claude Add-in · Apple Tasks",
        "en": "Outlook · Teams · Claude Add-in · Apple Tasks"
      },
      "parent": "workplace",
      "marginTop": 20,
      "legend": {
        "de": "MS 365",
        "en": "MS 365"
      }
    },
    {
      "id": "ki",
      "level": 1,
      "icon": "🧠",
      "accent": "sky",
      "title": {
        "de": "KI Tools",
        "en": "AI Tools"
      },
      "subtitle": {
        "de": "Individualisiert & spezialisiert · Modell × Aufgabe × Kontext",
        "en": "Personalized & specialized · Model × Task × Context"
      },
      "legend": {
        "de": "KI Tools",
        "en": "AI Tools"
      }
    },
    {
      "id": "individual",
      "level": 1,
      "icon": "🧩",
      "accent": "sky",
      "title": {
        "de": "Individualisierung: Skills, Projects & Prompts",
        "en": "Personalization: Skills, Projects & Prompts"
      },
      "subtitle": {
        "de": "Kontext statt Modellwechsel",
        "en": "Context beats switching models"
      },
      "legend": {
        "de": "Individualisierung",
        "en": "Personalization"
      },
      "lead": {
        "de": "Nicht das Modell macht den Unterschied, sondern der Kontext, den du ihm gibst.",
        "en": "It is not the model that makes the difference, but the context you give it."
      }
    },
    {
      "id": "coding",
      "level": 1,
      "icon": "🚀",
      "accent": "red",
      "title": {
        "de": "Coding & Apps",
        "en": "Coding & Apps"
      },
      "subtitle": {
        "de": "Claude Code · MCP · Terminal · GitHub · Railway",
        "en": "Claude Code · MCP · Terminal · GitHub · Railway"
      },
      "legend": {
        "de": "Coding",
        "en": "Coding"
      }
    },
    {
      "id": "generatoren",
      "level": 1,
      "icon": "🏗️",
      "accent": "red",
      "title": {
        "de": "Deterministische Generatoren",
        "en": "Deterministic Generators"
      },
      "subtitle": {
        "de": "Script statt Freihand · reproduzierbarer Output",
        "en": "Script instead of freehand · reproducible output"
      },
      "legend": {
        "de": "Generatoren",
        "en": "Generators"
      },
      "lead": {
        "de": "KI-Output ist von Natur aus variabel. Für alles mit Corporate Design oder Compliance braucht es ein Script statt Freihand: gleiches Script + gleiche Vorlage = immer identisches Ergebnis.",
        "en": "AI output is variable by nature. Anything involving corporate design or compliance needs a script instead of freehand work: same script + same template = identical result every time."
      }
    },
    {
      "id": "visuals",
      "level": 1,
      "icon": "🎨",
      "accent": "sky",
      "title": {
        "de": "Visuals & Content",
        "en": "Visuals & Content"
      },
      "subtitle": {
        "de": "Canva MCP · Gemini · Bildstandards",
        "en": "Canva MCP · Gemini · image standards"
      },
      "legend": {
        "de": "Visuals",
        "en": "Visuals"
      }
    },
    {
      "id": "selbstgebaut",
      "level": 1,
      "icon": "🛠️",
      "accent": "red",
      "title": {
        "de": "Selbst gebaut mit Claude Code",
        "en": "Built myself with Claude Code"
      },
      "subtitle": {
        "de": "Bauzeit & Schwierigkeit je Projekt",
        "en": "Build time & difficulty per project"
      },
      "legend": {
        "de": "Selbst gebaut",
        "en": "Built myself"
      },
      "lead": {
        "de": "Alles hier ist ohne klassische Coding-Ausbildung entstanden – beschreiben, testen, iterieren.",
        "en": "Everything here was built without a classic coding background – describe, test, iterate."
      }
    },
    {
      "id": "shortcuts",
      "level": 1,
      "icon": "⚡",
      "accent": "sky",
      "title": {
        "de": "Shortcuts – Smart Automation",
        "en": "Shortcuts – Smart Automation"
      },
      "subtitle": {
        "de": "MacBook · iPhone · iPad · Apple Watch",
        "en": "MacBook · iPhone · iPad · Apple Watch"
      },
      "wrap": true,
      "legend": {
        "de": "Shortcuts",
        "en": "Shortcuts"
      },
      "note": {
        "de": "Läuft geräteübergreifend auf allen Apple-Geräten. Einmal einrichten, überall nutzen – richtig gut zum produktiven Arbeiten.",
        "en": "Works across all Apple devices. Set up once, use everywhere – great for productive work."
      }
    },
    {
      "id": "automation",
      "level": 1,
      "icon": "🔄",
      "accent": "red",
      "title": {
        "de": "Automation Plattform",
        "en": "Automation Platform"
      },
      "subtitle": {
        "de": "n8n · Agents · API-Integrationen",
        "en": "n8n · Agents · API Integrations"
      },
      "wrap": true,
      "legend": {
        "de": "Automation",
        "en": "Automation"
      }
    },
    {
      "id": "email",
      "level": 2,
      "icon": "📧",
      "accent": "red",
      "title": {
        "de": "E-Mail, Kalender & Meetings",
        "en": "Email, Calendar & Meetings"
      },
      "subtitle": {
        "de": "Task Tracking · Meeting Protokolle · Mail-Management mit KI",
        "en": "Task Tracking · Meeting Minutes · AI Mail Management"
      },
      "parent": "automation",
      "marginTop": 24,
      "legend": {
        "de": "E-Mail & Kalender",
        "en": "Email & Calendar"
      }
    },
    {
      "id": "research",
      "level": 2,
      "icon": "🔬",
      "accent": "red",
      "title": {
        "de": "Research & Meeting-Vorbereitung",
        "en": "Research & Meeting Prep"
      },
      "subtitle": {
        "de": "Automatische Recherche für das ganze Team",
        "en": "Automatic research for the entire team"
      },
      "parent": "automation",
      "marginTop": 24,
      "legend": {
        "de": "Research",
        "en": "Research"
      }
    },
    {
      "id": "newsBriefing",
      "level": 2,
      "icon": "📰",
      "accent": "sky",
      "title": {
        "de": "News & Briefing",
        "en": "News & Briefing"
      },
      "subtitle": {
        "de": "Automatische Digest-Briefings per KI – wöchentlich per Mail",
        "en": "Automated AI digest briefings – delivered weekly by email"
      },
      "parent": "automation",
      "marginTop": 24,
      "legend": {
        "de": "News & Briefing",
        "en": "News & Briefing"
      }
    },
    {
      "id": "privatDigest",
      "level": 2,
      "icon": "📬",
      "accent": "sky",
      "title": {
        "de": "Daily Digest für den privaten E-Mail-Account",
        "en": "Daily digest for my private email account"
      },
      "subtitle": {
        "de": "Gmail → Claude Haiku → ein Digest pro Quelle · täglich 18:30",
        "en": "Gmail → Claude Haiku → one digest per source · daily at 18:30"
      },
      "parent": "automation",
      "marginTop": 24,
      "legend": {
        "de": "Daily Digest privat",
        "en": "Daily digest private"
      }
    },
    {
      "id": "weiteres",
      "level": 2,
      "icon": "📦",
      "accent": "marine",
      "title": {
        "de": "Weiteres",
        "en": "Miscellaneous"
      },
      "subtitle": {
        "de": "Rechnungs-Scanner · Kontakte-Sync · Buchhaltung · Wartung",
        "en": "Invoice Scanner · Contact Sync · Accounting · Maintenance"
      },
      "parent": "automation",
      "marginTop": 24,
      "legend": {
        "de": "Weiteres",
        "en": "Misc"
      }
    }
  ],
  "cards": [
    {
      "id": "schreibtische",
      "section": "workplace",
      "icon": "💻",
      "accent": "marine",
      "title": {
        "de": "Mehrere Schreibtische",
        "en": "Multiple Desktops"
      },
      "subtitle": {
        "de": "macOS Spaces",
        "en": "macOS Spaces"
      },
      "description": {
        "de": "Virtuelle Desktops für Kommunikation, Fokus, Recherche, Meetings. Schnelles Wechseln ohne Fenstersuche.",
        "en": "Virtual desktops for communication, focus, research, meetings. Quick switching without searching for windows."
      },
      "tags": [
        {
          "accent": "marine",
          "label": "Split-Screen"
        },
        {
          "accent": "marine",
          "label": "Mission Control"
        }
      ],
      "links": [],
      "more": true,
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "apple"
      ]
    },
    {
      "id": "apple",
      "section": "workplace",
      "icon": "📱",
      "accent": "marine",
      "title": {
        "de": "Apple Ökosystem",
        "en": "Apple Ecosystem"
      },
      "subtitle": {
        "de": "MacBook · iPhone · iPad · Watch",
        "en": "MacBook · iPhone · iPad · Watch"
      },
      "description": {
        "de": "Handoff, geteilte Zwischenablage, geräteübergreifendes Diktieren. Nahtlos zwischen allen Geräten.",
        "en": "Handoff, shared clipboard, cross-device dictation. Seamless across all devices."
      },
      "tags": [
        {
          "accent": "marine",
          "label": "Handoff"
        },
        {
          "accent": "marine",
          "label": "Clipboard"
        },
        {
          "accent": "marine",
          "label": "Siri"
        }
      ],
      "links": [],
      "more": true,
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "apple"
      ]
    },
    {
      "id": "browser",
      "section": "workplace",
      "icon": "🌐",
      "accent": "sky",
      "title": {
        "de": "Browser-First",
        "en": "Browser-First"
      },
      "subtitle": {
        "de": "MS 365 · ChatGPT · Claude",
        "en": "MS 365 · ChatGPT · Claude"
      },
      "description": {
        "de": "Outlook, Teams, ChatGPT im Browser – stabiler, mehr Features, ideal für Split-Screen mit KI.",
        "en": "Outlook, Teams, ChatGPT in the browser – more stable, more features, ideal for split-screen with AI."
      },
      "tags": [
        {
          "accent": "sky",
          "label": "Outlook Web"
        },
        {
          "accent": "sky",
          "label": "Split-Screen"
        }
      ],
      "links": [],
      "more": true,
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "claude",
        "openai",
        "ms365"
      ]
    },
    {
      "id": "webcam",
      "section": "workplace",
      "icon": "📷",
      "accent": "marine",
      "title": {
        "de": "Webcam & Hintergrund",
        "en": "Webcam & Background"
      },
      "subtitle": {
        "de": "Professionelles Video-Setup",
        "en": "Professional Video Setup"
      },
      "description": {
        "de": "Externe Webcam für bessere Bildqualität. Sauberer, aufgeräumter realer Hintergrund – kein virtuelles Bild, sondern bewusste Bürogestaltung.",
        "en": "External webcam for better image quality. Clean, tidy real background – no virtual image, but intentional office design."
      },
      "tags": [
        {
          "accent": "marine",
          "label": "Webcam"
        },
        {
          "accent": "marine",
          "label": "Licht"
        },
        {
          "accent": "marine",
          "label": "Büro-Setup"
        }
      ],
      "links": [],
      "more": true,
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "other"
      ]
    },
    {
      "id": "hardware",
      "section": "workplace",
      "icon": "💻",
      "accent": "marine",
      "title": {
        "de": "Hardware-Setup",
        "en": "Hardware Setup"
      },
      "subtitle": {
        "de": "MacBook · iPad · Apple Watch",
        "en": "MacBook · iPad · Apple Watch"
      },
      "description": {
        "de": "MacBook als Zentrale, iPad für Notizen & Präsentationen, Apple Watch für Schnellzugriffe, Kurzbefehle und Benachrichtigungen.",
        "en": "MacBook as the hub, iPad for notes & presentations, Apple Watch for quick access, shortcuts and notifications."
      },
      "tags": [
        {
          "accent": "marine",
          "label": "iPad"
        },
        {
          "accent": "marine",
          "label": "Watch"
        },
        {
          "accent": "marine",
          "label": "MacBook"
        }
      ],
      "links": [],
      "more": true,
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "apple"
      ]
    },
    {
      "id": "webapp",
      "section": "ms365",
      "icon": "🌐",
      "accent": "sky",
      "title": {
        "de": "Web Apps statt Desktop",
        "en": "Web Apps over Desktop"
      },
      "subtitle": {
        "de": "Outlook · Teams · OneDrive im Browser",
        "en": "Outlook · Teams · OneDrive in Browser"
      },
      "description": {
        "de": "Möglichst alle MS 365 Tools als Web-App nutzen – stabiler, schneller aktualisiert. Ausnahme: PowerPoint und Excel weiterhin als Desktop-App.",
        "en": "Use most MS 365 tools as web apps – more stable, faster updates. Exception: PowerPoint and Excel still as desktop apps."
      },
      "tags": [
        {
          "accent": "sky",
          "label": "Browser-First"
        },
        {
          "accent": "sky",
          "label": "Split-Screen"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "ms365"
      ]
    },
    {
      "id": "zeroinbox",
      "section": "ms365",
      "icon": "📥",
      "accent": "marine",
      "title": {
        "de": "Outlook Zero-Inbox",
        "en": "Outlook Zero-Inbox"
      },
      "subtitle": {
        "de": "3-Label-System + Boomerang",
        "en": "3-Label System + Boomerang"
      },
      "description": {
        "de": "Heute/kurzfristig, Offen/länger, Depriorisiert. Konsequentes Labeln, Boomerang für zeitversetztes Senden.",
        "en": "Today/short-term, Open/longer, Deprioritized. Consistent labeling, Boomerang for scheduled sending."
      },
      "tags": [
        {
          "accent": "marine",
          "label": "Labels"
        },
        {
          "accent": "marine",
          "label": "Boomerang"
        },
        {
          "accent": "marine",
          "label": "Zero-Inbox"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "ms365"
      ]
    },
    {
      "id": "vorlagen",
      "section": "ms365",
      "icon": "📋",
      "accent": "marine",
      "title": {
        "de": "Mail-Vorlagen",
        "en": "Email Templates"
      },
      "subtitle": {
        "de": "Standardantworten & Textbausteine",
        "en": "Standard Replies & Text Snippets"
      },
      "description": {
        "de": "Wiederkehrende Mails als Vorlagen hinterlegen – schnellere Antworten, konsistente Kommunikation.",
        "en": "Store recurring emails as templates – faster replies, consistent communication."
      },
      "tags": [
        {
          "accent": "marine",
          "label": "Templates"
        },
        {
          "accent": "marine",
          "label": "Outlook"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "ms365"
      ]
    },
    {
      "id": "kalender",
      "section": "ms365",
      "icon": "📅",
      "accent": "marine",
      "title": {
        "de": "Kalender & Bookings",
        "en": "Calendar & Bookings"
      },
      "subtitle": {
        "de": "Zeitblöcke · Terminlinks",
        "en": "Time Blocks · Booking Links"
      },
      "description": {
        "de": "Fokus- und Meeting-Blöcke. Microsoft Bookings mit Possehl-Domain. Automatische Labelzuweisung.",
        "en": "Focus and meeting blocks. Microsoft Bookings with Possehl domain. Automatic label assignment."
      },
      "tags": [
        {
          "accent": "marine",
          "label": "Bookings"
        },
        {
          "accent": "marine",
          "label": "Fokuszeiten"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "ms365"
      ]
    },
    {
      "id": "mailindi",
      "section": "ms365",
      "icon": "✍️",
      "accent": "grad",
      "title": {
        "de": "Mail-Individualisierung",
        "en": "Email Personalization"
      },
      "subtitle": {
        "de": "Claude im Split-Screen",
        "en": "Claude in Split-Screen"
      },
      "description": {
        "de": "Mails im Split-Screen mit Claude individualisieren – Tonalität, Struktur und Inhalt in Echtzeit optimieren lassen.",
        "en": "Personalize emails in split-screen with Claude – optimize tone, structure and content in real time."
      },
      "tags": [
        {
          "accent": "red",
          "label": "Claude"
        },
        {
          "accent": "sky",
          "label": "Split-Screen"
        },
        {
          "accent": "marine",
          "label": "Outlook"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "claude",
        "ms365"
      ]
    },
    {
      "id": "claudeppt",
      "section": "ms365",
      "icon": "📊",
      "accent": "grad",
      "title": {
        "de": "Claude in PowerPoint",
        "en": "Claude in PowerPoint"
      },
      "subtitle": {
        "de": "Präsentationen mit KI erstellen",
        "en": "Create Presentations with AI"
      },
      "description": {
        "de": "Folienentwürfe, Gliederungen und Textvorschläge mit Claude generieren. Screenshot der Folie an Claude senden → Verbesserungsvorschläge erhalten.",
        "en": "Generate slide drafts, outlines and text suggestions with Claude. Send screenshot of slide to Claude → get improvement suggestions."
      },
      "tags": [
        {
          "accent": "red",
          "label": "Claude"
        },
        {
          "accent": "marine",
          "label": "PowerPoint"
        },
        {
          "accent": "sky",
          "label": "Split-Screen"
        }
      ],
      "links": [
        {
          "href": "https://support.claude.com/en/articles/13521390-use-claude-for-powerpoint",
          "label": {
            "de": "Claude PowerPoint Add-In ↗",
            "en": "Claude PowerPoint Add-In ↗"
          }
        }
      ],
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "claude",
        "ms365"
      ]
    },
    {
      "id": "claudeexcel",
      "section": "ms365",
      "icon": "📈",
      "accent": "grad",
      "title": {
        "de": "Claude in Excel",
        "en": "Claude in Excel"
      },
      "subtitle": {
        "de": "Formeln & Analysen mit KI",
        "en": "Formulas & Analysis with AI"
      },
      "description": {
        "de": "Komplexe Excel-Formeln von Claude schreiben lassen. Daten analysieren, Pivot-Logik erklären, VBA-Makros generieren.",
        "en": "Have Claude write complex Excel formulas. Analyze data, explain pivot logic, generate VBA macros."
      },
      "tags": [
        {
          "accent": "red",
          "label": "Claude"
        },
        {
          "accent": "marine",
          "label": "Excel"
        },
        {
          "accent": "marine",
          "label": "Formeln"
        }
      ],
      "links": [
        {
          "href": "https://support.claude.com/en/articles/12650343-use-claude-for-excel",
          "label": {
            "de": "Claude Excel Add-In ↗",
            "en": "Claude Excel Add-In ↗"
          }
        }
      ],
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "claude",
        "ms365"
      ]
    },
    {
      "id": "claudeoutlook",
      "section": "ms365",
      "icon": "📧",
      "accent": "grad",
      "title": {
        "de": "Claude in Outlook",
        "en": "Claude in Outlook"
      },
      "subtitle": {
        "de": "Mails mit KI im Add-in",
        "en": "Mail with AI in the add-in"
      },
      "description": {
        "de": "Claude direkt im Outlook-Add-in: Mail-Threads zusammenfassen, Antwortentwürfe erstellen, Tonalität anpassen – ohne Copy-Paste zwischen den Fenstern.",
        "en": "Claude right inside the Outlook add-in: summarize mail threads, draft replies, adjust tone – no copy-paste between windows."
      },
      "tags": [
        {
          "accent": "red",
          "label": "Claude"
        },
        {
          "accent": "marine",
          "label": "Outlook"
        },
        {
          "accent": "marine",
          "label": "Add-in"
        }
      ],
      "links": [
        {
          "href": "https://support.claude.com/en/articles/14855664-use-claude-for-outlook",
          "label": {
            "de": "Claude Outlook Add-In ↗",
            "en": "Claude Outlook Add-In ↗"
          }
        }
      ],
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "claude",
        "ms365"
      ]
    },
    {
      "id": "claudeword",
      "section": "ms365",
      "icon": "📝",
      "accent": "grad",
      "title": {
        "de": "Claude in Word",
        "en": "Claude in Word"
      },
      "subtitle": {
        "de": "Dokumente mit KI schreiben",
        "en": "Write documents with AI"
      },
      "description": {
        "de": "Texte entwerfen, umschreiben, kürzen und strukturieren – Claude direkt im Word-Dokument. Ideal für Konzepte, Vorlagen und lange Dokumente.",
        "en": "Draft, rewrite, shorten and structure text – Claude directly in the Word document. Ideal for concepts, templates and long documents."
      },
      "tags": [
        {
          "accent": "red",
          "label": "Claude"
        },
        {
          "accent": "marine",
          "label": "Word"
        },
        {
          "accent": "marine",
          "label": "Add-in"
        }
      ],
      "links": [
        {
          "href": "https://support.claude.com/en/articles/14465370-use-claude-for-word",
          "label": {
            "de": "Claude Word Add-In ↗",
            "en": "Claude Word Add-In ↗"
          }
        }
      ],
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "claude",
        "ms365"
      ]
    },
    {
      "id": "tasks",
      "section": "ms365",
      "icon": "✅",
      "accent": "sky",
      "title": {
        "de": "Tasks via Apple",
        "en": "Tasks via Apple"
      },
      "subtitle": {
        "de": "Erinnerungen statt MS To Do",
        "en": "Reminders instead of MS To Do"
      },
      "description": {
        "de": "Bewusst Apple-Erinnerungen statt Microsoft To Do. Schneller, besser integriert mit Kurzbefehlen.",
        "en": "Deliberately using Apple Reminders instead of Microsoft To Do. Faster, better integrated with shortcuts."
      },
      "tags": [
        {
          "accent": "sky",
          "label": "Apple"
        },
        {
          "accent": "sky",
          "label": "Kurzbefehle"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "apple",
        "ms365"
      ]
    },
    {
      "id": "claude",
      "section": "ki",
      "icon": "🟠",
      "accent": "grad",
      "title": {
        "de": "Claude (Anthropic)",
        "en": "Claude (Anthropic)"
      },
      "subtitle": {
        "de": "Opus 4.6 · Projekte · Skills",
        "en": "Opus 4.6 · Projects · Skills"
      },
      "description": {
        "de": "Mein berufliches Haupttool. Reasoning, lange Kontexte, natürliche Sprache. Viele eigene Skills & Individualisierungen – von Corporate Design bis zu Fachthemen. Fokus: Enterprise, Doku, Sparring.",
        "en": "My main professional tool. Reasoning, long contexts, natural language. Lots of custom skills & personalizations – from corporate design to domain topics. Focus: enterprise, documentation, sparring."
      },
      "tags": [
        {
          "accent": "red",
          "label": "Skills"
        },
        {
          "accent": "red",
          "label": "Projekte"
        },
        {
          "accent": "red",
          "label": "Memory"
        },
        {
          "accent": "red",
          "label": "Enterprise"
        },
        {
          "accent": "red",
          "label": "Design Mockups"
        }
      ],
      "links": [
        {
          "href": "https://claude.ai",
          "label": {
            "de": "Get Claude ↗",
            "en": "Get Claude ↗"
          }
        }
      ],
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "claude"
      ]
    },
    {
      "id": "openai",
      "section": "ki",
      "icon": "💬",
      "accent": "marine",
      "title": {
        "de": "OpenAI / ChatGPT",
        "en": "OpenAI / ChatGPT"
      },
      "subtitle": {
        "de": "Privates Setup · GPT-5 · Whisper",
        "en": "Private Setup · GPT-5 · Whisper"
      },
      "description": {
        "de": "Nutze ich jetzt vor allem privat für mein persönliches Setup – beruflich ist Claude mein Haupttool. Stark als Allrounder und für Whisper. 3 eigene GPTs (Mail-Agent, CH/PD Sparring) mit individualisierten Instructions.",
        "en": "Now mainly for my private personal setup – Claude is my main tool at work. Strong all-rounder and for Whisper. 3 custom GPTs (Mail Agent, CH/PD Sparring) with personalized instructions."
      },
      "tags": [
        {
          "accent": "marine",
          "label": "Privat"
        },
        {
          "accent": "marine",
          "label": "Whisper"
        },
        {
          "accent": "marine",
          "label": "Custom GPTs"
        }
      ],
      "links": [
        {
          "href": "https://chat.openai.com",
          "label": {
            "de": "Get ChatGPT ↗",
            "en": "Get ChatGPT ↗"
          }
        }
      ],
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "claude",
        "openai"
      ]
    },
    {
      "id": "gemini",
      "section": "ki",
      "icon": "🔷",
      "accent": "sky",
      "title": {
        "de": "Gemini (Google)",
        "en": "Gemini (Google)"
      },
      "subtitle": {
        "de": "Visuell · Coding · Gems",
        "en": "Visual · Coding · Gems"
      },
      "description": {
        "de": "Starkes Modell für Bilder, Videos, Infografiken. Sehr gut für Code & Automation.",
        "en": "Strong model for images, videos, infographics. Very good for code & automation."
      },
      "tags": [
        {
          "accent": "sky",
          "label": "Fotos"
        },
        {
          "accent": "sky",
          "label": "Infografiken"
        },
        {
          "accent": "sky",
          "label": "Coding"
        }
      ],
      "links": [
        {
          "href": "https://gemini.google.com",
          "label": {
            "de": "Get Gemini ↗",
            "en": "Get Gemini ↗"
          }
        }
      ],
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "other"
      ]
    },
    {
      "id": "perplexity",
      "section": "ki",
      "icon": "🔍",
      "accent": "red",
      "title": {
        "de": "Perplexity",
        "en": "Perplexity"
      },
      "subtitle": {
        "de": "Recherche · Quellen · Live-Meldungen",
        "en": "Research · Sources · Live Updates"
      },
      "description": {
        "de": "Suchmaschine + KI. Extrem schnell mit Quellen. Deep Search für Analysen. API-Anbindung in n8n.",
        "en": "Search engine + AI. Extremely fast with sources. Deep Search for analysis. API integration in n8n."
      },
      "tags": [
        {
          "accent": "red",
          "label": "Research"
        },
        {
          "accent": "red",
          "label": "Live-Web"
        },
        {
          "accent": "red",
          "label": "Deep Search"
        }
      ],
      "links": [
        {
          "href": "https://perplexity.ai",
          "label": {
            "de": "Get Perplexity ↗",
            "en": "Get Perplexity ↗"
          }
        }
      ],
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "n8n"
      ]
    },
    {
      "id": "copilot",
      "section": "ki",
      "icon": "🤖",
      "accent": "marine",
      "title": {
        "de": "Microsoft Copilot",
        "en": "Microsoft Copilot"
      },
      "subtitle": {
        "de": "MS 365 Integration",
        "en": "MS 365 Integration"
      },
      "description": {
        "de": "Selektiv: E-Mail-Optimierung, individualisierte Prompts, Notizbücher. Ergänzung, kein Kern-Tool.",
        "en": "Selective: email optimization, customized prompts, notebooks. Supplement, not a core tool."
      },
      "tags": [
        {
          "accent": "marine",
          "label": "Outlook"
        },
        {
          "accent": "marine",
          "label": "Notizbücher"
        }
      ],
      "links": [
        {
          "href": "https://copilot.microsoft.com",
          "label": {
            "de": "Get Copilot ↗",
            "en": "Get Copilot ↗"
          }
        }
      ],
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "ms365"
      ]
    },
    {
      "id": "ref-plaudtool",
      "section": "ki",
      "ref": "plaud"
    },
    {
      "id": "lokal",
      "section": "ki",
      "icon": "🔒",
      "accent": "sky",
      "title": {
        "de": "Lokale LLMs",
        "en": "Local LLMs"
      },
      "subtitle": {
        "de": "LM Studio · PocketPal",
        "en": "LM Studio · PocketPal"
      },
      "description": {
        "de": "Offline, datensouverän. LM Studio auf Mac, PocketPal auf iPhone. Für sensible Inhalte & Experimente.",
        "en": "Offline, data sovereign. LM Studio on Mac, PocketPal on iPhone. For sensitive content & experiments."
      },
      "tags": [
        {
          "accent": "sky",
          "label": "Offline"
        },
        {
          "accent": "sky",
          "label": "Datenschutz"
        }
      ],
      "links": [
        {
          "href": "https://lmstudio.ai",
          "label": {
            "de": "Get LM Studio ↗",
            "en": "Get LM Studio ↗"
          }
        }
      ],
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "apple"
      ]
    },
    {
      "id": "claudecode",
      "section": "coding",
      "icon": "🖥️",
      "accent": "grad",
      "title": {
        "de": "Claude Code (Terminal)",
        "en": "Claude Code (Terminal)"
      },
      "subtitle": {
        "de": "KI-gestütztes Programmieren",
        "en": "AI-powered Programming"
      },
      "description": {
        "de": "Der „Alles-Könner\". Apps, Skripte, Automationen bauen – ohne Coding-Erfahrung. Iterativ: Ziel beschreiben → Code entsteht.",
        "en": "The \"all-rounder\". Build apps, scripts, automations – without coding experience. Iterative: describe goal → code emerges."
      },
      "tags": [
        {
          "accent": "red",
          "label": "Terminal"
        },
        {
          "accent": "red",
          "label": "Deploy"
        },
        {
          "accent": "red",
          "label": "Debug"
        }
      ],
      "links": [
        {
          "href": "https://docs.anthropic.com/en/docs/claude-code",
          "label": {
            "de": "Get Claude Code ↗",
            "en": "Get Claude Code ↗"
          }
        }
      ],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "claude"
      ]
    },
    {
      "id": "mcpauto",
      "section": "coding",
      "icon": "🔌",
      "accent": "grad",
      "title": {
        "de": "MCP (Model Context Protocol)",
        "en": "MCP (Model Context Protocol)"
      },
      "subtitle": {
        "de": "Claude mit Tools verbinden",
        "en": "Connect Claude with Tools"
      },
      "description": {
        "de": "Der Game-Changer: Claude direkt mit deinen Tools verbinden – Google Drive, Slack, GitHub, Datenbanken, n8n.",
        "en": "Game-changer: Connect Claude directly with your tools – Google Drive, Slack, GitHub, databases, n8n."
      },
      "tags": [
        {
          "accent": "red",
          "label": "MCP"
        },
        {
          "accent": "red",
          "label": "Integrationen"
        },
        {
          "accent": "red",
          "label": "Open Source"
        }
      ],
      "links": [
        {
          "href": "https://docs.anthropic.com/en/docs/mcp",
          "label": {
            "de": "MCP Docs ↗",
            "en": "MCP Docs ↗"
          }
        }
      ],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "claude",
        "n8n"
      ]
    },
    {
      "id": "cowork",
      "section": "coding",
      "icon": "🔧",
      "accent": "red",
      "title": {
        "de": "Claude Cowork",
        "en": "Claude Cowork"
      },
      "subtitle": {
        "de": "Desktop-Automatisierung",
        "en": "Desktop Automation"
      },
      "description": {
        "de": "Desktop-Tool für Nicht-Entwickler. Automatisiert Datei- und Aufgabenmanagement über den Browser hinaus.",
        "en": "Desktop tool for non-developers. Automates file and task management beyond the browser."
      },
      "tags": [
        {
          "accent": "red",
          "label": "Desktop"
        },
        {
          "accent": "red",
          "label": "No-Code"
        }
      ],
      "links": [
        {
          "href": "https://claude.ai",
          "label": {
            "de": "Get Cowork ↗",
            "en": "Get Cowork ↗"
          }
        }
      ],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "claude"
      ]
    },
    {
      "id": "github",
      "section": "coding",
      "icon": "🏗️",
      "accent": "marine",
      "title": {
        "de": "GitHub + Railway",
        "en": "GitHub + Railway"
      },
      "subtitle": {
        "de": "Code · Hosting · Datenbank",
        "en": "Code · Hosting · Database"
      },
      "description": {
        "de": "GitHub als Versionierung. Railway deployt, hostet und stellt Postgres-Datenbanken bereit.",
        "en": "GitHub for version control. Railway deploys, hosts and provides Postgres databases."
      },
      "tags": [
        {
          "accent": "marine",
          "label": "GitHub"
        },
        {
          "accent": "marine",
          "label": "Railway"
        },
        {
          "accent": "marine",
          "label": "Postgres"
        }
      ],
      "links": [
        {
          "href": "https://github.com",
          "label": {
            "de": "Get GitHub ↗",
            "en": "Get GitHub ↗"
          }
        },
        {
          "href": "https://railway.com/",
          "label": {
            "de": "Get Railway ↗",
            "en": "Get Railway ↗"
          }
        }
      ],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "other"
      ]
    },
    {
      "id": "vscode",
      "section": "coding",
      "icon": "💎",
      "accent": "marine",
      "title": {
        "de": "Visual Studio Code",
        "en": "Visual Studio Code"
      },
      "subtitle": {
        "de": "Code-Editor · Extensions · Git",
        "en": "Code Editor · Extensions · Git"
      },
      "description": {
        "de": "Zentraler Code-Editor mit Git-Integration, Terminal und Extensions. Basis für Claude Code und lokale Entwicklung.",
        "en": "Central code editor with Git integration, terminal and extensions. Foundation for Claude Code and local development."
      },
      "tags": [
        {
          "accent": "marine",
          "label": "VS Code"
        },
        {
          "accent": "marine",
          "label": "Extensions"
        },
        {
          "accent": "marine",
          "label": "Git"
        }
      ],
      "links": [
        {
          "href": "https://code.visualstudio.com",
          "label": {
            "de": "Get VS Code ↗",
            "en": "Get VS Code ↗"
          }
        }
      ],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "claude"
      ]
    },
    {
      "id": "nachricht",
      "section": "shortcuts",
      "icon": "✉️",
      "accent": "sky",
      "title": {
        "de": "Neue Nachricht / Mail",
        "en": "New Message / Mail"
      },
      "subtitle": {
        "de": "Spracheingabe → OpenAI API",
        "en": "Voice Input → OpenAI API"
      },
      "description": {
        "de": "Vorname → kurze Nachricht mit Emojis. Nachname → professionelle Mail. Direkt in Zwischenablage.",
        "en": "First name → short message with emojis. Last name → professional email. Directly to clipboard."
      },
      "tags": [
        {
          "accent": "sky",
          "label": "Speech"
        },
        {
          "accent": "sky",
          "label": "OpenAI"
        },
        {
          "accent": "sky",
          "label": "Whisper"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "mittel",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "openai"
      ]
    },
    {
      "id": "tiptalk",
      "section": "shortcuts",
      "icon": "✍️",
      "accent": "sky",
      "title": {
        "de": "TipTalk & Glatt ziehen",
        "en": "TipTalk & Polish"
      },
      "subtitle": {
        "de": "Speech-to-Text + Optimierung",
        "en": "Speech-to-Text + Optimization"
      },
      "description": {
        "de": "Diktieren statt Tippen. „Glatt ziehen\" optimiert Grammatik und Struktur automatisch.",
        "en": "Dictate instead of typing. \"Polish\" automatically optimizes grammar and structure."
      },
      "tags": [
        {
          "accent": "sky",
          "label": "Speech"
        },
        {
          "accent": "sky",
          "label": "OpenAI"
        },
        {
          "accent": "sky",
          "label": "Whisper"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "mittel",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "openai"
      ]
    },
    {
      "id": "fastnote",
      "section": "shortcuts",
      "icon": "📝",
      "accent": "sky",
      "title": {
        "de": "Fast Note & Ideen Note",
        "en": "Fast Note & Ideas Note"
      },
      "subtitle": {
        "de": "Apple Notizen Schnellerfassung",
        "en": "Apple Notes Quick Capture"
      },
      "description": {
        "de": "Fast Note für To-dos. Ideen Note für kreative Impulse. Öffnet direkt Apple Notes.",
        "en": "Fast Note for to-dos. Ideas Note for creative impulses. Opens Apple Notes directly."
      },
      "tags": [
        {
          "accent": "sky",
          "label": "Speech"
        },
        {
          "accent": "sky",
          "label": "OpenAI"
        },
        {
          "accent": "sky",
          "label": "Whisper"
        },
        {
          "accent": "marine",
          "label": "Apple Notizen"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "mittel",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "openai",
        "apple"
      ]
    },
    {
      "id": "textersetz",
      "section": "shortcuts",
      "icon": "⌨️",
      "accent": "marine",
      "title": {
        "de": "Textersetzungen",
        "en": "Text Replacements"
      },
      "subtitle": {
        "de": "Textbausteine + Back Tap",
        "en": "Text Snippets + Back Tap"
      },
      "description": {
        "de": "kk → Kalenderlink, VV → Vielen Dank. Control Center auf iPhone & Watch. 2x/3x Back Tap.",
        "en": "kk → calendar link, VV → Thank you. Control Center on iPhone & Watch. 2x/3x Back Tap."
      },
      "tags": [
        {
          "accent": "marine",
          "label": "Bausteine"
        },
        {
          "accent": "marine",
          "label": "Back Tap"
        },
        {
          "accent": "marine",
          "label": "u.v.m."
        }
      ],
      "links": [],
      "status": "live",
      "effort": "mittel",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "apple"
      ]
    },
    {
      "id": "sprachnach",
      "section": "shortcuts",
      "icon": "🎙️",
      "accent": "sky",
      "title": {
        "de": "Sprachnachricht to Text",
        "en": "Voice Message to Text"
      },
      "subtitle": {
        "de": "Audio → Transkription → Text",
        "en": "Audio → Transcription → Text"
      },
      "description": {
        "de": "Sprachnachrichten automatisch transkribieren und als lesbaren Text aufbereiten – direkt per Kurzbefehl.",
        "en": "Automatically transcribe voice messages and format as readable text – directly via shortcut."
      },
      "tags": [
        {
          "accent": "sky",
          "label": "Speech"
        },
        {
          "accent": "sky",
          "label": "OpenAI"
        },
        {
          "accent": "sky",
          "label": "Whisper"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "mittel",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "openai",
        "apple"
      ]
    },
    {
      "id": "gptadv",
      "section": "shortcuts",
      "icon": "🚗",
      "accent": "grad",
      "title": {
        "de": "GPTs im Advanced Mode",
        "en": "GPTs in Advanced Mode"
      },
      "subtitle": {
        "de": "Auto-Gespräch mit individuellen GPTs",
        "en": "In-car Conversation with Custom GPTs"
      },
      "description": {
        "de": "Eigene GPTs im Advanced Voice Mode nutzen – ideal für Sparring, Brainstorming und Diktat während der Autofahrt.",
        "en": "Use custom GPTs in Advanced Voice Mode – ideal for sparring, brainstorming and dictation while driving."
      },
      "tags": [
        {
          "accent": "sky",
          "label": "Voice"
        },
        {
          "accent": "red",
          "label": "Custom GPTs"
        },
        {
          "accent": "marine",
          "label": "Hands-free"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "mittel",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "openai"
      ]
    },
    {
      "id": "ref-belegscan",
      "section": "shortcuts",
      "ref": "belegscanner"
    },
    {
      "id": "voicekal",
      "section": "shortcuts",
      "icon": "🗓️",
      "accent": "grad",
      "title": {
        "de": "Voice to Kalender",
        "en": "Voice to Calendar"
      },
      "subtitle": {
        "de": "Einsprechen → Termin",
        "en": "Speak → Appointment"
      },
      "description": {
        "de": "Termin per Sprache einsprechen → Whisper + GPT erkennen Datum, Uhrzeit, Teilnehmer → Outlook-Termin wird automatisch erstellt.",
        "en": "Speak an appointment → Whisper + GPT recognize date, time, participants → Outlook appointment is automatically created."
      },
      "tags": [
        {
          "accent": "sky",
          "label": "Whisper"
        },
        {
          "accent": "red",
          "label": "n8n"
        },
        {
          "accent": "marine",
          "label": "Outlook"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "mittel",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "openai",
        "n8n",
        "ms365"
      ]
    },
    {
      "id": "whisperskill",
      "section": "shortcuts",
      "icon": "🎙️",
      "accent": "sky",
      "title": {
        "de": "OpenAI Whisper – Speech to Text",
        "en": "OpenAI Whisper – Speech to Text"
      },
      "subtitle": {
        "de": "Sprache → Text → Zwischenablage",
        "en": "Speech → Text → Clipboard"
      },
      "description": {
        "de": "Whisper API direkt per Shortcut nutzen – Sprache aufnehmen, transkribieren lassen und als Text in die Zwischenablage kopieren. Basis für viele weitere Workflows.",
        "en": "Use Whisper API directly via Shortcut – record speech, transcribe and copy as text to clipboard. Foundation for many other workflows."
      },
      "tags": [
        {
          "accent": "sky",
          "label": "Whisper"
        },
        {
          "accent": "red",
          "label": "OpenAI"
        },
        {
          "accent": "sky",
          "label": "Speech"
        },
        {
          "accent": "sky",
          "label": "Shortcut"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "mittel",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "openai",
        "apple"
      ]
    },
    {
      "id": "perplexityresearch",
      "section": "shortcuts",
      "icon": "🔎",
      "accent": "sky",
      "title": {
        "de": "Research per Shortcut",
        "en": "Research via Shortcut"
      },
      "subtitle": {
        "de": "Frage → Perplexity → Antwort",
        "en": "Question → Perplexity → Answer"
      },
      "description": {
        "de": "Frage per Sprache oder Text eingeben → Perplexity API recherchiert im Web → strukturierte Antwort mit Quellen direkt auf dem iPhone oder Mac.",
        "en": "Enter a question via voice or text → Perplexity API searches the web → structured answer with sources directly on iPhone or Mac."
      },
      "tags": [
        {
          "accent": "sky",
          "label": "Perplexity"
        },
        {
          "accent": "red",
          "label": "Research"
        },
        {
          "accent": "sky",
          "label": "Shortcut"
        },
        {
          "accent": "red",
          "label": "API"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "mittel",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "apple"
      ]
    },
    {
      "id": "n8n",
      "section": "automation",
      "icon": "⚡",
      "accent": "red",
      "title": {
        "de": "n8n Workflow-Engine",
        "en": "n8n Workflow Engine"
      },
      "subtitle": {
        "de": "Automatisierungsplattform",
        "en": "Automation Platform"
      },
      "description": {
        "de": "Zentrales Automatisierungstool. Visuell, flexibel, API-stark. Klassische Workflows und Agent-Logiken.",
        "en": "Central automation tool. Visual, flexible, API-powerful. Classic workflows and agent logic."
      },
      "tags": [
        {
          "accent": "red",
          "label": "Webhooks"
        },
        {
          "accent": "red",
          "label": "API"
        },
        {
          "accent": "red",
          "label": "Agents"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "n8n"
      ]
    },
    {
      "id": "ref-whisper",
      "section": "automation",
      "ref": "whisperskill"
    },
    {
      "id": "appleauto",
      "section": "automation",
      "icon": "📱",
      "accent": "sky",
      "title": {
        "de": "Apple Automatisierungen",
        "en": "Apple Automations"
      },
      "subtitle": {
        "de": "Prozessautomatisierung",
        "en": "Process Automation"
      },
      "description": {
        "de": "Apple Shortcuts als leichtgewichtige Automatisierung – Aktionen verketten, Siri-Trigger, Hintergrund-Prozesse auf allen Apple-Geräten. API-Anbindung an OpenAI für individuelle Prompts.",
        "en": "Apple Shortcuts as lightweight automation – chain actions, Siri triggers, background processes on all Apple devices. API connection to OpenAI for custom prompts."
      },
      "tags": [
        {
          "accent": "sky",
          "label": "Shortcuts"
        },
        {
          "accent": "sky",
          "label": "Siri"
        },
        {
          "accent": "sky",
          "label": "OpenAI"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "openai",
        "apple"
      ]
    },
    {
      "id": "n8nki",
      "section": "automation",
      "icon": "🔗",
      "accent": "grad",
      "title": {
        "de": "n8n × KI × Apple",
        "en": "n8n × AI × Apple"
      },
      "subtitle": {
        "de": "Plattformübergreifende Verbindung",
        "en": "Cross-platform Connection"
      },
      "description": {
        "de": "n8n als Brücke zwischen KI-APIs und Apple Shortcuts. Z. B. Voice-to-Kalender: Spracheingabe → Whisper → n8n → Outlook-Termin.",
        "en": "n8n as a bridge between AI APIs and Apple Shortcuts. E.g. Voice-to-Calendar: speech → Whisper → n8n → Outlook event."
      },
      "tags": [
        {
          "accent": "red",
          "label": "n8n"
        },
        {
          "accent": "sky",
          "label": "Shortcuts"
        },
        {
          "accent": "marine",
          "label": "MS 365"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "openai",
        "n8n",
        "apple",
        "ms365"
      ]
    },
    {
      "id": "ref-mcpauto-2",
      "section": "automation",
      "ref": "mcpauto"
    },
    {
      "id": "plaud",
      "section": "email",
      "icon": "🎧",
      "accent": "grad",
      "title": {
        "de": "Plaud – KI-Recorder",
        "en": "Plaud – AI Recorder"
      },
      "subtitle": {
        "de": "Aufnehmen → KI-Protokoll · mein Standard",
        "en": "Record → AI minutes · my default"
      },
      "description": {
        "de": "KI-Notiz-Recorder (Hardware + App): nimmt Meetings, Calls und Gespräche auf, transkribiert automatisch und erstellt strukturierte Protokolle, Zusammenfassungen und Mindmaps – mit eigenen Vorlagen pro Meeting-Typ. Ersetzt bei mir den früheren Eigenbau-Workflow aus Shortcut, Whisper und n8n.",
        "en": "AI note-taking recorder (hardware + app): records meetings, calls and conversations, transcribes automatically and creates structured minutes, summaries and mind maps – with custom templates per meeting type. Replaces my earlier DIY workflow of Shortcut, Whisper and n8n."
      },
      "tags": [
        {
          "accent": "red",
          "label": "Hardware"
        },
        {
          "accent": "sky",
          "label": "Transkription"
        },
        {
          "accent": "red",
          "label": "KI-Summary"
        },
        {
          "accent": "marine",
          "label": "Templates"
        }
      ],
      "links": [
        {
          "href": "https://de.plaud.ai/?variant=47175190872319",
          "label": {
            "de": "Plaud entdecken ↗",
            "en": "Discover Plaud ↗"
          }
        }
      ],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "openai",
        "n8n",
        "apple"
      ]
    },
    {
      "id": "mailfilter",
      "section": "email",
      "icon": "🧹",
      "accent": "grad",
      "title": {
        "de": "Intelligenter Mail-Filter",
        "en": "Smart Mail Filter"
      },
      "subtitle": {
        "de": "KI sortiert automatisch aus",
        "en": "AI Auto-Sorts"
      },
      "description": {
        "de": "KI analysiert jede eingehende Mail und verschiebt unwichtige automatisch in einen De-Prio-Ordner. Lernt aus deinen Korrekturen.",
        "en": "AI analyzes every incoming email and automatically moves unimportant ones to a de-prio folder. Learns from your corrections."
      },
      "tags": [
        {
          "accent": "red",
          "label": "Claude AI"
        },
        {
          "accent": "marine",
          "label": "Outlook"
        },
        {
          "accent": "red",
          "label": "Lernfähig"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "claude",
        "ms365"
      ]
    },
    {
      "id": "followup",
      "section": "email",
      "icon": "⏰",
      "accent": "marine",
      "title": {
        "de": "Follow-Up Tracker",
        "en": "Follow-Up Tracker"
      },
      "subtitle": {
        "de": "Keine Antwort vergessen",
        "en": "Never Miss a Reply"
      },
      "description": {
        "de": "Trackt alle gesendeten Mails automatisch. Bei fehlender Antwort nach X Tagen erscheint die Mail in der täglichen Follow-Up-Liste.",
        "en": "Automatically tracks all sent emails. If no reply after X days, the email appears in the daily follow-up list."
      },
      "tags": [
        {
          "accent": "red",
          "label": "Claude AI"
        },
        {
          "accent": "marine",
          "label": "Excel"
        },
        {
          "accent": "marine",
          "label": "Outlook"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "claude",
        "ms365"
      ]
    },
    {
      "id": "dailyfollowup",
      "section": "email",
      "icon": "📋",
      "accent": "marine",
      "title": {
        "de": "Tägliche Follow-Up Übersicht",
        "en": "Daily Follow-Up Overview"
      },
      "subtitle": {
        "de": "Jeden Morgen um 6:30",
        "en": "Every Morning at 6:30"
      },
      "description": {
        "de": "Erhalte jeden Morgen eine kompakte Liste aller Mails, auf die du noch eine Antwort erwartest.",
        "en": "Receive a compact list every morning of all emails you're still waiting for a reply on."
      },
      "tags": [
        {
          "accent": "marine",
          "label": "Outlook"
        },
        {
          "accent": "marine",
          "label": "Scheduled"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "ms365"
      ]
    },
    {
      "id": "sprachtermin",
      "section": "email",
      "icon": "📅",
      "accent": "grad",
      "title": {
        "de": "Sprachtermin-Assistent",
        "en": "Voice Appointment Assistant"
      },
      "subtitle": {
        "de": "Einsprechen → Kalendereintrag",
        "en": "Speak → Calendar Entry"
      },
      "description": {
        "de": "Termin per Sprache einsprechen → KI erkennt Datum, Uhrzeit, Teilnehmer → Outlook-Termin wird erstellt und Einladungen verschickt.",
        "en": "Speak an appointment → AI recognizes date, time, participants → Outlook appointment is created and invitations sent."
      },
      "tags": [
        {
          "accent": "sky",
          "label": "Whisper"
        },
        {
          "accent": "red",
          "label": "GPT"
        },
        {
          "accent": "marine",
          "label": "Outlook"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "openai",
        "ms365"
      ]
    },
    {
      "id": "kiresearch",
      "section": "research",
      "icon": "🔍",
      "accent": "grad",
      "title": {
        "de": "KI-Recherche in Teams",
        "en": "AI Research in Teams"
      },
      "subtitle": {
        "de": "Frage stellen → Antwort mit Quellen",
        "en": "Ask → Answer with Sources"
      },
      "description": {
        "de": "Schreibe eine Frage in den Teams-Kanal → Perplexity recherchiert im Web → strukturierte Antwort mit Quellen erscheint automatisch.",
        "en": "Post a question in the Teams channel → Perplexity searches the web → structured answer with sources appears automatically."
      },
      "tags": [
        {
          "accent": "red",
          "label": "Teams Bot"
        },
        {
          "accent": "sky",
          "label": "Perplexity"
        },
        {
          "accent": "red",
          "label": "n8n"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "n8n",
        "ms365"
      ]
    },
    {
      "id": "personen",
      "section": "research",
      "icon": "👤",
      "accent": "red",
      "title": {
        "de": "Personen-Research",
        "en": "People Research"
      },
      "subtitle": {
        "de": "Meeting-Vorbereitung · Team-Zugriff",
        "en": "Meeting Preparation · Team Access"
      },
      "description": {
        "de": "Person eingeben → LinkedIn, Unternehmen, digitaler Kontext werden automatisch recherchiert und aufbereitet. Für das gesamte Team nutzbar.",
        "en": "Enter a person → LinkedIn, company, digital context are automatically researched and prepared. Available for the entire team."
      },
      "tags": [
        {
          "accent": "red",
          "label": "LinkedIn"
        },
        {
          "accent": "sky",
          "label": "Perplexity"
        },
        {
          "accent": "red",
          "label": "Northdata"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "other"
      ]
    },
    {
      "id": "firmen",
      "section": "research",
      "icon": "🏢",
      "accent": "red",
      "title": {
        "de": "Firmen-Recherche",
        "en": "Company Research"
      },
      "subtitle": {
        "de": "Unternehmen schnell verstehen",
        "en": "Quickly Understand Companies"
      },
      "description": {
        "de": "Firmenname eingeben → Geschäftsmodell, Digitalisierungsgrad, Ansprechpartner und LinkedIn-Aktivitäten werden automatisch zusammengestellt.",
        "en": "Enter company name → Business model, digitalization level, contacts and LinkedIn activities are automatically compiled."
      },
      "tags": [
        {
          "accent": "red",
          "label": "LinkedIn"
        },
        {
          "accent": "sky",
          "label": "Perplexity"
        },
        {
          "accent": "red",
          "label": "Northdata"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "other"
      ]
    },
    {
      "id": "kontaktmail",
      "section": "research",
      "icon": "✉️",
      "accent": "marine",
      "title": {
        "de": "Kontakt-Mail als Entwurf",
        "en": "Contact Email as Draft"
      },
      "subtitle": {
        "de": "Direkt anschreiben",
        "en": "Direct Outreach"
      },
      "description": {
        "de": "Nach der Recherche wird automatisch ein E-Mail-Entwurf mit personalisiertem Anschreiben erstellt.",
        "en": "After research, an email draft with personalized message is automatically created."
      },
      "tags": [
        {
          "accent": "marine",
          "label": "Outlook"
        },
        {
          "accent": "red",
          "label": "GPT"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "openai",
        "ms365"
      ]
    },
    {
      "id": "techbriefing",
      "section": "newsBriefing",
      "icon": "🤖",
      "accent": "sky",
      "title": {
        "de": "Tech, Innovation & KI",
        "en": "Tech, Innovation & AI"
      },
      "subtitle": {
        "de": "Wöchentlich · Mittwochs",
        "en": "Weekly · Wednesdays"
      },
      "description": {
        "de": "Automatisches KI-Briefing: Deep Dives, Use Cases und News zu KI, Software, Cloud und IT-Sicherheit. Quellen: Perplexity, Newsletter (Heise, KI Weekly, HB), GPT-4.1.",
        "en": "Automated AI briefing: deep dives, use cases and news on AI, software, cloud and IT security. Sources: Perplexity, newsletters (Heise, KI Weekly, HB), GPT-4.1."
      },
      "tags": [
        {
          "accent": "sky",
          "label": "Perplexity"
        },
        {
          "accent": "red",
          "label": "GPT-4.1"
        },
        {
          "accent": "red",
          "label": "n8n"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "openai",
        "n8n"
      ]
    },
    {
      "id": "marktbriefing",
      "section": "newsBriefing",
      "icon": "🏢",
      "accent": "marine",
      "title": {
        "de": "Wettbewerb & Markt",
        "en": "Competition & Market"
      },
      "subtitle": {
        "de": "Wöchentlich · Dienstags",
        "en": "Weekly · Tuesdays"
      },
      "description": {
        "de": "Markt-Briefing: Industrieller Mittelstand, Industrial-Tech-Investoren, Portfolio-Beteiligungen und deren Wettbewerber. 3 Perplexity-Recherchen, aufbereitet mit GPT-4.1.",
        "en": "Market briefing: industrial mid-market, industrial tech investors, portfolio companies and their competitors. 3 Perplexity research runs, compiled with GPT-4.1."
      },
      "tags": [
        {
          "accent": "sky",
          "label": "Perplexity"
        },
        {
          "accent": "red",
          "label": "GPT-4.1"
        },
        {
          "accent": "red",
          "label": "n8n"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "openai",
        "n8n"
      ]
    },
    {
      "id": "eventbriefing",
      "section": "newsBriefing",
      "icon": "📅",
      "accent": "grad",
      "title": {
        "de": "Events & Community",
        "en": "Events & Community"
      },
      "subtitle": {
        "de": "Wöchentlich · Donnerstags",
        "en": "Weekly · Thursdays"
      },
      "description": {
        "de": "Partner-News (Maschinenraum, FoundersFoundation, VDMA u.a.), Event-Updates und neue Event-Empfehlungen. Quellen: Perplexity, Outlook-Mails, GPT-4.1.",
        "en": "Partner news (Maschinenraum, FoundersFoundation, VDMA etc.), event updates and new event recommendations. Sources: Perplexity, Outlook emails, GPT-4.1."
      },
      "tags": [
        {
          "accent": "sky",
          "label": "Perplexity"
        },
        {
          "accent": "marine",
          "label": "Outlook"
        },
        {
          "accent": "red",
          "label": "GPT-4.1"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "openai",
        "ms365"
      ]
    },
    {
      "id": "digestprinzip",
      "section": "privatDigest",
      "icon": "🧩",
      "accent": "grad",
      "title": {
        "de": "Digest-Prinzip",
        "en": "Digest Principle"
      },
      "subtitle": {
        "de": "Ein Muster, beliebig viele Quellen",
        "en": "One pattern, any number of sources"
      },
      "description": {
        "de": "Gmail nach Absender und Label filtern → Mails des Tages bündeln → Claude Haiku fasst nach festen Kategorien zusammen → fertige HTML-Mail ins eigene Postfach. Neue Quelle = nur Absender und Kategorien anpassen. Kommen keine Mails, gibt es trotzdem eine kurze Info.",
        "en": "Filter Gmail by sender and label → bundle the day's mails → Claude Haiku summarizes them into fixed categories → finished HTML mail to my own inbox. A new source only needs a new sender and category list. If no mails arrive, it still sends a short note."
      },
      "tags": [
        {
          "accent": "sky",
          "label": "Gmail"
        },
        {
          "accent": "red",
          "label": "Claude Haiku"
        },
        {
          "accent": "red",
          "label": "n8n"
        },
        {
          "accent": "marine",
          "label": "Scheduled"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "claude",
        "n8n"
      ]
    },
    {
      "id": "digestapple",
      "section": "privatDigest",
      "icon": "🍎",
      "accent": "marine",
      "title": {
        "de": "Daily Digest – Apple",
        "en": "Daily Digest – Apple"
      },
      "subtitle": {
        "de": "Käufe, Abos & Sicherheit",
        "en": "Purchases, Subscriptions & Security"
      },
      "description": {
        "de": "Alle Apple-Mails des Tages gebündelt: Käufe und Abos mit Beträgen und nächster Abrechnung, Sicherheitsmeldungen deutlich hervorgehoben, iCloud- und Gerätestatus – am Ende die Einschätzung, ob Handlungsbedarf besteht.",
        "en": "All Apple mails of the day bundled: purchases and subscriptions with amounts and next billing date, security alerts clearly highlighted, iCloud and device status – plus a verdict on whether anything needs action."
      },
      "tags": [
        {
          "accent": "sky",
          "label": "Gmail"
        },
        {
          "accent": "red",
          "label": "Claude Haiku"
        },
        {
          "accent": "marine",
          "label": "Täglich"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "claude",
        "apple"
      ]
    },
    {
      "id": "digestpaypal",
      "section": "privatDigest",
      "icon": "💳",
      "accent": "marine",
      "title": {
        "de": "Daily Digest – PayPal",
        "en": "Daily Digest – PayPal"
      },
      "subtitle": {
        "de": "Zahlungen, Abbuchungen & Erstattungen",
        "en": "Payments, Debits & Refunds"
      },
      "description": {
        "de": "Gesendete und erhaltene Zahlungen, Abbuchungen, Erstattungen und Account-Meldungen in einer Übersicht – inklusive Tagessaldo und Hinweis auf auffällige Aktivitäten.",
        "en": "Payments sent and received, direct debits, refunds and account alerts in one overview – including the daily balance and a note on suspicious activity."
      },
      "tags": [
        {
          "accent": "sky",
          "label": "Gmail"
        },
        {
          "accent": "red",
          "label": "Claude Haiku"
        },
        {
          "accent": "marine",
          "label": "Täglich"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "claude"
      ]
    },
    {
      "id": "digestlinkedin",
      "section": "privatDigest",
      "icon": "💼",
      "accent": "sky",
      "title": {
        "de": "Daily Digest – LinkedIn",
        "en": "Daily Digest – LinkedIn"
      },
      "subtitle": {
        "de": "Nachrichten, Kontakte & Jobs",
        "en": "Messages, Contacts & Jobs"
      },
      "description": {
        "de": "Nachrichten, Kontaktanfragen, Profilaufrufe, Job-Hinweise und Reaktionen auf Posts gebündelt – mit klarer Liste, was heute wirklich eine Antwort braucht.",
        "en": "Messages, connection requests, profile views, job alerts and reactions to posts bundled together – with a clear list of what actually needs a reply today."
      },
      "tags": [
        {
          "accent": "sky",
          "label": "Gmail"
        },
        {
          "accent": "red",
          "label": "Claude Haiku"
        },
        {
          "accent": "marine",
          "label": "Täglich"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "claude"
      ]
    },
    {
      "id": "digestonvista",
      "section": "privatDigest",
      "icon": "📈",
      "accent": "sky",
      "title": {
        "de": "Daily Digest – Onvista",
        "en": "Daily Digest – Onvista"
      },
      "subtitle": {
        "de": "Kursalarme, Orders & Depot",
        "en": "Price Alerts, Orders & Portfolio"
      },
      "description": {
        "de": "Kursalarme, Orderbestätigungen, Depot-Performance, Marktberichte und Newsletter in einem Digest – inklusive Einschätzung, ob im Depot etwas zu tun ist.",
        "en": "Price alerts, order confirmations, portfolio performance, market reports and newsletters in one digest – including a verdict on whether the portfolio needs attention."
      },
      "tags": [
        {
          "accent": "sky",
          "label": "Gmail"
        },
        {
          "accent": "red",
          "label": "Claude Haiku"
        },
        {
          "accent": "marine",
          "label": "Täglich"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "claude"
      ]
    },
    {
      "id": "belegscanner",
      "section": "weiteres",
      "icon": "📸",
      "accent": "grad",
      "title": {
        "de": "Beleg-Scanner",
        "en": "Receipt Scanner"
      },
      "subtitle": {
        "de": "Foto → KI → Google Drive",
        "en": "Photo → AI → Google Drive"
      },
      "description": {
        "de": "Foto von Quittung oder Rechnung machen → KI extrahiert Datum, Betrag, Händler → Beleg wird automatisch im richtigen Monatsordner abgelegt.",
        "en": "Take a photo of receipt or invoice → AI extracts date, amount, vendor → Receipt is automatically stored in the correct monthly folder."
      },
      "tags": [
        {
          "accent": "red",
          "label": "OpenAI Vision"
        },
        {
          "accent": "sky",
          "label": "Google Drive"
        },
        {
          "accent": "sky",
          "label": "Shortcut"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "openai",
        "apple"
      ]
    },
    {
      "id": "rechnungsscanner",
      "section": "weiteres",
      "icon": "🧾",
      "accent": "red",
      "title": {
        "de": "Rechnungs-Scanner",
        "en": "Invoice Scanner"
      },
      "subtitle": {
        "de": "Mail → Erkennung → Ablage",
        "en": "Email → Recognition → Storage"
      },
      "description": {
        "de": "Erkennt Rechnungen in E-Mails automatisch, extrahiert Datum und Betrag per KI und sortiert sie direkt in den richtigen Buchhaltungsordner.",
        "en": "Automatically recognizes invoices in emails, extracts date and amount via AI and sorts them directly into the correct accounting folder."
      },
      "tags": [
        {
          "accent": "red",
          "label": "OpenAI Vision"
        },
        {
          "accent": "sky",
          "label": "Google Drive"
        },
        {
          "accent": "marine",
          "label": "Outlook"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "openai",
        "ms365"
      ]
    },
    {
      "id": "teamswebhook",
      "section": "weiteres",
      "icon": "🔄",
      "accent": "marine",
      "title": {
        "de": "Teams-Webhook Refresh",
        "en": "Teams-Webhook Refresh"
      },
      "subtitle": {
        "de": "n8n → Teams API · Alle 12h",
        "en": "n8n → Teams API · Every 12h"
      },
      "description": {
        "de": "Automatischer Restart der n8n-zu-Teams-Verbindung alle 12 Stunden. Workflows deaktivieren, 5 Sek. warten, reaktivieren – mit Erfolgs-/Fehlerprüfung.",
        "en": "Automatic restart of the n8n-to-Teams connection every 12 hours. Deactivate workflows, wait 5 sec, reactivate – with success/error checking."
      },
      "tags": [
        {
          "accent": "marine",
          "label": "Teams"
        },
        {
          "accent": "red",
          "label": "n8n"
        },
        {
          "accent": "marine",
          "label": "Scheduled"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "n8n",
        "ms365"
      ]
    },
    {
      "id": "kontaktesync",
      "section": "weiteres",
      "icon": "👥",
      "accent": "grad",
      "title": {
        "de": "Kontakte-Sync",
        "en": "Contacts Sync"
      },
      "subtitle": {
        "de": "LinkedIn → Kontakte säubern",
        "en": "LinkedIn → Clean Contacts"
      },
      "description": {
        "de": "Kontakte automatisch mit LinkedIn abgleichen. Scrapt Profilbilder, aktuelle Titel und Unternehmen.",
        "en": "Automatically sync contacts with LinkedIn. Scrapes profile pictures, current titles and companies."
      },
      "tags": [
        {
          "accent": "sky",
          "label": "LinkedIn"
        },
        {
          "accent": "red",
          "label": "Scraping"
        },
        {
          "accent": "marine",
          "label": "Kontakte"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "other"
      ]
    },
    {
      "tags": [
        {
          "accent": "red",
          "label": "Claude"
        },
        {
          "accent": "marine",
          "label": "ChatGPT"
        },
        {
          "accent": "sky",
          "label": "Setup"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "id": "userpreferences",
      "section": "individual",
      "icon": "👤",
      "accent": "grad",
      "title": {
        "de": "User Preferences",
        "en": "User preferences"
      },
      "subtitle": {
        "de": "Einmal hinterlegt, wirkt überall",
        "en": "Set once, applies everywhere"
      },
      "description": {
        "de": "Rolle, Arbeitsweise und Kommunikationsstil einmal zentral hinterlegen. Wirkt in jedem Chat, ohne dass du es wiederholen musst – der günstigste Qualitätssprung überhaupt.",
        "en": "Set your role, way of working and communication style once, centrally. It applies in every chat without repeating yourself – the cheapest quality jump there is."
      },
      "tools": [
        "claude",
        "openai"
      ]
    },
    {
      "tags": [
        {
          "accent": "red",
          "label": "Kontext"
        },
        {
          "accent": "red",
          "label": "Wiederverwendung"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "id": "projects",
      "section": "individual",
      "icon": "📂",
      "accent": "red",
      "title": {
        "de": "Projects",
        "en": "Projects"
      },
      "subtitle": {
        "de": "Abgegrenzte Wissensräume pro Thema",
        "en": "Separate knowledge spaces per topic"
      },
      "description": {
        "de": "Pro Thema ein eigener Raum mit eigenen Instructions und hinterlegten Dateien. Kein Erklären des Kontexts bei jedem neuen Chat – und keine Vermischung zwischen Themen.",
        "en": "One space per topic with its own instructions and attached files. No re-explaining context in every new chat – and no bleed between topics."
      },
      "tools": [
        "other"
      ]
    },
    {
      "tags": [
        {
          "accent": "red",
          "label": "Skills"
        },
        {
          "accent": "red",
          "label": "Automatik"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "mittel",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "id": "skills",
      "section": "individual",
      "icon": "🧩",
      "accent": "grad",
      "title": {
        "de": "Claude Skills",
        "en": "Claude skills"
      },
      "subtitle": {
        "de": "Fähigkeiten, die Claude selbst zieht",
        "en": "Capabilities Claude pulls in itself"
      },
      "description": {
        "de": "Wiederverwendbare Fähigkeiten, die automatisch greifen, wenn das Thema passt. Beispiel: ein Corporate-Design-Skill, der auf Zuruf CI-konforme Decks baut – ohne dass ich die Regeln jedes Mal erkläre.",
        "en": "Reusable capabilities that kick in automatically when the topic fits. Example: a corporate-design skill that builds CI-compliant decks on request – without me explaining the rules each time."
      },
      "tools": [
        "claude"
      ]
    },
    {
      "tags": [
        {
          "accent": "red",
          "label": "Kontinuität"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "id": "memory",
      "section": "individual",
      "icon": "🧠",
      "accent": "red",
      "title": {
        "de": "Memory",
        "en": "Memory"
      },
      "subtitle": {
        "de": "Kontext über Chats hinweg",
        "en": "Context across chats"
      },
      "description": {
        "de": "Claude merkt sich Vorlieben und Projektstände auch über einzelne Unterhaltungen hinaus. Weniger Wiederholung, mehr Kontinuität.",
        "en": "Claude remembers preferences and project state beyond individual conversations. Less repetition, more continuity."
      },
      "tools": [
        "claude"
      ]
    },
    {
      "tags": [
        {
          "accent": "sky",
          "label": "Qualität"
        },
        {
          "accent": "sky",
          "label": "Transkription"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "id": "namenslisten",
      "section": "individual",
      "icon": "✏️",
      "accent": "sky",
      "title": {
        "de": "Eigennamen- & Stilkorrekturlisten",
        "en": "Name & style correction lists"
      },
      "subtitle": {
        "de": "Feste Schreibweisen für Firmen, Marken, Personen",
        "en": "Fixed spellings for companies, brands, people"
      },
      "description": {
        "de": "Eine gepflegte Liste korrekter Schreibweisen verhindert rund 90 % der Nacharbeit bei Transkripten und Protokollen. Der unscheinbarste Baustein mit der größten Wirkung auf die Qualität.",
        "en": "A maintained list of correct spellings prevents roughly 90% of the rework on transcripts and minutes. The least glamorous building block with the biggest impact on quality."
      },
      "tools": [
        "other"
      ]
    },
    {
      "tags": [
        {
          "accent": "marine",
          "label": "Templates"
        },
        {
          "accent": "marine",
          "label": "Meetings"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "id": "promptvorlagen",
      "section": "individual",
      "icon": "📋",
      "accent": "marine",
      "title": {
        "de": "Prompt-Vorlagen",
        "en": "Prompt templates"
      },
      "subtitle": {
        "de": "z. B. die 5-Block-Protokollstruktur",
        "en": "e.g. the five-block minutes structure"
      },
      "description": {
        "de": "Feste Strukturen statt Formulieren bei null. Beispiel Protokoll: Kopfdaten, Zusammenfassung, Kernaussagen, Entscheidungen, Next Steps mit WAS – WER – BIS WANN.",
        "en": "Fixed structures instead of starting from scratch. Minutes example: header data, summary, key points, decisions, next steps with WHAT – WHO – BY WHEN."
      },
      "tools": [
        "other"
      ]
    },
    {
      "tags": [
        {
          "accent": "red",
          "label": "Python"
        },
        {
          "accent": "red",
          "label": "Reproduzierbar"
        },
        {
          "accent": "marine",
          "label": "CI"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "id": "scriptprinzip",
      "section": "generatoren",
      "icon": "⚙️",
      "accent": "grad",
      "title": {
        "de": "Prinzip: Script statt Freihand",
        "en": "Principle: script instead of freehand"
      },
      "subtitle": {
        "de": "KI schreibt Inhalt, das Script setzt Layout",
        "en": "AI writes content, the script sets layout"
      },
      "description": {
        "de": "Ein Python-Generator arbeitet auf einer echten Master-Vorlage. Die KI liefert nur den Inhalt, das Layout kommt aus dem Script. Ergebnis: gleicher Aufruf, gleiche Vorlage, immer identisches Resultat – prüfbar statt zufällig.",
        "en": "A Python generator works on a real master template. The AI only supplies the content, the layout comes from the script. Result: same call, same template, identical output every time – verifiable instead of random."
      },
      "tools": [
        "other"
      ]
    },
    {
      "tags": [
        {
          "accent": "marine",
          "label": "PowerPoint"
        },
        {
          "accent": "red",
          "label": "Skill"
        },
        {
          "accent": "red",
          "label": "python-pptx"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "id": "deckgenerator",
      "section": "generatoren",
      "icon": "📊",
      "accent": "grad",
      "title": {
        "de": "Deck-Generator (Corporate Design)",
        "en": "Deck generator (corporate design)"
      },
      "subtitle": {
        "de": "Aufruf über ein Claude Skill",
        "en": "Called via a Claude skill"
      },
      "description": {
        "de": "Layouts, Farben, Typografie und Seitenzahlen sind im Generator fest verdrahtet, nicht im Prompt. Claude ruft ihn über ein Skill auf und liefert nur die Inhalte – das Deck ist damit immer CI-konform.",
        "en": "Layouts, colors, typography and page numbers are hard-wired into the generator, not the prompt. Claude calls it via a skill and only supplies content – so the deck is always CI-compliant."
      },
      "tools": [
        "claude",
        "ms365"
      ]
    },
    {
      "tags": [
        {
          "accent": "marine",
          "label": "Excel"
        },
        {
          "accent": "red",
          "label": "openpyxl"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "id": "excelgenerator",
      "section": "generatoren",
      "icon": "📈",
      "accent": "red",
      "title": {
        "de": "Excel-Generatoren",
        "en": "Excel generators"
      },
      "subtitle": {
        "de": "Bewertungsmatrizen & Analyse-Workbooks",
        "en": "Scoring matrices & analysis workbooks"
      },
      "description": {
        "de": "Workbooks werden per Script erzeugt statt zusammengeklickt – inklusive Formeln, Formatierung und automatisch erzeugter Diagramme. Nachvollziehbar und jederzeit identisch wiederholbar.",
        "en": "Workbooks are generated by script instead of clicked together – including formulas, formatting and automatically created charts. Traceable and repeatable at any time."
      },
      "tools": [
        "ms365"
      ]
    },
    {
      "tags": [
        {
          "accent": "marine",
          "label": "GitHub"
        },
        {
          "accent": "marine",
          "label": "Versionierung"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "mittel",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "id": "scripthosting",
      "section": "generatoren",
      "icon": "🔗",
      "accent": "marine",
      "title": {
        "de": "Script-Hosting per GitHub Raw",
        "en": "Script hosting via GitHub raw"
      },
      "subtitle": {
        "de": "Kein Upload je Session",
        "en": "No upload per session"
      },
      "description": {
        "de": "Der Generator liegt versioniert im Repository und wird bei Bedarf direkt geladen. Kein Datei-Upload in jeder Sitzung, und alle arbeiten automatisch mit derselben aktuellen Version.",
        "en": "The generator lives versioned in the repository and is loaded directly when needed. No file upload every session, and everyone automatically works with the same current version."
      },
      "tools": [
        "other"
      ]
    },
    {
      "tags": [
        {
          "accent": "sky",
          "label": "Canva"
        },
        {
          "accent": "red",
          "label": "MCP"
        },
        {
          "accent": "marine",
          "label": "Templates"
        }
      ],
      "links": [],
      "status": "beta",
      "effort": "mittel",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "id": "canvamcp",
      "section": "visuals",
      "icon": "🖌️",
      "accent": "grad",
      "title": {
        "de": "Canva MCP",
        "en": "Canva MCP"
      },
      "subtitle": {
        "de": "Claude greift direkt auf Canva zu",
        "en": "Claude accesses Canva directly"
      },
      "description": {
        "de": "Foto in den Upload-Ordner legen, Claude holt die Asset-ID, setzt das Bild in das Brand Template und exportiert das PNG. Kein manuelles Klicken mehr im Editor.",
        "en": "Drop a photo into the upload folder, Claude fetches the asset ID, places it in the brand template and exports the PNG. No more manual clicking in the editor."
      },
      "tools": [
        "claude"
      ]
    },
    {
      "tags": [
        {
          "accent": "sky",
          "label": "Gemini"
        },
        {
          "accent": "sky",
          "label": "Visuals"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "id": "geminivisuals",
      "section": "visuals",
      "icon": "🔷",
      "accent": "sky",
      "title": {
        "de": "Gemini für Infografiken",
        "en": "Gemini for infographics"
      },
      "subtitle": {
        "de": "Stärken bei Bild und Erklärgrafik",
        "en": "Strong at images and explanatory graphics"
      },
      "description": {
        "de": "Für Bildbearbeitung und visuelle Erklärgrafiken bislang das beste Ergebnis. Wird bewusst parallel zu den anderen Modellen genutzt, nicht statt ihnen.",
        "en": "So far the best results for image editing and visual explanatory graphics. Used deliberately alongside the other models, not instead of them."
      },
      "tools": [
        "other"
      ]
    },
    {
      "tags": [
        {
          "accent": "marine",
          "label": "Qualität"
        },
        {
          "accent": "marine",
          "label": "Standards"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "id": "bildstandards",
      "section": "visuals",
      "icon": "📐",
      "accent": "marine",
      "title": {
        "de": "Bildstandards",
        "en": "Image standards"
      },
      "subtitle": {
        "de": "16:9 immer in 4K anlegen",
        "en": "Always create 16:9 in 4K"
      },
      "description": {
        "de": "16:9 grundsätzlich als 3840 × 2160 erzeugen und nur herunterskalieren, nie hochrechnen. Klingt pedantisch, entscheidet aber darüber, ob ein Bild auf der großen Leinwand noch trägt.",
        "en": "Always create 16:9 at 3840 × 2160 and only scale down, never up. Sounds pedantic, but it decides whether an image still holds up on a big screen."
      },
      "tools": [
        "other"
      ]
    },
    {
      "tags": [
        {
          "accent": "red",
          "label": "Design"
        },
        {
          "accent": "red",
          "label": "Prototyping"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "klein",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "id": "claudedesign",
      "section": "visuals",
      "icon": "🎨",
      "accent": "grad",
      "title": {
        "de": "Claude Design",
        "en": "Claude design"
      },
      "subtitle": {
        "de": "Mockups & Prototypen im Chat",
        "en": "Mockups & prototypes in chat"
      },
      "description": {
        "de": "Layout-Entwürfe, Mockups und klickbare Prototypen direkt im Chat entstehen lassen, statt sie vorher zu beschreiben. Ideal, um früh zu sehen statt lange zu diskutieren.",
        "en": "Have layout drafts, mockups and clickable prototypes created right in chat instead of describing them first. Ideal for seeing early rather than discussing long."
      },
      "tools": [
        "claude"
      ]
    },
    {
      "tags": [
        {
          "accent": "red",
          "label": "Meta"
        },
        {
          "accent": "red",
          "label": "Claude Code"
        },
        {
          "accent": "marine",
          "label": "GitHub"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "gross",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "id": "dashboardmeta",
      "section": "selbstgebaut",
      "icon": "🪞",
      "accent": "grad",
      "title": {
        "de": "Dieses Dashboard",
        "en": "This dashboard"
      },
      "subtitle": {
        "de": "Konzept, Code und Deployment mit Claude Code",
        "en": "Concept, code and deployment with Claude Code"
      },
      "description": {
        "de": "Die Seite, auf der du gerade bist: HTML, CSS und JavaScript, versioniert über GitHub, automatisch deployt beim Push. Vollständig mit Claude Code entstanden und iterativ erweitert.",
        "en": "The page you are on right now: HTML, CSS and JavaScript, versioned via GitHub, deployed automatically on push. Built entirely with Claude Code and extended iteratively."
      },
      "tools": [
        "claude"
      ]
    },
    {
      "tags": [
        {
          "accent": "red",
          "label": "Web-App"
        },
        {
          "accent": "sky",
          "label": "Lernen"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "mittel",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "id": "lernapp",
      "section": "selbstgebaut",
      "icon": "🎓",
      "accent": "red",
      "title": {
        "de": "Lern-Apps",
        "en": "Learning apps"
      },
      "subtitle": {
        "de": "Trainings-App für Prüfungsfragebögen",
        "en": "Training app for exam question sets"
      },
      "description": {
        "de": "Interaktive App mit Karteikarten, Fortschrittsanzeige und Wiederholung falsch beantworteter Fragen. Bestes Beispiel dafür, wie schnell aus einer Idee eine fertige App wird.",
        "en": "Interactive app with flashcards, progress tracking and repetition of wrongly answered questions. The best example of how quickly an idea turns into a finished app."
      },
      "tools": [
        "other"
      ]
    },
    {
      "tags": [
        {
          "accent": "marine",
          "label": "Excel"
        },
        {
          "accent": "marine",
          "label": "Analyse"
        }
      ],
      "links": [],
      "status": "live",
      "effort": "mittel",
      "difficulty": null,
      "timeSaved": null,
      "updated": "08/2026",
      "id": "analyseworkbooks",
      "section": "selbstgebaut",
      "icon": "📊",
      "accent": "marine",
      "title": {
        "de": "Analyse-Workbooks",
        "en": "Analysis workbooks"
      },
      "subtitle": {
        "de": "Iterativ gebaute Excel-Modelle",
        "en": "Excel models built iteratively"
      },
      "description": {
        "de": "Auswertungslogik, Kennzahlen und Diagramme entstehen im Dialog: beschreiben, prüfen, nachschärfen. Deutlich schneller als Formeln selbst zusammenzusuchen.",
        "en": "Analysis logic, key figures and charts emerge in dialogue: describe, check, refine. Considerably faster than piecing formulas together yourself."
      },
      "tools": [
        "ms365"
      ]
    },
    {
      "id": "websites",
      "section": "selbstgebaut",
      "icon": "🌐",
      "accent": "marine",
      "status": "live",
      "title": {
        "de": "Websites & One-Pager",
        "en": "Websites & one-pagers"
      },
      "subtitle": {
        "de": "Mehrsprachig, responsive, selbst deployt",
        "en": "Multilingual, responsive, self-deployed"
      },
      "description": {
        "de": "One-Pager in Deutsch und Englisch – von Konzept und Text über Layout bis zum Deployment selbst gebaut. Inklusive Favicon, Social-Preview und Dark Mode. Diese Seite hier ist eines dieser Projekte.",
        "en": "One-pagers in German and English – built end to end, from concept and copy through layout to deployment. Including favicon, social preview and dark mode. This page is one of those projects."
      },
      "tags": [
        {
          "accent": "marine",
          "label": "HTML/CSS"
        },
        {
          "accent": "marine",
          "label": "GitHub"
        },
        {
          "accent": "red",
          "label": "Claude Code"
        }
      ],
      "links": [],
      "difficulty": null,
      "effort": "gross",
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "claude",
        "other"
      ]
    },
    {
      "id": "decks",
      "section": "selbstgebaut",
      "icon": "🎤",
      "accent": "grad",
      "status": "live",
      "title": {
        "de": "Pitch- & Slide-Decks",
        "en": "Pitch & slide decks"
      },
      "subtitle": {
        "de": "Präsentationen als Web-App statt PowerPoint",
        "en": "Presentations as a web app instead of PowerPoint"
      },
      "description": {
        "de": "Decks, die im Browser laufen: eigene Navigation, sauberes Layout auf jedem Bildschirm und ein Link statt einer Datei im Anhang. Praktisch für Pitches und Vorträge – und jederzeit aktualisierbar, ohne neu zu versenden.",
        "en": "Decks that run in the browser: custom navigation, clean layout on any screen and a link instead of a file attachment. Handy for pitches and talks – and updatable at any time without resending."
      },
      "tags": [
        {
          "accent": "red",
          "label": "Web-App"
        },
        {
          "accent": "marine",
          "label": "Präsentation"
        },
        {
          "accent": "red",
          "label": "Claude Code"
        }
      ],
      "links": [],
      "difficulty": null,
      "effort": "gross",
      "timeSaved": null,
      "updated": "08/2026",
      "tools": [
        "claude",
        "other"
      ]
    }
  ]
}

if (typeof window !== 'undefined') window.SITE = SITE;
if (typeof module !== 'undefined') module.exports = SITE;
