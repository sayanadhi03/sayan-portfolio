"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export function HeroSection() {
  const titles = ["FULL STACK DEVELOPER", "AGENTIC AI ENGINEER"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentTitle) {
        // Finished typing, start deleting after pause
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayedText === "") {
        // Finished deleting, move to next title
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      } else if (isDeleting) {
        // Continue deleting
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
      } else {
        // Continue typing
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex, titles]);

  return (
    <section
      id="home"
      className="min-h-screen bg-black relative overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
          radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0)
        `,
        backgroundSize: "50px 50px",
      }}
    >
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto pt-10 p-25 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl mb-1 font-bold text-white leading-tight">
                Hey, I'm
              </h1>
              <h1 className="text-5xl lg:text-7xl font-bold text-orange-500 leading-tight">
                Sayan
              </h1>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-2 text-orange-500">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-lg">West Bengal, India</span>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-wider min-h-[3rem] flex items-center">
                {displayedText}
                <span className="animate-pulse ml-1 text-orange-500">|</span>
              </h2>
            </div>

            {/* Social Icons and Resume Button */}
            <div className="flex items-center space-x-6 pt-8">
              {/* Social Icons */}
              <div className="flex space-x-4">
                {/* GitHub */}
                <a
                  href="https://github.com/sayanadhi03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/sayan-adhikary03/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>

              {/* Resume Button */}
              <a
                href="https://drive.google.com/file/d/1rFUztRWi1Qol9hcYU0YyBQq5jltDIktb/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Resume</span>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Profile image */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-orange-500 to-red-600 p-2 overflow-hidden">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/portfolio image.jpg"
                    alt="Sayan Adhikary Profile Picture"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 200"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="rgba(255, 255, 255, 0.05)"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,112C960,117,1056,107,1152,90.7C1248,75,1344,53,1392,42.7L1440,32L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
          />
        </svg>
      </div>
    </section>
  );
}
