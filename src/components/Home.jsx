import Hero from './Hero';
import AboutSection from './AboutSection';
import OurStory from './OurStory';
import GallerySection from './GallerySection';
import SystemShowcase from './SystemShowcase';

import VariationsSection from './VariationsSection';
import AiDetectionSection from './AiDetectionSection';

const Home = () => {
    return (
        <>
            <Hero />
            <AboutSection />
            <OurStory />
            <GallerySection />
            <SystemShowcase />
            <AiDetectionSection />
            <VariationsSection />
            {/* Soft transition to footer */}
            <div className="h-64 bg-gradient-to-b from-[#F8FAFC] to-[#1E1B4B]" />
        </>
    );
};

export default Home;
