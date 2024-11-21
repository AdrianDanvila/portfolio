/* eslint-disable @next/next/no-img-element */
import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-36">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contenido de la izquierda */}
        <div className="space-y-6 flex flex-col justify-center">
          <h3 className="text-4xl font-bold tracking-wide text-gray-800">
            Sobre mí
          </h3>
          {/* Imagen del perfil */}
          <div className="flex justify-center md:justify-start mb-12">
            <img
              src="https://via.placeholder.com/400x400"
              alt="Adrián Danvila Daria"
              className="w-48 h-48 object-cover rounded-full shadow-lg"
            />
          </div>
          <p className="text-xl text-gray-700 mb-12">
            Soy Adrián Danvila, un desarrollador Front-end con pasión por crear
            experiencias web interactivas y dinámicas. Domino tecnologías como{" "}
            <strong>React, JavaScript, HTML, CSS</strong> y{" "}
            <strong>SASS</strong>, y busco siempre mejorar mis habilidades y
            ampliar mis conocimientos. Mi objetivo es construir aplicaciones de
            alto rendimiento y fácil mantenimiento. Aunque mi enfoque principal
            está en Front-end, siempre tengo la mente abierta a explorar y
            aprender sobre Back-end. Me encanta enfrentar nuevos retos, trabajar
            en equipo y seguir creciendo como profesional. ¡Estoy listo para
            aportar a tu equipo!
          </p>

          {/* Tecnologías */}
          <div className="space-y-6">
            <h4 className="text-3xl font-semibold text-gray-800 mb-6">
              Tecnologías que domino
            </h4>
            <div className="flex flex-wrap gap-4 justify-start">
              {/* React */}
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border-2 border-blue-300 text-black rounded-full px-4 py-2 text-sm transition-transform duration-300 transform hover:scale-105"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  alt="React"
                  className="w-6 h-6 mr-2"
                />
                React
              </a>

              {/* JavaScript */}
              <a
                href="https://developer.mozilla.org/es/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border-2 border-yellow-400 text-black rounded-full px-4 py-2 text-sm transition-transform duration-300 transform hover:scale-105"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                  alt="JavaScript"
                  className="w-6 h-6 mr-2"
                />
                JavaScript
              </a>

              {/* HTML5 */}
              <a
                href="https://developer.mozilla.org/es/docs/Web/HTML"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border-2 border-orange-500 text-black rounded-full px-4 py-2 text-sm transition-transform duration-300 transform hover:scale-105"
              >
                <img
                  src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"
                  alt="HTML5"
                  className="w-6 h-6 mr-2"
                />
                HTML5
              </a>

              {/* CSS3 */}
              <a
                href="https://developer.mozilla.org/es/docs/Web/CSS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border-2 border-blue-500 text-black rounded-full px-4 py-2 text-sm transition-transform duration-300 transform hover:scale-105"
              >
                <img
                  src="https://cdn.worldvectorlogo.com/logos/css-3.svg"
                  alt="CSS3"
                  className="w-6 h-6 mr-2"
                />
                CSS3
              </a>

              {/* SQL */}
              <a
                href="https://www.sql.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border-2 border-blue-700 text-black rounded-full px-4 py-2 text-sm transition-transform duration-300 transform hover:scale-105"
              >
                <img
                  src="https://cdn1.iconfinder.com/data/icons/brands-5/512/fi-brands-mysql-512.png"
                  alt="SQL"
                  className="w-6 h-6 mr-2"
                />
                SQL
              </a>

              {/* Java */}
              <a
                href="https://www.java.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border-2 border-red-600 text-black rounded-full px-4 py-2 text-sm transition-transform duration-300 transform hover:scale-105"
              >
                <img
                  src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png"
                  alt="Java"
                  className="w-6 h-6 mr-2"
                />
                Java
              </a>

              {/* Java Spring */}
              <a
                href="https://spring.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border-2 border-green-400 text-black rounded-full px-4 py-2 text-sm transition-transform duration-300 transform hover:scale-105"
              >
                <img
                  src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
                  alt="Java Spring"
                  className="w-6 h-6 mr-2"
                />
                Java Spring
              </a>

              {/* Git */}
              <a
                href="https://git-scm.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border-2 border-black text-black rounded-full px-4 py-2 text-sm transition-transform duration-300 transform hover:scale-105"
              >
                <img
                  src="https://cdn.worldvectorlogo.com/logos/git-icon.svg"
                  alt="Git"
                  className="w-6 h-6 mr-2"
                />
                Git
              </a>

              {/* Docker */}
              <a
                href="https://www.docker.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border-2 border-blue-400 text-black rounded-full px-4 py-2 text-sm transition-transform duration-300 transform hover:scale-105"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg"
                  alt="Docker"
                  className="w-6 h-6 mr-2"
                />
                Docker
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {/* Filosofía de trabajo */}

          <div className="bg-gray-100 rounded-lg p-8 mt-12">
            <h4 className="text-2xl font-semibold text-gray-800">
              Mi Filosofía de Trabajo
            </h4>
            <p className="text-lg text-gray-700 mt-4">
              Mi enfoque es desarrollar soluciones escalables y de calidad,
              manteniendo siempre una comunicación clara y transparente. Creo en
              la importancia de mantener un código limpio y fácil de mantener,
              para que los proyectos crezcan de manera sostenible a largo plazo.
            </p>
          </div>
          {/* Habilidades Destacadas */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center border-2 border-gray-300 rounded-lg p-6 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-blue-500 mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v20M2 12h20" />
              </svg>
              <h5 className="text-lg font-semibold">Resolución de problemas</h5>
              <p className="text-gray-600 mt-2">
                Disfruto resolver problemas complejos con soluciones simples y
                eficientes.
              </p>
            </div>
            <div className="flex flex-col items-center text-center border-2 border-gray-300 rounded-lg p-6 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-green-500 mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v20M2 12h20" />
              </svg>
              <h5 className="text-lg font-semibold">Trabajo en equipo</h5>
              <p className="text-gray-600 mt-2">
                Valoro el trabajo colaborativo y la comunicación fluida para
                lograr objetivos comunes.
              </p>
            </div>
            <div className="flex flex-col items-center text-center border-2 border-gray-300 rounded-lg p-6 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-red-500 mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v20M2 12h20" />
              </svg>
              <h5 className="text-lg font-semibold">Aprendizaje continuo</h5>
              <p className="text-gray-600 mt-2">
                Me apasiona aprender nuevas tecnologías y mejores prácticas
                constantemente.
              </p>
            </div>
          </div>
          {/* Llamada a la acción */}
          <div className="mt-8 justify-end self-end">
            <a
              href="#contact"
              className="inline-block bg-blue-500 text-white text-lg py-3 px-6 rounded-full shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              ¡Hablemos y trabajemos juntos!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
