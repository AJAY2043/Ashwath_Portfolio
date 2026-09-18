// ⚠️ PLACEHOLDER IMAGES — swap the files in src/Assets/images/, keep the filenames.
import imgCorridor from "../Assets/images/bg-01-hero-corridor.jpg";
import imgServices from "../Assets/images/bg-02-services-boardroom.jpg";
import imgCta from "../Assets/images/bg-03-cta-sunset.jpg";
import imgSunset from "../Assets/images/07-spare-boardroom-sunset.jpg";
import imgWalking from "../Assets/images/01-hero-founder-walking.jpg";
import imgOffice from "../Assets/images/02-about-banner-office.jpg";
import imgOpenplan from "../Assets/images/bg-06-careers-openplan.jpg";
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
  role: "Melbourne, Australia",
};

export const nav = [
  { label: "About", id: "about" },
  { label: "Journey", id: "journey" },
  { label: "Goals", id: "goals" },
  { label: "Gallery", id: "gallery" },
  { label: "Ideology", id: "ideology" },
  { label: "Contact", id: "contact" },
];

// the scrolling greeting line under the navbar
export const ticker = [
  "Welcome",
  "Hi, how are you?",
  "Good to see you here",
  "Hope your day is going well",
  "Take your time, have a look around",
  "Warm wishes",
];

// focusMobile / focusDesktop = CSS object-position.
// Second number = how far down the photo to centre on. Smaller shows more of the top.
export const hero = {
  tagline: "Quiet work, done properly.",
  quote: "Give value & respect first, and the rest takes care of itself.",
  slides: [
    { src: imgCorridor, alt: "Ashwath Mopathi", focusMobile: "33% 22%", focusDesktop: "33% 28%" },
    { src: imgSunset,   alt: "Ashwath Mopathi", focusMobile: "50% 22%", focusDesktop: "50% 28%" },
    { src: imgOffice,   alt: "Ashwath Mopathi", focusMobile: "50% 22%", focusDesktop: "50% 25%" },
    { src: imgCta,      alt: "Ashwath Mopathi", focusMobile: "55% 22%", focusDesktop: "55% 28%" },
    { src: imgWalking,  alt: "Ashwath Mopathi", focusMobile: "32% 22%", focusDesktop: "32% 28%" },
    { src: imgServices, alt: "Ashwath Mopathi", focusMobile: "50% 22%", focusDesktop: "50% 28%" },
  ],
};

export const about = {
  heading: "About",
  lede: "He arrived in a city where he knew almost no one, carrying a degree and no particular map for what came next.",
  paragraphs: [
    "So he took the work that was going, and did it properly. He learned the things nobody else wanted to learn, and stayed calm in rooms where everything was going wrong.",
    "While other people talked about what they would do one day, he was already doing it — early mornings, long weeks, no announcements.",
    "Two decades later, plenty of people owe him a start they never had to ask twice for. He will tell you that is the part worth counting.",
    "Ask him about any of it and he will change the subject. That, more than anything, is the man.",
  ],
  marks: [
    { value: "20+", label: "Years of work" },
    { value: "Daily", label: "Shows up" },
    { value: "Quietly", label: "All of it" },
  ],
};

export const journey = {
  heading: "Journey",
  sub: "One step at a time, none of them shortcuts.",
  background: imgDesk,
  items: [
    { year: "2006 – 2010", title: "The degree", text: "An engineering degree in computer science, back home in India." },
    { year: "2012 – 2013", title: "A new country", text: "Moves to Melbourne for a master's in information technology, majoring in security." },
    { year: "2014 – 2015", title: "Teaching", text: "Teaches students here — the first time he is the one bringing other people up." },
    { year: "2015", title: "Under pressure", text: "Handles critical incidents for large organisations. Learns to stay calm while everything is on fire, and to be the person others call." },
    { year: "2018 – 2019", title: "On his own", text: "Starts building something of his own, quietly, while still holding down the job." },
    { year: "2021", title: "All in", text: "Goes full-time on his own work, with everything else growing beside it." },
    { year: "Today", title: "Still going", text: "Most of what he started now runs through people he trained himself." },
  ],
};

export const goals = {
  heading: "What comes next",
  sub: "He doesn't announce plans. These are the ones worth knowing about.",
  background: imgOpenplan,
  items: [
    {
      title: "Something nobody has tried here",
      text: "He is working on an idea he keeps close to his chest. When it lands it won't look like anything around it, and that is exactly the point.",
    },
    {
      title: "Take people with him",
      text: "The aim was never to stand alone at the top. It was to hand as many people as possible a way up.",
    },
    {
      title: "Built to last without him",
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
      title: "Teach them, then trust them",
      text: "He shows somebody the whole job, hands it over, and gets out of the way. People stay because of it.",
    },
    {
      title: "No noise",
      text: "No announcements, no audience. If you know what he has done, it's because you were close enough to see it.",
    },
  ],
};

// TODO: replace with his real number and email
export const contact = {
  heading: "Get in touch",
  line: "Open to a conversation, not to a crowd.",
  whatsapp: "+61 000 000 000",
  whatsappMessage: "Hi Ashwath, I came across your website.",
  email: "hello@example.com",
  location: "Melbourne, Australia",
  background: imgCta,
};

export const footer = {
  tagline: "Melbourne, Australia.",
  links: [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Email", href: "mailto:hello@example.com" },
  ],
  note: "Site by Ajay.",
};