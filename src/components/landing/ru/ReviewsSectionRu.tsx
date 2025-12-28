import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import CircuitPattern from '../CircuitPattern';

export default function ReviewsSectionRu() {
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
    <section id="recenzie" className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
      <CircuitPattern opacity={0.25} />
      
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-orange-50 text-orange-700 font-medium text-sm mb-6">
            Отзывы
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Что говорят{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
              о нас
            </span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Прочитайте, что пишут о нас наши довольные клиенты на Google.
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate-600 mb-6">Остались вопросы?</p>
          <a
            href="tel:+421911555888"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-orange-700 hover:to-orange-600 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            Позвоните нам
          </a>
        </motion.div>
      </div>
    </section>
  );
}
