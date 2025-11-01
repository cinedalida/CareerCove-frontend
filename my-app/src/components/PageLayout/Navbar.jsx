import React from "react";
import { motion } from "framer-motion";
import "../../styles/PageLayout/Navbar.css";
import Button from "../UI/buttons";
import CCLogo from "../../assets/CCLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = React.useState("home");

  const navItems = [
    { id: "home", label: "Home", href: "#hero" },
    { id: "features", label: "Features", href: "#features" },
    { id: "how-it-works", label: "How it works", href: "#how-it-works" },
    { id: "feedbacks", label: "Feedback", href: "#feedbacks" },
  ];

  return (
    <motion.nav
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[70%] border border-[var(--color-neutral-900)] rounded-2xl flex items-center justify-between bg-[var(--color-neutral-100)] shadow-sm z-50 custom-navbar px-6 py-3"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* ===== LEFT LOGO ===== */}
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

      {/* ===== CENTER MENU ===== */}
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

      {/* ===== RIGHT BUTTON ===== */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Link to="/login">
          <Button variant="small">Login</Button>
        </Link>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
