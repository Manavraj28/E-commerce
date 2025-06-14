import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Maximize, Eye, ShoppingCart, Monitor, Smartphone } from 'lucide-react';

const InteractiveDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeFeature, setActiveFeature] = useState('3d-store');
  const [viewMode, setViewMode] = useState('desktop');

  const features = [
    {
      id: '3d-store',
      title: '3D Virtual Store',
      description: 'Navigate through immersive 3D environments with realistic lighting and interactive elements',
      icon: Maximize,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ai-assistant',
      title: 'AI Shopping Assistant',
      description: 'Get personalized recommendations based on your preferences and shopping history',
      icon: Eye,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ar-tryson',
      title: 'AR Try-On',
      description: 'See products in your space or on yourself using advanced augmented reality',
      icon: RotateCcw,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'quick-purchase',
      title: 'Quick Purchase',
      description: 'Seamless one-click checkout with multiple payment options including crypto',
      icon: ShoppingCart,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            See VirtuMart{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              In Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our revolutionary shopping platform through this interactive demo. 
            Discover how AI and 3D technology transform online retail.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Feature List */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Features</h3>
            {features.map((feature) => {
              const IconComponent = feature.icon;
              const isActive = activeFeature === feature.id;
              
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 border ${
                    isActive
                      ? 'bg-blue-50 border-blue-200 shadow-sm'
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg transition-colors duration-300 ${
                      isActive
                        ? `bg-gradient-to-br ${feature.color}`
                        : 'bg-gray-200'
                    }`}>
                      <IconComponent className={`h-5 w-5 ${
                        isActive ? 'text-white' : 'text-gray-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold mb-1 transition-colors duration-300 ${
                        isActive ? 'text-blue-600' : 'text-gray-900'
                      }`}>
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Demo Viewer */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              {/* Demo Controls */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('desktop')}
                    className={`p-2 rounded-lg transition-colors duration-200 ${
                      viewMode === 'desktop' ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Monitor className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('mobile')}
                    className={`p-2 rounded-lg transition-colors duration-200 ${
                      viewMode === 'mobile' ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Smartphone className="h-4 w-4" />
                  </button>
                </div>
                <div className="text-sm text-gray-500">Interactive Demo • 2:30</div>
              </div>

              {/* Demo Screen */}
              <div className={`relative bg-white rounded-xl overflow-hidden border border-gray-200 ${
                viewMode === 'mobile' ? 'aspect-[9/16] max-w-sm mx-auto' : 'aspect-video'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${features.find(f => f.id === activeFeature)?.color} rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg`}>
                      {isPlaying ? (
                        <Pause className="h-6 w-6 text-white" />
                      ) : (
                        <Play className="h-6 w-6 text-white ml-1" />
                      )}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {features.find(f => f.id === activeFeature)?.title}
                    </h4>
                    <p className="text-gray-600 text-sm max-w-xs mx-auto">
                      {isPlaying ? 'Demo Playing...' : 'Click to Start Demo'}
                    </p>
                  </div>
                </div>
                
                {/* Play/Pause Overlay */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute inset-0 flex items-center justify-center hover:bg-black/5 transition-colors duration-200"
                >
                  <span className="sr-only">{isPlaying ? 'Pause' : 'Play'} demo</span>
                </button>
              </div>

              {/* Demo Controls */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex space-x-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors duration-200 shadow-sm"
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
                  </button>
                  <button className="bg-white hover:bg-gray-50 text-gray-600 p-3 rounded-lg transition-colors duration-200 border border-gray-200">
                    <RotateCcw className="h-4 w-4" />
                  </button>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                  Try Full Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;