import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 px-6">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        {/* Header Cover */}
        <div className="bg-gradient-to-br from-[#ff6b35] to-[#ff9f1c] text-white py-12 px-8 text-center relative">
          <div className="w-28 h-28 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-4xl mx-auto border-2 border-white/40 shadow-lg mb-4">
            👨‍💻
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-1">Aman Gupta</h1>
          <p className="text-white/90 font-medium text-lg">
            Software Development Engineer @ Capillary Technologies
          </p>
        </div>

        {/* Bio Content */}
        <div className="p-8 md:p-10 text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
          <p className="text-lg font-medium text-gray-600 mb-6">
            An alumnus of NIT Agartala
          </p>
          <p className="text-base text-gray-500 mb-8">
            I am a results-driven SDE-2 with ~3 years of experience building scalable, high-performance customer engagement and CRM platforms. I couple a strong foundation in Data Structures & Algorithms with an eye for premium frontend aesthetics and system design.
          </p>

          <hr className="border-gray-100 my-8" />

          {/* Contact Cards */}
          <h2 className="text-xl font-bold text-gray-800 mb-6">Let's Connect!</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3">
              <span className="text-2xl">📧</span>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase">Email</p>
                <a href="mailto:amangupta326519@gmail.com" className="text-sm font-semibold text-[#ff6b35] hover:underline">
                  amangupta326519@gmail.com
                </a>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3">
              <span className="text-2xl">📱</span>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase">Mobile</p>
                <a href="tel:+919166160234" className="text-sm font-semibold text-gray-700 hover:underline">
                  +91 9166160234
                </a>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3">
              <span className="text-2xl">💼</span>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/aman-gupta-00a6321b5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-blue-600 hover:underline"
                >
                  aman-gupta-00a6321b5
                </a>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3">
              <span className="text-2xl">🐙</span>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase">GitHub</p>
                <a
                  href="https://github.com/aman18111625"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gray-800 hover:underline"
                >
                  aman18111625
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
