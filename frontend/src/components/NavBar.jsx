
/**
 * @file NavBar.jsx
 * @author Brendan Dileo
 * 
 * The NavBar component for my portfolio-website
*/

// TODO: FINISH PAGE

import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { useTheme } from "../context/ThemeContext";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  // Routes
  const links = [
    { to: "/", label: "home" },
    { to: "/about", label: "about" },
    { to: "/projects", label: "projects" },
    { to: "/contact", label: "contact" },
    { to: "/me", label: "me" },
  ];

  // Render react router linkstext
  const renderLinks = (closeMenu = false) =>
    links.map(({ to, label }) => (
      <li key={label}>
        <span>[</span>
        <Link
          to={to}
          onClick={closeMenu ? () => setIsOpen(false) : undefined}
          className="hover:text-[#00ff00] transition"
        >
          {label}
        </Link>
        <span>]</span>
      </li>
    ));

  return (
    <nav className={`w-full ${theme.navbarBackground} border-b border-gray-700 p-4 font-mono text-[#00ff00] flex items-center justify-between z-40 relative`}>
      <div className="font-semibold text-xl tracking-tight text-[#00ff00]">
        Brendan Dileo
      </div>

      {/* Toggle menu button for smaller screens */}
      <button
        className="md:hidden text-[#00ff00] z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <ul className="hidden md:flex gap-5 text-lg">
        {renderLinks()}
      </ul>
     
      {/* Dropdown */}
      <ul
        className={`absolute top-full left-0 w-full ${theme.navbarBackground} border-t border-gray-700 flex-col text-lg font-mono transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "flex opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {renderLinks(true)}
      </ul>
    </nav>
  );
};

export default NavBar;
