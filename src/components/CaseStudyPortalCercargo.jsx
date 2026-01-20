import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle2, Send, Brain, Bell, BarChart3, Users2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import Portal Cercargo screenshots
import cercargoD from '/assets/images/cercargo_dashboard.png';
import cercargoAI from '/assets/images/cercargo_ai_search.png';
import cercargoNotif from '/assets/images/cercargo_notifications.png';

const CaseStudyPortalCercargo = () => {
    const { t } = useLanguage();
    const [activeImage, setActiveImage] = useState(0);

    const screenshots = [
        { src: cercargoD, caption: 'PromoShare Dashboard' },
        { src: cercargoAI, caption: 'AI-Powered Product Search' },
        { src: cercargoNotif, caption: 'User Notification Preferences' }
    ];

    const projectData = t('portfolio.projects.portal_cercargo');

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
            {/* Back Navigation */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link
                        to="/portfolio"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="font-medium">Back to Portfolio</span>
                    </Link>
                </div>
            </div>

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
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
                                <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
                                    {projectData.category}
                                </span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
                                Portal Cercargo
                            </h1>
                            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
                                PromoShare
                            </div>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                {projectData.description}
                            </p>

                            {/* Key Stats */}
                            <div className="grid grid-cols-3 gap-6 mb-8">
                                <div>
                                    <div className="text-3xl font-bold text-purple-600 mb-1">{projectData.year}</div>
                                    <div className="text-sm text-gray-600">Year</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-purple-600 mb-1">AI</div>
                                    <div className="text-sm text-gray-600">Powered</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-purple-600 mb-1">Multi</div>
                                    <div className="text-sm text-gray-600">Channel</div>
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div className="mb-8">
                                <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Technology Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {projectData.tech.split(', ').map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1.5 bg-white border border-purple-200 rounded-full text-sm font-medium text-gray-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
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
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={cercargoD}
                                    alt="PromoShare Dashboard"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white px-6 py-4 rounded-2xl shadow-xl">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5" />
                                    <span className="font-semibold">Live System</span>
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
                            Automate promotions across channels with AI-powered intelligence
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projectData.features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-shadow"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                                    {index === 0 && <Send className="w-7 h-7 text-white" />}
                                    {index === 1 && <Brain className="w-7 h-7 text-white" />}
                                    {index === 2 && <Bell className="w-7 h-7 text-white" />}
                                    {index === 3 && <Users2 className="w-7 h-7 text-white" />}
                                    {index === 4 && <BarChart3 className="w-7 h-7 text-white" />}
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
                            Explore the PromoShare platform
                        </p>
                    </div>

                    {/* Main Image Display */}
                    <div className="mb-8">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
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
                    <div className="grid grid-cols-3 gap-6">
                        {screenshots.map((screenshot, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveImage(index)}
                                className={`relative rounded-xl overflow-hidden transition-all ${activeImage === index
                                        ? 'ring-4 ring-purple-600 shadow-xl'
                                        : 'opacity-60 hover:opacity-100'
                                    }`}
                            >
                                <img
                                    src={screenshot.src}
                                    alt={screenshot.caption}
                                    className="w-full h-auto"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Channel Highlight */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700">
                <div className="max-w-5xl mx-auto text-center">
                    <Send className="w-16 h-16 text-white mx-auto mb-6" />
                    <h2 className="text-4xl font-bold text-white mb-6">Multi-Channel Publishing</h2>
                    <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
                        Automatically publish your promotions across Telegram and WhatsApp channels simultaneously, reaching your audience where they are
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                            <div className="text-5xl mb-4">📱</div>
                            <h3 className="text-2xl font-bold text-white mb-3">Telegram</h3>
                            <p className="text-white/80">Automated channel posting with rich media support</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                            <div className="text-5xl mb-4">💬</div>
                            <h3 className="text-2xl font-bold text-white mb-3">WhatsApp</h3>
                            <p className="text-white/80">Private number notifications with personalized targeting</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Ready to automate your promotions?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Let's build your marketing automation system
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 hover:shadow-xl transition-all"
                        >
                            Start Your Project
                            <ExternalLink className="w-5 h-5" />
                        </Link>
                        <Link
                            to="/portfolio"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-full font-semibold hover:border-purple-600 hover:text-purple-600 transition-all"
                        >
                            View More Projects
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CaseStudyPortalCercargo;
