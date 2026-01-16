import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Code, Network, Cpu, Layers, Building2, Users, Target, Zap } from 'lucide-react';
import aboutHero from '../assets/images/about_hero.png';

const AboutUs = () => {
    const { t } = useLanguage();

    const services = [
        { icon: Code, color: 'from-blue-500 to-cyan-500' },
        { icon: Network, color: 'from-purple-500 to-pink-500' },
        { icon: Cpu, color: 'from-indigo-500 to-purple-500' },
        { icon: Layers, color: 'from-emerald-500 to-teal-500' },
        { icon: Zap, color: 'from-orange-500 to-red-500' },
        { icon: Building2, color: 'from-blue-600 to-indigo-600' }
    ];

    const audiences = [
        { icon: Building2, color: 'from-blue-500 to-indigo-600' },
        { icon: Users, color: 'from-purple-500 to-pink-600' },
        { icon: Network, color: 'from-emerald-500 to-teal-600' },
        { icon: Target, color: 'from-orange-500 to-red-600' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
            {/* Hero Section with Background Image */}
            <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={aboutHero}
                        alt="About Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/80 to-white/70" />
                </div>

                {/* Hero Content */}
                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                    <div className="text-center w-full">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-indigo-600 mb-6">
                            {t('aboutUs.hero.title')}
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-900 max-w-3xl mx-auto leading-relaxed font-medium">
                            {t('aboutUs.hero.subtitle')}
                        </p>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </section>

            {/* CTA Buttons Section */}
            <section className="-mt-10 relative z-20 px-4 sm:px-6 lg:px-8 mb-10">
                <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => window.location.href = '/contact'}
                        className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        {t('nav.get_in_touch')}
                    </button>
                    <button
                        onClick={() => window.location.href = '/portfolio'}
                        className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 font-semibold rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
                    >
                        {t('hero.explore_systems')}
                    </button>
                </div>
            </section>

            {/* What CHED LABS Is */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                            {t('aboutUs.whatIs.title')}
                        </h2>

                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p>{t('aboutUs.whatIs.description')}</p>

                            <p className="text-xl font-semibold text-indigo-600 bg-indigo-50 p-4 rounded-xl border-l-4 border-indigo-600">
                                {t('aboutUs.whatIs.notAgency')}
                            </p>

                            <p>{t('aboutUs.whatIs.operations')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Concept */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700">
                <div className="max-w-5xl mx-auto text-center text-white">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        {t('aboutUs.concept.title')}
                    </h2>
                    <p className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-pink-300">
                        {t('aboutUs.concept.subtitle')}
                    </p>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        {t('aboutUs.concept.description')}
                    </p>
                </div>
            </section>

            {/* What CHED LABS Does */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
                        {t('aboutUs.services.title')}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {t('aboutUs.services.items').map((service, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${services[index].color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    {React.createElement(services[index].icon, { className: 'w-6 h-6 text-white' })}
                                </div>
                                <p className="text-lg font-semibold text-gray-900">
                                    {service}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Target Audience */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
                        {t('aboutUs.audience.title')}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {t('aboutUs.audience.items').map((audience, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-slate-100"
                            >
                                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${audiences[index].color} flex items-center justify-center mx-auto mb-4`}>
                                    {React.createElement(audiences[index].icon, { className: 'w-8 h-8 text-white' })}
                                </div>
                                <p className="font-semibold text-gray-900">
                                    {audience}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Website Goals */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                            {t('aboutUs.goals.title')}
                        </h2>

                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            {t('aboutUs.goals.intro')}
                        </p>

                        <ul className="space-y-3">
                            {t('aboutUs.goals.items').map((goal, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <div className="w-2 h-2 rounded-full bg-indigo-600" />
                                    </div>
                                    <span className="text-lg text-gray-700">{goal}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Our Identity Section - With Floating Bubbles */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    {/* Main Content Container with Gradient Background */}
                    <div className="relative rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 p-12 sm:p-16 lg:p-20 overflow-hidden">
                        {/* Animated Floating Bubbles - Hidden on mobile */}
                        <div
                            className="absolute pointer-events-none hidden md:block"
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
                                    {t('aboutUs.summary.items')[0]}
                                </span>
                            </div>
                        </div>

                        <div
                            className="absolute pointer-events-none hidden md:block"
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
                                    {t('aboutUs.summary.items')[1]}
                                </span>
                            </div>
                        </div>

                        <div
                            className="absolute pointer-events-none hidden md:block"
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
                                    {t('aboutUs.summary.items')[2]}
                                </span>
                            </div>
                        </div>

                        <div
                            className="absolute pointer-events-none hidden md:block"
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
                                    {t('aboutUs.summary.items')[3]}
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
                                {t('aboutUs.summary.title')}
                            </h2>

                            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                                {t('aboutUs.summary.description')}
                            </p>
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

            {/* Soft transition to footer */}
            <div className="h-32 bg-gradient-to-b from-white to-[#1E1B4B]" />
        </div>
    );
};

export default AboutUs;
