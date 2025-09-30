"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

export function ResponsiveNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact Me", link: "#contact" },
  ];

  return (
    <Navbar className="sticky top-0 z-50">
      {/* Desktop Navigation */}
      <NavBody>
        {/* Logo/Name Section */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-black dark:text-white">
            SAYAN ADHIKARY
          </span>
        </div>

        {/* Navigation Items */}
        <NavItems items={navItems} />

        {/* CTA Button */}
        <NavbarButton href="#contact" variant="dark">
          Let's Talk
        </NavbarButton>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          {/* Mobile Logo/Name */}
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-black dark:text-white">
              SAYAN ADHIKARY
            </span>
          </div>

          {/* Mobile Menu Toggle */}
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        {/* Mobile Menu Items */}
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <NavbarButton
            href="#contact"
            variant="dark"
            className="w-full text-center"
          >
            Let's Talk
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
