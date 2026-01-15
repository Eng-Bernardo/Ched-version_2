import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import OurStory from './components/OurStory';
import SystemShowcase from './components/SystemShowcase';
import VariationsSection from './components/VariationsSection';
import GallerySection from './components/GallerySection';
import WireframeSection from './components/WireframeSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <OurStory />
        <GallerySection />
        <SystemShowcase />
        <WireframeSection />
        <VariationsSection />
        {/* Soft transition to footer */}
        <div className="h-64 bg-gradient-to-b from-[#F8FAFC] to-[#1E1B4B]" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
