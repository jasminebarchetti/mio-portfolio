"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Cambia lo sfondo della nav quando si scende
      setIsScrolled(window.scrollY > 50);

      // Logica per evidenziare la sezione attiva durante lo scroll
      const sections = ["home", "about", "projects", "skills", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Consideriamo attiva la sezione che occupa il centro della visuale
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection("home")} 
            className="text-2xl font-bold gradient-text"
          >
            Portfolio
          </button>
          
          <div className="hidden md:flex gap-8">
            {["home", "about", "projects", "skills", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize font-medium transition-all duration-300 ${
                  activeSection === section 
                  ? "text-purple-600 scale-110" 
                  : "text-gray-600 hover:text-purple-500"
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Versione Mobile semplificata (Solo pulsante Contatti) */}
          <div className="md:hidden">
            <button 
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}