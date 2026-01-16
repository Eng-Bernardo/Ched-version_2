import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Code, Network, Cpu, Layers, Building2, Users, Target, Zap } from 'lucide-react';

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
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background Gradient Orbs */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

                <div className="relative max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                        {t('aboutUs.hero.title')}
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        {t('aboutUs.hero.subtitle')}
                    </p>
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

                            <p className="text-gray-600 italic">
                                {t('aboutUs.whatIs.mainSystem')}
                            </p>
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

            {/* Positioning: Tone & Visual */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Tone of Voice */}
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                {t('aboutUs.positioning.tone.title')}
                            </h3>
                            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                                {t('aboutUs.positioning.tone.description')}
                            </p>
                            <p className="text-gray-600 italic">
                                {t('aboutUs.positioning.tone.avoid')}
                            </p>
                        </div>

                        {/* Visual Direction */}
                        <div className="bg-gradient-to-br from-[#0B0F14] to-[#1a1f2e] rounded-3xl p-8 shadow-xl text-white">
                            <h3 className="text-2xl font-bold mb-4">
                                {t('aboutUs.positioning.visual.title')}
                            </h3>
                            <ul className="space-y-3">
                                {t('aboutUs.positioning.visual.items').map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#4CC9F0] via-[#5A7CFA] to-[#B517F2] flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2 h-2 rounded-full bg-white" />
                                        </div>
                                        <span className="text-lg text-white/90">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Summary */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 sm:p-12 shadow-2xl text-white text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            {t('aboutUs.summary.title')}
                        </h2>
                        <p className="text-xl leading-relaxed text-white/95">
                            {t('aboutUs.summary.description')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Soft transition to footer */}
            <div className="h-32 bg-gradient-to-b from-white to-[#1E1B4B]" />
        </div>
    );
};

export default AboutUs;
