import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('nav.what_we_do'), href: '/#what-we-do', isRoute: false },
        { name: t('nav.systems'), href: '/#systems', isRoute: false },
        { name: t('nav.portfolio'), href: '/portfolio', isRoute: true },
        { name: t('nav.contact'), href: '/contact', isRoute: true },
    ];

    const languages = [
        { code: 'pt', name: 'Português', flag: '🇧🇷' },
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' }
    ];

    const currentLang = languages.find(l => l.code === language);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="font-bold text-2xl tracking-tighter text-dark">
                    CHED<span className="text-primary">LABS</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        link.isRoute ? (
                            <NavLink
                                key={link.name}
                                to={link.href}
                                className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-slate-600 hover:text-primary'
                                    }`}
                            >
                                {link.name}
                            </NavLink>
                        ) : (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                            >
                                {link.name}
                            </a>
                        )
                    ))}

                    {/* Language Selector */}
                    <div className="relative">
                        <button
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors py-2"
                        >
                            <span className="text-lg">{currentLang?.flag}</span>
                            <span className="uppercase">{language}</span>
                            <ChevronDown size={14} className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {isLangOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-1"
                                >
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                setLanguage(lang.code);
                                                setIsLangOpen(false);
                                            }}
                                            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${language === lang.code ? 'bg-primary/5 text-primary font-bold' : 'text-slate-600 hover:bg-slate-50'
                                                }`}
                                        >
                                            <span className="text-lg">{lang.flag}</span>
                                            {lang.name}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link
                        to="/contact"
                        className="px-5 py-2.5 bg-dark text-white text-sm font-medium rounded-full hover:bg-opacity-90 transition-all"
                    >
                        {t('nav.get_in_touch')}
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-dark flex items-center gap-4"
                >
                    <div className="flex items-center gap-1 text-xs font-bold uppercase" onClick={() => setIsLangOpen(!isLangOpen)}>
                        <span>{currentLang?.flag}</span>
                    </div>
                    <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center py-8 space-y-6"
                    >
                        {navLinks.map((link) => (
                            link.isRoute ? (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-slate-700 hover:text-primary"
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-slate-700 hover:text-primary"
                                >
                                    {link.name}
                                </a>
                            )
                        ))}

                        <div className="flex gap-4">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        setLanguage(lang.code);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center border ${language === lang.code ? 'border-primary bg-primary/5 text-lg' : 'border-slate-200 text-lg'}`}
                                >
                                    {lang.flag}
                                </button>
                            ))}
                        </div>

                        <Link
                            to="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-opacity-90"
                        >
                            {t('nav.get_in_touch')}
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
