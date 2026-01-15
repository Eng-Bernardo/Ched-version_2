import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Github, Linkedin, Twitter } from 'lucide-react';
import contactHero from '../assets/images/contact_hero.png';
import contactTeam from '../assets/images/contact_team.png';
import contactAbstract from '../assets/images/contact_abstract.png';

const Contact = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus({ type: '', message: '' });

        // Simulate form submission
        setTimeout(() => {
            setFormStatus({
                type: 'success',
                message: t('contact.form.success')
            });
            setIsSubmitting(false);
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Clear success message after 5 seconds
            setTimeout(() => {
                setFormStatus({ type: '', message: '' });
            }, 5000);
        }, 1500);
    };

    const contactMethods = [
        {
            icon: Mail,
            title: t('contact.info.email_label'),
            value: 'contato@chedlabs.com',
            link: 'mailto:contato@chedlabs.com',
            color: 'from-blue-500 to-indigo-600'
        },
        {
            icon: Phone,
            title: t('contact.info.phone_label'),
            value: '+351 123 456 789',
            link: 'tel:+351123456789',
            color: 'from-purple-500 to-pink-600'
        },
        {
            icon: MapPin,
            title: t('contact.info.address_label'),
            value: 'Lisboa, Portugal',
            link: null,
            color: 'from-emerald-500 to-teal-600'
        },
        {
            icon: Clock,
            title: t('contact.info.hours_label'),
            value: t('contact.info.hours_value'),
            link: null,
            color: 'from-orange-500 to-red-600'
        }
    ];

    const socialLinks = [
        { icon: Github, url: 'https://github.com', label: 'GitHub' },
        { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={contactHero}
                        alt="Contact Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/80" />
                </div>

                {/* Hero Content */}
                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                    <div className="text-center w-full">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-indigo-600 mb-6">
                            {t('contact.hero.title')}
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            {t('contact.hero.subtitle')}
                        </p>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </section>

            {/* Contact Methods Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactMethods.map((method, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <method.icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {method.title}
                                </h3>
                                {method.link ? (
                                    <a
                                        href={method.link}
                                        className="text-gray-600 hover:text-indigo-600 transition-colors"
                                    >
                                        {method.value}
                                    </a>
                                ) : (
                                    <p className="text-gray-600">{method.value}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content - Form and Info */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="order-2 lg:order-1">
                            <div className="bg-white rounded-3xl p-8 shadow-xl">
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                    {t('contact.form.title')}
                                </h2>
                                <p className="text-gray-600 mb-8">
                                    {t('contact.form.description')}
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name Field */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            {t('contact.form.name')}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                                            placeholder={t('contact.form.name_placeholder')}
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            {t('contact.form.email')}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                                            placeholder={t('contact.form.email_placeholder')}
                                        />
                                    </div>

                                    {/* Subject Field */}
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            {t('contact.form.subject')}
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                                            placeholder={t('contact.form.subject_placeholder')}
                                        />
                                    </div>

                                    {/* Message Field */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            {t('contact.form.message')}
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none resize-none"
                                            placeholder={t('contact.form.message_placeholder')}
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                {t('contact.form.sending')}
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                {t('contact.form.send')}
                                            </>
                                        )}
                                    </button>

                                    {/* Status Message */}
                                    {formStatus.message && (
                                        <div className={`p-4 rounded-xl flex items-center gap-3 ${formStatus.type === 'success'
                                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                                            : 'bg-red-50 text-red-800 border border-red-200'
                                            }`}>
                                            {formStatus.type === 'success' ? (
                                                <CheckCircle className="w-5 h-5" />
                                            ) : (
                                                <AlertCircle className="w-5 h-5" />
                                            )}
                                            <span>{formStatus.message}</span>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>

                        {/* Side Content */}
                        <div className="order-1 lg:order-2 space-y-8">
                            {/* Abstract Image */}
                            <div className="rounded-3xl overflow-hidden shadow-xl">
                                <img
                                    src={contactAbstract}
                                    alt="Contact Support"
                                    className="w-full h-64 object-cover"
                                />
                            </div>

                            {/* Info Card */}
                            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-4">
                                    {t('contact.info.why_title')}
                                </h3>
                                <p className="text-white/90 mb-6 leading-relaxed">
                                    {t('contact.info.why_description')}
                                </p>

                                {/* Social Links */}
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                                            aria-label={social.label}
                                        >
                                            <social.icon className="w-6 h-6" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Team Image */}
                            <div className="rounded-3xl overflow-hidden shadow-xl">
                                <img
                                    src={contactTeam}
                                    alt="Our Team"
                                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Animated CTA Section - Similar to Our Story */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    {/* Main Content Container with Gradient Background */}
                    <div className="relative rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 p-12 sm:p-16 lg:p-20 overflow-hidden">
                        {/* Animated Process Bubbles */}
                        <div
                            className="absolute pointer-events-none"
                            style={{
                                top: '10%',
                                left: '5%',
                                animation: 'float-0 4s ease-in-out infinite'
                            }}
                        >
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white font-semibold text-sm">
                                    1
                                </div>
                                <span className="text-white font-medium text-sm pr-1">
                                    Cultivate System Ideas
                                </span>
                            </div>
                        </div>

                        <div
                            className="absolute pointer-events-none"
                            style={{
                                top: '12%',
                                right: '8%',
                                animation: 'float-1 3.5s ease-in-out infinite',
                                animationDelay: '0.5s'
                            }}
                        >
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-semibold text-sm">
                                    2
                                </div>
                                <span className="text-white font-medium text-sm pr-1">
                                    Architect the System
                                </span>
                            </div>
                        </div>

                        <div
                            className="absolute pointer-events-none"
                            style={{
                                bottom: '15%',
                                left: '8%',
                                animation: 'float-2 4.5s ease-in-out infinite',
                                animationDelay: '1s'
                            }}
                        >
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white font-semibold text-sm">
                                    3
                                </div>
                                <span className="text-white font-medium text-sm pr-1">
                                    Feed the Data
                                </span>
                            </div>
                        </div>

                        <div
                            className="absolute pointer-events-none"
                            style={{
                                bottom: '12%',
                                right: '6%',
                                animation: 'float-0 3.8s ease-in-out infinite',
                                animationDelay: '1.5s'
                            }}
                        >
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white font-semibold text-sm">
                                    4
                                </div>
                                <span className="text-white font-medium text-sm pr-1">
                                    Meet the Designers
                                </span>
                            </div>
                        </div>

                        <div
                            className="absolute pointer-events-none"
                            style={{
                                bottom: '5%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                animation: 'float-1 4.2s ease-in-out infinite',
                                animationDelay: '2s'
                            }}
                        >
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-green-500 flex items-center justify-center text-white font-semibold text-sm">
                                    5
                                </div>
                                <span className="text-white font-medium text-sm pr-1">
                                    Evaluate Together
                                </span>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-1/4 left-10 w-2 h-2 bg-white/40 rounded-full animate-pulse" />
                        <div className="absolute top-1/3 right-20 w-3 h-3 bg-white/30 rounded-full animate-pulse"
                            style={{ animationDelay: '0.5s' }} />
                        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-pulse"
                            style={{ animationDelay: '1s' }} />

                        {/* Content */}
                        <div className="relative z-10 text-center max-w-3xl mx-auto">
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Have a project in mind?
                            </h2>

                            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8">
                                Let's build something amazing together
                            </p>

                            <button className="px-8 py-3 rounded-full border-2 border-white/50 text-white font-medium hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm">
                                Start Project
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

            {/* Response Time Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {t('contact.response.title')}
                    </h3>
                    <p className="text-xl text-gray-600 mb-8">
                        {t('contact.response.description')}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <div className="text-4xl font-bold text-indigo-600 mb-2">24h</div>
                            <div className="text-gray-600">{t('contact.response.email_time')}</div>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <div className="text-4xl font-bold text-purple-600 mb-2">1h</div>
                            <div className="text-gray-600">{t('contact.response.urgent_time')}</div>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <div className="text-4xl font-bold text-pink-600 mb-2">24/7</div>
                            <div className="text-gray-600">{t('contact.response.support')}</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
