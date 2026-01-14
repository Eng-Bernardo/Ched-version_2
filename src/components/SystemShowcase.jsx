import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, ShieldCheck, Zap, Wallet, PieChart, ArrowUpRight, ArrowDownLeft, Search, Bell, Settings, Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SystemShowcase = () => {
    const { t } = useLanguage();
    // Simulation State
    const [simulatedBalance, setSimulatedBalance] = React.useState(124592.00);
    const [transactions, setTransactions] = React.useState([
        { id: 1, type: 'in', name: t('systems.dashboard.tx_stripe'), time: t('systems.dashboard.tx_today') + ', 10:24 AM', amount: 2400.00 },
        { id: 2, type: 'out', name: t('systems.dashboard.tx_server'), time: t('systems.dashboard.tx_today') + ', 9:15 AM', amount: -120.00 }
    ]);
    const [isHovered, setIsHovered] = React.useState(false); // To pause simulation on user hover if needed

    // Simulation Loop
    React.useEffect(() => {
        const interval = setInterval(() => {
            // Trigger "Add Funds" simulation every 5 seconds

            // 1. Simulate Button Click Effect (handled by Framer Motion variant 'isPressed')

            // 2. Update Data
            setTimeout(() => {
                setSimulatedBalance(prev => prev + 500);
                setTransactions(prev => [
                    { id: Date.now(), type: 'in', name: t('systems.dashboard.tx_topup'), time: t('systems.dashboard.tx_just_now'), amount: 500.00 },
                    ...prev.slice(0, 2)
                ]);
            }, 1000); // Wait for cursor to 'click'

        }, 6000);

        return () => clearInterval(interval);
    }, [t]);

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

                        <button className="group flex items-center px-8 py-4 bg-dark text-white font-semibold rounded-full hover:bg-primary transition-all duration-300">
                            {t('systems.view_case_study')}
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </button>
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

                        <div className="relative rounded-[24px] overflow-hidden border border-slate-200/50 shadow-2xl bg-[#0F172A] aspect-[16/10] flex group font-sans text-slate-300 cursor-default">

                            {/* SIMULATED CURSOR */}
                            <motion.div
                                animate={{
                                    x: [200, 380, 380, 200], // Move to button, stay, return
                                    y: [300, 200, 200, 300],
                                    scale: [1, 1, 0.9, 1] // Click effect
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    times: [0, 0.4, 0.5, 1], // Timing of the sequence
                                    ease: "easeInOut"
                                }}
                                className="absolute z-50 pointer-events-none drop-shadow-xl"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="#3B82F6" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                                </svg>
                            </motion.div>

                            {/* Dashboard Sidebar */}
                            <div className="w-16 md:w-20 bg-dark border-r border-dark/20 flex flex-col items-center py-6 gap-6">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                                    className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold mb-4 shadow-lg shadow-primary/25"
                                >A</motion.div>
                                {[Home, Wallet, PieChart, Settings].map((Icon, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 + (idx * 0.1) }}
                                        className={`p-2 rounded-lg transition-colors ${idx === 0 ? 'bg-slate-800 text-white' : 'hover:bg-slate-800 text-slate-400'}`}
                                    >
                                        <Icon size={20} />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Dashboard Main */}
                            <div className="flex-1 flex flex-col bg-[#0F172A]">
                                {/* Header */}
                                <div className="h-16 border-b border-dark/20 flex items-center justify-between px-6">
                                    <div className="text-sm font-semibold text-white">{t('systems.dashboard.overview')}</div>
                                    <div className="flex items-center gap-4">
                                        <Search size={18} className="text-slate-500" />
                                        <Bell size={18} className="text-slate-500" />
                                        <div className="w-8 h-8 bg-slate-700 rounded-full border border-slate-600" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 grid grid-cols-3 gap-6 h-full overflow-hidden">
                                    {/* Main Balance Card */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="col-span-2 bg-dark rounded-2xl p-6 border border-dark/20 relative overflow-hidden group/card"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full group-hover/card:bg-primary/20 transition-all duration-500" />
                                        <div className="relative z-10">
                                            <p className="text-sm text-slate-400 mb-1">{t('systems.dashboard.total_balance')}</p>
                                            <motion.h3
                                                // Animate number change
                                                key={simulatedBalance}
                                                initial={{ scale: 1.1, color: '#4ADE80' }}
                                                animate={{ scale: 1, color: '#ffffff' }}
                                                className="text-3xl font-bold text-white mb-4"
                                            >
                                                ${simulatedBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                            </motion.h3>
                                            <div className="flex gap-2 mb-6">
                                                <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-md flex items-center gap-1 font-medium">
                                                    <ArrowUpRight size={12} /> +12.5%
                                                </span>
                                                <span className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded-md">{t('systems.dashboard.vs_last_month')}</span>
                                            </div>

                                            {/* Stylized buttons */}
                                            <div className="flex gap-3">
                                                <button className="flex-1 bg-primary text-white py-2 rounded-lg text-sm font-medium hover:bg-primary-dark transition">{t('systems.dashboard.transfer')}</button>
                                                <motion.button
                                                    animate={{
                                                        scale: [1, 0.95, 1],
                                                        backgroundColor: ["#1e293b", "#334155", "#1e293b"]
                                                    }}
                                                    transition={{
                                                        duration: 0.4,
                                                        delay: 2.4, // Sync with cursor click
                                                        repeat: Infinity,
                                                        repeatDelay: 5.6
                                                    }}
                                                    className="flex-1 bg-slate-800 text-white py-2 rounded-lg text-sm font-medium transition"
                                                >
                                                    {t('systems.dashboard.add_funds')}
                                                </motion.button>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Mini Stat Card */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="col-span-1 bg-dark rounded-2xl p-4 border border-dark/20 flex flex-col justify-center gap-3"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                                            <BarChart3 size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400">{t('systems.dashboard.weekly_profit')}</p>
                                            <p className="text-lg font-bold text-white">+$4,200</p>
                                        </div>
                                        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "70%" }}
                                                transition={{ delay: 0.8, duration: 1 }}
                                                className="h-full bg-indigo-500 rounded-full"
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Transaction List (Bottom) */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.7 }}
                                        className="col-span-3 bg-dark rounded-2xl p-4 border border-dark/20"
                                    >
                                        <div className="flex justify-between items-center mb-4">
                                            <h4 className="text-sm font-semibold text-white">{t('systems.dashboard.recent_transactions')}</h4>
                                            <span className="text-xs text-primary cursor-pointer">{t('systems.dashboard.view_all')}</span>
                                        </div>
                                        <div className="space-y-3">
                                            {transactions.map((tx, i) => (
                                                <motion.div
                                                    key={tx.id}
                                                    initial={{ x: -10, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="flex items-center justify-between p-2 hover:bg-slate-800/50 rounded-lg transition"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${tx.type === 'in' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                                                            {tx.type === 'in' ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
                                                        </div>
                                                        <div>
                                                            <p className="text-xs font-bold text-white">{tx.name}</p>
                                                            <p className="text-[10px] text-slate-500">{tx.time}</p>
                                                        </div>
                                                    </div>
                                                    <span className={`text-xs font-bold ${tx.type === 'in' ? 'text-green-400' : 'text-white'}`}>
                                                        {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

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
