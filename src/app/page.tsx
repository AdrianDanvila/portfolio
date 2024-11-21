"use client";

import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <Header />
      <HeroSection />
      {/* Hero Section */}

      {/* About Section */}
      <AboutMe />

      {/* Projects Section */}
      <section id="projects" className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Proyectos Destacados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Proyecto 1",
                desc: "Una aplicación interactiva para usuarios.",
                image: "https://via.placeholder.com/300x200",
              },
              {
                title: "Proyecto 2",
                desc: "Un sitio web responsivo para una startup.",
                image: "https://via.placeholder.com/300x200",
              },
              {
                title: "Proyecto 3",
                desc: "Una solución tecnológica avanzada.",
                image: "https://via.placeholder.com/300x200",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg mb-4"
                />
                <h4 className="text-xl font-bold text-gray-800">
                  {project.title}
                </h4>
                <p className="text-gray-600 mt-2">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
