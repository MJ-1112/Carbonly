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
        </div>
      </section>
    </>
  );
};

export default HeroSection;