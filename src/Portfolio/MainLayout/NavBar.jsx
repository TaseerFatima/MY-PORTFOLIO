import React, { useState } from "react";
import { Home, User, Briefcase, Mail } from "lucide-react";

const NavBar = () => {
  const [active, setActive] = useState("home");

  const linkClasses = (id) =>
    `p-3 rounded-full transition ${
      active === id ? "bg-yellow-500" : "bg-[#1e1e1e]"
    }`;

  return (
    <>
  
   <div
  className="
    hidden md:flex md:flex-col md:gap-4
    fixed md:right-4 md:top-1/2 md:-translate-y-1/2
  "
>

        {/* Home */}
        <a
          href="#home"
          onClick={() => setActive("home")}
          className={linkClasses("home")}
        >
          <Home className="text-white" />
        </a>

        {/* About */}
        <a
          href="#about"
          onClick={() => setActive("about")}
          className={linkClasses("about")}
        >
          <User className="text-white" />
        </a>

        {/* Portfolio's */}
        <a
          href="#portfolio"
          onClick={() => setActive("portfolio")}
          className={linkClasses("portfolio")}
        >
          <Briefcase className="text-white" />
        </a>

        {/* Contact */}
        <a
          href="#Contact"
          onClick={() => setActive("contact")}
          className={linkClasses("contact")}
        >
          <Mail className="text-white" />
        </a>
      </div>
    </>
  );
};

export default NavBar;
