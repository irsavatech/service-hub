import { useEffect } from 'react';
import { motion } from 'framer-motion';
import CircuitPattern from './CircuitPattern';

export default function ReviewsSection() {
  useEffect(() => {
    // Load Elfsight script
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
      const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="recenzie" className="relative py-24 md:py-32 bg-slate-900 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-900 rounded-full blur-3xl opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-green-900/50 text-green-400 font-medium text-sm mb-6">
            Recenzie
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Čo hovoria{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
              o nás
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Prečítajte si, čo o nás píšu naši spokojní zákazníci na Google.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="elfsight-app-c7996d82-f554-4f24-9547-23683bd81c3b" data-elfsight-app-lazy></div>
        </motion.div>
      </div>
    </section>
  );
}
