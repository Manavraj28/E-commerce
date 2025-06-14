import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import InteractiveDemo from './components/InteractiveDemo';
import Features from './components/Features';
import NFTLoyalty from './components/NFTLoyalty';
import BrandPartners from './components/BrandPartners';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <InteractiveDemo />
        <Features />
        <NFTLoyalty />
        <BrandPartners />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;