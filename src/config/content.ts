// Centralized content configuration for non-project assets
// This is the single place for brands, team, branding assets,
// section heroes, page-level content, and other galleries.

// Single source of truth for the CDN base URL
export const CDN_BASE = 'https://d1c2534b1et22s.cloudfront.net';

export const brandingAssets = {
  logoLight: `${CDN_BASE}/logo-cinedise-light.png`,
  logoDark: `${CDN_BASE}/logo-cinedise-dark.png`,
  preloaderLogo: `${CDN_BASE}/logo-cinedise-light.png`,
  cursorImage: `${CDN_BASE}/cursor.jpg`,
} as const;

export const brands = [
  {
    name: 'Bosch',
    websiteUrl: 'https://www.bosch.com/',
    logoUrl: `${CDN_BASE}/brands/bosch.png`,
  },
  {
    name: 'FIFA',
    websiteUrl: 'https://www.fifa.com/',
    logoUrl: `${CDN_BASE}/brands/fifa.png`,
  },
  {
    name: 'Zee',
    websiteUrl: 'https://www.zee.com/',
    logoUrl: `${CDN_BASE}/brands/zee.png`,
  },
  {
    name: 'HDFC Bank',
    websiteUrl: 'https://www.hdfcbank.com/',
    logoUrl: `${CDN_BASE}/brands/hdfc.png`,
  },
  {
    name: 'IDFC FIRST Bank',
    websiteUrl: 'https://www.idfcfirstbank.com/',
    logoUrl: `${CDN_BASE}/brands/idfc.png`,
  },
  {
    name: 'Imagicaa',
    websiteUrl: 'https://www.imagicaaworld.com/',
    logoUrl: `${CDN_BASE}/brands/imagica.png`,
  },
  {
    name: 'Power Recover',
    websiteUrl: 'https://powerecover.eu/',
    logoUrl: `${CDN_BASE}/brands/pr.png`,
  },
  {
    name: 'Vegalux',
    websiteUrl: 'https://www.vegaluxsystem.com/',
    logoUrl: `${CDN_BASE}/brands/vega.png`,
  },
  {
    name: 'Drope Tech',
    websiteUrl:
      'https://drope.tech/?srsltid=AfmBOooZtTaAFdphIgI0MT7ya27nPgTiFmNiCZeLp98uejIwLpPT-3D6',
    logoUrl: `${CDN_BASE}/brands/drope.png`,
  },
  {
    name: 'Amity University',
    websiteUrl: 'https://www.amity.edu/',
    logoUrl: `${CDN_BASE}/brands/amity.png`,
  },
] as const;

export const team = [
  {
    name: 'Kunal Mahto',
    role: 'CEO & Co-Founder',
    description:
      "CEO, Co-Founder, Manager Extraordinaire, and the unsung hero who keeps the chaos from becoming a full-blown circus. When he's not saving the team from total management meltdowns, he's behind the camera or deep into editing mode (probably with three cups of coffee and a playlist that screams focus). Kunal's motto? \"Stay calm, stay creative — and make it look easy while you're at it.\"",
    imageUrl: `${CDN_BASE}/team/Kunal.jpg`,
  },
  {
    name: 'Suryadip Panda',
    role: 'CEO & Co-Founder (DOP)',
    description:
      "CEO, Co-Founder, DOP, Colorist and probably the guy who fixes the coffee machine too. When he's not busy building empires, he's behind the camera making magic happen (and occasionally tripping over tripods). Suryadip believes in working hard, dreaming bigger, and laughing through the chaos — because if you can't have fun while running the show, what's the point?",
    imageUrl: `${CDN_BASE}/team/Surya.jpg`,
  },
  {
    name: 'Sneha Maji',
    role: 'Editor',
    description:
      "Editor, emotional candle collector, and part-time speed ramping champion (seriously, she's probably still ramping as you read this). She edits with heart, lives with drama, and somehow manages to fight with her beloved dog Luna more than with actual people. If she's not lost in a timeline or talking to her dog like a human, you'll find her living her best life... probably inside a Dmart aisle, surrounded by snacks and scented candles.",
    imageUrl: `${CDN_BASE}/team/Sneha.jpg`,
  },
  {
    name: 'J B Roza',
    role: 'VFX Supervisor',
    description:
      "Visual Effects Supervisor who spends her days bossing around invisible monsters & fixing explosions frame by frame. She's wildly dedicated to her craft & equally dedicated to eating cake whenever possible. If she's not tweaking pixels, she's probably hunting for the next best dessert. If you see a perfect VFX shot & a missing slice of cake, Roza was there.",
    imageUrl: `${CDN_BASE}/team/Roza.jpg`,
  },
  {
    name: 'Noah',
    role: 'Motion & Web Designer',
    description:
      'Motion Designer, Web Developer, and the unofficial "Ease In, Ease Out" philosopher of the team (seriously, he probably animates his own coffee refills). Fueled by creativity, caffeine, and the occasional "wait, what does that Hindi word mean?" moment, Noah keeps the ideas flowing smoother than his playback renders. When he\'s not designing magic, he\'s at home being bossed around by his two cats — because even the most productive guy needs supervisors.',
    imageUrl: `${CDN_BASE}/team/Noah.jpg`,
  },
] as const;

// Additional content (section heroes, films, color, about, graphic design, etc.)
// can be moved here next, but this file already acts as the
// single source of truth for brands, team, and branding assets.
