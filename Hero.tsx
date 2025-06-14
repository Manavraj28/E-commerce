import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, ShoppingBag, Sparkles, Eye, Zap, Gift } from 'lucide-react';

const Hero: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const features = [
    {
      icon: ShoppingBag,
      title: '3D Virtual Stores',
      description: 'Browse immersive 3D environments with realistic product displays',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Eye,
      title: 'AI Recommendations',
      description: 'Get personalized suggestions powered by advanced machine learning',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'AR Try-On',
      description: 'See how products look on you or in your space before buying',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Gift,
      title: 'NFT Rewards',
      description: 'Earn exclusive digital collectibles and unlock special perks',
      color: 'from-orange-500 to-red-500'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Interactive Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
          }}
        ></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-pulse">
          <div className="w-4 h-4 bg-blue-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-bounce delay-1000">
          <div className="w-3 h-3 bg-purple-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-pulse delay-2000">
          <div className="w-5 h-5 bg-cyan-400 rounded-full opacity-60"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-2 mb-8">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium">The Future of Shopping</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-gray-900">Experience Shopping</span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Like Never Before
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Step into immersive 3D stores, get AI-powered recommendations, try products with AR, 
              and earn exclusive NFT rewards in the world's most advanced virtual marketplace.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 shadow-lg">
                <ShoppingBag className="h-5 w-5" />
                <span>Start Shopping</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <div className="bg-gray-100 hover:bg-blue-100 rounded-full p-3 transition-colors duration-200">
                  <Play className="h-5 w-5 ml-1" />
                </div>
                <span className="text-lg font-medium">Watch Demo</span>
              </button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
                <div className="text-gray-500 text-sm">Virtual Stores</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-600 mb-1">50K+</div>
                <div className="text-gray-500 text-sm">Happy Users</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-cyan-600 mb-1">1M+</div>
                <div className="text-gray-500 text-sm">NFTs Earned</div>
              </div>
            </div>
          </div>

          {/* Right Interactive Panel */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              {/* Feature Showcase */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Platform Features</h3>
                  <div className="flex space-x-1">
                    {features.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveFeature(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === activeFeature ? 'bg-blue-600 w-6' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Active Feature Display */}
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${features[activeFeature].color} rounded-2xl mb-4 shadow-lg`}>
                    {React.createElement(features[activeFeature].icon, { 
                      className: "h-10 w-10 text-white" 
                    })}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {features[activeFeature].title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {features[activeFeature].description}
                  </p>
                </div>
              </div>

              {/* Interactive Feature List */}
              <div className="space-y-3">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  const isActive = activeFeature === index;
                  
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveFeature(index)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 border ${
                        isActive
                          ? 'bg-blue-50 border-blue-200 shadow-sm'
                          : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg transition-colors duration-300 ${
                          isActive
                            ? `bg-gradient-to-br ${feature.color}`
                            : 'bg-gray-200'
                        }`}>
                          <IconComponent className={`h-4 w-4 ${
                            isActive ? 'text-white' : 'text-gray-600'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <h5 className={`font-medium transition-colors duration-300 ${
                            isActive ? 'text-blue-600' : 'text-gray-900'
                          }`}>
                            {feature.title}
                          </h5>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;