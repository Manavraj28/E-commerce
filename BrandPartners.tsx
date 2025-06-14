import React from 'react';
import { TrendingUp, Users, Globe, Award, ArrowRight, Check } from 'lucide-react';

const BrandPartners: React.FC = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '300%',
      label: 'Average Sales Increase',
      description: 'Brands see significant growth in our virtual environment',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Users,
      value: '2.5x',
      label: 'Higher Engagement',
      description: 'Customers spend more time exploring 3D stores',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Globe,
      value: '150+',
      label: 'Countries Reached',
      description: 'Global marketplace with instant access',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Award,
      value: '95%',
      label: 'Partner Satisfaction',
      description: 'Brands love our innovative platform',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const partnerLogos = [
    'TechCorp', 'StyleHub', 'SportZone', 'HomeDecor', 'GadgetPlus', 'FashionForward'
  ];

  const benefits = [
    'Easy setup in under 24 hours',
    'Dedicated account manager',
    'Advanced analytics dashboard',
    'Custom 3D store design',
    'Integrated payment processing',
    'NFT loyalty program access'
  ];

  return (
    <section id="brands" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            Trusted by Leading{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Brands
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of innovative brands who have already transformed their retail presence 
            with our cutting-edge virtual commerce platform.
          </p>
        </div>

        {/* Partner Logos */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partnerLogos.map((logo, index) => (
              <div
                key={index}
                className="bg-white hover:bg-gray-50 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 border border-gray-200 hover:border-gray-300 shadow-sm"
              >
                <div className="text-gray-600 hover:text-blue-600 font-semibold transition-colors duration-300">
                  {logo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl mb-6 shadow-lg`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* CTA for Brands */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 border border-gray-200 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                Ready to Transform Your Brand?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Join the virtual commerce revolution and give your customers an unforgettable shopping experience. 
                Our platform makes it easy to create stunning 3D storefronts with no technical expertise required.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 mb-4 shadow-lg flex items-center space-x-2 mx-auto lg:mx-0 lg:ml-auto">
                <span>Schedule Demo</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <div className="text-sm text-gray-500">
                Free consultation • No commitment required
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;