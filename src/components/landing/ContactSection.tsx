import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CircuitPattern from './CircuitPattern';

export default function ContactSection() {
  return (
    <section id="kontakt" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <CircuitPattern opacity={0.3} />
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex items-center"
          >
            <div className="space-y-8 w-full">
              <div className="text-center">
                <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-6">
                  Kontaktujte nás
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  Sme tu pre{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                    vás
                  </span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Máte poškodené zariadenie? Kontaktujte nás a pomôžeme vám. Radi zodpovieme všetky vaše otázky.
                </p>
              </div>

              <div className="space-y-4">
                <a 
                  href="tel:+421952240671" 
                  className="group flex items-center gap-4 transition-all"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Phone className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Telefón (WhatsApp)</p>
                    <p className="text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">+421 952 240 671</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Otváracie hodiny</p>
                    <p className="text-lg font-semibold text-slate-900">Pon-Pia 9:00 – 18:00</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Sobota</p>
                    <p className="text-lg font-semibold text-slate-900">10:00 – 14:00</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Lokalita</p>
                    <p className="text-lg font-semibold text-slate-900">Račianske mýto 1D, Bratislava</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://wa.me/421952240671" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700 text-primary-foreground font-semibold py-6 rounded-2xl text-lg shadow-xl shadow-green-600/20 transition-all hover:shadow-2xl hover:shadow-green-600/30">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Napísať na WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <div className="p-5 bg-slate-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Lokalita</h3>
                    <p className="text-sm text-slate-500">Kde nás nájdete</p>
                  </div>
                </div>
              </div>
              
              <div className="relative w-full h-80 lg:h-[500px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.470544617004!2d17.117464476724436!3d48.15901174966818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c89176cfe950b%3A0x6c905e0d8621b8b6!2zSXLFoWF2YSB0ZWNoIC0gU2VydmlzIG1vYmlsb3YgYSBub3RlYm9va292IHwg0KHQtdGA0LLQuNGBINGC0LXQu9C10YTQvtC90L7QsiDQuCDQvdC-0YPRgtCx0YPQutC-0LI!5e0!3m2!1sen!2ssk!4v1766851062750!5m2!1sen!2ssk" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
