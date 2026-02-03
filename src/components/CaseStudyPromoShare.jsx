import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle2, Send, Brain, Bell, BarChart3, Users2, Palette, Layers, Share2 } from 'lucide-react';

const CaseStudyPromoShare = () => {
    const { t } = useLanguage();
    const navigate = useNavigate();
    const [activeImage, setActiveImage] = useState(0);

    // Using the new PromoShare image for all views for now to ensure consistency
    const promoShareImg = '/promoshare-categories.png';
    const productsImg = '/promoshare-products.png';
    const channelsImg = '/promoshare-channels.png';
    const publishImg = '/promoshare-publish.png';

    const screenshots = [
        { src: promoShareImg, caption: 'Category & Niche Management' },
        { src: productsImg, caption: 'Product Catalog & Selection' },
        { src: channelsImg, caption: 'Distribution Channels Control' },
        { src: publishImg, caption: 'Multi-Channel Publishing' }
    ];

    // Access the translated data
    const projectData = t('portfolio.projects.promoshare');

    // Ensure we have fallbacks if specific translation keys are missing
    const features = projectData.features || [
        "Niche Management: Exclusive dashboard for organizing and creating product categories",
        "Visual Customization: Visual identity system with color selection",
        "Group Control: Centralized management of offer groups",
        "Multi-Channel Publishing: Automatic content distribution"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
            {/* Fixed Back Button - Always Visible */}
            <button
                onClick={() => navigate('/portfolio')}
                className="fixed top-24 left-6 z-50 inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-orange-50 text-gray-700 hover:text-orange-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 hover:border-orange-300 font-medium"
            >
                <ArrowLeft size={20} strokeWidth={2} />
                <span className="hidden sm:inline">Back to Portfolio</span>
            </button>

            {/* Hero Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full mb-6">
                                <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">
                                    {projectData.category || 'Marketing Tech'}
                                </span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                                {projectData.title || 'PromoShare'}
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                {projectData.description}
                            </p>

                            {/* Key Stats */}
                            <div className="grid grid-cols-3 gap-6 mb-8">
                                <div>
                                    <div className="text-3xl font-bold text-orange-600 mb-1">{projectData.year || '2025'}</div>
                                    <div className="text-sm text-gray-600">Year</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-orange-600 mb-1">AI</div>
                                    <div className="text-sm text-gray-600">Powered</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-orange-600 mb-1">Social</div>
                                    <div className="text-sm text-gray-600">Commerce</div>
                                </div>
                            </div>


                        </motion.div>

                        {/* Main Screenshot */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                                <img
                                    src={promoShareImg}
                                    alt="PromoShare Category Management"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white px-6 py-4 rounded-2xl shadow-xl">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5" />
                                    <span className="font-semibold">Live Platform</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Platform Features</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Advanced tools for social commerce and niche management
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-xl transition-shadow"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                                    {index === 0 && <Layers className="w-7 h-7 text-white" />}
                                    {index === 1 && <Palette className="w-7 h-7 text-white" />}
                                    {index === 2 && <Share2 className="w-7 h-7 text-white" />}
                                    {index === 3 && <Send className="w-7 h-7 text-white" />}
                                    {index === 4 && <Brain className="w-7 h-7 text-white" />}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {feature.split(':')[0]}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.split(':')[1]}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Screenshots Gallery */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">System Interface</h2>
                        <p className="text-xl text-gray-600">
                            Explore the PromoShare management dashboard
                        </p>
                    </div>

                    {/* Main Image Display */}
                    <div className="mb-8">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900">
                            <img
                                src={screenshots[activeImage].src}
                                alt={screenshots[activeImage].caption}
                                className="w-full h-auto"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                <p className="text-white font-medium text-lg">
                                    {screenshots[activeImage].caption}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Thumbnail Navigation */}
                    <div className="grid grid-cols-4 gap-6">
                        {screenshots.map((screenshot, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveImage(index)}
                                className={`relative rounded-xl overflow-hidden transition-all ${activeImage === index
                                    ? 'ring-4 ring-orange-600 shadow-xl'
                                    : 'opacity-60 hover:opacity-100'
                                    }`}
                            >
                                <img
                                    src={screenshot.src}
                                    alt={screenshot.caption}
                                    className="w-full h-auto bg-gray-900"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Ready to supercharge your social commerce?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Start managing your niches effectively with PromoShare
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 hover:shadow-xl transition-all"
                        >
                            Get Started
                            <ExternalLink className="w-5 h-5" />
                        </Link>
                        <Link
                            to="/portfolio"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-full font-semibold hover:border-orange-600 hover:text-orange-600 transition-all"
                        >
                            View More Projects
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CaseStudyPromoShare;
