import React from "react";
import { NavLink } from "react-router-dom";

const DesktopNavigation: React.FC = () => {
  const NavLinks = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/#about" },
    { id: 3, name: "Services", link: "/#services" },
    { id: 4, name: "Contact", link: "/#contact" },
  ];
  return (
    <header className="w-full h-30">
      <nav className=" w-full h-30 flex justify-between items-center px-10 bg-white shadow-md">
        <div className="w-60 relative flex items-center h-30">
          <img src="/logo.png" alt="Logo" className="w-60 h-25 rounded-full" />
        </div>
        <ul className="flex items-center flex-row">
          {NavLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                className={(isActive) =>
                  isActive
                    ? "text-base text-black-500 font-semibold mx-6"
                    : " text-gray-500 text-base font-normal mx-6"
                }
                to={link.link}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300">
            Register
          </button>
        </div>
      </nav>
    </header>
  );
};

export default DesktopNavigation;
