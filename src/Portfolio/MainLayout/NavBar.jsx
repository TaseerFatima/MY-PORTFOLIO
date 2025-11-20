import React, { useState, useEffect } from "react";
import { Home, User, Briefcase, Mail } from "lucide-react";

const NavBar = () => {
  const [active, setActive] = useState("home");

  const linkClasses = (id) =>
    `p-3 rounded-full transition ${
      active === id ? "bg-yellow-500" : "bg-[#1e1e1e]"
    }`;

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "portfolio", "Contact"];

      const scrollPosition = window.scrollY + 100;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hidden md:flex md:flex-col md:gap-4 fixed md:right-4 md:top-1/2 md:-translate-y-1/2">
      <a href="#home" className={linkClasses("home")}>
        <Home className="text-white" />
      </a>
      <a href="#about" className={linkClasses("about")}>
        <User className="text-white" />
      </a>
      <a href="#portfolio" className={linkClasses("portfolio")}>
        <Briefcase className="text-white" />
      </a>
      <a href="#Contact" className={linkClasses("contact")}>
        <Mail className="text-white" />
      </a>
    </div>
  );
};

export default NavBar;
