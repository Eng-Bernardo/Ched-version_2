import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const GlobalBackButton = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Don't show back button on home page
    if (location.pathname === '/') {
        return null;
    }

    const handleBack = () => {
        // Check if there's browser history to go back to
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            // Fallback to home page
            navigate('/');
        }
    };

    return (
        <motion.button
            onClick={handleBack}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-6 z-50 inline-flex items-center gap-2 px-4 py-2.5 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 hover:border-purple-300 font-medium group"
            aria-label="Go back"
        >
            <ArrowLeft
                size={20}
                strokeWidth={2}
                className="transition-transform group-hover:-translate-x-1"
            />
            <span className="hidden sm:inline">Back</span>
        </motion.button>
    );
};

export default GlobalBackButton;
