import { useLanguage } from '../context/LanguageContext';

const OurStory = () => {
    const { t } = useLanguage();

    // Team member avatars with color variations
    const teamMembers = [
        { name: 'Ben', color: 'from-emerald-400 to-cyan-500', position: { top: '15%', left: '20%' }, delay: 0 },
        { name: 'Alexandre', color: 'from-blue-400 to-indigo-500', position: { top: '10%', right: '30%' }, delay: 0.5 },
        { name: 'Eddy', color: 'from-orange-400 to-pink-500', position: { bottom: '25%', right: '15%' }, delay: 1 },
    ];

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                {/* Main Content Container with Gradient Background */}
                <div className="relative rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 p-12 sm:p-16 lg:p-20 overflow-hidden">
                    {/* Animated Team Members */}
                    {teamMembers.map((member, index) => (
                        <div
                            key={member.name}
                            className="absolute"
                            style={{
                                ...member.position,
                                animation: `float-${index} ${3 + Math.random() * 2}s ease-in-out infinite`,
                                animationDelay: `${member.delay}s`
                            }}
                        >
                            <div className={`
                                flex items-center gap-2 px-4 py-2 rounded-full 
                                bg-white/20 backdrop-blur-md border border-white/30
                                shadow-lg hover:scale-110 transition-transform duration-300
                            `}>
                                <div className={`
                                    w-8 h-8 rounded-full 
                                    bg-gradient-to-br ${member.color}
                                    flex items-center justify-center
                                    text-white font-semibold text-sm
                                `}>
                                    {member.name[0]}
                                </div>
                                <span className="text-white font-medium text-sm pr-1">
                                    {member.name}
                                </span>
                            </div>
                        </div>
                    ))}

                    {/* Decorative Elements */}
                    <div className="absolute top-1/4 left-10 w-2 h-2 bg-white/40 rounded-full animate-pulse" />
                    <div className="absolute top-1/3 right-20 w-3 h-3 bg-white/30 rounded-full animate-pulse"
                        style={{ animationDelay: '0.5s' }} />
                    <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-pulse"
                        style={{ animationDelay: '1s' }} />

                    {/* Content */}
                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            {t('ourStory.title')}
                        </h2>

                        <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8">
                            {t('ourStory.description')}
                        </p>

                        <button className="
                            px-8 py-3 rounded-full 
                            border-2 border-white/50 
                            text-white font-medium
                            hover:bg-white/10 hover:border-white
                            transition-all duration-300
                            backdrop-blur-sm
                        ">
                            {t('ourStory.cta')}
                        </button>
                    </div>

                    {/* Inline styles for custom animations */}
                    <style jsx>{`
                        @keyframes float-0 {
                            0%, 100% { transform: translate(0, 0); }
                            25% { transform: translate(-10px, -15px); }
                            50% { transform: translate(5px, -25px); }
                            75% { transform: translate(-5px, -10px); }
                        }
                        
                        @keyframes float-1 {
                            0%, 100% { transform: translate(0, 0); }
                            33% { transform: translate(15px, -20px); }
                            66% { transform: translate(-10px, -30px); }
                        }
                        
                        @keyframes float-2 {
                            0%, 100% { transform: translate(0, 0); }
                            20% { transform: translate(-15px, -10px); }
                            40% { transform: translate(10px, -25px); }
                            60% { transform: translate(-5px, -18px); }
                            80% { transform: translate(8px, -12px); }
                        }
                    `}</style>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
