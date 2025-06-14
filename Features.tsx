import React from 'react';
import { Shield, Zap, Users, Globe, Headphones, Wallet, Check } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Blockchain Payments',
      description: 'Bank-grade encryption with support for crypto and traditional payment methods.',
      benefits: ['256-bit SSL encryption', 'Multi-currency support', 'Fraud protection'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Performance',
      description: 'Optimized for speed with instant loading and seamless 3D rendering.',
      benefits: ['Sub-second load times', 'Real-time 3D rendering', 'Global CDN delivery'],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Social Shopping',
      description: 'Shop with friends, share finds, and join virtual shopping events.',
      benefits: ['Group shopping sessions', 'Social wishlists', 'Live shopping events'],
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Globe,
      title: 'Global Marketplace',
      description: 'Access brands from around the world in one unified virtual space.',
      benefits: ['150+ countries', '1000+ brands', 'Local currency support'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Headphones,
      title: '24/7 AI Support',
      description: 'Get instant help from our AI assistants available around the clock.',
      benefits: ['Instant responses', 'Multi-language support', 'Human escalation'],
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: Wallet,
      title: 'Digital Wallet Integration',
      description: 'Seamlessly manage your crypto assets and NFT rewards in one place.',
      benefits: ['Multi-wallet support', 'NFT management', 'Reward tracking'],
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            Powerful Features for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Modern Shopping
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every feature is designed to enhance your shopping experience, from discovery to purchase and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;