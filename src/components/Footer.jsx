import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <>
            <style jsx>{`
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                    animation: gradient 8s ease infinite;
                }
            `}</style>
            <footer className="bg-dark text-white pt-20 pb-10 relative overflow-hidden">
                {/* Background Glows - Increased vibrancy */}
                <div className="absolute top-[-40%] left-[-15%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-40%] right-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">



                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                        {/* Column 1 - Animated Description + Instagram + Copyright */}
                        <div className="col-span-1">
                            <div className="max-w-md">
                                {/* Animated Description */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="mb-6"
                                >
                                    <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-blue-400 to-indigo-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                                        {t('footer.description')}
                                    </h3>
                                </motion.div>

                                {/* Instagram */}
                                <motion.a
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    href="https://instagram.com/chedlabs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 text-slate-400 hover:text-white transition-all duration-300 group mb-6"
                                >
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </div>
                                    <span className="font-medium text-base">@chedlabs</span>
                                </motion.a>

                                {/* Copyright */}
                                <div className="text-sm text-slate-400 font-medium mt-4">
                                    © {new Date().getFullYear()} CHED LABS.<br />
                                    {t('footer.all_rights')}
                                </div>
                            </div>
                        </div>

                        {/* Column 2 - Company */}
                        <div>
                            <h4 className="font-bold text-lg mb-6 text-white">{t('footer.header_company')}</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">{t('footer.about')}</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">{t('footer.careers')}</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">{t('footer.contact')}</a></li>
                            </ul>
                        </div>

                        {/* Column 3 - Systems */}
                        <div>
                            <h4 className="font-bold text-lg mb-6 text-white">{t('footer.header_systems')}</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Abaco Finance</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">{t('footer.internal_tools')}</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;
