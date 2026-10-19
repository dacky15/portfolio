// ============================================================================
//  YOUR CONTENT — EDIT THIS FILE
// ----------------------------------------------------------------------------
//  Everything on the site comes from here. Replace any [bracketed] placeholders.
//  You don't need to touch any other file to update your content.
// ============================================================================

export const profile = {
  firstName: 'Darshan',
  fullName: 'Darshan Patel',

  // Hero headline — the stroked text under "Hi, I'm an"
  role: 'AI Product Manager',

  // Hero one-liner
  heroLine:
    'I build AI products people can trust: from user problem to PRD to a shipped, eval-tested feature.',

  // About paragraph
  aboutText:
    'a Computer Engineering graduate from Gandhinagar, now pursuing my MBA at Nirma University. I founded and shipped CourtLegacy, a racket-sports app on Google Play, and I build AI features the PM way: talk to users, write the spec, define success with evals, then ship and measure.',

  location: 'Gandhinagar, Gujarat',
  email: 'darshanpatel15105@gmail.com',
  resumeUrl: '', // put resume.pdf in /public and set '/resume.pdf' to show the Resume link

  socials: {
    linkedin: 'https://www.linkedin.com/in/darshanpatel15',
    instagram: '', // optional
    github: 'https://github.com/Darshan00027',
  },

  // ---- HERO VIDEO --------------------------------------------------------
  // Your intro reel lives at: public/hero.mp4 (click "Play Reel" to play with sound)
  hasHeroVideo: true,
}

// Areas of expertise — shown as bold pills in the red About section
export const expertise = [
  'AI Product Management',
  'LLM Evals',
  'PRDs & Specs',
  'User Research',
  'Product Metrics',
  'Go-to-Market',
  'Claude & Gemini APIs',
  'Flutter · Firebase · Next.js',
]

// "How I work" header (the Services section)
export const processHeader = {
  eyebrow: 'How I work',
  title: 'How I take an AI product from problem to launch',
  subtitle:
    'A PM loop that treats evaluation as part of the spec, not an afterthought.',
}

// The 4 tilted cards the scroll-line connects
export const process = [
  {
    number: '01',
    title: 'Discover',
    text: 'Interview users about the last time the problem happened, not what they would do. Find the riskiest assumption.',
  },
  {
    number: '02',
    title: 'Spec',
    text: 'Write the PRD: goals, non-goals, metrics, guardrails, and what "good" means for the AI before any code.',
  },
  {
    number: '03',
    title: 'Build & Evaluate',
    text: 'Prototype with LLM tool use behind deterministic guardrails, scored on a code-graded eval set with a baseline.',
  },
  {
    number: '04',
    title: 'Ship & Learn',
    text: 'Launch, track a north-star metric with guardrails, and turn every real failure into a new eval case.',
  },
]

// ---- EXPERIENCE & HIGHLIGHTS -------------------------------------------
// The first entry (featured: true) is shown as a large detailed card.
export const experience = [
  {
    featured: true,
    tag: 'Internship',
    title: 'Junior Marketing Associate',
    org: 'Cuatro Labs',
    period: 'Apr 2026 – Jun 2026 · 3 mos',
    location: 'Gandhinagar, Gujarat · On-site',
    text: 'AI-driven marketing intern supporting the early-stage launch of ATOMA at Cuatro Labs.',
    bullets: [
      'Drove AI-powered marketing strategy and end-to-end execution.',
      'Built an AI-driven marketing automation tool to streamline campaigns.',
      'Managed end-to-end social media with AI-assisted content creation and performance optimization.',
      'Led influencer collaborations with data-driven metrics analysis.',
      'Crafted high-converting ad copy and directed creative ad strategy using AI tools.',
    ],
  },
  {
    tag: 'Education',
    title: 'MBA',
    org: 'Nirma University',
    period: 'Present',
    text: 'Pursuing my Master of Business Administration, building on an engineering foundation with strategy, marketing, and leadership.',
  },
  {
    tag: 'Initiative',
    title: 'CourtLegacy',
    org: 'Founder & Product Owner',
    text: 'Designed, built and launched a racket-sports scoring, rating and tournament app on Google Play as a solo founder.',
  },
  {
    tag: 'Volunteering',
    title: 'Volunteer Teacher',
    org: 'eVidyaloka Trust (NGO)',
    text: 'Taught and mentored students remotely, making quality education more accessible.',
  },
]

// Short highlight badges (certifications, achievements)
export const highlights = [
  'B.E. Computer Engineering',
  'Solo-launched app on Google Play',
  'Python for Data Science — NPTEL',
  'SGFI State-Level Cricket Player',
]

// ---- PROJECTS --------------------------------------------------------
// featured: true spans the full width.
export const projects = [
  {
    featured: true,
    tag: 'Consumer app · 0 → 1',
    title: 'CourtLegacy',
    role: 'Founder · PM, design and engineering',
    text: 'Live scoring, verified results, a Glicko-2 skill rating, tournaments and an AI coach for badminton, pickleball and tennis. Shipped solo on Google Play.',
    points: [
      'Opponent-verified results so the rating means something',
      'Glicko-2 rating that is honest about new and inactive players',
      'Moved the AI coach server-side with per-user cost limits before launch',
      'Closed testing with 12+ testers, then production rollout',
    ],
    links: [
      { label: 'Case study', href: 'https://github.com/Darshan00027/courtlegacy' },
      { label: 'PRD', href: 'https://github.com/Darshan00027/courtlegacy/blob/main/docs/PRD.md' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.darshan.courtlegacy' },
    ],
  },
  {
    tag: 'AI feature · eval-driven',
    title: 'AI Scheduling Assistant',
    role: 'PM + builder',
    text: 'Organisers describe a change in one sentence; Claude reschedules the tournament through tools, and a rules engine guarantees the day stays playable. Scored on a 30-case code-graded eval.',
    links: [{ label: 'Repo + eval', href: 'https://github.com/Darshan00027/ai-scheduling-assistant' }],
  },
  {
    tag: 'B2B internal tool',
    title: 'Atoma HR Portal',
    role: 'Product owner + developer · Cuatro Labs internship',
    text: 'HR for a field workforce: selfie + GPS check-in, live staff map, leave, expenses, assets and payroll. Built in about three weeks.',
    links: [{ label: 'Case study', href: 'https://github.com/Darshan00027/atoma-hr-portal' }],
  },
]

// Footer columns
export const footer = {
  services: ['AI Product Management', 'LLM Evals', 'Product Strategy'],
  experience: 'MBA @ Nirma University',
  availability: 'Based in Gandhinagar, India',
}

export const navLinks = ['Home', 'About', 'Projects', 'Experience', 'Services', 'Contact']
