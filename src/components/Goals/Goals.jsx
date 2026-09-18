import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { goals } from "../../data/content";
import "./Goals.css";

export default function Goals() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <section className="goals section" id="goals" ref={ref}>
      <motion.div
        className="goals-bg"
        style={{ backgroundImage: `url(${goals.background})`, y: bgY }}
        aria-hidden="true"
      />

      <div className="shell goals-inner">
        <motion.p
          className="eyebrow"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {goals.heading}
        </motion.p>

        <motion.h2
          className="section-title"
          initial={{ y: 26, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {goals.sub}
        </motion.h2>

        <div className="goals-list">
          {goals.items.map((item, i) => (
            <motion.article
              className="goal"
              key={item.title}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.85, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className="goal-shine"
                initial={{ x: "-120%" }}
                whileInView={{ x: "130%" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.5, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden="true"
              />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}