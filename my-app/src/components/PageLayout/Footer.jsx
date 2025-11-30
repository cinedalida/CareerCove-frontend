import React from "react";
import "../../styles/PageLayout/Footer.css";
import { Github, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* Top Grid Section */}
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-col brand-col">
            <h2 className="footer-brand">CareerCove</h2>
            <p className="footer-tagline">
              Navigating your career path with clarity and confidence. Connect
              with opportunities that matter.
            </p>
            <div className="footer-socials">
              <a
                href="https://github.com/cinedalida/CareerCove-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Researchers Section */}
          <div className="footer-col">
            <h3 className="footer-heading">Researchers</h3>
            <ul className="footer-links">
              <li>Francine Dalida</li>
              <li>Jan Escander</li>
              <li>Marti Trance</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-col">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-links">
              <li>
                <a href="mailto:dfb0414@dlsud.edu.ph" className="icon-link">
                  <Mail size={16} /> dfb0414@dlsud.edu.ph
                </a>
              </li>
              <li>
                <a href="mailto:ejb1823@dlsud.edu.ph" className="icon-link">
                  <Mail size={16} /> ejb1823@dlsud.edu.ph
                </a>
              </li>
              <li>
                <a href="mailto:tmv0253@dlsud.edu.ph" className="icon-link">
                  <Mail size={16} /> tmv0253@dlsud.edu.ph
                </a>
              </li>
            </ul>
          </div>

          {/* Location Section */}
          <div className="footer-col">
            <h3 className="footer-heading">Location</h3>
            <ul className="footer-links">
              <li className="icon-link">
                <MapPin size={16} /> Dasmariñas, Cavite
              </li>
              <li>De La Salle University - Dasmariñas</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>© {currentYear} CareerCove. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
