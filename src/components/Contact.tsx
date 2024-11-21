// components/Contact.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20 md:py-32 text-black">
      <div className="container mx-auto px-6">
        {/* Grid de 2 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {" "}
          {/* Aumento el espacio entre columnas con gap-16 */}
          {/* Columna 1: Agradecimiento y llamada a la acción */}
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-blue-500 mb-4">
              ¡Gracias por llegar hasta aquí!
            </h2>
            <p className="text-lg md:text-xl text-gray-800 mb-6">
              Si te ha interesado mi trabajo, no dudes en contactarme. ¡Estoy
              aquí para ayudarte con cualquier duda o proyecto!
            </p>
            <p className="text-lg md:text-xl text-gray-800 mb-6">
              ¿Listo para comenzar? ¡Hablemos!
            </p>
            <a
              href="mailto:adrian@example.com"
              className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold transform transition duration-300 hover:bg-blue-700 hover:scale-105"
            >
              ¡Contáctame!
            </a>
          </div>
          {/* Columna 2: Enlaces de contacto */}
          <div className="flex flex-col justify-center items-center md:items-start gap-6">
            <h3 className="text-2xl font-extrabold text-blue-500 mb-4">
              Enlaces de contacto
            </h3>

            {/* Email */}
            <a
              href="mailto:adrian@example.com"
              className="flex items-center space-x-3 text-lg text-gray-800 hover:text-blue-500 transition duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
              <span>adrian@example.com</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-3 text-lg text-gray-800 hover:text-blue-500 transition duration-300"
            >
              <FontAwesomeIcon icon={faPhoneAlt} className="w-6 h-6" />
              <span>+1 (234) 567-890</span>
            </a>

            {/* CV Download */}
            <a
              href="/path/to/your-cv.pdf" // Cambia esta URL por la ubicación de tu CV
              className="flex items-center space-x-3 text-lg text-gray-800 hover:text-blue-500 transition duration-300"
              download
            >
              <FontAwesomeIcon icon={faDownload} className="w-6 h-6" />
              <span>Descargar CV</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/adrian"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-lg text-gray-800 hover:text-blue-500 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 20h-3v-10h3v10zm-1.5-11.286c-.967 0-1.75-.783-1.75-1.75s.783-1.75 1.75-1.75 1.75.783 1.75 1.75-.783 1.75-1.75 1.75zm13.5 11.286h-3v-5c0-1.106-.894-2-2-2s-2 .894-2 2v5h-3v-10h3v1.154c.812-.946 2.038-1.154 3-1.154 2.206 0 4 1.794 4 4v6z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
