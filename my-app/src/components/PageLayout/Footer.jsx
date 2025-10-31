import React from "react";
import "../../styles/PageLayout/Footer.css";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-neutral-900)] py-12 px-6">
      <section id="contact-us">
        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 border-b border-[var(--color-border)] pb-10">
          {/* Left Section - Brand & Socials */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
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
          </div>

          {/* Right Section - Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center md:text-left ">
            <div className="text-[var(--color-neutral-100)]">
              <h3 className="font-semibold text-lg mb-3 ">About</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--color-brand-primary)] transition-colors"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--color-brand-primary)] transition-colors"
                  >
                    Featured
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--color-brand-primary)] transition-colors"
                  >
                    Partnership
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-[var(--color-neutral-100)]">
              <h3 className="font-semibold text-lg mb-3">Community</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--color-brand-primary)] transition-colors"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--color-brand-primary)] transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--color-brand-primary)] transition-colors"
                  >
                    Podcast
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-[var(--color-neutral-100)]">
              <h3 className="font-semibold text-lg mb-3">Socials</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--color-brand-primary)] transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--color-brand-primary)] transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[var(--color-brand-primary)] transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[var(--color-neutral-100)] pt-6 gap-4">
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
        </div>
      </section>
    </footer>
  );
};

export default Footer;
