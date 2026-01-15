import Hero from './Hero';
import AboutSection from './AboutSection';
import OurStory from './OurStory';
import GallerySection from './GallerySection';
import SystemShowcase from './SystemShowcase';
import WireframeSection from './WireframeSection';
import VariationsSection from './VariationsSection';

const Home = () => {
    return (
        <>
            <Hero />
            <AboutSection />
            <OurStory />
            <GallerySection />
            <SystemShowcase />
            <WireframeSection />
            <VariationsSection />
            {/* Soft transition to footer */}
            <div className="h-64 bg-gradient-to-b from-[#F8FAFC] to-[#1E1B4B]" />
        </>
    );
};

export default Home;
