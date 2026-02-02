import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import project images
import dashboardImg from '../assets/images/dashboard_dark_analytics_1768301257210.png';
import abacoFinanceImg from '../assets/images/abaco_finance_analysis.jpg';
import cercargoDashboardImg from '../assets/images/cercargo_dashboard.png';
import portalDuxChatImg from '../assets/images/portal_dux_chat.png';

import portfolioHero from '../assets/images/portfolio_hero.png';

const Portfolio = () => {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState('all');
    const [carouselIndexes, setCarouselIndexes] = useState({});

    const projects = [
        {
            id: 'abaco',
            image: abacoFinanceImg,
            category: 'fintech',
            badge: 'LIVE',
            badgeColor: 'from-emerald-500 to-green-600',
            data: t('portfolio.projects.abaco')
        },
        {
            id: 'dxid',
            image: '/dxid-management-portal.png',
            category: 'enterprise',
            badge: 'INTERNATIONAL',
            badgeColor: 'from-blue-500 to-indigo-600',
            data: t('portfolio.projects.dxid')
        },
        {
            id: 'portal_dux',
            image: portalDuxChatImg,
            category: 'saas',
            badge: 'REAL-TIME',
            badgeColor: 'from-purple-500 to-pink-600',
            data: t('portfolio.projects.portal_dux')
        },
        {
            id: 'promoshare',
            image: '/promoshare-categories.png',
            category: 'saas',
            badge: 'AI-POWERED',
            badgeColor: 'from-orange-500 to-red-600',
            data: t('portfolio.projects.promoshare')
        },
        {
            id: 'portal_cercargo',
            image: '/cercargo-billing.png',
            category: 'enterprise',
            badge: 'FINANCIAL',
            badgeColor: 'from-emerald-500 to-teal-600',
            data: t('portfolio.projects.portal_cercargo')
        },
        {
            id: 'ai_detection',
            video: `${import.meta.env.BASE_URL}assets/images/Video2.mp4`,
            category: 'enterprise',
            badge: 'AI-POWERED',
            badgeColor: 'from-cyan-500 to-blue-600',
            data: t('portfolio.projects.ai_detection')
        },

    ];

    const categories = [
        { id: 'all', label: t('portfolio.categories.all') },
        { id: 'fintech', label: t('portfolio.categories.fintech') },
        { id: 'saas', label: t('portfolio.categories.saas') },
        { id: 'enterprise', label: t('portfolio.categories.enterprise') }
    ];

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
            {/* Hero Section with Background Image */}
            <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={portfolioHero}
                        alt="Portfolio Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/70 to-white/60" />
                </div>

                {/* Hero Content */}
                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                    <div className="text-center w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full mb-6">
                                <Sparkles className="w-4 h-4 text-indigo-600" />
                                <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                                    {t('portfolio.categories.all')}
                                </span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-indigo-600 mb-6">
                                {t('portfolio.hero.title')}
                            </h1>
                            <p className="text-xl sm:text-2xl text-gray-900 max-w-3xl mx-auto leading-relaxed font-medium">
                                {t('portfolio.hero.subtitle')}
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </section>

            {/* Category Filter */}
            <section className="py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id
                                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
                            >
                                {/* Project Image/Video/Carousel - Fixed Height */}
                                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 flex-shrink-0">
                                    {project.video ? (
                                        // Video
                                        <video
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                        >
                                            <source src={project.video} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : project.images ? (
                                        // Multiple images - Carousel
                                        <>
                                            {project.images.map((img, imgIndex) => (
                                                <img
                                                    key={imgIndex}
                                                    src={img}
                                                    alt={`${project.data.title} - ${imgIndex + 1}`}
                                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${(carouselIndexes[project.id] || 0) === imgIndex ? 'opacity-100' : 'opacity-0'
                                                        }`}
                                                />
                                            ))}
                                            {/* Carousel Navigation Dots */}
                                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                                                {project.images.map((_, imgIndex) => (
                                                    <button
                                                        key={imgIndex}
                                                        onClick={() => setCarouselIndexes(prev => ({ ...prev, [project.id]: imgIndex }))}
                                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${(carouselIndexes[project.id] || 0) === imgIndex
                                                            ? 'bg-white w-6'
                                                            : 'bg-white/50 hover:bg-white/75'
                                                            }`}
                                                        aria-label={`View image ${imgIndex + 1}`}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        // Single image
                                        <img
                                            src={project.image}
                                            alt={project.data.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-indigo-600 uppercase tracking-wide">
                                            {project.data.category}
                                        </span>
                                    </div>

                                    {/* Status Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className={`px-3 py-1.5 bg-gradient-to-r ${project.badgeColor} backdrop-blur-sm rounded-full text-xs font-bold text-white shadow-lg`}>
                                            {project.badge}
                                        </span>
                                    </div>
                                </div>

                                {/* Project Info - Flex grow to fill space */}
                                <div className="p-6 flex flex-col flex-grow">
                                    {/* Title - Fixed height */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors h-14 line-clamp-2">
                                        {project.data.title}
                                    </h3>

                                    {/* Description - Fixed height with line clamp */}
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed h-20 line-clamp-4">
                                        {project.data.description}
                                    </p>

                                    {/* Tech Stack - Fixed height */}
                                    <div className="mb-4 h-10 flex items-center">
                                        <p className="text-xs text-gray-500 font-medium line-clamp-2">
                                            {project.data.tech}
                                        </p>
                                    </div>

                                    {/* Action Button - Push to bottom */}
                                    <div className="mt-auto">
                                        {project.id === 'abaco' ? (
                                            <Link
                                                to="/case-studies/abaco-finance"
                                                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors text-sm"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                {t('portfolio.case_study')}
                                            </Link>
                                        ) : project.id === 'dxid' ? (
                                            <Link
                                                to="/case-studies/dxid"
                                                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors text-sm"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                {t('portfolio.case_study')}
                                            </Link>
                                        ) : project.id === 'portal_dux' ? (
                                            <Link
                                                to="/case-studies/portal-dux"
                                                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors text-sm"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                {t('portfolio.case_study')}
                                            </Link>
                                        ) : project.id === 'promoshare' ? (
                                            <Link
                                                to="/case-studies/promoshare"
                                                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors text-sm"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                {t('portfolio.case_study')}
                                            </Link>
                                        ) : project.id === 'portal_cercargo' ? (
                                            <Link
                                                to="/case-studies/portal-cercargo"
                                                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors text-sm"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                {t('portfolio.case_study')}
                                            </Link>

                                        ) : (
                                            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors text-sm">
                                                <ExternalLink className="w-4 h-4" />
                                                {t('portfolio.view_project')}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Animated CTA Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    {/* Main Content Container with Gradient Background */}
                    <div className="relative rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 p-12 sm:p-16 lg:p-20 overflow-hidden">
                        {/* Animated Process Bubbles */}
                        <div
                            className="absolute pointer-events-none"
                            style={{
                                top: '10%',
                                left: '5%',
                                animation: 'float-0 4s ease-in-out infinite'
                            }}
                        >
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white font-semibold text-sm">
                                    1
                                </div>
                                <span className="text-white font-medium text-sm pr-1">
                                    Cultivate System Ideas
                                </span>
                            </div>
                        </div>

                        <div
                            className="absolute pointer-events-none"
                            style={{
                                top: '12%',
                                right: '8%',
                                animation: 'float-1 3.5s ease-in-out infinite',
                                animationDelay: '0.5s'
                            }}
                        >
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-semibold text-sm">
                                    2
                                </div>
                                <span className="text-white font-medium text-sm pr-1">
                                    Architect the System
                                </span>
                            </div>
                        </div>

                        <div
                            className="absolute pointer-events-none"
                            style={{
                                bottom: '15%',
                                left: '8%',
                                animation: 'float-2 4.5s ease-in-out infinite',
                                animationDelay: '1s'
                            }}
                        >
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white font-semibold text-sm">
                                    3
                                </div>
                                <span className="text-white font-medium text-sm pr-1">
                                    Feed the Data
                                </span>
                            </div>
                        </div>

                        <div
                            className="absolute pointer-events-none"
                            style={{
                                bottom: '12%',
                                right: '6%',
                                animation: 'float-0 3.8s ease-in-out infinite',
                                animationDelay: '1.5s'
                            }}
                        >
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white font-semibold text-sm">
                                    4
                                </div>
                                <span className="text-white font-medium text-sm pr-1">
                                    Meet the Designers
                                </span>
                            </div>
                        </div>

                        <div
                            className="absolute pointer-events-none"
                            style={{
                                bottom: '5%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                animation: 'float-1 4.2s ease-in-out infinite',
                                animationDelay: '2s'
                            }}
                        >
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-green-500 flex items-center justify-center text-white font-semibold text-sm">
                                    5
                                </div>
                                <span className="text-white font-medium text-sm pr-1">
                                    Evaluate Together
                                </span>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-1/4 left-10 w-2 h-2 bg-white/40 rounded-full animate-pulse" />
                        <div className="absolute top-1/3 right-20 w-3 h-3 bg-white/30 rounded-full animate-pulse"
                            style={{ animationDelay: '0.5s' }} />
                        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-pulse"
                            style={{ animationDelay: '1s' }} />

                        {/* Content */}
                        <div className="relative z-10 text-center max-w-3xl mx-auto">
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                                {t('portfolio.cta.title')}
                            </h2>

                            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8">
                                {t('portfolio.cta.description')}
                            </p>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                            >
                                {t('portfolio.cta.button')}
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* Inline styles for custom animations */}
                        <style jsx>{`
                            @keyframes float-0 {
                                0%, 100% { transform: translate(0, 0); }
                                25% { transform: translate(-10px, -15px); }
                                50% { transform: translate(5px, -25px); }
                                75% { transform: translate(-5px, -10px); }
                            }
                            
                            @keyframes float-1 {
                                0%, 100% { transform: translate(0, 0); }
                                33% { transform: translate(15px, -20px); }
                                66% { transform: translate(-10px, -30px); }
                            }
                            
                            @keyframes float-2 {
                                0%, 100% { transform: translate(0, 0); }
                                20% { transform: translate(-15px, -10px); }
                                40% { transform: translate(10px, -25px); }
                                60% { transform: translate(-5px, -18px); }
                                80% { transform: translate(8px, -12px); }
                            }
                        `}</style>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
