import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Monitor, Smartphone, Shield, HardDrive, Send, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';
import CircuitPattern from './CircuitPattern';

const pricingItems = [
  {
    service: 'Čistenie a prepastovanie',
    price: '48 € – 79 €',
    description: 'Kompletné vyčistenie od prachu a výmena termálnej pasty',
    icon: Sparkles,
    popular: true
  },
  {
    service: 'Inštalácia OS',
    price: '38 €',
    description: 'Čistá inštalácia Windows/macOS vrátane ovládačov',
    icon: Monitor
  },
  {
    service: 'Diagnostika',
    price: '20 €',
    description: 'Profesionálna diagnostika a určenie závady',
    icon: HardDrive
  },
  {
    service: 'Ochranné sklo',
    price: '15 €',
    description: 'Aplikácia kvalitného ochranného skla na displej',
    icon: Shield
  },
  {
    service: 'Technické čistenie telefónu',
    price: '23 €',
    description: 'Hĺbkové čistenie reproduktorov, portov a vnútra',
    icon: Smartphone
  }
];

export default function PricingSection() {
  return (
    <section id="cennik" className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
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
            Transparentné ceny
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Cenník{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
              služieb
            </span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Férové ceny bez skrytých poplatkov. Komplexnejšie opravy oceňujeme individuálne po diagnostike.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {pricingItems.map((item, index) => (
              <motion.div
                key={item.service}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
                  item.popular 
                    ? 'bg-gradient-to-r from-blue-50 to-blue-100/50 border-blue-200 shadow-md' 
                    : 'bg-background border-slate-200 hover:border-blue-200'
                }`}
              >
                {item.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="px-3 py-1 rounded-full bg-blue-700 text-primary-foreground text-xs font-semibold">
                      Najobľúbenejšie
                    </span>
                  </div>
                )}
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${
                    item.popular ? 'bg-blue-100' : 'bg-slate-100 group-hover:bg-blue-50'
                  } transition-colors`}>
                    <item.icon className={`w-7 h-7 ${
                      item.popular ? 'text-blue-700' : 'text-slate-600 group-hover:text-blue-700'
                    } transition-colors`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      {item.service}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {item.description}
                    </p>
                  </div>

                  <div className="shrink-0 sm:text-right">
                    <span className="text-2xl font-bold text-slate-900">
                      {item.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Button to full pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <Link to="/price" onClick={() => window.scrollTo(0, 0)}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-6 text-lg rounded-xl shadow-lg">
                Zobraziť kompletný cenník
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-100"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Check className="w-5 h-5 text-blue-700" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">
                  Individuálne ocenenie zložitých opráv
                </h4>
                <p className="text-slate-600 text-sm">
                  Opravy základných dosiek, výmena čipov a iné komplexné práce oceňujeme po bezplatnej diagnostike. Kontaktujte nás pre presný odhad.
                </p>
              </div>
            </div>
          </motion.div>

          <QuoteForm />
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xykypkpn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.description,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', description: '' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mt-10 p-8 rounded-3xl bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-700" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Ďakujeme za správu!
        </h3>
        <p className="text-slate-600">
          Ozveme sa vám čo najskôr s cenovou ponukou.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="mt-10 p-8 rounded-3xl bg-background border border-slate-200 shadow-lg"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          Získajte cenovú ponuku
        </h3>
        <p className="text-slate-600">
          Opíšte nám váš problém a my vám pošleme presný odhad ceny opravy
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <Input
              type="text"
              placeholder="Vaše meno"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="h-12 px-4 rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="h-12 px-4 rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <Input
            type="tel"
            placeholder="Telefónne číslo"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="h-12 px-4 rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <Textarea
            placeholder="Opíšte problém s vaším zariadením (napr. 'iPhone 12 sa nezapína po páde', 'Notebook sa prehrievá a vypína')"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
            rows={5}
            className="px-4 py-3 rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-700 hover:bg-blue-800 text-primary-foreground font-semibold py-6 rounded-2xl text-lg shadow-lg shadow-blue-700/20 transition-all hover:shadow-xl hover:shadow-blue-700/30"
        >
          {isSubmitting ? (
            'Odosielam...'
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Odoslať žiadosť
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
}
