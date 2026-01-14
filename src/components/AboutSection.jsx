import { motion } from 'framer-motion';
import { Terminal, Layers, Database, Code2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const AboutSection = () => {
    const { t } = useLanguage();

    const features = [
        {
            icon: <Terminal size={24} />,
            title: t('about.pillars.builders_title'),
            description: t('about.pillars.builders_desc')
        },
        {
            icon: <Layers size={24} />,
            title: t('about.pillars.lab_title'),
            description: t('about.pillars.lab_desc')
        },
        {
            icon: <Database size={24} />,
            title: t('about.pillars.ecosystem_title'),
            description: t('about.pillars.ecosystem_desc')
        },
        {
            icon: <Code2 size={24} />,
            title: t('about.pillars.software_house_title'),
            description: t('about.pillars.software_house_desc')
        }
    ];

    return (
        <section id="what-we-do" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }}
            />

            {/* Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] z-0 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">{t('about.title')}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        {t('about.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
