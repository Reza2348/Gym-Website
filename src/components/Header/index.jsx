import React, { useState } from "react";
import styles from "./index.module.css";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#programs", label: "Programs" },
    { href: "#coaching", label: "Coaching" },
    { href: "#membership", label: "Membership" },
    { href: "#about", label: "About us" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {/* <img src={logo} alt="logo" className={styles.logoImg} /> */}
          <span className={styles.logoText}>
            Fit<span className={styles.highlight}>Maker</span>
          </span>
        </div>

        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`${styles.navLink} ${
                activeLink === link.href ? styles.active : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className={styles.loginContainer}>
          <a href="#login" className={styles.loginBtn}>
            Login
          </a>
          <a href="#login" className={styles.loginBtn}>
            Sign Up
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={styles.menuToggle}
        >
          {isMenuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setActiveLink(link.href);
                setIsMenuOpen(false);
              }}
              className={`${styles.mobileLink} ${
                activeLink === link.href ? styles.active : ""
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="#login" className={styles.mobileLoginBtn}>
            Login
          </a>
          <a href="#login" className={styles.mobileLoginBtn}>
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
