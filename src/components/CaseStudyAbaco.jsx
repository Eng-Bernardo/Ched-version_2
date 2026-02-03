import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle2, TrendingUp, Shield, Zap, BarChart3, Users } from 'lucide-react';

// Import Abaco screenshots
import abacoAnalysis from '/assets/images/abaco_analysis_new.jpg';
import abacoAnalysis2 from '/assets/images/abaco_analysis_new2.jpg';
import abacoAccounts from '/assets/images/abaco_accounts_new.jpg';

const CaseStudyAbaco = () => {
    const { t } = useLanguage();
    const navigate = useNavigate();
    const [activeImage, setActiveImage] = useState(0);

    const screenshots = [
        { src: abacoAnalysis, caption: 'Análise Financeira / Financial Analysis' },
        { src: abacoAnalysis2, caption: 'Dashboard Completo / Complete Dashboard' },
        { src: abacoAccounts, caption: 'Gestão de Contas / Account Management' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
            {/* Fixed Back Button - Always Visible */}
            <button
                onClick={() => navigate('/portfolio')}
                className="fixed top-24 left-6 z-50 inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-indigo-50 text-gray-700 hover:text-indigo-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 hover:border-indigo-300 font-medium"
            >
                <ArrowLeft className="w-4 h-4" />
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full mb-6">
                                <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                                    Fintech Platform
                                </span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                                Abaco Finance
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                {t('portfolio.projects.abaco.description')}
                            </p>

                            {/* Key Stats */}
                            <div className="grid grid-cols-3 gap-6 mb-8">
                                <div>
                                    <div className="text-3xl font-bold text-indigo-600 mb-1">2024</div>
                                    <div className="text-sm text-gray-600">Year</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-indigo-600 mb-1">5+</div>
                                    <div className="text-sm text-gray-600">Features</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-indigo-600 mb-1">100%</div>
                                    <div className="text-sm text-gray-600">Custom</div>
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
                                    src={screenshots[0].src}
                                    alt="Abaco Finance Dashboard"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white px-6 py-4 rounded-2xl shadow-xl">
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
                            Comprehensive financial management tools designed for modern users
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {t('portfolio.projects.abaco.features').map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4">
                                    {index === 0 && <BarChart3 className="w-6 h-6 text-white" />}
                                    {index === 1 && <Users className="w-6 h-6 text-white" />}
                                    {index === 2 && <TrendingUp className="w-6 h-6 text-white" />}
                                    {index === 3 && <Shield className="w-6 h-6 text-white" />}
                                    {index === 4 && <Zap className="w-6 h-6 text-white" />}
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
                            Explore the interface and key features
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
                    <div className="grid grid-cols-3 gap-4">
                        {screenshots.map((screenshot, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveImage(index)}
                                className={`relative rounded-xl overflow-hidden transition-all ${activeImage === index
                                    ? 'ring-4 ring-indigo-600 shadow-xl'
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

            {/* Results & Impact */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Results & Impact</h2>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            A complete financial ecosystem built for scale and reliability
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-white mb-2">Real-time</div>
                            <div className="text-white/90">Data Updates</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-white mb-2">Multi</div>
                            <div className="text-white/90">Account Support</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-white mb-2">Secure</div>
                            <div className="text-white/90">Data Storage</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-white mb-2">99.9%</div>
                            <div className="text-white/90">Uptime</div>
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
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 hover:shadow-xl transition-all"
                        >
                            Start Your Project
                            <ExternalLink className="w-5 h-5" />
                        </Link>
                        <Link
                            to="/portfolio"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-full font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all"
                        >
                            View More Projects
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CaseStudyAbaco;
