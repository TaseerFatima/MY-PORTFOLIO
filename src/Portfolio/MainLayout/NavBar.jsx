import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 mb-6 ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold cursor-pointer">
          <a href="#home">MyPortfolio</a>
        </div>

        <ul className="flex space-x-6">
          {["home", "about", "Skills", "Experience", "portfolio", "Contact"].map((section) => (
            <li key={section} className="cursor-pointer capitalize hover:text-blue-500 transition-colors">
              <a href={`#${section}`}>{section}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
