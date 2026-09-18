// ⚠️ PLACEHOLDER IMAGES — swap the files in src/Assets/images/, keep the filenames.
import imgCorridor from "../Assets/images/bg-01-hero-corridor.webp";
import imgServices from "../Assets/images/bg-02-services-boardroom.webp";
import imgCta from "../Assets/images/bg-03-cta-sunset.webp";
import imgSunset from "../Assets/images/07-spare-boardroom-sunset.webp";
import imgWalking from "../Assets/images/01-hero-founder-walking.webp";
import imgOffice from "../Assets/images/02-about-banner-office.webp";
import imgOpenplan from "../Assets/images/bg-06-careers-openplan.webp";
import imgDark from "../Assets/images/bg-04-testimonial-dark.webp";
import imgDesk from "../Assets/images/bg-05-hero-mobile.webp";
// gallery
import galPortrait from "../Assets/images/03-founder-portrait.webp";
import galBoardroom from "../Assets/images/06-contact-boardroom.webp";
import galTeam from "../Assets/images/08-spare-team-openplan.webp";
import galThumbA from "../Assets/images/10-thumb-portrait-square.webp";
import galThumbB from "../Assets/images/09-thumb-headshot-square.webp";

export const site = {
  name: "Ashwath Mopathi",
  role: "Entrepreneur · Melbourne",
};

export const nav = [
  { label: "About", id: "about" },
  { label: "Journey", id: "journey" },
  { label: "Goals", id: "goals" },
  { label: "Gallery", id: "gallery" },
  { label: "Ideology", id: "ideology" },
  { label: "Contact", id: "contact" },
];

// focusMobile / focusDesktop = CSS object-position, tuned per photo so his face
// and body both stay in frame. First number left→right, second top→bottom.
export const hero = {
  tagline: "Builds quietly. Lets the work speak.",
  quote: "Give value first, respect everyone, and the rest takes care of itself.", // TODO: his own words
  slides: [
    { src: imgCorridor, alt: "Ashwath Mopathi", focusMobile: "33% 50%", focusDesktop: "33% 50%" },
    { src: imgSunset,   alt: "Ashwath Mopathi", focusMobile: "50% 50%", focusDesktop: "50% 50%" },
    { src: imgOffice,   alt: "Ashwath Mopathi", focusMobile: "50% 40%", focusDesktop: "50% 40%" },
    { src: imgCta,      alt: "Ashwath Mopathi", focusMobile: "55% 45%", focusDesktop: "55% 45%" },
    { src: imgWalking,  alt: "Ashwath Mopathi", focusMobile: "32% 50%", focusDesktop: "32% 50%" },
    { src: imgServices, alt: "Ashwath Mopathi", focusMobile: "50% 45%", focusDesktop: "50% 45%" },
  ],
};

export const about = {
  heading: "About",
  lede: "He arrived in a city where he knew almost no one, carrying a degree and no particular map for what came next.",
  paragraphs: [
    "So he took the work that was going. He learned the systems nobody else wanted to learn, and stayed calm in rooms where everything was going wrong. While other people talked about what they would build one day, he had quietly started building it.",
    "Two decades on, several businesses run under his name across Australia — most of them handled day to day by people he trained first and trusted after. He will tell you the people are the achievement. The rest is paperwork.",
    "Ask him about any of it and he will change the subject. That, more than anything, is the man.",
  ],
  marks: [
    { value: "20+", label: "Years in Australia" },
    { value: "Several", label: "Businesses built" },
    { value: "Quietly", label: "All of it" },
  ],
};

export const journey = {
  heading: "Journey",
  sub: "Employee to owner, one deliberate step at a time.",
  background: imgDesk,
  items: [
    { year: "2006 – 2010", title: "The degree", text: "An engineering degree in computer science, in India." },
    { year: "2012 – 2013", title: "A new country", text: "Moves to Melbourne for a master's in information technology, majoring in security." },
    { year: "2014 – 2015", title: "Teaching", text: "Teaches IT to students here — the first time he is the one bringing other people up." },
    { year: "2015", title: "Corporate IT", text: "Handles critical incidents for large companies. Learns to stay calm while everything is on fire, and to be the person others call." },
    { year: "2018 – 2019", title: "The turn", text: "Starts building for himself. The first ventures of his own, quietly, while still holding down the job." },
    { year: "2021", title: "All in", text: "Takes on running an operation full-time, with the other ventures growing beside it." },
    { year: "Today", title: "Owner", text: "Several businesses across Australia, most of them run day to day by people he trained." },
  ],
};

export const goals = {
  heading: "What comes next",
  sub: "He doesn't announce plans. These are the ones worth knowing about.",
  background: imgOpenplan,
  items: [
    {
      title: "Something nobody here has built",
      text: "He is working on an idea he keeps close to his chest. When it lands it won't look like anything already on the market, and that is exactly the point.",
    },
    {
      title: "More owners, not more staff",
      text: "The plan was never to be the biggest. It was to put as many people as possible into business for themselves.",
    },
    {
      title: "Built to run without him",
      text: "Anything that needs him in the room every day isn't finished yet. The goal is time that is actually his.",
    },
  ],
};

export const gallery = {
  heading: "Gallery",
  photos: [
    { src: galPortrait,  alt: "Ashwath Mopathi", size: "tall" },
    { src: galBoardroom, alt: "Ashwath Mopathi", size: "wide" },
    { src: galTeam,      alt: "Ashwath Mopathi", size: "tall" },
    { src: galThumbA,    alt: "Ashwath Mopathi", size: "square" },
    { src: galThumbB,    alt: "Ashwath Mopathi", size: "square" },
  ],
};

export const ideology = {
  heading: "What he stands on",
  sub: "Four rules, never written down anywhere until now.",
  background: imgDark,
  items: [
    {
      title: "Respect, both directions",
      text: "He treats the newest person in the room exactly as he treats the oldest. He expects the same back, and it is the one thing he is strict about.",
    },
    {
      title: "Value first",
      text: "He gives before he is asked, and long before there is anything in it for him. It has never once cost him.",
    },
    {
      title: "Train them, then trust them",
      text: "He teaches somebody the whole job, hands it over, and gets out of the way. People stay because of it.",
    },
    {
      title: "No noise",
      text: "No announcements, no audience. If you know what he has built, it's because you were close enough to see it.",
    },
  ],
};

// TODO: replace with his real details
export const contact = {
  heading: "Get in touch",
  line: "Open to a conversation, not to a crowd.",
  email: "hello@example.com",
  phone: "+61 400 000 000",
  location: "Melbourne, Australia",
  background: imgCta,
};

// TODO: replace with his real details
export const footer = {
  tagline: "Entrepreneur, Melbourne.",
  links: [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Email", href: "mailto:hello@example.com" },
  ],
  note: "Site by Ajay.",
};