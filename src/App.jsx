import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudyAbaco from './components/CaseStudyAbaco';
import CaseStudyDXID from './components/CaseStudyDXID';
import CaseStudyPortalDUX from './components/CaseStudyPortalDUX';
import CaseStudyPortalCercargo from './components/CaseStudyPortalCercargo';
import CaseStudySaaS from './components/CaseStudySaaS';
import CaseStudyLogistics from './components/CaseStudyLogistics';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-studies/abaco-finance" element={<CaseStudyAbaco />} />
            <Route path="/case-studies/dxid" element={<CaseStudyDXID />} />
            <Route path="/case-studies/portal-dux" element={<CaseStudyPortalDUX />} />
            <Route path="/case-studies/portal-cercargo" element={<CaseStudyPortalCercargo />} />
            <Route path="/case-studies/saas-analytics" element={<CaseStudySaaS />} />
            <Route path="/case-studies/logistics-pro" element={<CaseStudyLogistics />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
