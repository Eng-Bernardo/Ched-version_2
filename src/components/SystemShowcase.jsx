import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import abacoAccountsImg from '../assets/images/abaco_accounts.png';

const SystemShowcase = () => {
    const { t } = useLanguage();

    return (
        <section id="systems" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content - Unchanged */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <span className="text-primary font-bold tracking-wider text-sm uppercase mb-4 block">
                            {t('systems.badge')}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                            {t('systems.title')}
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            {t('systems.description')}
                        </p>

                        <ul className="space-y-4 mb-10">
                            {t('systems.features').map((item, i) => (
                                <li key={i} className="flex items-center text-slate-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                                        <ShieldCheck size={14} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link to="/case-studies/abaco-finance" className="group flex items-center px-8 py-4 bg-dark text-white font-semibold rounded-full hover:bg-primary transition-all duration-300 w-fit">
                            {t('systems.view_case_study')}
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </Link>
                    </motion.div>

                    {/* Screenshot / Visual Showcase */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2 relative"
                    >
                        {/* Glow behind the image */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 blur-2xl -z-10 rounded-[40px]" />

                        <div className="relative rounded-[24px] overflow-hidden border border-slate-200/50 shadow-2xl bg-[#0F172A] aspect-[16/10] flex group cursor-default">

                            {/* SIMULATED CURSOR */}
                            <motion.div
                                animate={{
                                    x: [400, 680, 680, 400], // Move to "Nova Conta" button (top right), click, return
                                    y: [300, 60, 60, 300],
                                    scale: [1, 1, 0.9, 1] // Click effect
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    times: [0, 0.4, 0.5, 1], // Timing of the sequence
                                    ease: "easeInOut"
                                }}
                                className="absolute z-50 pointer-events-none drop-shadow-xl top-0 left-0"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="#3B82F6" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                                </svg>
                            </motion.div>

                            {/* Static Dashboard Image */}
                            <img
                                src={abacoAccountsImg}
                                alt="Abaco Finance Dashboard - Accounts"
                                className="w-full h-full object-cover object-top"
                            />

                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100"
                        >
                            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold">
                                <Zap size={20} fill="currentColor" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-semibold uppercase">{t('systems.dashboard.performance')}</p>
                                <p className="text-dark font-bold">{t('systems.dashboard.uptime')}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SystemShowcase;
