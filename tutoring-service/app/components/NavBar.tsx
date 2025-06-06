"use client"; // directive for Next.js App Router

import { faBars, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
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
                {link.text === "Services" ? (
                  <details className="dropdown">
                    <summary className="text-base sm:text-sm md:text-base lg:text-lg">
                      {link.text}
                    </summary>
                    <ul className="menu dropdown-content bg-white rounded-box z-1 p-2 shadow-sm w-fit">
                      <li
                        style={{
                          "--menu-active-bg": "oklch(62.3% 0.214 259.815)", // override css
                        }}
                      >
                        <a
                          href={"#"}
                          className={`px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-500 hover:underline hover:underline-offset-4 hover:decoration-2 transition-colors duration-150`}
                        >
                          Item 1
                        </a>
                      </li>
                      <li
                        style={{
                          "--menu-active-bg": "oklch(62.3% 0.214 259.815)",
                        }}
                      >
                        <a
                          href={"#"}
                          className={`px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-500 hover:underline hover:underline-offset-4 hover:decoration-2 transition-colors duration-150`}
                        >
                          Item 2
                        </a>
                      </li>
                    </ul>
                  </details>
                ) : (
                  <p className="text-base sm:text-sm md:text-base lg:text-lg">
                    {link.text}
                  </p>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right side: Desktop Book Button & Mobile Icons/Button */}
          <div className="flex items-center">
            {/* Desktop Book Button */}
            <div className="pr-2">
              <button className="btn btn-warning bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-150">
                Book
              </button>
            </div>
            {/* Mobile Menu Button and Icons */}
            <div className="md:hidden flex items-center space-x-2">
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
          {navLinks.map((link) => {
            let servicesLinks = ["Service Link 1", "Service Link 2"];
            if (link.text === "Services") {
              return (
                <div
                  className={`collapse ${
                    isAccordionOpen ? "collapse-open" : "collapse-close"
                  } collapse-arrow text-gray-700 hover:bg-gray-50 hover:text-orange-600`}
                  onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                >
                  <input type="radio" name="my-accordion-2" defaultChecked />
                  <div className="collapse-title font-semibold">Services</div>
                  <div className="collapse-content text-sm">
                    <ul className="menu dropdown-content bg-gray-50 rounded-box z-1 p-2 shadow-sm w-100 gap-1">
                      {servicesLinks.map((link) => (
                        <li
                          style={{ "--menu-active-bg": "#ea580c" }}
                          className="bg-white rounded-xl shadow"
                        >
                          <a
                            href={"#"}
                            className={`px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-500 hover:underline hover:underline-offset-4 hover:decoration-2 transition-colors duration-150 `}
                            onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            } else {
              return (
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
              );
            }
          })}
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
