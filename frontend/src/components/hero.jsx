import React from 'react';

const HeroSection = () => {
  return (
    <>
      {/* Google Fonts Import */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap" 
        rel="stylesheet"
      />
      
      <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 relative overflow-hidden" style={{ fontFamily: 'Kanit, sans-serif' }}>
        {/* Decorative Elements */}
        <div className="absolute top-32 left-16">
          <div className="w-16 h-12 border-2 border-gray-800 rounded-md"></div>
        </div>
        <div className="absolute top-48 left-28">
          <div className="w-12 h-10 border-2 border-gray-800 rounded-md"></div>
        </div>
        <div className="absolute top-40 right-20">
          <div className="w-14 h-10 border-2 border-purple-400 rounded-md"></div>
        </div>
        <div className="absolute top-56 right-32">
          <div className="w-10 h-8 border-2 border-purple-400 rounded-md"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-medium text-gray-900 mb-6 leading-tight">
            Generate{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #4CCAA9, #3EFFEF)' }}>
              wealth
            </span>{' '}
            while
            <br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #4CCAA9, #3EFFEF)' }}>
              reforesting
            </span>{' '}
            the world.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Creating a liveable and prosperous world is a team effort. Carbonly ensures living 
            assets underpin our economy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-medium text-lg flex items-center justify-center gap-2">
              Start earning
              <div className="w-5 h-4 border-2 border-white rounded-sm"></div>
            </button>
            <button className="px-8 py-4 text-white bg-gray-900 hover:bg-gray-800 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-medium text-lg flex items-center justify-center gap-2">
              Buy carbon tokens
              <div className="w-5 h-4 border-2 border-white rounded-sm"></div>
            </button>
          </div>

          {/* Tree Illustration */}
          <div className="relative mx-auto w-80 h-80 md:w-96 md:h-96">
            {/* Circular Background */}
            <div className="absolute inset-0 rounded-full border-4 border-gray-200 opacity-50"></div>
            <div className="absolute inset-4 rounded-full border-4 border-gray-200 opacity-30"></div>
            <div className="absolute inset-8 rounded-full border-4 border-gray-200 opacity-20"></div>
            
            {/* Your Image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="./tree.jpg" 
                alt="Tree image"
                className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full"
                style={{ 
                  mixBlendMode: 'multiply',
                  filter: 'contrast(1.2) brightness(1.1)'
                }}
              />
            </div>
          </div>

          {/* Three Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
            {/* Growers Card */}
            <div className="bg-white border-2 border-purple-300 rounded-lg p-6 text-left">
              <div className="w-8 h-8 mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="m2 17 10 5 10-5"/>
                  <path d="m2 12 10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Growers</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Plant trees and be paid for carbon they drawdown, then sell carbon tokens to individuals and organisations.
              </p>
              <button className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors">
                Become a grower →
              </button>
            </div>

            {/* Individuals and Organisations Card */}
            <div className="bg-white border-2 border-gray-900 rounded-lg p-6 text-left">
              <div className="w-8 h-8 mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                  <rect x="3" y="3" width="7" height="7"/>
                  <rect x="14" y="3" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Individuals and Organisations</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Transparent and verified, Carbonly is an easy way to fulfil and commitment to sustainability
              </p>
              <button className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors">
                Purchase carbonly →
              </button>
            </div>

            {/* Planet & Humanity Card */}
            <div className="bg-white border-2 border-cyan-300 rounded-lg p-6 text-left">
              <div className="w-8 h-8 mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m4.93 4.93 4.24 4.24"/>
                  <path d="m14.83 9.17 4.24-4.24"/>
                  <path d="m14.83 14.83 4.24 4.24"/>
                  <path d="m9.17 14.83-4.24 4.24"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Planet & Humanity</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Making reforestation profitable is great for Earth. Using carbon storage as a proof of work means carbonly tokens are backed by productivity.
              </p>
              <button className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors">
                What drives Carbonly? →
              </button>
            </div>
          </div>
          {/* Why it matters button */}
          <div className="mt-12">
            <button className="px-8 py-3 bg-white border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-50 transition-colors font-medium">
              Why it matters?
            </button>
          </div>

          {/* Quote Section */}
          <div className="mt-16 bg-white border-4 border-cyan-400 rounded-3xl p-4 md:p-8 mx-auto relative w-full max-w-6xl" style={{ minHeight: '400px' }}>
            <div className="relative z-10 h-full flex flex-col justify-center">
              {/* Quote */}
              <blockquote className="text-center mb-6">
                <p className="text-2xl md:text-3xl font-medium text-gray-900 leading-tight mb-4">
                  "To date, there's a{' '}
                  <span className="text-cyan-500 font-semibold">complete lack</span>
                  <br />
                  <span className="text-purple-500 font-semibold">of grassroots incentives</span>{' '}
                  to resolve
                  <br />
                  the challenges of reforestation."
                </p>
                <cite className="text-sm text-gray-600 font-medium">-The carbonly founders</cite>
              </blockquote>

              {/* Subtitle */}
              <p className="text-center text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                We believe people will take better care of the environment if they can profit from their efforts.
              </p>

              {/* Solution section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">The solution must be:</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Transparent Card */}
                  <div className="bg-gradient-to-br from-cyan-200 to-blue-300 border-2 border-blue-400 rounded-lg p-6">
                    <div className="w-8 h-8 mb-4">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full text-blue-700">
                        <rect x="3" y="3" width="18" height="12" rx="2" ry="2"/>
                        <line x1="9" y1="9" x2="15" y2="9"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Transparent</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Every treecoin is backed by data showing where the carbon was captured. Grower's project is visible on the map. Check it out below.
                    </p>
                  </div>

                  {/* Verifiable Card */}
                  <div className="bg-gray-100 border-2 border-gray-400 rounded-lg p-6">
                    <div className="w-8 h-8 mb-4">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full text-gray-700">
                        <rect x="3" y="3" width="18" height="12" rx="2" ry="2"/>
                        <line x1="9" y1="9" x2="15" y2="9"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Verifiable</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Each project is verified with industry leading AI carbon auditing technology using satellite data.
                    </p>
                  </div>

                  {/* Valuable Card */}
                  <div className="bg-gray-100 border-2 border-cyan-400 rounded-lg p-6">
                    <div className="w-8 h-8 mb-4">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full text-cyan-700">
                        <rect x="3" y="3" width="18" height="12" rx="2" ry="2"/>
                        <line x1="9" y1="9" x2="15" y2="9"/>
                      </svg>
                    </div>
                    <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">Valuable</h4>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Each treecoin is equal to one tonne of carbon drawn out of the atmosphere.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;