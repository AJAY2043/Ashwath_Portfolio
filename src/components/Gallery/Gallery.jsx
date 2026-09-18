import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { gallery } from "../../data/content";
import "./Gallery.css";

function TiltCard({ photo, index, onOpen }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], ["5deg", "-5deg"]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], ["-5deg", "5deg"]), { stiffness: 150, damping: 18 });

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.button
      className={`gal-card gal-${photo.size}`}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={() => onOpen(index)}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      initial={{ y: 34, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.85, delay: (index % 3) * 0.09, ease: [0.22, 1, 0.36, 1] }}
      aria-label={`Open photo ${index + 1}`}
    >
      <span className="gal-frame">
        <img src={photo.src} alt={photo.alt} loading="lazy" />
      </span>
    </motion.button>
  );
}

export default function Gallery() {
  const [open, setOpen] = useState(null);
  const touchX = useRef(null);
  const count = gallery.photos.length;

  const close = useCallback(() => setOpen(null), []);
  const next = useCallback(() => setOpen((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setOpen((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, next, prev]);

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) {
      if (dx < 0) next();
      else prev();
    }
    touchX.current = null;
  };

  return (
    <section className="gallery section" id="gallery">
      <div className="shell">
        <motion.p
          className="eyebrow"
          initial={{ y: 18, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {gallery.heading}
        </motion.p>

        <div className="gal-grid">
          {gallery.photos.map((photo, i) => (
            <TiltCard key={i} photo={photo} index={i} onOpen={setOpen} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="gal-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <button className="gal-close" onClick={close} aria-label="Close">
              <span />
              <span />
            </button>

            <button
              className="gal-arrow gal-prev"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous photo"
            />

            <motion.img
              key={open}
              src={gallery.photos[open].src}
              alt={gallery.photos[open].alt}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="gal-arrow gal-next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next photo"
            />

            <span className="gal-count">
              {open + 1} / {count}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}