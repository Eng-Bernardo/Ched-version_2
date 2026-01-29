import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Play } from 'lucide-react';

// Import videos if they exist, otherwise use placeholders
// Adjust the paths as necessary based on where the videos are actually located
// Assuming they are in src/assets/images as per request, but typical structure would be src/assets/videos
// import video1 from '../assets/images/video 1.mp4';
// import video2 from '../assets/images/video 2.mp4';

// Placeholder paths - user needs to ensure files exist at these locations in public folder or fix imports
// Placeholder paths - matching the found files in public/assets/images/
const video1 = "/assets/images/Video1.mp4";
const video2 = "/assets/images/Video2.mp4";

const AiDetectionSection = () => {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/30 rounded-full blur-[128px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[128px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block"
                    >
                        {t('ai_detection.title')}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-6"
                    >
                        {t('ai_detection.subtitle')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg"
                    >
                        {t('ai_detection.description')}
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Video 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 backdrop-blur-sm"
                    >
                        <div className="aspect-video relative">
                            {/* Video Player */}
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls={false}
                                poster="/path/to/poster1.jpg" // Add a poster image if available
                            >
                                <source src={video1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Overlay content if not playing or purely decorative */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent pointer-events-none" />

                            <div className="absolute bottom-0 left-0 p-6 pointer-events-none">
                                <h3 className="text-white font-bold text-xl mb-1">{t('ai_detection.video1_label')}</h3>
                            </div>
                        </div>
                    </motion.div>

                    {/* Video 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 backdrop-blur-sm"
                    >
                        <div className="aspect-video relative">
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls={false}
                                poster="/path/to/poster2.jpg" // Add a poster image if available
                            >
                                <source src={video2} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent pointer-events-none" />

                            <div className="absolute bottom-0 left-0 p-6 pointer-events-none">
                                <h3 className="text-white font-bold text-xl mb-1">{t('ai_detection.video2_label')}</h3>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AiDetectionSection;
