import React from "react";
import { motion } from "framer-motion";
import "../../styles/PageLayout/Navbar.css";
import Button from "../UI/buttons";
import CCLogo from "../../assets/CCLogo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = ({ variant = "GuestNav" }) => {
  const [active, setActive] = useState("");
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // ===== NAV ITEMS VARIANTS =====
  const GuestNav = [
    { id: "home", label: "Home", href: "#hero" },
    { id: "features", label: "Features", href: "#features" },
    { id: "how-it-works", label: "How it works", href: "#how-it-works" },
    { id: "feedbacks", label: "Feedback", href: "#feedbacks" },
  ];

  const UserNav = [
    { id: "dashboard", label: "Dashboard", href: "/dashboard" },
    { id: "jobs", label: "Jobs", href: "/jobs" },
    { id: "myprofile", label: "My Profile", href: "/myprofile" },
  ];

  // choose which nav to use
  const navItems = variant === "UserNav" ? UserNav : GuestNav;

  // ===== Scroll listener to hide navbar =====
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down
        setHidden(true);
      } else {
        // scrolling up
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-[70%] border border-[var(--color-neutral-900)] rounded-2xl flex items-center justify-between bg-[var(--color-neutral-100)] shadow-sm z-50 custom-navbar px-6 py-3 transition-all duration-300 ${
        hidden ? "-translate-y-32 opacity-0 pointer-events-none" : "opacity-100"
      }`}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: hidden ? 0 : 1, y: hidden ? -100 : 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* LEFT LOGO */}
      <motion.div
        className="flex items-center space-x-2"
        whileHover={{ scale: 1.1, rotate: -2 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Link to="/">
          <img
            src={CCLogo}
            alt="CareerCove Logo"
            className="w-20 cursor-pointer"
          />
        </Link>
      </motion.div>

      {/* CENTER NAV */}
      <ul className="flex items-center gap-8 text-gray-900 font-medium">
        {navItems.map((item, index) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
          >
            <a
              href={item.href}
              onClick={() => setActive(item.id)}
              className={`relative transition-colors duration-300 hover:text-orange-400 ${
                active === item.id
                  ? "text-orange-400 after:scale-x-100"
                  : "after:scale-x-0"
              }
              after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-orange-400 after:origin-left after:transition-transform after:duration-300`}
            >
              <h2>{item.label}</h2>
            </a>
          </motion.li>
        ))}
      </ul>

      {/* RIGHT LOGIN BUTTON — only for GuestNav */}
      {variant === "GuestNav" && (
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Link to="/login">
            <Button variant="small">Login</Button>
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
