import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle2, MessageSquare, Lock, Factory, FileText, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import Portal DUX screenshots
import duxLogin from '/assets/images/dux_login.jpg';
import duxChat from '/assets/images/dux_chat.jpg';

const CaseStudyPortalDUX = () => {
    const { t } = useLanguage();
    const [activeImage, setActiveImage] = useState(0);

    const screenshots = [
        { src: duxLogin, caption: 'Secure Portal Login' },
        { src: duxChat, caption: 'Real-time Chat Interface' }
    ];

    const projectData = t('portfolio.projects.portal_dux');

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
            {/* Back Navigation */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link
                        to="/portfolio"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-6">
                                <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                                    {projectData.category}
                                </span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                                Portal DUX
                            </h1>
                            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                                {projectData.description}
                            </p>
                            <p className="text-lg text-gray-700 font-medium mb-8 px-4 py-3 bg-red-50 rounded-lg border-l-4 border-red-600">
                                Factory-to-Consumer Excellence
                            </p>

                            {/* Key Stats */}
                            <div className="grid grid-cols-3 gap-6 mb-8">
                                <div>
                                    <div className="text-3xl font-bold text-red-600 mb-1">{projectData.year}</div>
                                    <div className="text-sm text-gray-600">Year</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-red-600 mb-1">Real</div>
                                    <div className="text-sm text-gray-600">Time</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-red-600 mb-1">Chat</div>
                                    <div className="text-sm text-gray-600">System</div>
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div className="mb-8">
                                <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Technology Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {projectData.tech.split(', ').map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700"
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
                                    src={duxLogin}
                                    alt="Portal DUX Login"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white px-6 py-4 rounded-2xl shadow-xl">
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
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Complete communication and management platform
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectData.features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-4">
                                    {index === 0 && <MessageSquare className="w-6 h-6 text-white" />}
                                    {index === 1 && <Lock className="w-6 h-6 text-white" />}
                                    {index === 2 && <Factory className="w-6 h-6 text-white" />}
                                    {index === 3 && <FileText className="w-6 h-6 text-white" />}
                                    {index === 4 && <Smartphone className="w-6 h-6 text-white" />}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {feature.split(':')[0]}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {feature.split(':')[1]}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Screenshots Gallery */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">System Screenshots</h2>
                        <p className="text-xl text-gray-600">
                            Explore the portal interface
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
                    <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                        {screenshots.map((screenshot, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveImage(index)}
                                className={`relative rounded-xl overflow-hidden transition-all ${activeImage === index
                                    ? 'ring-4 ring-red-600 shadow-xl'
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

            {/* Value Proposition */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-600 via-orange-600 to-red-700">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Factory className="w-16 h-16 text-white mx-auto mb-6" />
                        <h2 className="text-4xl font-bold text-white mb-4">Factory-to-Consumer Excellence</h2>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Direct connection between factory and consumer, simplifying the value chain and delivering product solutions beyond destinations
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-white mb-2">Direct</div>
                            <div className="text-white/90">Connection</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-white mb-2">Real-time</div>
                            <div className="text-white/90">Communication</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-white mb-2">Secure</div>
                            <div className="text-white/90">Platform</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Ready to build your system?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Let's create something amazing together
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 hover:shadow-xl transition-all"
                        >
                            Start Your Project
                            <ExternalLink className="w-5 h-5" />
                        </Link>
                        <Link
                            to="/portfolio"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-full font-semibold hover:border-red-600 hover:text-red-600 transition-all"
                        >
                            View More Projects
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CaseStudyPortalDUX;
