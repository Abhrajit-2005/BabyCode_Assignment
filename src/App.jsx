import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Features from './component/Features';
import Testimonials from './component/Testimonials';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;