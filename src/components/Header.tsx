import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-blue-500  shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo y nombre */}
        <h1 className="text-3xl font-semibold text-white tracking-wide flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v20M2 12h20" />
          </svg>
          <span>Adrián Danvila</span>
        </h1>

        {/* Menú hamburguesa */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {/* Navegación (para pantallas grandes) */}
        <nav className="hidden md:flex space-x-8">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#about"
                className="text-white text-lg font-medium hover:text-gray-200 transition duration-300 ease-in-out"
              >
                Sobre mí
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-white text-lg font-medium hover:text-gray-200 transition duration-300 ease-in-out"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white text-lg font-medium hover:text-gray-200 transition duration-300 ease-in-out"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Menú desplegable (para pantallas pequeñas) */}
      {menuOpen && (
        <div className="md:hidden bg-blue-500  p-4 space-y-4">
          <ul className="space-y-4">
            <li>
              <a
                href="#about"
                className="text-white text-lg font-medium hover:text-gray-200 transition duration-300 ease-in-out"
              >
                Sobre mí
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-white text-lg font-medium hover:text-gray-200 transition duration-300 ease-in-out"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white text-lg font-medium hover:text-gray-200 transition duration-300 ease-in-out"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
