import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// Import images directly (Vite will handle the paths)
import abacoFinanceImg from '../assets/images/abaco_finance_analysis.jpg';
import cercargoImg from '../assets/images/cercargo_billing.jpg';
import promoshareImg from '../assets/images/promoshare_categories.jpg';

const GallerySection = () => {
    const { t } = useLanguage();

    const galleryItems = [
        { img: abacoFinanceImg, title: t('gallery.items.fintech_title'), type: t('gallery.items.fintech_type') },
        { img: cercargoImg, title: 'Portal Cercargo', type: 'Marketing Tech' },
        { img: promoshareImg, title: 'PromoShare', type: 'Marketing Tech' },
        // Duplicate for infinite scroll effect
        { img: abacoFinanceImg, title: t('gallery.items.fintech_title'), type: t('gallery.items.fintech_type') },
        { img: cercargoImg, title: 'Portal Cercargo', type: 'Marketing Tech' },
        { img: promoshareImg, title: 'PromoShare', type: 'Marketing Tech' },
    ];

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6 mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">{t('gallery.title')}</h2>
                <p className="text-slate-500 max-w-2xl mx-auto">
                    {t('gallery.subtitle')}
                </p>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden gradient-mask-x">
                {/* Gradient Masks for smooth fade out at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10" />

                <motion.div
                    className="flex space-x-8"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20
                    }}
                    style={{ width: "fit-content" }}
                >
                    {/* We repeat the items list twice to ensure smooth looping */}
                    {[...galleryItems, ...galleryItems].map((item, index) => (
                        <div
                            key={index}
                            className="relative w-[400px] h-[300px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg border border-slate-200 group bg-white"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-accent text-xs font-bold uppercase tracking-wider mb-1">{item.type}</span>
                                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default GallerySection;
