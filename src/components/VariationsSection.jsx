import React from 'react';
import { motion } from 'framer-motion';
import {
    Activity, Users, BookOpen,
    Calendar, Target, Plus,
    CheckCircle2, Layers, Palette
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const VariationsSection = () => {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* VISUALS (Left Column) - Fanned Card Stack */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative min-h-[450px] flex items-center justify-center p-8"
                    >
                        {/* Stacked Cards Container */}
                        <div className="relative w-72 h-96 md:w-80 md:h-[400px]">

                            {/* Card 3: Company Management (Back) */}
                            <motion.div
                                initial={{ rotateZ: -8, x: -30, y: 10 }}
                                whileInView={{ rotateZ: -12, x: -50, y: 30 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                whileHover={{ rotateZ: -18, x: -70, y: 40, zIndex: 40 }}
                                className="absolute inset-0 bg-dark rounded-2xl shadow-xl overflow-hidden border border-slate-700 origin-bottom-left flex flex-col"
                            >
                                <div className="p-3 border-b border-slate-800 flex justify-between items-center text-white/50">
                                    <div className="flex gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                                    </div>
                                    <div className="text-[8px] font-mono">ERP_v2.0</div>
                                </div>
                                <div className="p-4 flex-1">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="text-[10px] font-bold text-white">{t('variations.demo.erp_revenue')}</div>
                                        <Target size={12} className="text-primary" />
                                    </div>
                                    <div className="space-y-3">
                                        {[80, 45, 95].map((w, i) => (
                                            <div key={i} className="space-y-1">
                                                <div className="flex justify-between text-[8px] text-slate-400">
                                                    <span>{t('variations.demo.phase')} {i + 1}</span>
                                                    <span>{w}%</span>
                                                </div>
                                                <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                                                    <div className="h-full bg-primary" style={{ width: `${w}%` }} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-4 bg-slate-800/50 backdrop-blur-sm border-t border-slate-800">
                                    <div className="text-[10px] font-bold text-white">{t('variations.cards.erp_title')}</div>
                                    <div className="text-[8px] text-slate-400">Enterprise Edition</div>
                                </div>
                            </motion.div>

                            {/* Card 2: School Websystem (Middle) */}
                            <motion.div
                                initial={{ rotateZ: 0, x: 0, y: 0 }}
                                whileInView={{ rotateZ: 0, x: 0, y: 0 }}
                                transition={{ duration: 1 }}
                                whileHover={{ y: -25, zIndex: 50 }}
                                className="absolute inset-0 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 origin-bottom-center z-10 flex flex-col"
                            >
                                <div className="p-3 border-b border-slate-100 flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-md bg-indigo-600 flex items-center justify-center text-white">
                                        <BookOpen size={10} />
                                    </div>
                                    <div className="text-[10px] font-bold text-slate-800">EduPortal</div>
                                </div>
                                <div className="p-4 flex-1">
                                    <div className="flex gap-4 mb-6">
                                        <div className="flex-1 bg-indigo-50 p-2 rounded-lg text-center">
                                            <div className="text-indigo-600 text-[12px] font-bold">1,240</div>
                                            <div className="text-slate-400 text-[8px]">{t('variations.demo.students')}</div>
                                        </div>
                                        <div className="flex-1 bg-green-50 p-2 rounded-lg text-center">
                                            <div className="text-green-600 text-[12px] font-bold">98%</div>
                                            <div className="text-slate-400 text-[8px]">{t('variations.demo.attendance')}</div>
                                        </div>
                                    </div>
                                    <div className="text-[10px] font-bold text-slate-800 mb-3">{t('variations.demo.today_classes')}</div>
                                    <div className="space-y-2">
                                        {[t('variations.demo.math'), t('variations.demo.history'), t('variations.demo.physics')].map((sub, i) => (
                                            <div key={i} className="flex items-center gap-2 p-2 rounded-md bg-slate-50 border border-slate-100">
                                                <Calendar size={10} className="text-slate-400" />
                                                <span className="text-[9px] text-slate-600">{sub}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-4 border-t border-slate-100 bg-slate-50">
                                    <div className="text-[10px] font-bold text-slate-800">{t('variations.cards.school_title')}</div>
                                    <div className="text-[8px] text-slate-400">Learning Management</div>
                                </div>
                            </motion.div>

                            {/* Card 1: Hospital Websystem (Front) */}
                            <motion.div
                                initial={{ rotateZ: 8, x: 30, y: 10 }}
                                whileInView={{ rotateZ: 12, x: 50, y: 30 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                whileHover={{ rotateZ: 18, x: 70, y: 40, zIndex: 60 }}
                                className="absolute inset-0 bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-100 origin-bottom-right z-20 flex flex-col"
                            >
                                <div className="p-3 border-b border-blue-50 bg-blue-600 flex justify-between items-center text-white">
                                    <div className="flex items-center gap-2">
                                        <Activity size={14} />
                                        <span className="text-[10px] font-bold">NexusHealth</span>
                                    </div>
                                    <Plus size={14} />
                                </div>
                                <div className="p-4 flex-1">
                                    <div className="bg-slate-50 rounded-lg p-3 mb-4 border border-slate-100">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                                <Users size={12} />
                                            </div>
                                            <div className="text-[9px] font-bold text-slate-800">{t('variations.demo.recent_patients')}</div>
                                        </div>
                                        <div className="space-y-2">
                                            {[1, 2, 3].map(v => (
                                                <div key={v} className="flex justify-between items-center border-b border-slate-100 last:border-0 pb-1">
                                                    <div className="w-16 h-1.5 bg-slate-200 rounded" />
                                                    <div className="w-6 h-1.5 bg-green-400 rounded-full" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="text-[10px] font-bold text-slate-800 mb-2">{t('variations.demo.health_metrics')}</div>
                                    <div className="flex items-end gap-1 h-12">
                                        {[40, 70, 50, 90, 60, 80, 55].map((h, i) => (
                                            <div key={i} className="flex-1 bg-blue-500 rounded-sm" style={{ height: `${h}%` }} />
                                        ))}
                                    </div>
                                    <div className="mt-4 flex items-center gap-2 text-green-500">
                                        <CheckCircle2 size={12} />
                                        <span className="text-[8px] font-bold uppercase tracking-wider">{t('variations.demo.systems_normal')}</span>
                                    </div>
                                </div>
                                <div className="p-4 border-t border-blue-50 bg-white">
                                    <div className="text-[10px] font-bold text-slate-800">{t('variations.cards.hospital_title')}</div>
                                    <div className="text-[8px] text-slate-400">Patient Management</div>
                                </div>
                            </motion.div>

                        </div>
                    </motion.div>

                    {/* TEXT CONTENT (Right Column) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <div className="inline-block px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-semibold text-slate-500 mb-6 shadow-sm">
                            {t('variations.badge')}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight uppercase">
                            {t('variations.title')}
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            {t('variations.description')}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Layers size={18} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800">{t('variations.features.arch_title')}</h4>
                                    <p className="text-sm text-slate-500">{t('variations.features.arch_desc')}</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Palette size={18} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800">{t('variations.features.themes_title')}</h4>
                                    <p className="text-sm text-slate-500">{t('variations.features.themes_desc')}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Background elements */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
};

export default VariationsSection;
