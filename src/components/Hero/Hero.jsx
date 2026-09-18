import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { site, hero } from "../../data/content";
import "./Hero.css";

const SLIDE_MS = 6000;

const group = { hidden: {}, show: { transition: { staggerChildren: 0.042, delayChildren: 0.35 } } };

const letterIn = {
  hidden: { y: "0.9em", opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

const riseIn = {
  hidden: { y: 22, opacity: 0 },
  show: (d = 0) => ({ y: 0, opacity: 1, transition: { duration: 0.9, delay: d, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isWide, setIsWide] = useState(false);
  const touchX = useRef(null);
  const { scrollY } = useScroll();
  const fade = useTransform(scrollY, [0, 430], [1, 0]);
  const lift = useTransform(scrollY, [0, 430], [0, -40]);

  const count = hero.slides.length;
  const slide = hero.slides[index];

  useEffect(() => {
    const m = window.matchMedia("(min-width: 950px)");
    const sync = () => setIsWide(m.matches);
    sync();
    m.addEventListener("change", sync);
    return () => m.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => setIndex((i) => (i + 1) % count), SLIDE_MS);
    return () => clearTimeout(id);
  }, [index, count]);

  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };

  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 55) setIndex((i) => (dx < 0 ? (i + 1) % count : (i - 1 + count) % count));
    touchX.current = null;
  };

  return (
    <section className="hero" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="hero-stage">
        <AnimatePresence initial={false}>
          <motion.img
            key={index}
            src={slide.src}
            alt={slide.alt}
            className="hero-slide"
            style={{ "--fm": slide.focusMobile, "--fd": slide.focusDesktop }}
            initial={{ opacity: 0, scale: 1.07 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: SLIDE_MS / 1000 + 1.6, ease: "linear" },
            }}
          />
        </AnimatePresence>
      </div>

      <motion.div className="hero-inner shell" style={isWide ? { opacity: fade, y: lift } : undefined}>
        <motion.p className="hero-role" variants={riseIn} initial="hidden" animate="show" custom={0.15}>
          {site.role}
        </motion.p>

        <motion.h1 className="hero-name" variants={group} initial="hidden" animate="show" aria-label={site.name}>
          {Array.from(site.name).map((ch, i) => (
            <motion.span key={i} variants={letterIn} aria-hidden="true">
              {ch === " " ? "\u00A0" : ch}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          className="hero-rule"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.p className="hero-tagline" variants={riseIn} initial="hidden" animate="show" custom={1.3}>
          {hero.tagline}
        </motion.p>

        <motion.blockquote className="hero-quote" variants={riseIn} initial="hidden" animate="show" custom={1.55}>
          {hero.quote}
        </motion.blockquote>

        <div className="hero-dots">
          {hero.slides.map((s, i) => (
            <button key={i} onClick={() => setIndex(i)} aria-label={`Photo ${i + 1} of ${count}`}>
              <span className={i === index ? "is-active" : ""}>
                {i === index && <i key={index} style={{ animationDuration: `${SLIDE_MS}ms` }} />}
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="hero-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        aria-hidden="true"
      >
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }} />
      </motion.div>
    </section>
  );
}