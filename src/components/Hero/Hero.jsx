import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { site, hero } from "../../data/content";
import "./Hero.css";

const SLIDE_MS = 6000;

const nameGroup = { hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.3 } } };

const letterIn = {
  hidden: { y: "0.85em", opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const riseIn = {
  hidden: { y: 20, opacity: 0 },
  show: (d = 0) => ({ y: 0, opacity: 1, transition: { duration: 0.85, delay: d, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isWide, setIsWide] = useState(false);
  const touchX = useRef(null);

  const { scrollY } = useScroll();
  const fade = useTransform(scrollY, [0, 420], [1, 0]);

  const count = hero.slides.length;
  const slide = hero.slides[index];
  const words = site.name.split(" ");

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 950px)");
    const sync = () => setIsWide(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => setIndex((i) => (i + 1) % count), SLIDE_MS);
    return () => clearTimeout(id);
  }, [index, count]);

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) setIndex((i) => (dx < 0 ? (i + 1) % count : (i - 1 + count) % count));
    touchX.current = null;
  };

  return (
    <section className="hero">
      <div className="hero-stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <AnimatePresence initial={false}>
          <motion.img
            key={index}
            src={slide.src}
            alt={slide.alt}
            className="hero-slide"
            style={{ "--fm": slide.focusMobile, "--fd": slide.focusDesktop }}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.4, ease: "easeInOut" },
              scale: { duration: SLIDE_MS / 1000 + 1.5, ease: "linear" },
            }}
          />
        </AnimatePresence>
      </div>

      <motion.div className="hero-inner shell" style={isWide ? { opacity: fade } : undefined}>
        <motion.p className="hero-role" variants={riseIn} initial="hidden" animate="show" custom={0.1}>
          {site.role}
        </motion.p>

        <motion.h1
          className="hero-name"
          variants={nameGroup}
          initial="hidden"
          animate="show"
          aria-label={site.name}
        >
          {words.map((word, wi) => (
            <span className="hero-word" key={wi} aria-hidden="true">
              {Array.from(word).map((ch, ci) => (
                <motion.span key={ci} variants={letterIn}>
                  {ch}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.span
          className="hero-rule"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.p className="hero-tagline" variants={riseIn} initial="hidden" animate="show" custom={1.2}>
          {hero.tagline}
        </motion.p>

        <motion.blockquote className="hero-quote" variants={riseIn} initial="hidden" animate="show" custom={1.4}>
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
    </section>
  );
}