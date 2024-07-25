import React, { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import "./header.css";

function Header() {
  const navRef = useRef(null);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      document.body.classList.toggle("light", newMode);
      return newMode;
    });
  };

  useEffect(() => {
    document.body.classList.toggle("light", darkMode);
  }, [darkMode]);

  return (
    <header>
      <nav ref={navRef}>
        <a href="#about">About</a>
        <a href="#main">Tjänster</a>
        <a href="/documents/george_youssef_STHLM_CV.pdf" download>CV</a>
        <a href="#contact">Kontakt</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
}

export default Header;
