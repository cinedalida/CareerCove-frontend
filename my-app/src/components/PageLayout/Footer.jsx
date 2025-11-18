import React from "react";
import { motion } from "framer-motion";
import "../../styles/PageLayout/Footer.css";

const Footer = () => {
  return (
    <motion.footer
      className="bg-[var(--color-neutral-900)] py-12 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <section id="contact-us">
        {/* TOP SECTION */}
        <motion.div
          className="top-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* LEFT SECTION */}
          <motion.div
            className="flex flex-col items-center md:items-start text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-[var(--color-brand-primary)] text-2xl font-semibold mb-2">
              Contact Us.
            </p>

            <ul className="text-[var(--color-neutral-100)] space-y-1">
              <li>Francine Dalida</li>
              <li>Jan Escander</li>
              <li>Marti Trance</li>
            </ul>
          </motion.div>

          {/* RIGHT SECTION */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center md:text-left"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Emails */}
            <div className="text-[var(--color-neutral-100)]">
              <h3 className="font-semibold text-lg mb-3">Emails</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:francine@example.com"
                    className="hover:text-[var(--color-brand-primary)] transition-colors"
                  >
                    francine@example.com
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:escander@example.com"
                    className="hover:text-[var(--color-brand-primary)] transition-colors"
                  >
                    escander@example.com
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:marti@example.com"
                    className="hover:text-[var(--color-brand-primary)] transition-colors"
                  >
                    marti@example.com
                  </a>
                </li>
              </ul>
            </div>

            {/* GitHub */}
            <div className="text-[var(--color-neutral-100)]">
              <h3 className="font-semibold text-lg mb-3">GitHub Repository</h3>
              <a
                href="https://github.com/cinedalida/CareerCove-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-brand-primary)] transition-colors underline"
              >
                github.com/careercove
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* BOTTOM SECTION */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-sm text-[var(--color-neutral-100)] pt-6 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>©2025 CareerCove</p>
        </motion.div>
      </section>
    </motion.footer>
  );
};

export default Footer;
