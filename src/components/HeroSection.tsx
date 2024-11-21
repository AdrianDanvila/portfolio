import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-100 text-black py-32 md:py-48">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Texto principal y contenido */}
        <div className="md:w-2/3">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate__animated animate__fadeIn">
            Hola, soy{" "}
            <span className="text-blue-500">Adrián Danvila Daria</span>
          </h2>
          <p className="text-lg md:text-2xl mb-8 animate__animated animate__fadeIn animate__delay-1s">
            Desarrollador web apasionado por crear experiencias digitales
            interactivas y soluciones tecnológicas.
          </p>

          {/* Redes sociales */}
          <div className="flex space-x-8 mb-8">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/adrian"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition duration-300"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 20h-3v-10h3v10zm-1.5-11.286c-.967 0-1.75-.783-1.75-1.75s.783-1.75 1.75-1.75 1.75.783 1.75 1.75-.783 1.75-1.75 1.75zm13.5 11.286h-3v-5c0-1.106-.894-2-2-2s-2 .894-2 2v5h-3v-10h3v1.154c.812-.946 2.038-1.154 3-1.154 2.206 0 4 1.794 4 4v6z" />
              </svg>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/adrian"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition duration-300"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.659.5.5 5.659.5 12c0 5.085 3.292 9.373 7.851 10.872.573.104.783-.248.783-.553v-2.086c-3.19.699-3.86-1.528-3.86-1.528-.522-1.33-1.273-1.687-1.273-1.687-1.041-.699.083-.682.083-.682 1.157.081 1.768 1.189 1.768 1.189 1.017 1.74 2.673 1.239 3.324.946.104-.736.396-1.239.718-1.526-2.546-.292-5.228-1.273-5.228-5.662 0-1.254.447-2.272 1.189-3.073-.115-.292-.52-1.448.104-3.03 0 0 .982-.312 3.22 1.186.936-.26 1.945-.39 2.945-.398.999.008 2.007.138 2.945.398 2.238-1.497 3.22-1.186 3.22-1.186.623 1.582.219 2.738.104 3.03.742.801 1.189 1.819 1.189 3.073 0 4.399-2.682 5.37-5.228 5.662.406.354.771 1.064.771 2.145v3.18c0 .312.219.677.781.553C20.708 21.373 24 17.085 24 12 24 5.659 18.341.5 12 .5z" />
              </svg>
            </a>
          </div>

          {/* Botón de acción */}
          <a
            href="#projects"
            className="inline-block bg-blue-500 text-gray-100 px-8 py-4 rounded-lg shadow-xl text-xl font-semibold transform transition duration-300 hover:bg-blue-700 hover:scale-105"
          >
            Ver mis proyectos
          </a>
        </div>

        {/* Imagen a la derecha (emoji AR estilo Samsung) */}
        <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
          <img
            src="https://example.com/emoji-ar-samsung.png" // Cambia esta URL por la imagen real del emoji AR de Samsung
            alt="Adrián Danvila Daria"
            className="rounded-lg shadow-xl max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
