"use client"; // directive for Next.js App Router

import { faBars, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const justToggledRef = useRef(false);

  const navLinks = [
    { href: "#", text: "Home", isActive: true },
    { href: "#services", text: "Services" },
    { href: "#contact", text: "Contact" },
    { href: "#about", text: "About" },
  ];

  const handleToggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    justToggledRef.current = true;
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (justToggledRef.current) {
        justToggledRef.current = false;
        return; // Skip this click — it came from the toggle
      }
      const target = event.target as Node;

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                isActive={link.isActive}
              >
                <p className="text-base sm:text-sm md:text-base lg:text-lg">
                  {link.text}
                </p>
              </NavLink>
            ))}
          </div>

          {/* Right side: Desktop Book Button & Mobile Icons/Button */}
          <div className="flex items-center">
            {/* Desktop Book Button */}
            <div className="hidden md:block">
              <button className="btn btn-warning bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-150">
                Book
              </button>
            </div>

            {/* Mobile Menu Button and Icons */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-800"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </button>
              <button
                type="button"
                className="text-gray-600 hover:text-gray-800"
              >
                <FontAwesomeIcon icon={faPhone} />
              </button>
              <button
                ref={toggleButtonRef}
                onClick={handleToggleMenu}
                type="button"
                className="p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu, Dropdown */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } absolute top-16 inset-x-0 z-40 bg-white shadow-lg rounded-b-lg overflow-hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                link.isActive
                  ? "bg-orange-100 text-orange-600"
                  : "text-gray-700 hover:bg-gray-50 hover:text-orange-600"
              }`}
            >
              {link.text}
            </a>
          ))}
          <div className="px-3 pt-2 pb-3">
            <button className="w-full btn btn-warning bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-150">
              Book
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
