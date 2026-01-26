export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 gradient-text">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600">
            Let&apos;s create something amazing together
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg max-w-2xl mx-auto border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
            Contact Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email - Più compatta */}
            <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-100/50">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white shrink-0 shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 uppercase font-bold">Email</p>
                <p className="text-sm font-medium text-gray-700">jbarchetti@unibz.it</p>
              </div>
            </div>

            {/* Location - Più compatta */}
            <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-100/50">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white shrink-0 shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 uppercase font-bold">Location</p>
                <p className="text-sm font-medium text-gray-700">Bolzano, Italy</p>
              </div>
            </div>

            {/* Availability - Sotto, centrata nella griglia se vuoi */}
            <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-pink-50 rounded-xl border border-blue-100/50 md:col-span-2 md:max-w-[50%] md:mx-auto w-full">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-pink-500 rounded-full flex items-center justify-center text-white shrink-0 shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 uppercase font-bold">Availability</p>
                <p className="text-sm font-medium text-gray-700">Weekdays: 8:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}