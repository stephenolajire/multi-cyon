import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const MobileNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = [
    { id: 1, name: "Home", link: "/cyon/ofa" },
    { id: 2, name: "About", link: "/#about" },
    { id: 3, name: "Services", link: "/#services" },
    { id: 4, name: "Contact", link: "/#contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="w-full bg-white shadow-md">
      <nav className="w-full flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="w-40 relative flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-40 h-auto rounded-full"
          />
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-gray-700 hover:text-gray-900 focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button
              onClick={closeMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col px-6 space-y-6 flex-1">
            {NavLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg text-black font-semibold block py-2 border-l-4 border-black pl-4"
                      : "text-lg text-gray-600 font-normal block py-2 hover:text-black hover:border-l-4 hover:border-gray-300 pl-4 transition-all duration-200"
                  }
                  to={link.link}
                  onClick={closeMenu}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Register Button */}
          <div className="p-6 border-t border-gray-200">
            <Link to="/donation">
              <button
                onClick={closeMenu}
                className="w-full bg-black text-white px-4 py-3 rounded-md hover:bg-gray-700 transition duration-300 font-medium"
              >
                Donate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileNavigation;
