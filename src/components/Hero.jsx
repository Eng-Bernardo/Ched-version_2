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
            id: 'architecture',
            label: t('hero.slides.arch_label'),
            sub: t('hero.slides.arch_sub'),
            content: (
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* The Architecture - Network/Server Illustration */}
                    <svg className="w-4/5 h-4/5 animate-float" viewBox="0 0 400 300" fill="none">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        {/* Central Server */}
                        <motion.rect
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            x="170" y="120" width="60" height="60" rx="8" fill="url(#grad1)" opacity="0.9"
                        />
                        {/* Connection Lines */}
                        {[0, 1, 2, 3, 4, 5].map((i) => {
                            const angle = (i * 60) * Math.PI / 180;
                            const x = 200 + Math.cos(angle) * 100;
                            const y = 150 + Math.sin(angle) * 80;
                            return (
                                <motion.g key={i}>
                                    <motion.line
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                                        x1="200" y1="150" x2={x} y2={y}
                                        stroke="#667eea" strokeWidth="2" opacity="0.3"
                                    />
                                    <motion.circle
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.5 + i * 0.1 }}
                                        cx={x} cy={y} r="15" fill="#764ba2" opacity="0.8"
                                    />
                                </motion.g>
                            );
                        })}
                        {/* Pulsing Rings */}
                        <motion.circle
                            animate={{ r: [60, 80, 60], opacity: [0.3, 0, 0.3] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            cx="200" cy="150" r="60" stroke="#667eea" strokeWidth="2" fill="none"
                        />
                    </svg>
                </div>
            )
        },
        {
            id: 'idea',
            label: t('hero.slides.idea_label'),
            sub: t('hero.slides.idea_sub'),
            content: (
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* The Idea - Lightbulb with connections */}
                    <svg className="w-4/5 h-4/5 animate-float" viewBox="0 0 400 300" fill="none">
                        <defs>
                            <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#f093fb', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#f5576c', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        {/* Lightbulb */}
                        <motion.ellipse
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            cx="200" cy="120" rx="40" ry="50" fill="url(#grad2)" opacity="0.8"
                        />
                        <motion.rect
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ delay: 0.4 }}
                            x="185" y="160" width="30" height="20" rx="4" fill="#667eea" opacity="0.9"
                        />
                        <motion.rect
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ delay: 0.5 }}
                            x="190" y="175" width="20" height="15" rx="2" fill="#667eea" opacity="0.7"
                        />
                        {/* Idea rays */}
                        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                            const rad = angle * Math.PI / 180;
                            const x1 = 200 + Math.cos(rad) * 55;
                            const y1 = 120 + Math.sin(rad) * 65;
                            const x2 = 200 + Math.cos(rad) * 75;
                            const y2 = 120 + Math.sin(rad) * 85;
                            return (
                                <motion.line
                                    key={i}
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                                    transition={{ delay: 0.6 + i * 0.1, duration: 1, repeat: Infinity, repeatDelay: 1 }}
                                    x1={x1} y1={y1} x2={x2} y2={y2}
                                    stroke="#f5576c" strokeWidth="3" strokeLinecap="round"
                                />
                            );
                        })}
                    </svg>
                </div>
            )
        },
        {
            id: 'system',
            label: t('hero.slides.system_label'),
            sub: t('hero.slides.system_sub'),
            content: (
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* The System - Interconnected Boxes */}
                    <svg className="w-4/5 h-4/5 animate-float" viewBox="0 0 400 300" fill="none">
                        <defs>
                            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: '#4facfe', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#00f2fe', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        {/* Grid of connected boxes */}
                        {[0, 1, 2].map((row) =>
                            [0, 1, 2].map((col) => {
                                const x = 100 + col * 100;
                                const y = 80 + row * 70;
                                return (
                                    <motion.g key={`${row}-${col}`}>
                                        <motion.rect
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ delay: 0.1 * (row + col), type: "spring" }}
                                            x={x} y={y} width="50" height="50" rx="8"
                                            fill="url(#grad3)" opacity="0.8"
                                        />
                                        {col < 2 && (
                                            <motion.line
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                                transition={{ delay: 0.5 + row * 0.2 }}
                                                x1={x + 50} y1={y + 25} x2={x + 100} y2={y + 25}
                                                stroke="#4facfe" strokeWidth="2" opacity="0.5"
                                            />
                                        )}
                                        {row < 2 && (
                                            <motion.line
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                                transition={{ delay: 0.5 + col * 0.2 }}
                                                x1={x + 25} y1={y + 50} x2={x + 25} y2={y + 70}
                                                stroke="#00f2fe" strokeWidth="2" opacity="0.5"
                                            />
                                        )}
                                    </motion.g>
                                );
                            })
                        )}
                        {/* Data flow particles */}
                        <motion.circle
                            animate={{ cx: [100, 400], opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                            cy="105" r="4" fill="#00f2fe"
                        />
                    </svg>
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
                <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/65 to-white/55" />
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
