import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { contact } from "../../data/content";
import "./Contact.css";

const rise = {
  hidden: { y: 24, opacity: 0 },
  show: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  // wa.me needs digits only — no +, no spaces
  const waNumber = contact.whatsapp.replace(/\D/g, "");
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`;

  const rows = [
    { label: "WhatsApp", value: contact.whatsapp, href: waLink },
    { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { label: "Based in", value: contact.location, href: null },
  ];

  return (
    <section className="contact section" id="contact" ref={ref}>
      <motion.div
        className="contact-bg"
        style={{ backgroundImage: `url(${contact.background})`, y: bgY }}
        aria-hidden="true"
      />

      <div className="shell contact-inner">
        <motion.p className="eyebrow" variants={rise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.8 }}>
          {contact.heading}
        </motion.p>

        <motion.h2 className="contact-title" variants={rise} custom={1} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
          {contact.line}
        </motion.h2>

        <dl className="contact-rows">
          {rows.map((row, i) => (
            <motion.div key={row.label} variants={rise} custom={i + 2} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
              <dt>{row.label}</dt>
              <dd>
                {row.href ? (
                  <a className="contact-link" href={row.href} target={row.label === "WhatsApp" ? "_blank" : undefined} rel="noreferrer">
                    <span>{row.value}</span>
                  </a>
                ) : (
                  row.value
                )}
              </dd>
            </motion.div>
          ))}
        </dl>

        <motion.a
          className="contact-cta"
          href={waLink}
          target="_blank"
          rel="noreferrer"
          variants={rise}
          custom={5}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <span className="contact-cta-shine" aria-hidden="true" />
          Start a conversation
        </motion.a>
      </div>
    </section>
  );
}