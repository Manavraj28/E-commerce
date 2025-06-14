import React from 'react';
import { Sparkles, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    Platform: [
      { name: 'Explore Stores', href: '#explore' },
      { name: 'How It Works', href: '#demo' },
      { name: 'Features', href: '#features' },
      { name: 'NFT Rewards', href: '#nft-loyalty' }
    ],
    Brands: [
      { name: 'Partner With Us', href: '#brands' },
      { name: 'Case Studies', href: '#testimonials' },
      { name: 'API Documentation', href: '#' },
      { name: 'Developer Tools', href: '#' }
    ],
    Support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'System Status', href: '#' },
      { name: 'Bug Reports', href: '#' }
    ],
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'Press Kit', href: '#' },
      { name: 'Blog', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  const trustBadges = [
    { label: 'SSL Secured', color: 'text-green-600' },
    { label: 'GDPR Compliant', color: 'text-blue-600' },
    { label: 'ISO 27001 Certified', color: 'text-purple-600' },
    { label: 'SOC 2 Type II', color: 'text-orange-600' }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Sparkles className="h-8 w-8 text-blue-600" />
                <div className="absolute inset-0 bg-blue-600 blur-lg opacity-20"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                VirtuMart
              </span>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              The world's first AI-powered virtual shopping platform. Experience immersive 3D stores, 
              AR try-ons, and exclusive NFT rewards in the future of retail.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 p-3 rounded-lg transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-gray-900 font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              © 2024 VirtuMart. All rights reserved. Built for the future of retail.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="flex items-center justify-center space-x-6 mt-8 pt-6 border-t border-gray-200">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center space-x-2 text-xs">
                <div className={`w-2 h-2 rounded-full ${badge.color.replace('text-', 'bg-')}`}></div>
                <span className="text-gray-500">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;