"use client";

import { useState } from "react";

const skillCategories = [
  {
    category: "Digital Marketing",
    icon: "📈",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    skills: ["Marketing & Advertising", "Change Management", "Problem solving", "Adaptability", "Team work", "Time Management"],
  },
  {
    category: "Development",
    icon: "💻",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    skills: ["React", "Next.js", "TypeScript", "HTML5", "CSS", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Tools & Design",
    icon: "🎨",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    skills: ["Figma", "VS Code", "Git"],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20 px-6 bg-white/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">My Skills</h2>
          <p className="text-xl text-gray-600">Technologies and professional skills</p>
        </div>

        {/* Tab delle Categorie */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {skillCategories.map((cat, index) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 flex items-center gap-2 border-2 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${cat.color} text-white border-transparent shadow-lg scale-105`
                  : "bg-white text-gray-500 border-gray-100 hover:border-purple-200 hover:text-purple-500"
              }`}
            >
              <span className="text-xl">{cat.icon}</span>
              {cat.category}
            </button>
          ))}
        </div>

        {/* Griglia delle Skills (Badge Moderni) */}
        <div className="relative min-h-[300px]">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.category}
              className={`transition-all duration-500 absolute w-full ${
                activeCategory === catIndex
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <div className={`${category.bgColor} rounded-[2.5rem] p-10 border border-white/20 shadow-inner`}>
                <div className="flex flex-wrap justify-center gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="bg-white/80 backdrop-blur-md border border-white rounded-2xl px-6 py-4 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group cursor-default"
                    >
                      <span className="text-md font-bold text-gray-700 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Finali */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-3xl shadow-sm text-center border border-gray-50">
            <div className="text-4xl font-black gradient-text mb-1">7+</div>
            <div className="text-xs uppercase tracking-widest font-bold text-gray-400">Projects Done</div>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm text-center border border-gray-50">
            <div className="text-4xl font-black gradient-text mb-1">20+</div>
            <div className="text-xs uppercase tracking-widest font-bold text-gray-400">Skills Gained</div>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm text-center border border-gray-50">
            <div className="text-4xl font-black gradient-text mb-1">100%</div>
            <div className="text-xs uppercase tracking-widest font-bold text-gray-400">Commitment</div>
          </div>
        </div>
      </div>
    </section>
  );
}