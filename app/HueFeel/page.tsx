"use client";

import Link from "next/link";

const groupSteps = [
  {
    id: 1,
    title: "Problem Analysis",
    description: "Analisi del problema legato alle emozioni e al colore. Abbiamo studiato come gli utenti interagiscono con le interfacce cromatiche.",
    link: "#" // Qui potrai mettere link a Figma o documenti
  },
  {
    id: 2,
    title: "Ideation",
    description: "Lavoro svolto con Ilaria e Fabiana: brainstorming, user flows e architettura dell'informazione.",
    link: "#"
  },
   {
    id: 3,
    title: "Development",
    description: "Lavoro svolto con Ilaria e Fabiana: brainstorming, user flows e architettura dell'informazione.",
    link: "#"
  },
  {
    id:4,
    title: "Iterations",
    description: "Lavoro svolto con Ilaria e Fabiana: brainstorming, user flows e architettura dell'informazione.",
    link: "#"
  },
   {
    id:5,
    title: "Progression Toward The Final Prototype",
    description: "Lavoro svolto con Ilaria e Fabiana: brainstorming, user flows e architettura dell'informazione.",
    link: "#"
  }
];

export default function HueFeelPage() {
  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        <Link href="/#projects" className="text-purple-500 hover:text-purple-600 font-medium flex items-center gap-2 mb-8 transition-colors">
          ← Torna al Portfolio
        </Link>

        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Group Project: HueFeel
          </h1>
          <p className="text-xl text-gray-600">
            Un'esperienza immersiva creata insieme a Ilaria e Fabiana per esplorare il legame tra colori ed emozioni.
          </p>
        </header>

        <div className="grid gap-8">
          {groupSteps.map((step) => (
            <div key={step.id} className="p-8 rounded-3xl border border-purple-100 bg-gradient-to-br from-purple-50 to-white shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
              <button className="px-6 py-2 rounded-full bg-purple-500 text-white font-semibold hover:bg-purple-600 transition-colors">
                Coming Soon
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}