import "./header.css";
import React, { useState, useEffect } from "react";
import logo from "../../../public/images/logo.png"; // Adjust the path to your logo image as needed

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") || "dark"
  );

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    document.body.classList.toggle("light", theme === "light");
    localStorage.setItem("currentMode", theme);
  }, [theme]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="header">
      <nav className="navbar">
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <li className="navbar-item">
            <a href="#about">Om mig</a>
          </li>
          <li className="navbar-item">
            <a href="#main">Tjänster</a>
          </li>
          <li className="navbar-item">
          <li><a href="/documents/george_youssef_STHLM_CV.pdf" download>CV</a></li>
          </li>
          <li className="navbar-item">
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
        <div className="navbar-logo">
          <a href="/">
            <img src={logo} alt="MyLogo" className="logo-image" />
          </a>
        </div>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? "🌞" : "🌜"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
