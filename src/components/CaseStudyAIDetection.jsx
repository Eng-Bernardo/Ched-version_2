import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle2, Camera, Users, AlertTriangle, Train, FileText, Eye, Shield, Activity } from 'lucide-react';

const CaseStudyAIDetection = () => {
    const { t } = useLanguage();
    const navigate = useNavigate();
    const [activeVideo, setActiveVideo] = useState(0);

    // Videos for the AI Detection system
    const video1 = `${import.meta.env.BASE_URL}assets/images/Video1.mp4`;
    const video2 = `${import.meta.env.BASE_URL}assets/images/Video2.mp4`;

    const videos = [
        { src: video2, caption: 'Train Camera Detection System' },
        { src: video1, caption: 'People Detection & Behavioral Analysis' }
    ];

    // Access the translated data
    const projectData = t('portfolio.projects.ai_detection');

    // Ensure we have fallbacks if specific translation keys are missing
    const features = projectData.features || [
        "People Detection: Behavioral analysis and person-based logging",
        "PPE Detection: Identification of personal protective equipment",
        "Virtual Boundaries: Line-based analysis with audio alerts",
        "Train Camera: Automatic locomotive and wagon counting",
        "Smart Logs: Automatic report generation and data validation"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">

            {/* Hero Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full mb-6">
                                <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wide">
                                    {projectData.category || 'Enterprise AI'}
                                </span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                                {projectData.title || 'AI Detection Systems'}
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                {projectData.description}
                            </p>

                            {/* Key Stats */}
                            <div className="grid grid-cols-3 gap-6 mb-8">
                                <div>
                                    <div className="text-3xl font-bold text-cyan-600 mb-1">{projectData.year || '2025'}</div>
                                    <div className="text-sm text-gray-600">Year</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-cyan-600 mb-1">AI</div>
                                    <div className="text-sm text-gray-600">Powered</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-cyan-600 mb-1">24/7</div>
                                    <div className="text-sm text-gray-600">Monitoring</div>
                                </div>
                            </div>


                        </motion.div>

                        {/* Main Video */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                                <video
                                    className="w-full h-auto"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source src={video2} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-6 -right-6 bg-cyan-600 text-white px-6 py-4 rounded-2xl shadow-xl">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5" />
                                    <span className="font-semibold">Live System</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">System Capabilities</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Advanced computer vision and AI-powered detection systems
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-shadow"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                                    {index === 0 && <Users className="w-7 h-7 text-white" />}
                                    {index === 1 && <Shield className="w-7 h-7 text-white" />}
                                    {index === 2 && <AlertTriangle className="w-7 h-7 text-white" />}
                                    {index === 3 && <Train className="w-7 h-7 text-white" />}
                                    {index === 4 && <FileText className="w-7 h-7 text-white" />}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {feature.split(':')[0]}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.split(':')[1]}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Gallery */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">System in Action</h2>
                        <p className="text-xl text-gray-600">
                            Real-time AI detection demonstrations
                        </p>
                    </div>

                    {/* Main Video Display */}
                    <div className="mb-8">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900">
                            <video
                                className="w-full h-auto"
                                autoPlay
                                muted
                                loop
                                playsInline
                                key={activeVideo}
                            >
                                <source src={videos[activeVideo].src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                <p className="text-white font-medium text-lg">
                                    {videos[activeVideo].caption}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Video Selection */}
                    <div className="grid grid-cols-2 gap-6">
                        {videos.map((video, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveVideo(index)}
                                className={`relative rounded-xl overflow-hidden transition-all ${activeVideo === index
                                    ? 'ring-4 ring-cyan-600 shadow-xl'
                                    : 'opacity-60 hover:opacity-100'
                                    }`}
                            >
                                <video
                                    className="w-full h-auto bg-gray-900"
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source src={video.src} type="video/mp4" />
                                </video>
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <Camera className="w-12 h-12 text-white" />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Ready to implement AI detection?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Transform your operations with intelligent monitoring systems
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-600 text-white rounded-full font-semibold hover:bg-cyan-700 hover:shadow-xl transition-all"
                        >
                            Get Started
                            <ExternalLink className="w-5 h-5" />
                        </Link>
                        <Link
                            to="/portfolio"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-full font-semibold hover:border-cyan-600 hover:text-cyan-600 transition-all"
                        >
                            View More Projects
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CaseStudyAIDetection;
