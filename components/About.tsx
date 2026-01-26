import Image from 'next/image'; // Importante per la velocità del sito

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-gray-600">
           
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image/Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Cerchi decorativi dietro */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full opacity-50 blur-xl"></div>
              
              {/* Container Immagine */}
              <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-1 overflow-hidden shadow-2xl">
                <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center">
                  <img 
                    src="/profile.png" 
                    alt="Jasmine Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-3xl">✨</span> Who I Am
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Hi! I&apos;m Jasmine, a university student in Business Informatics with a focus on Digital Marketing. 
                This website is part of my academic journey, a space where I collect and share the projects I&apos;ve created during my studies.
              </p>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-4xl mb-2">☕</div>
            <div className="text-2xl font-bold gradient-text">500+</div>
            <div className="text-gray-600 text-sm">Cups of Coffee</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-4xl mb-2">💻</div>
            <div className="text-2xl font-bold gradient-text">1000+</div>
            <div className="text-gray-600 text-sm">Hours Coding</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-4xl mb-2">🎨</div>
            <div className="text-2xl font-bold gradient-text">50+</div>
            <div className="text-gray-600 text-sm">Designs Created</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-4xl mb-2">🌟</div>
            <div className="text-2xl font-bold gradient-text">∞</div>
            <div className="text-gray-600 text-sm">Dreams to Chase</div>
          </div>
        </div>
      </div>
    </section>
  );
}