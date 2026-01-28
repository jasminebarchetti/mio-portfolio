"use client";

import Link from "next/link";

const myAssignments = [
  {
    id: 1,
    title: "HCI Assignment 1 - Identifying a Problem",
    description: "Starting from an everyday interaction problem related to text-based communication, this assignment focuses on defining the project team using the Hustler, Hacker, and Hipster framework.",
    fileUrl: "/assignments/HCI.pdf", 
    date: "2025/2026"
  },
  {
    id: 2,
    title: "HCI Assignment 2 - Discover and New Ideas",
    description: "This assignment examines personal websites with good and poor communication to develop a clear understanding of best practices and common issues, helping us shape the design of our own website.",
    fileUrl: "/assignments/HCI2.pdf", 
    date: "2025/2026"
  },

  {
    id: 4,
    title: "HCI Assignment 3 - Personal Website",
    description: "This assignment presents my personal website as a step in my HCI journey. It reflects a professional yet approachable version of myself as a Business Informatics student focused on Digital Marketing. The design emphasizes clarity, simplicity, and usability through a clean layout, minimal color palette, and clear navigation. A key challenge was keeping the site simple but complete, which I solved by limiting it to three main pages, using ample white space, and selecting a calm accent color.",
    fileUrl: "/assignments/hci4.pdf", 
    date: "2025/2026"
  },
  {
    id: 5,
    title: "HCI Assignment 4 - User Feedback",
    description: "I collected feedback from four users: Recruiters, Marketing Managers, Collaborators, and Professors to see how my website communicates my skills and identity. Based on their insights, I improved the CTA visibility, added a professional sub-headline, increased ticker contrast, and made fonts consistent, making the site clearer, easier to navigate, and more approachable.",
    fileUrl: "/assignments/Pw.pdf", 
    date: "2025/2026"
  }
];

export default function AssignmentsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        
        <Link href="/#projects" className="text-pink-500 hover:text-pink-600 font-medium flex items-center gap-2 mb-8 transition-colors w-fit">
          ← Torna al Portfolio
        </Link>

        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
            Individual Assignments
          </h1>
          <p className="text-xl text-gray-600">
            In this section, you can find the PDFs related to my journey throughout the HCI course.
          </p>
        </header>

        <div className="grid gap-6">
          {myAssignments.map((assignment) => (
            <div key={assignment.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-gray-800">{assignment.title}</h3>
                <span className="text-sm text-gray-400 font-mono">{assignment.date}</span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                {assignment.description}
              </p>
              
              <a 
                href={assignment.fileUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-pink-100"
              >
                Apri PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
