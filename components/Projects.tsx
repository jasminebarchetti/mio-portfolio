"use client";

import { useState } from "react";

const projects = [
  { id: 1, step: 1, title: "E-Commerce Platform", description: "A modern online shopping experience with seamless checkout and inventory management", tags: ["React", "Node.js", "MongoDB"], gradient: "from-pink-500 to-rose-500", icon: "🛍️" },
  { id: 2, step: 2, title: "AI Chat Application", description: "Real-time messaging app with AI-powered smart replies and sentiment analysis", tags: ["Next.js", "OpenAI", "WebSocket"], gradient: "from-purple-500 to-indigo-500", icon: "💬" },
  { id: 3, step: 3, title: "Portfolio Generator", description: "Dynamic portfolio builder with customizable themes and drag-and-drop interface", tags: ["TypeScript", "Tailwind", "Framer"], gradient: "from-blue-500 to-cyan-500", icon: "🎨" },
  { id: 4, step: 4, title: "Fitness Tracker", description: "Track workouts, nutrition, and progress with beautiful data visualizations", tags: ["React Native", "Firebase", "Chart.js"], gradient: "from-green-500 to-emerald-500", icon: "💪" },
  { id: 5, step: 5, title: "Music Streaming App", description: "Discover and stream music with personalized playlists and social features", tags: ["Vue.js", "Express", "PostgreSQL"], gradient: "from-violet-500 to-purple-500", icon: "🎵" },
  { id: 6, step: 6, title: "Task Management Tool", description: "Collaborative project management with kanban boards and team analytics", tags: ["Angular", "NestJS", "Redis"], gradient: "from-orange-500 to-red-500", icon: "✅" },
  { id: 7, step: 7, title: "Weather Dashboard", description: "Beautiful weather forecasts with interactive maps and climate insights", tags: ["React", "D3.js", "Weather API"], gradient: "from-sky-500 to-blue-500", icon: "🌤️" },
];

export default function Projects() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">My Project</h2>
          <p className="text-xl text-gray-600">HueFeel</p>
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
                  <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${activeStep === project.step ? "scale-105" : "scale-100"}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl">{project.icon}</span>
                      <div>
                        <div className={`text-sm font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>STEP {project.step}</div>
                        <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${project.gradient} text-white font-medium`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full p-1">
            <div className="bg-white rounded-full px-8 py-4">
              <div className="text-3xl font-bold gradient-text">Completed! ✨</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}