import React from 'react';
import { motion } from 'framer-motion';
import {
    Figma, Share2, MessageSquare,
    Zap, Monitor, Smartphone,
    Image as ImageIcon, ArrowRight,
    Search, Layout
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const WireframeSection = () => {
    const { t } = useLanguage();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight"
                    >
                        {t('wireframe.title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600 leading-relaxed"
                    >
                        {t('wireframe.subtitle')}
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {/* Card 1: Figma Integration */}
                    <motion.div variants={itemVariants} className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-500 flex flex-col h-full">
                        <div className="h-48 mb-8 bg-indigo-50 rounded-2xl relative overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-4 border-2 border-dashed border-indigo-200 rounded-xl" />
                            <div className="relative z-10 flex items-center gap-6">
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center"
                                >
                                    <Figma className="text-orange-500" size={32} />
                                </motion.div>
                                <ArrowRight className="text-indigo-300" />
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="w-20 h-24 bg-indigo-600 rounded-lg shadow-xl p-2"
                                >
                                    <div className="w-full h-1 bg-white/20 rounded-full mb-2" />
                                    <div className="w-2/3 h-1 bg-white/20 rounded-full mb-4" />
                                    <div className="w-full h-8 bg-white/10 rounded-md border border-white/20" />
                                </motion.div>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-dark mb-4">{t('wireframe.cards.figma.title')}</h3>
                        <p className="text-slate-500 leading-relaxed">{t('wireframe.cards.figma.desc')}</p>
                    </motion.div>

                    {/* Card 2: Screen Flows */}
                    <motion.div variants={itemVariants} className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-500 lg:col-span-2 flex flex-col h-full">
                        <div className="h-48 mb-8 bg-purple-50 rounded-2xl relative overflow-hidden flex items-center justify-center gap-4">
                            {[1, 2, 3].map((i) => (
                                <React.Fragment key={i}>
                                    <motion.div
                                        initial={{ opacity: 0.5 }}
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                                        className="w-24 h-32 bg-white rounded-lg border border-purple-100 shadow-sm p-2"
                                    >
                                        <div className="w-full h-8 bg-purple-50 rounded-md mb-2" />
                                        <div className="space-y-1">
                                            <div className="w-full h-1 bg-slate-100 rounded-full" />
                                            <div className="w-2/3 h-1 bg-slate-100 rounded-full" />
                                        </div>
                                    </motion.div>
                                    {i < 3 && <Share2 className="text-purple-300" size={16} />}
                                </React.Fragment>
                            ))}
                        </div>
                        <h3 className="text-xl font-bold text-dark mb-4">{t('wireframe.cards.flows.title')}</h3>
                        <p className="text-slate-500 leading-relaxed">{t('wireframe.cards.flows.desc')}</p>
                    </motion.div>

                    {/* Card 3: Text to Wireframe */}
                    <motion.div variants={itemVariants} className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-500 md:col-span-2 flex flex-col h-full">
                        <div className="h-48 mb-8 bg-blue-50 rounded-2xl relative overflow-hidden flex items-center justify-center gap-8 px-12">
                            <motion.div
                                animate={{ x: [-10, 0, -10] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="bg-white rounded-2xl shadow-lg p-4 max-w-xs"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <MessageSquare size={14} className="text-blue-500" />
                                    <div className="w-20 h-1.5 bg-blue-100 rounded-full" />
                                </div>
                                <div className="text-[10px] text-slate-400 font-mono">"Create a SaaS hero section with primary button"</div>
                            </motion.div>
                            <div className="w-32 h-40 bg-white rounded-xl border border-blue-100 shadow-xl p-4 overflow-hidden relative">
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                >
                                    <div className="w-full h-12 bg-slate-50 rounded mb-4" />
                                    <div className="w-full h-2 bg-blue-500 rounded-full mb-2" />
                                    <div className="w-2/3 h-2 bg-slate-100 rounded-full" />
                                </motion.div>
                                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-dark mb-4">{t('wireframe.cards.text.title')}</h3>
                        <p className="text-slate-500 leading-relaxed">{t('wireframe.cards.text.desc')}</p>
                    </motion.div>

                    {/* Card 4: Speed/Power */}
                    <motion.div variants={itemVariants} className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-500 flex flex-col h-full">
                        <div className="h-48 mb-8 bg-amber-50 rounded-2xl relative overflow-hidden flex items-center justify-center">
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="relative"
                            >
                                <Zap className="text-amber-500 fill-amber-500" size={64} />
                                <motion.div
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="absolute inset-0 bg-amber-400 blur-2xl -z-10"
                                />
                            </motion.div>
                        </div>
                        <h3 className="text-xl font-bold text-dark mb-4">{t('wireframe.cards.speed.title')}</h3>
                        <p className="text-slate-500 leading-relaxed">{t('wireframe.cards.speed.desc')}</p>
                    </motion.div>

                    {/* Card 5: Mobile or Desktop */}
                    <motion.div variants={itemVariants} className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-500 flex flex-col h-full">
                        <div className="h-48 mb-8 bg-emerald-50 rounded-2xl relative overflow-hidden flex items-center justify-center gap-6">
                            <motion.div
                                animate={{ x: [-5, 5, -5] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="relative"
                            >
                                <Monitor size={48} className="text-emerald-600" />
                                <div className="absolute inset-2 border border-emerald-200 rounded" />
                            </motion.div>
                            <motion.div
                                animate={{ x: [5, -5, 5] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="relative"
                            >
                                <Smartphone size={32} className="text-emerald-600" />
                                <div className="absolute inset-1.5 border border-emerald-200 rounded-sm" />
                            </motion.div>
                        </div>
                        <h3 className="text-xl font-bold text-dark mb-4">{t('wireframe.cards.mobile.title')}</h3>
                        <p className="text-slate-500 leading-relaxed">{t('wireframe.cards.mobile.desc')}</p>
                    </motion.div>

                    {/* Card 6: Image to Wireframe */}
                    <motion.div variants={itemVariants} className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-500 lg:col-span-2 flex flex-col h-full">
                        <div className="h-48 mb-8 bg-rose-50 rounded-2xl relative overflow-hidden flex items-center justify-center gap-12">
                            <div className="relative">
                                <ImageIcon size={48} className="text-rose-400" />
                                <motion.div
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute -inset-2 border-2 border-rose-200 rounded-lg"
                                />
                            </div>
                            <ArrowRight className="text-rose-300" />
                            <div className="w-40 h-28 bg-white rounded-lg border-2 border-slate-200 relative p-4 flex flex-col gap-2">
                                <div className="w-full h-8 bg-slate-50 rounded flex items-center px-2">
                                    <div className="w-4 h-4 rounded-full bg-rose-200" />
                                </div>
                                <div className="w-full h-2 bg-slate-100 rounded-full" />
                                <div className="w-2/3 h-2 bg-slate-100 rounded-full" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-dark mb-4">{t('wireframe.cards.image.title')}</h3>
                        <p className="text-slate-500 leading-relaxed">{t('wireframe.cards.image.desc')}</p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />
        </section>
    );
};

export default WireframeSection;
