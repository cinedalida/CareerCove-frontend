import React from "react";
import "../../styles/PageLayout/Navbar.css";
import Button from "../UI/buttons";
import CCLogo from "../../assets/CCLogo.png";

const Navbar = () => {
  const [active, setActive] = React.useState("home");

  const navItems = [
    { id: "home", label: "Home", href: "#hero" },
    { id: "features", label: "Features", href: "#features" },
    { id: "how-it-works", label: "How it works", href: "#how-it-works" },
    { id: "feedbacks", label: "Feedback", href: "#feedbacks" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[70%] border border-[var(--color-neutral-900)] rounded-2xl flex items-center justify-between bg-[var(--color-neutral-100)] shadow-sm z-50 custom-navbar">
      {/* Left Logo */}
      <div className="flex items-center space-x-2">
        <img src={CCLogo} alt="CareerCove Logo" className="w-20" />
      </div>

      {/* Center Menu */}
      <ul className="flex items-center gap-8  text-gray-900">
        <ul className="flex gap-8 text-gray-900">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={() => setActive(item.id)}
                className={`
                relative transition-colors
                hover:text-orange-400
                ${
                  active === item.id
                    ? "text-orange-400 after:scale-x-100"
                    : "after:scale-x-0"
                }
                after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-orange-400 after:origin-left after:transition-transform
              `}
              >
                <h2>{item.label}</h2>
              </a>
            </li>
          ))}
        </ul>
      </ul>
      <Button variant="small">Login</Button>
    </nav>
  );
};

export default Navbar;
