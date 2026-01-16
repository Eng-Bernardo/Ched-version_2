import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import homeHero from '../assets/images/home_hero.png';

const Hero = () => {
    const { t } = useLanguage();
    const navigate = useNavigate();
    // Carousel state
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const slides = [
        {
            id: 'arch',
            label: t('hero.slides.arch_label'),
            sub: t('hero.slides.arch_sub'),
            content: (
                <div className="relative w-full h-full flex items-center justify-center bg-blue-50/50">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div className="relative w-80 h-64">
                        <motion.svg viewBox="0 0 400 300" className="w-full h-full overflow-visible">
                            {/* Isometric Grid Base */}
                            <motion.path
                                d="M200 50 L350 150 L200 250 L50 150 Z"
                                fill="none" stroke="#e2e8f0" strokeWidth="2"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}
                            />
                            {/* Layers Building Up */}
                            {[0, 1, 2].map((i) => (
                                <motion.g key={i}
                                    initial={{ y: -50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.8, duration: 1.5, type: "spring" }}
                                >
                                    {/* Isometric Block */}
                                    <path d={`M200 ${100 + i * 40} L280 ${140 + i * 40} L200 ${180 + i * 40} L120 ${140 + i * 40} Z`}
                                        fill={i === 0 ? "#3b82f6" : i === 1 ? "#60a5fa" : "#93c5fd"}
                                        opacity="0.9"
                                        className="drop-shadow-lg"
                                    />
                                    <path d={`M120 ${140 + i * 40} L200 ${180 + i * 40} L200 ${200 + i * 40} L120 ${160 + i * 40} Z`} fill={i === 0 ? "#1d4ed8" : "#2563eb"} opacity="0.6" />
                                    <path d={`M280 ${140 + i * 40} L200 ${180 + i * 40} L200 ${200 + i * 40} L280 ${160 + i * 40} Z`} fill={i === 0 ? "#1e40af" : "#1d4ed8"} opacity="0.4" />
                                </motion.g>
                            ))}

                            {/* Connection Lines (Pipes) */}
                            <motion.path
                                d="M200 100 L200 220"
                                stroke="white" strokeWidth="2" strokeDasharray="4 4"
                                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.5, duration: 2 }}
                            />
                        </motion.svg>
                    </div>
                </div>
            )
        },
        {
            id: 'idea',
            label: t('hero.slides.idea_label'),
            sub: t('hero.slides.idea_sub'),
            content: (
                <div className="relative w-full h-full flex items-center justify-center bg-orange-50/50">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    {/* Illustrated Lamp / Bulb */}
                    <div className="relative w-64 h-64">
                        <motion.svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl overflow-visible">
                            {/* Glow */}
                            <motion.circle cx="100" cy="100" r="60" fill="url(#glowGradient)"
                                animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.1, 1] }}
                                transition={{ duration: 6, repeat: Infinity }}
                            />
                            <defs>
                                <radialGradient id="glowGradient" cx="0.5" cy="0.5" r="0.5">
                                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
                                </radialGradient>
                            </defs>

                            {/* Floating Bulb Shape (Abstract) */}
                            <motion.path
                                d="M100 160 C 130 160, 150 130, 150 100 C 150 60, 130 40, 100 40 C 70 40, 50 60, 50 100 C 50 130, 70 160, 100 160 Z"
                                fill="#fff" stroke="#f59e0b" strokeWidth="3"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            />
                            {/* Filament */}
                            <motion.path
                                d="M85 100 L 100 80 L 115 100"
                                fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                                animate={{ pathLength: [0, 1], opacity: [0, 1] }}
                                transition={{ duration: 2, delay: 0.5 }}
                            />
                            {/* Base */}
                            <motion.rect x="85" y="160" width="30" height="10" rx="2" fill="#475569"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.rect x="88" y="172" width="24" height="6" rx="1" fill="#475569"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Sparks / Ideas */}
                            {[...Array(5)].map((_, i) => (
                                <motion.g key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 }}
                                    transition={{ duration: 4, delay: i * 1, repeat: Infinity }}
                                >
                                    <path d="M100 100 L100 90" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" transform={`rotate(${i * 72} 100 100) translate(0 -60)`} />
                                    <circle cx="100" cy="100" r="3" fill="#fbbf24" transform={`rotate(${i * 72} 100 100) translate(0 -65)`} />
                                </motion.g>
                            ))}
                        </motion.svg>
                    </div>
                </div>
            )
        },
        {
            id: 'system',
            label: t('hero.slides.system_label'),
            sub: t('hero.slides.system_sub'),
            content: (
                <div className="relative w-full h-full flex items-center justify-center bg-purple-50/50 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

                    {/* Isometric Devices Composition */}
                    <div className="relative w-[500px] h-[400px]">
                        {/* Background Laptop */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            className="absolute top-10 left-10 w-80 h-56 bg-white rounded-xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden transform -rotate-6 hover:-rotate-3 transition-transform duration-700"
                        >
                            <div className="h-6 bg-slate-100 border-b border-slate-200 flex items-center px-2 gap-1">
                                <div className="w-2 h-2 rounded-full bg-red-400" />
                                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                <div className="w-2 h-2 rounded-full bg-green-400" />
                            </div>
                            <div className="flex-1 bg-slate-50 p-4 grid grid-cols-2 gap-4">
                                <div className="bg-slate-200 rounded h-20 animate-pulse delay-75" />
                                <div className="bg-slate-200 rounded h-20 animate-pulse delay-150" />
                                <div className="col-span-2 bg-slate-200 rounded h-20 animate-pulse" />
                            </div>
                        </motion.div>

                        {/* Foreground Phone */}
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="absolute bottom-10 right-20 w-32 h-64 bg-dark rounded-[2rem] shadow-2xl border-4 border-slate-800 flex flex-col overflow-hidden transform rotate-12 hover:rotate-6 transition-transform duration-700 z-10"
                        >
                            <div className="h-full bg-dark/90 relative">
                                {/* Screen Content */}
                                <div className="absolute top-8 left-2 right-2 bottom-2 bg-white rounded-xl overflow-hidden p-2">
                                    <div className="w-8 h-8 bg-primary rounded-lg mb-2" />
                                    <div className="w-full h-2 bg-slate-100 rounded mb-1" />
                                    <div className="w-2/3 h-2 bg-slate-100 rounded mb-4" />
                                    <div className="space-y-2">
                                        <div className="w-full h-10 bg-primary/10 rounded border border-primary/20" />
                                        <div className="w-full h-10 bg-primary/10 rounded border border-primary/20" />
                                    </div>
                                </div>
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-6 bg-dark rounded-b-xl" />
                            </div>
                        </motion.div>

                        {/* Floating Notification Badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 2, type: "spring" }}
                            className="absolute top-40 right-10 bg-white px-4 py-2 rounded-full shadow-xl border border-slate-100 flex items-center gap-2 z-20"
                        >
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-xs font-bold text-slate-700">{t('hero.slides.system_status')}</span>
                        </motion.div>
                    </div>
                </div>
            )
        }
    ];

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={homeHero}
                    alt="Home Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/70 to-white/60" />
            </div>

            {/* Background Glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse z-0" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] z-0" />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-primary text-xs font-bold tracking-wider mb-6 border border-slate-200">
                        {t('hero.badge')}
                    </span>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-dark tracking-tight leading-[1.1] mb-6">
                        {t('hero.title_1')} <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            {t('hero.title_2')}
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 mb-10 leading-relaxed">
                        {t('hero.subtitle')}
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => navigate('/portfolio')}
                            className="px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300"
                        >
                            {t('hero.explore_systems')}
                        </button>
                        <button
                            onClick={() => navigate('/about')}
                            className="px-8 py-4 bg-white text-dark border border-slate-200 font-semibold rounded-full hover:bg-slate-50 transition-colors"
                        >
                            {t('hero.about_us')}
                        </button>
                    </div>
                </motion.div>

                {/* Visual Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mt-20 relative mx-auto max-w-5xl rounded-t-3xl border border-slate-200 bg-white/50 backdrop-blur-xl shadow-2xl overflow-hidden min-h-[500px] flex flex-col"
                >
                    {/* Header Tabs */}
                    <div className="flex border-b border-slate-100 bg-white/50">
                        {slides.map((slide, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`flex-1 py-4 text-sm font-semibold transition-all relative ${currentSlide === idx ? 'text-primary bg-primary/5' : 'text-slate-400 hover:text-slate-600'
                                    }`}
                            >
                                {slide.label}
                                {currentSlide === idx && (
                                    <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Slide Content */}
                    <div className="flex-1 relative overflow-hidden bg-gradient-to-b from-slate-50/50 to-white/50">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                {slides[currentSlide].content}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Info Bar */}
                    <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
                        <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">{slides[currentSlide].sub}</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
