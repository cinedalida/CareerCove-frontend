import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Button from "../UI/buttons";
import CCLogo from "../../assets/CCLogo.png";
import "../../styles/PageLayout/Navbar.css";

const Navbar = ({ variant = "GuestNav" }) => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // ===== NAV ITEMS VARIANTS =====
  const GuestNav = [
    { id: "home", label: "Home", href: "/#hero" },
    { id: "features", label: "Features", href: "/#features" },
    { id: "how-it-works", label: "How it works", href: "/#how-it-works" },
    { id: "feedbacks", label: "Feedback", href: "/#feedbacks" },
  ];

  const UserNav = [
    { id: "dashboard", label: "Dashboard", href: "/dashboard" },
    { id: "jobs", label: "Jobs", href: "/jobs" },
    { id: "myprofile", label: "My Profile", href: "/myprofile" },
  ];

  const navItems = variant === "UserNav" ? UserNav : GuestNav;

  // Determine active link based on current path
  const isActive = (href) => {
    if (href.startsWith("/#")) {
      return location.hash === href.substring(1);
    }
    return location.pathname === href;
  };

  // ===== Scroll listener to hide navbar =====
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
        setMobileOpen(false); // Close mobile menu on scroll down
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className={`custom-navbar ${hidden ? "hidden" : ""} ${
        mobileOpen ? "mobile-open" : ""
      }`}
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="nav-container">
        {/* LOGO */}
        <Link to="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
          <img src={CCLogo} alt="CareerCove" />
        </Link>

        {/* DESKTOP MENU */}
        <div className="desktop-menu">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`nav-link ${isActive(item.href) ? "active" : ""}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            {variant === "GuestNav" ? (
              <Link to="/login">
                <Button variant="small" className="nav-auth-btn">
                  Login
                </Button>
              </Link>
            ) : (
              <Link to="/">
                <Button variant="small" className="nav-auth-btn logout">
                  Logout
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`bar ${mobileOpen ? "open" : ""}`}></span>
          <span className={`bar ${mobileOpen ? "open" : ""}`}></span>
          <span className={`bar ${mobileOpen ? "open" : ""}`}></span>
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <motion.div
        className="mobile-menu"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: mobileOpen ? "auto" : 0,
          opacity: mobileOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`mobile-nav-link ${
                  isActive(item.href) ? "active" : ""
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-nav-actions">
          {variant === "GuestNav" ? (
            <Link to="/login" onClick={() => setMobileOpen(false)}>
              <Button variant="primary" className="w-full">
                Login
              </Button>
            </Link>
          ) : (
            <Link to="/" onClick={() => setMobileOpen(false)}>
              <Button variant="primary" className="w-full logout">
                Logout
              </Button>
            </Link>
          )}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
