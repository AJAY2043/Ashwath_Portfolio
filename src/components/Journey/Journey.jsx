import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { journey } from "../../data/content";
import "./Journey.css";

export default function Journey() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const { scrollYProgress: railProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.8", "end 0.6"],
  });

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(sectionProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section className="journey section" id="journey" ref={sectionRef}>
      <motion.div
        className="journey-bg"
        style={{ backgroundImage: `url(${journey.background})`, y: bgY }}
        aria-hidden="true"
      />

      <div className="shell journey-inner">
        <motion.p
          className="eyebrow"
          initial={{ y: 18, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {journey.heading}
        </motion.p>

        <motion.h2
          className="section-title"
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {journey.sub}
        </motion.h2>

        <div className="journey-track" ref={trackRef}>
          <div className="journey-rail">
            <motion.div className="journey-rail-fill" style={{ scaleY: railProgress }} />
          </div>

          <ol className="journey-list">
            {journey.items.map((item) => (
              <motion.li
                key={item.year}
                initial={{ x: 18, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.span
                  className="journey-dot"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.45, delay: 0.1, ease: [0.2, 1.5, 0.4, 1] }}
                />
                <span className="journey-year">{item.year}</span>
                <div className="journey-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}