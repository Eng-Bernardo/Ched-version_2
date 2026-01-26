import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle2, TrendingUp, DollarSign, PieChart, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudyPortalCercargo = () => {
    const { t } = useLanguage();
    const [activeImage, setActiveImage] = useState(0);

    const mainImage = '/cercargo-billing.png';

    const screenshots = [
        { src: mainImage, caption: 'Financial Dashboard Overview' },
        { src: mainImage, caption: 'Revenue Analysis' },
        { src: mainImage, caption: 'Monthly Goals Tracking' },
        { src: mainImage, caption: 'Operational Metrics' }
    ];

    const projectData = t('portfolio.projects.portal_cercargo');

    // Ensure we have fallbacks
    const features = projectData.features || [
        "Executive Dashboard: Macro view of total revenue and annual goals",
        "Comparative Analysis: Evolutionary charts comparing current vs previous year",
        "Real-Time Goals: Percentage tracking of monthly/annual targets",
        "Monthly Breakdown: Granular reports of revenue variation"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-white">
            {/* Back Navigation */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link
                        to="/portfolio"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
                                <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                                    {projectData.category || 'Enterprise'}
                                </span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                                {projectData.title || 'Portal Cercargo'}
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                {projectData.description}
                            </p>

                            {/* Key Stats */}
                            <div className="grid grid-cols-3 gap-6 mb-8">
                                <div>
                                    <div className="text-3xl font-bold text-emerald-600 mb-1">{projectData.year || '2025'}</div>
                                    <div className="text-sm text-gray-600">Year</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-emerald-600 mb-1">100%</div>
                                    <div className="text-sm text-gray-600">Digital</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-emerald-600 mb-1">Real</div>
                                    <div className="text-sm text-gray-600">Time</div>
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div className="mb-8">
                                <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Technology Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {(projectData.tech || "React, Node.js").split(', ').map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1.5 bg-white border border-emerald-200 rounded-full text-sm font-medium text-gray-700"
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
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
                                <img
                                    src={mainImage}
                                    alt="Portal Cercargo Financial Dashboard"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white px-6 py-4 rounded-2xl shadow-xl">
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
                            Comprehensive financial management and operational control
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
                                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition-shadow"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                                    {index === 0 && <TrendingUp className="w-7 h-7 text-white" />}
                                    {index === 1 && <PieChart className="w-7 h-7 text-white" />}
                                    {index === 2 && <DollarSign className="w-7 h-7 text-white" />}
                                    {index === 3 && <FileText className="w-7 h-7 text-white" />}
                                    {index === 4 && <CheckCircle2 className="w-7 h-7 text-white" />}
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

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Transform your financial management
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Get real-time insights with Portal Cercargo
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 hover:shadow-xl transition-all"
                        >
                            Request Demo
                            <ExternalLink className="w-5 h-5" />
                        </Link>
                        <Link
                            to="/portfolio"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-full font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-all"
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
