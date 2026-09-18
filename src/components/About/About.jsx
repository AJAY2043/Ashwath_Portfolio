import { motion } from "framer-motion";
import { about } from "../../data/content";
import "./About.css";

const wordGroup = { hidden: {}, show: { transition: { staggerChildren: 0.032, delayChildren: 0.08 } } };

const wordIn = {
  hidden: { y: "0.75em", opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const riseIn = {
  hidden: { y: 24, opacity: 0 },
  show: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  return (
    <section className="about section" id="about">
      <span className="about-glow about-glow-a" aria-hidden="true" />
      <span className="about-glow about-glow-b" aria-hidden="true" />

      <div className="shell about-inner">
        <motion.p
          className="eyebrow"
          variants={riseIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
        >
          {about.heading}
        </motion.p>

        <motion.h2
          className="about-lede"
          variants={wordGroup}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {about.lede.split(" ").map((w, i) => (
            <span className="about-word" key={i}>
              <motion.span variants={wordIn}>{w}</motion.span>
            </span>
          ))}
        </motion.h2>

        <motion.span
          className="rule-gold"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="about-body">
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              variants={riseIn}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        <div className="about-marks">
          {about.marks.map((m, i) => (
            <motion.div
              className="about-mark"
              key={m.label}
              variants={riseIn}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              <span className="about-mark-value">{m.value}</span>
              <span className="about-mark-label">{m.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}