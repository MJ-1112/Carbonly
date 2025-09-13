import React from 'react';

const HeroSection = () => {
  const handleCreateAccount = () => {
    // Add your account creation logic here
    alert('Create account clicked! This would redirect to the signup page.');
  };

  return (
    <div style={{ fontFamily: 'Kanit, sans-serif' }}>
      {/* Google Fonts Import */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap" 
        rel="stylesheet"
      />
      
      <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 relative overflow-hidden">
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
            <div className="bg-white border-2 border-purple-300 rounded-lg p-6 text-left relative overflow-hidden transition-all duration-300 hover:shadow-2xl group">
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                   style={{ 
                     boxShadow: '0 0 20px #a855f7, 0 0 40px #a855f7, 0 0 60px #a855f7' 
                   }}></div>
              <div className="relative z-10">
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
                <button className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors cursor-pointer">
                  Become a grower →
                </button>
              </div>
            </div>

            {/* Individuals and Organisations Card */}
            <div className="bg-white border-2 border-gray-900 rounded-lg p-6 text-left relative overflow-hidden transition-all duration-300 hover:shadow-2xl group">
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                   style={{ 
                     boxShadow: '0 0 20px #1f2937, 0 0 40px #1f2937, 0 0 60px #1f2937' 
                   }}></div>
              <div className="relative z-10">
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
                <button className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors cursor-pointer">
                  Purchase carbonly →
                </button>
              </div>
            </div>

            {/* Planet & Humanity Card */}
            <div className="bg-white border-2 border-cyan-300 rounded-lg p-6 text-left relative overflow-hidden transition-all duration-300 hover:shadow-2xl group">
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                   style={{ 
                     boxShadow: '0 0 20px #06b6d4, 0 0 40px #06b6d4, 0 0 60px #06b6d4' 
                   }}></div>
              <div className="relative z-10">
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
                <button className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors cursor-pointer">
                  What drives Carbonly? →
                </button>
              </div>
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
                  <div className="bg-gradient-to-br from-cyan-200 to-blue-300 border-2 border-blue-400 rounded-lg p-6 relative overflow-hidden transition-all duration-300 hover:shadow-2xl group">
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                         style={{ 
                           boxShadow: '0 0 20px #3b82f6, 0 0 40px #3b82f6, 0 0 60px #3b82f6' 
                         }}></div>
                    <div className="relative z-10">
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
                  </div>

                  {/* Verifiable Card */}
                  <div className="bg-gray-100 border-2 border-gray-400 rounded-lg p-6 relative overflow-hidden transition-all duration-300 hover:shadow-2xl group">
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                         style={{ 
                           boxShadow: '0 0 20px #6b7280, 0 0 40px #6b7280, 0 0 60px #6b7280' 
                         }}></div>
                    <div className="relative z-10">
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
                  </div>

                  {/* Valuable Card */}
                  <div className="bg-gray-100 border-2 border-cyan-400 rounded-lg p-6 relative overflow-hidden transition-all duration-300 hover:shadow-2xl group">
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                         style={{ 
                           boxShadow: '0 0 20px #06b6d4, 0 0 40px #06b6d4, 0 0 60px #06b6d4' 
                         }}></div>
                    <div className="relative z-10">
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

          {/* How it works section */}
          <div className="mt-24 text-center max-w-5xl mx-auto">
            {/* How it works button */}
            <div className="mb-12">
              <button className="px-6 py-2 bg-white border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-50 transition-colors font-medium">
                How it works?
              </button>
            </div>

            {/* Main heading */}
            <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-8 leading-tight">
              Connecting{' '}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #4CCAA9, #3EFFEF)' }}>
                growers and purchasers
              </span>{' '}
              to the
              <br />
              global carbon market, in 4 steps.
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-16">
              Grower's trees generate Carbonly. Buyers purchase them to support sustainability so Growers are incentivised to keep their trees in the ground. The excess is stored value. More trees in the ground, Growers get paid for their work, Buyers support real tree growth, everyone wins.
            </p>

            {/* 4 Steps Process */}
            <div className="relative max-w-6xl mx-auto">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 to-blue-500 h-full hidden md:block"></div>
              
              {/* Step 1 - Generate tokens */}
              <div className="flex flex-col md:flex-row items-center mb-16 relative">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
                  <div className="bg-white border-2 border-cyan-300 rounded-2xl p-6 relative">
                    <div className="absolute -top-3 -left-3 bg-cyan-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                    <h3 className="text-xl font-semibold text-cyan-500 mb-2">Generate tokens</h3>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Growers generate Carbonly</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Forestry companies, landowners and governments produce Carbonly based on verified carbon drawdown data.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="relative">
                    <img 
                      src="./man.png" 
                      alt="Growers planting trees"
                      className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
                {/* Circle connector */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-white hidden md:block"></div>
              </div>

              {/* Step 2 - Audit */}
              <div className="flex flex-col md:flex-row-reverse items-center mb-16 relative">
                <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
                  <div className="bg-white border-2 border-blue-300 rounded-2xl p-6 relative">
                    <div className="absolute -top-3 -right-3 bg-blue-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                    <h3 className="text-xl font-semibold text-blue-500 mb-2">Audit</h3>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Carbonly ensures data integrity</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Carbonly validates all measurements with satellite data and AI-driven carbon gateway partners to ensure data is legitimate. All data is stored on the blockchain.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pr-12">
                  <div className="relative">
                    <img 
                      src="./plant.png" 
                      alt="Young plant in hands"
                      className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
                {/* Circle connector */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-white hidden md:block"></div>
              </div>

              {/* Step 3 - Exchange */}
              <div className="flex flex-col md:flex-row items-center mb-16 relative">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
                  <div className="bg-white border-2 border-green-300 rounded-2xl p-6 relative">
                    <div className="absolute -top-3 -left-3 bg-green-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                    <h3 className="text-xl font-semibold text-green-500 mb-2">Exchange</h3>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Growers and purchasers exchange in the market</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Organisations and individuals with a commitment to sustainability purchase Carbonly directly from growers through the portal.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="relative">
                    <img 
                      src="./mindmap.png" 
                      alt="Carbon market visualization"
                      className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
                {/* Circle connector */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full border-4 border-white hidden md:block"></div>
              </div>

              {/* Step 4 - Carbon Lock */}
              <div className="flex flex-col md:flex-row-reverse items-center relative">
                <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
                  <div className="bg-white border-2 border-gray-300 rounded-2xl p-6 relative">
                    <div className="absolute -top-3 -right-3 bg-gray-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                    <h3 className="text-xl font-semibold text-gray-500 mb-2">Carbon Lock (optional)</h3>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Lock up carbon and showcase</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Send your treecoin tokens to a carbon-lock wallet where it is retired. Use the on-chain data as proof to market your company's sustainability commitment.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pr-12">
                  <div className="relative">
                    <img 
                      src="./trees.png" 
                      alt="Forest of trees"
                      className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
                {/* Circle connector */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-400 rounded-full border-4 border-white hidden md:block"></div>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="mt-24 text-center">
              <button 
                onClick={handleCreateAccount}
                className="px-8 py-4 text-white bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-500 hover:to-purple-600 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-medium text-lg flex items-center justify-center gap-2 mx-auto mb-4 cursor-pointer"
              >
                Create account
                <div className="w-6 h-4 border-2 border-white rounded-sm flex items-center justify-center">
                  <div className="w-3 h-1 bg-white rounded-sm"></div>
                </div>
              </button>
              <p className="text-gray-600 text-lg">a few minutes to start a lifetime of earning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-lg font-medium">© 2025 CARBONLY</p>
        </div>
      </footer>
    </div>
  );
};

export default HeroSection;