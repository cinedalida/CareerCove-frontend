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
          className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 border-b border-[var(--color-border)] pb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left Section - Brand & Socials */}
          <motion.div
            className="flex flex-col items-center md:items-start text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-[var(--color-brand-primary)] text-2xl font-semibold mb-2">
              Contact us.
            </p>
            <p className="text-[var(--color-neutral-100)] leading-relaxed mb-6">
              Our vision is to provide convenience <br />
              and seamless Job Hunting experience.
            </p>

            <div className="flex justify-center md:justify-start gap-4 text-[var(--color-neutral-100)]">
              <a
                href="#"
                className="hover:text-[var(--color-brand-primary)] transition-colors"
              >
                <i className="ri-facebook-fill text-2xl"></i>
              </a>
              <a
                href="#"
                className="hover:text-[var(--color-brand-primary)] transition-colors"
              >
                <i className="ri-twitter-fill text-2xl"></i>
              </a>
              <a
                href="#"
                className="hover:text-[var(--color-brand-primary)] transition-colors"
              >
                <i className="ri-instagram-fill text-2xl"></i>
              </a>
            </div>
          </motion.div>

          {/* Right Section - Links */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center md:text-left"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {footerLinks.map((column, index) => (
              <div key={index} className="text-[var(--color-neutral-100)]">
                <h3 className="font-semibold text-lg mb-3">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="hover:text-[var(--color-brand-primary)] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-[var(--color-brand-primary)] transition-colors"
            >
              Privacy & Policy
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-brand-primary)] transition-colors"
            >
              Terms & Condition
            </a>
          </div>
        </motion.div>
      </section>
    </motion.footer>
  );
};

export default Footer;

const footerLinks = [
  {
    title: "About",
    links: ["How it works", "Featured", "Partnership"],
  },
  {
    title: "Community",
    links: ["Events", "Blog", "Podcast"],
  },
  {
    title: "Socials",
    links: ["Facebook", "Twitter", "Instagram"],
  },
];
