"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
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
    { name: "Education", link: "#education" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <Navbar className="sticky top-0 z-50">
      {/* Desktop Navigation */}
      <NavBody>
        {/* Logo/Name Section */}
        <div className="flex items-center space-x-2 z-30 relative flex-shrink-0 min-w-fit">
          <span className="text-sm lg:text-lg font-bold text-black dark:text-white whitespace-nowrap">
            SAYAN ADHIKARY
          </span>
        </div>

        {/* Navigation Items - Centered */}
        <div className="flex-1 flex justify-center items-center min-w-fit">
          <NavItems items={navItems} />
        </div>

        {/* CTA Button */}
        <div className="z-30 relative flex-shrink-0 min-w-fit">
          <NavbarButton href="#contact" variant="dark">
            Let's Talk
          </NavbarButton>
        </div>
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
