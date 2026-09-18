import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ideology } from "../../data/content";
import "./Ideology.css";

export default function Ideology() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  return (
    <section className="ideology section" id="ideology" ref={ref}>
      <motion.div
        className="ideology-bg"
        style={{ backgroundImage: `url(${ideology.background})`, scale: bgScale }}
        aria-hidden="true"
      />

      <div className="shell ideology-inner">
        <motion.p
          className="eyebrow"
          initial={{ y: 18, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {ideology.heading}
        </motion.p>

        <motion.h2
          className="section-title"
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {ideology.sub}
        </motion.h2>

        <div className="ideology-grid">
          {ideology.items.map((item, i) => (
            <motion.article
              className="rule-card"
              key={item.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className="rule-card-line"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.95, delay: 0.2 + (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden="true"
              />
              <span className="rule-card-mark" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}