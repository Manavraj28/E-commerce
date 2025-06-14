import React from 'react';
import { Cuboid as Cube, Brain, Smartphone, Gift, ArrowRight } from 'lucide-react';

const ValueProposition: React.FC = () => {
  const values = [
    {
      icon: Cube,
      title: 'Immersive 3D Shopping',
      description: 'Navigate photorealistic virtual stores with interactive product displays and realistic lighting.',
      benefits: ['360° product views', 'Virtual store walkthroughs', 'Realistic product placement'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'AI-Powered Recommendations',
      description: 'Smart algorithms learn your preferences to suggest products you\'ll love.',
      benefits: ['Personalized suggestions', 'Style matching', 'Trend predictions'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'AR Try-On Experience',
      description: 'See how products look on you or in your space before making a purchase.',
      benefits: ['Virtual fitting rooms', 'Home placement preview', 'Size recommendations'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Gift,
      title: 'NFT Loyalty Rewards',
      description: 'Earn exclusive digital collectibles and unlock special perks as you shop.',
      benefits: ['Exclusive NFT badges', 'Member-only discounts', 'Early access to sales'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              VirtuMart
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the next generation of online shopping with revolutionary features 
            that transform how you discover, try, and buy products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300"
              >
                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {value.description}
                    </p>
                    
                    {/* Benefits List */}
                    <ul className="space-y-2">
                      {value.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center space-x-2 text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Link */}
                    <button className="mt-4 flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-all duration-300">
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;