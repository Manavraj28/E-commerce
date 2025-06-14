import React from 'react';
import { ArrowRight, Sparkles, ShoppingBag, Users, Check } from 'lucide-react';

const CTASection: React.FC = () => {
  const highlights = [
    {
      icon: ShoppingBag,
      title: 'Instant Access',
      description: 'Start exploring virtual stores immediately—no downloads required',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Sparkles,
      title: 'Free to Start',
      description: 'Begin your journey with no upfront costs or commitments',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Get help from our AI assistants and human experts 24/7',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const trustSignals = [
    { label: 'SSL Secured', color: 'bg-green-100 text-green-700' },
    { label: 'GDPR Compliant', color: 'bg-blue-100 text-blue-700' },
    { label: 'Enterprise Grade', color: 'bg-purple-100 text-purple-700' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-blue-700 text-sm font-medium">Join the Future of Shopping</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-gray-900">
            Ready to Experience{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tomorrow's Retail?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Don't just shop—immerse yourself in the future of commerce. Join thousands of users 
            already experiencing the next generation of retail with VirtuMart.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 min-w-[220px] shadow-lg">
              <ShoppingBag className="h-5 w-5" />
              <span>Start Shopping Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 hover:border-gray-400 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 min-w-[220px]">
              <Users className="h-5 w-5" />
              <span>Join as Brand Partner</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div key={index} className="text-center bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
                <div className={`w-16 h-16 bg-gradient-to-br ${highlight.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            );
          })}
        </div>

        {/* Trust Signals */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">Trusted by leading brands and thousands of users worldwide</p>
          <div className="flex items-center justify-center space-x-4 flex-wrap gap-2">
            {trustSignals.map((signal, index) => (
              <div key={index} className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${signal.color}`}>
                <div className="w-2 h-2 bg-current rounded-full"></div>
                <span>{signal.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;