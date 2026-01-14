import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-dark text-white pt-20 pb-10 relative overflow-hidden">
            {/* Background Glows - Increased vibrancy */}
            <div className="absolute top-[-40%] left-[-15%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-40%] right-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-slate-800 pb-12">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="font-bold text-2xl tracking-tighter text-white mb-6 block">
                            CHED<span className="text-primary">LABS</span>
                        </a>
                        <p className="text-slate-400 max-w-sm mb-6">
                            {t('footer.description')}
                        </p>
                        <div className="text-sm text-slate-500">
                            © {new Date().getFullYear()} CHED LABS. {t('footer.all_rights')}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">{t('footer.header_company')}</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">{t('footer.about')}</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">{t('footer.careers')}</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">{t('footer.contact')}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">{t('footer.header_systems')}</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Abaco Finance</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">{t('footer.internal_tools')}</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>{t('footer.tagline')}</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
                        <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
