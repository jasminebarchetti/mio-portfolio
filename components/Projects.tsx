"use client";

import { useState } from "react";
import Link from "next/link";

const projects = [
  { 
    id: 1, 
    step: 1, 
    title: "Individual Assignments", 
    description: "This page shows the different paths I explored during the HCI course to contribute to the final team projects. Each path represents my way of thinking, experimenting, and refining ideas before arriving at the final solution.", 
    tags: ["HCI", "Interaction problem", "Design thinking"], 
    gradient: "from-pink-500 to-rose-500", 
    icon: "/assignments-icon.png",
    link: "/assignments" 
  },
  { 
    id: 2, 
    step: 2, 
    title: "Group Project - HueFeel", 
    description: "We built our team: Ilaria, Fabiana, and me! Together, we combined our skills and creativity to bring HueFeel to life, collaborating on every step from idea to final prototype.", 
    tags: ["Team", "HueFeel", "Project"], 
    gradient: "from-purple-500 to-indigo-500", 
    icon: "💬", 
    link: "/huefeel"
  },
  { 
    id: 3, 
    step: 3, 
    title: "Final Result - Prototype", 
    description: "The final evolution of our work: a fully functional prototype that solves the interaction problems we identified, designed with a focus on user experience and emotional interface.", 
    tags: ["Prototype", "Figma", "User Testing"], 
    gradient: "from-blue-500 to-cyan-500", 
    icon: "🎨", 
    link: "#" 
  }
]; 

export default function Projects() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="projects" className="min-h-screen py-20 px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">My Project</h2>
          <p className="text-xl text-gray-600 font-medium">HueFeel</p>
        </div>

        <div className="relative">
          {/* Linea centrale della Timeline */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-purple-300 to-blue-300 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`} 
                onMouseEnter={() => setActiveStep(project.step)} 
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Il Cerchio col numero dello Step */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg transition-all duration-300 ${activeStep === project.step ? "scale-125" : "scale-100"}`}>
                    {project.step}
                  </div>
                </div>

                {/* Card del Progetto */}
                <div className={`ml-28 md:ml-0 ${index % 2 === 0 ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16"} md:w-1/2`}>
                  <Link href={project.link}>
                    <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${activeStep === project.step ? "scale-105" : "scale-100"}`}>
                      <div className="flex items-center gap-3 mb-4">
                        {/* LOGICA PER ICONA O IMMAGINE */}
                        <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                            {project.icon.startsWith("/") ? (
                            <img src={project.icon} alt="" className="w-full h-full object-contain" />
                            ) : (
                            <span className="text-5xl">{project.icon}</span>
                            )}
                        </div>
                        
                        <div>
                          <div className={`text-sm font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>STEP {project.step}</div>
                          <h3 className="text-2xl font-bold text-gray-800 leading-tight">{project.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${project.gradient} text-white font-medium`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full p-1">
            <div className="bg-white rounded-full px-8 py-4">
              <div className="text-3xl font-bold gradient-text">Work in Progress... ✨</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

