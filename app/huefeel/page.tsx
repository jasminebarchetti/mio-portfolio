"use client";

import Link from "next/link";

const groupSteps = [
  {
    id: 1,
    title: "Problem Analysis",
    description: `The project began by identifying a widespread and emotionally impactful problem: miscommunication in text-based group chats due to the lack of tone and emotional context. Short replies, delayed responses, sarcasm, and minimal punctuation are frequently misinterpreted, causing anxiety, stress, and unnecessary conflict—particularly among young adults who rely on messaging apps as their primary communication channel. 

Through both secondary research (APA studies, communication statistics) and primary research (surveys and interviews with users aged 18–30), the team confirmed that:
• Text-based communication has a higher rate of misunderstandings compared to voice or face-to-face interaction. 
• Users often experience overthinking, emotional projection, and anxiety, especially when messages are vague or delayed. 
• Existing coping strategies, such as emojis, voice notes, or over-explaining, are inefficient, cognitively demanding, or disruptive. 
• Current tools (e.g., generic tone checkers) are not personalized, lack group-chat awareness, and do not prioritize privacy. `,
  },
  {
    id: 2,
    title: "Ideation",
    description: `The core concept that emerged is HueFeel, a privacy-conscious messaging extension designed to learn each user’s unique texting style and detect potential tone ambiguities.  

The ideation process was guided by key principles:
• Sender-focused feedback (“Tone Mirror”) to enable adjustments before sending. 
• Non-intrusive design, avoiding pop-ups or judgmental labels. 
• Personalization, prioritizing individual style over generic interpretations. 
• User control and consent, ensuring transparency and trust. 

This led to a clear value proposition: a tool that functions as “Grammarly for emotional tone in group chats” while also providing “Spotify Wrapped-style insights” for self-reflection. `,
  },
  {
    id: 3,
    title: "Development",
    description: `The development phase translated the concept into a functional prototype, primarily envisioned as a WhatsApp extension, supported by a robust UX and ethical framework. 

Key development steps included:
• Designing an onboarding process using a tone profile quiz to personalize emotional interpretation. 
• Establishing a visual language with soft colors, minimal icons, and accessible contrast. 
• Building core features: Tone Translator for visual clarification of emotional intent, Personalized color palettes, and Receiver-dependent tone filters. 
• Implementing a privacy-first approach, with local processing and no hidden data storage. `,
  },
  {
    id: 4,
    title: "Iterations",
    description: `After conducting a testing phase with 18 users, we identified key improvements.  Feedback indicated that "Too much UI = Emotional Fatigue."  

We iterated by:
• Replacing intrusive pop-ups with subtle cues like thin colored borders. 
• Introducing personalized color options to build user trust. 
• Adding message filtering based on the receiver (Professional vs. Casual). `,
  },
  {
    id: 5,
    title: "Progression Toward The Final Prototype",
    description: `Testing and user feedback guided multiple refinements to ensure the product aligned with users’ emotional needs.  

Key final refinements included:
• Reducing the color palette to softer, fewer tones to prevent cognitive overload. 
• Replacing explicit AI suggestions with subtle, optional indicators like emotion initials. 
• Finalizing the 'HueFeel Wrapped' feature, designed to visualize communicative well-being and reduce digital stress for long-term self-reflection. `,
  },
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
                <img 
                  src="/logo.png" 
                  alt="HueFeel Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Group Project: HueFeel
                </h1>
                <p className="text-purple-400 font-bold tracking-widest uppercase text-sm mt-1">
                  HUMAN COMPUTER INTERACTION 2025/2026
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
              <div className="text-gray-600 mb-6 leading-relaxed text-lg whitespace-pre-line">
                {step.description}
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-purple-500">
                 <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                 Detailed in PDF Deck
              </div>
            </div>
          ))}
        </section>

        {/* Prototype Video Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span className="bg-purple-100 p-2 rounded-xl">🎬</span> Final Result: The Prototype
          </h2>
          <div className="aspect-video w-full rounded-[2rem] overflow-hidden shadow-2xl border-8 border-purple-50 bg-gray-900">
            <video controls className="w-full h-full object-cover">
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