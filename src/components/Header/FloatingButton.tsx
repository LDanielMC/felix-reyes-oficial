import { motion, AnimatePresence } from 'framer-motion';

interface FloatingButtonProps {
    isVisible: boolean;
}

export const FloatingButton = ({ isVisible }: FloatingButtonProps) => {
    return (
        <AnimatePresence>
            {!isVisible && (
            <motion.div
                className="fixed top-4 right-4 z-50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
            >
                <button
                className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors hover:scale-110 active:scale-90 duration-200"
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                title="Volver al inicio"
                aria-label="Volver al inicio"
                >
                <div className="animate-bounce">
                    ↑
                </div>
                </button>
            </motion.div>
            )}
        </AnimatePresence>
    )
}
