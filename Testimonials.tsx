import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Fashion Enthusiast',
      company: 'Los Angeles, CA',
      content: 'VirtuMart completely changed how I shop online. The 3D stores feel so real, and the AR try-on feature saved me from so many returns. Plus, collecting NFT rewards makes shopping feel like a game!',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Brand Director',
      company: 'StyleForward',
      content: 'Our virtual store on VirtuMart increased engagement by 400% and sales by 250%. The platform is intuitive, and our customers love the immersive experience. The NFT loyalty program drives incredible retention.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Johnson',
      role: 'Tech Early Adopter',
      company: 'San Francisco, CA',
      content: 'As someone who loves new tech, VirtuMart blew me away. The AI recommendations are spot-on, and shopping in VR feels magical. The blockchain payments are secure and fast. This is the future of retail.',
      rating: 5,
      avatar: '👩‍🔬'
    },
    {
      name: 'David Park',
      role: 'CEO',
      company: 'GadgetPlus',
      content: "Integrating with VirtuMart was the best business decision we made this year. The 3D product visualization reduced our return rate by 60%, and the global reach opened new markets we couldn't access before.",
      rating: 5,
      avatar: '👨‍💼'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            What Our Community{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Says
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers and brands who have transformed 
            their shopping and selling experience with VirtuMart.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-200 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="h-20 w-20 text-blue-600" />
            </div>
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex items-center space-x-1 mb-6">
                {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-xl lg:text-2xl text-gray-900 leading-relaxed mb-8 font-medium">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl shadow-lg">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-blue-600 font-medium">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-white hover:bg-gray-50 p-3 rounded-full transition-colors duration-200 border border-gray-200 hover:border-gray-300 shadow-sm"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-white hover:bg-gray-50 p-3 rounded-full transition-colors duration-200 border border-gray-200 hover:border-gray-300 shadow-sm"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-2xl border border-green-100">
            <div className="text-3xl font-bold text-green-600 mb-2">10K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-2xl border border-purple-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Partner Brands</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;