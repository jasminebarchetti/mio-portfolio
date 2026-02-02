"use client";

import Link from "next/link";

const groupSteps = [
  {
    id: 1,
    title: "Problem Analysis",
    description: "We analyzed how 94% of users misinterpret the tone of text messages, leading to anxiety and conflicts within chat",
  },
  {
    id: 2,
    title: "Ideation",
    description: "The concept is a WhatsApp extension designed to clarify the emotional tone of messages by color-coding text based on detected emotions.",
  },
  {
    id: 3,
    title: "Development",
    description: "The interface was developed using a phased and iterative, human-centered design approach to effectively address tone misinterpretation.",
  },
  {
    id: 4,
    title: "Iterations",
    description: "After conducting a testing phase, we collected feedback from our testers and identified key improvements needed for the extension, including an improved UI design, personalized color options, and message filtering.",
  },
  {
    id: 5,
    title: "Progression Toward The Final Prototype",
    description: "The final prototype includes personalized emotion names and the 'HueFeel Wrapped' feature, designed to visualize communicative well-being and reduce digital stress.",
  }
];

export default function HueFeelPage() {
  return (
    <main className="min-h-screen bg-white py-20 px-6 font-sans text-gray-900">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Link */}
        <Link href="/#projects" className="text-purple-500 hover:text-purple-600 font-medium flex items-center gap-2 mb-12 transition-colors">
          ← Back to Portfolio
        </Link>

        {/* Header with Logo */}
        <header className="mb-16">
          <div className="flex items-center gap-6 mb-6">
              <div className="w-20 h-20 relative flex-shrink-0">
                {/* Il percorso "/" punta direttamente alla cartella public */}
                <img 
                  src="/logo.png" 
                  alt="HueFeel Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => console.log("Errore caricamento logo: controlla che logo.png sia in public/")}
                />
              </div>
              <div>
                <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Group Project: HueFeel
                </h1>
                <p className="text-purple-400 font-bold tracking-widest uppercase text-sm mt-1">
                  Interaction Design 2024/25
                </p>
              </div>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
            A team-based project focused on reducing digital miscommunication through color-based emotional cues.
          </p>
        </header>

        {/* Steps Grid */}
        <section className="grid gap-8 mb-24">
          {groupSteps.map((step) => (
            <div key={step.id} className="p-8 rounded-3xl border border-purple-100 bg-gradient-to-br from-purple-50 to-white shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                <span className="text-xs font-black text-purple-400 uppercase tracking-[0.2em] px-3 py-1 bg-white rounded-full border border-purple-100 shadow-sm">
                  Phase 0{step.id}
                </span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                {step.description}
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-purple-500">
                 <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                 Detailed in PDF Deck
              </div>
            </div>
          ))}
        </section>

        {/* --- PROTOTYPE VIDEO SECTION --- */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span className="bg-purple-100 p-2 rounded-xl">🎬</span> Final Result: The Prototype
          </h2>
          <div className="aspect-video w-full rounded-[2rem] overflow-hidden shadow-2xl border-8 border-purple-50 bg-gray-900">
            {/* Assicurati che svideo.mp4 sia in public/ */}
            <video 
              controls 
              className="w-full h-full object-cover"
            >
              <source src="/svideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="mt-6 text-center text-gray-400 italic text-sm font-medium">
            Demo of the HueFeel extension and user interface
          </p>
        </section>

        {/* PDF Download Section */}
        <div className="p-10 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 rounded-[2.5rem] text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-white rounded-full blur-3xl"></div>
          </div>

          <h2 className="text-3xl font-bold mb-4 relative z-10">Want to dive deeper?</h2>
          <p className="mb-10 opacity-90 text-lg max-w-xl mx-auto relative z-10">
            Check out the full documentation including statistics, user testing results, and our Lean Canvas.
          </p>
          
          <a 
            href="https://drive.google.com/file/d/1gR73WIqVsO5MXWego_8tiIDBcHAaccCK/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-700 px-10 py-4 rounded-full font-black text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 z-10 relative"
          >
            Open Full Deck (PDF)
          </a>
        </div>
      </div>
    </main>
  );
}