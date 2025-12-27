import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X } from 'lucide-react';

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="bg-background border-t border-slate-200 px-4 py-4 space-y-3"
              >
                <a
                  href="https://wa.me/421952240671"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-green-600 hover:bg-green-700 text-primary-foreground font-semibold rounded-2xl transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <a
                  href="tel:+421952240671"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-blue-700 hover:bg-blue-800 text-primary-foreground font-semibold rounded-2xl transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Zavolať
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="bg-background/95 backdrop-blur-md border-t border-slate-200 px-4 py-3 safe-area-inset-bottom">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`p-3 rounded-xl transition-colors ${
                  isExpanded 
                    ? 'bg-slate-100 text-slate-700' 
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {isExpanded ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
              </button>
              <a
                href="tel:+421952240671"
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-orange-600 hover:bg-orange-700 text-primary-foreground font-semibold rounded-2xl shadow-lg shadow-orange-600/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                Zavolať teraz
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
