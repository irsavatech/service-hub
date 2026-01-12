import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Cpu, Microscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CircuitPattern from './CircuitPattern';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      <CircuitPattern opacity={0.5} />
      
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-blue-800">Profesionálny servis v Bratislave</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Expertný servis{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                mobilov
              </span>{' '}
              a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                notebookov
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
              Špecializujeme sa na zložité opravy základných dosiek, spájkovanie procesorov (CPU/GPU) a záchranu zariadení, ktoré iní odpísali.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/421952240671" target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-primary-foreground font-semibold px-8 py-6 rounded-2xl text-lg shadow-xl shadow-green-600/20 transition-all hover:shadow-2xl hover:shadow-green-600/30 hover:-translate-y-1">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Napísať na WhatsApp
                </Button>
              </a>
              <a href="#sluzby">
                <Button variant="outline" className="w-full sm:w-auto border-2 border-blue-200 hover:border-orange-300 hover:bg-orange-50 text-blue-700 hover:text-orange-600 font-semibold px-8 py-6 rounded-2xl text-lg transition-all">
                  Naše služby
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-slate-200"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-blue-700" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">BGA spájkovanie</p>
                  <p className="text-sm text-slate-500">Profesionálne vybavenie</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <Microscope className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Mikroskopická presnosť</p>
                  <p className="text-sm text-slate-500">Pre najmenšie súčiastky</p>
                </div>
              </div>
            </motion.div>

            {/* Platforms we repair */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8"
            >
              <p className="text-sm font-medium text-slate-500 mb-4">Čo opravujeme:</p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <span className="text-sm font-medium text-slate-700">Apple</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200">
                  <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 2c-.963 0-1.813.653-2.326 1.26-.457.54-.803 1.273-.803 2.04 0 .07.01.14.013.21-.4.03-.72.08-1.024.16a4.988 4.988 0 0 0-.964.35c-.147.066-.286.144-.422.222l-.17.1a5.089 5.089 0 0 0-.327.22l-.063.05a4.99 4.99 0 0 0-.95 1.04 5.09 5.09 0 0 0-.37.58 5.008 5.008 0 0 0-.56 2.3v6.94c0 .66.13 1.29.37 1.87.24.58.59 1.09 1.03 1.53.44.44.95.79 1.53 1.03.58.24 1.21.37 1.87.37h3.88c.66 0 1.29-.13 1.87-.37.58-.24 1.09-.59 1.53-1.03.44-.44.79-.95 1.03-1.53.24-.58.37-1.21.37-1.87v-6.94c0-.82-.16-1.6-.48-2.3a5.07 5.07 0 0 0-1.32-1.84 5.036 5.036 0 0 0-1.96-1.18c-.37-.13-.76-.23-1.17-.28.01-.07.02-.14.02-.21 0-.767-.346-1.5-.803-2.04C19.337 2.653 18.486 2 17.523 2zM6.477 2C5.514 2 4.663 2.653 4.15 3.26c-.457.54-.803 1.273-.803 2.04 0 .07.01.14.013.21-.4.03-.72.08-1.024.16a4.988 4.988 0 0 0-.964.35c-.147.066-.286.144-.422.222l-.17.1a5.089 5.089 0 0 0-.327.22l-.063.05a4.99 4.99 0 0 0-.95 1.04 5.09 5.09 0 0 0-.37.58 5.008 5.008 0 0 0-.56 2.3v6.94c0 .66.13 1.29.37 1.87.24.58.59 1.09 1.03 1.53.44.44.95.79 1.53 1.03.58.24 1.21.37 1.87.37h3.88c.66 0 1.29-.13 1.87-.37.58-.24 1.09-.59 1.53-1.03.44-.44.79-.95 1.03-1.53.24-.58.37-1.21.37-1.87v-6.94c0-.82-.16-1.6-.48-2.3a5.07 5.07 0 0 0-1.32-1.84 5.036 5.036 0 0 0-1.96-1.18c-.37-.13-.76-.23-1.17-.28.01-.07.02-.14.02-.21 0-.767-.346-1.5-.803-2.04C8.29 2.653 7.44 2 6.477 2z"/>
                  </svg>
                  <span className="text-sm font-medium text-slate-700">Android</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200">
                  <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                  </svg>
                  <span className="text-sm font-medium text-slate-700">Windows</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                  <span className="text-sm font-medium text-slate-700">macOS</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="relative bg-gradient-to-br from-slate-100 to-background rounded-3xl p-8 shadow-2xl shadow-slate-200/50 border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1588508065123-287b28e013da?w=800&q=80"
                  alt="Profesionálna oprava elektroniky"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -top-4 -right-4 bg-background rounded-2xl p-4 shadow-xl border border-slate-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Diagnostika</p>
                      <p className="text-sm text-green-600">Bezplatná konzultácia</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute -bottom-4 -left-4 bg-background rounded-2xl p-4 shadow-xl border border-slate-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-blue-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">CPU/GPU opravy</p>
                      <p className="text-sm text-blue-600">Špecializácia</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
