import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import Seo from '@/components/Seo';
import logo from '@/assets/logo.png';

interface FAQ {
  question: string;
  answer: string;
}

interface RelatedService {
  title: string;
  description: string;
  href: string;
}

interface ServicePageProps {
  // SEO
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  url: string;
  
  // Hero
  h1Title: string;
  heroDescription: string;
  ctaText: string;
  
  // Content
  symptoms: string[];
  symptomsTitle?: string;
  
  // FAQ
  faqs: FAQ[];
  
  // Related Services (optional)
  relatedServices?: RelatedService[];
  
  // Icon component
  HeroIcon: React.ComponentType<{ className?: string }>;
}

export default function ServicePageTemplate({
  seoTitle,
  seoDescription,
  seoKeywords,
  url,
  h1Title,
  heroDescription,
  ctaText,
  symptoms,
  symptomsTitle = "Kedy potrebujete túto službu?",
  faqs,
  relatedServices,
  HeroIcon,
}: ServicePageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        lang="sk"
        url={url}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-50 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
                <HeroIcon className="w-4 h-4" />
                Profesionálna služba
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                {h1Title}
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
                {heroDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="tel:+421952240671">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-6 rounded-full shadow-lg shadow-orange-600/25 transition-all hover:shadow-xl hover:-translate-y-0.5 text-lg">
                    <Phone className="w-5 h-5 mr-2" />
                    {ctaText}
                  </Button>
                </a>
                <Link to="/#kontakt">
                  <Button variant="outline" className="px-8 py-6 rounded-full text-lg border-slate-300 hover:border-blue-600 hover:text-blue-600">
                    Napísať správu
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 w-full max-w-md"
            >
              <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 p-8 border border-slate-100">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <HeroIcon className="w-10 h-10 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-slate-500 text-sm mb-2">Rýchla oprava</p>
                  <p className="text-2xl font-bold text-slate-900">Do 24 hodín</p>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-center gap-3">
                  <img src={logo} alt="Iršava tech" className="h-8 w-auto" />
                  <span className="font-oswald text-sm">
                    <span className="text-slate-900">IRŠAVA</span>{' '}
                    <span className="text-blue-700">TECH</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Symptoms Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              {symptomsTitle}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Ak sa vám objavuje niektorý z nasledujúcich problémov, kontaktujte nás.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {symptoms.map((symptom, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <span className="text-slate-700">{symptom}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Často kladené otázky
            </h2>
          </motion.div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`faq-${index}`} 
                  className="bg-white rounded-xl border border-slate-200 px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-blue-700 py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>
      
      {/* Related Services */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Súvisiace služby
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {relatedServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={service.href}
                    className="block p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700 mb-2 flex items-center gap-2">
                      {service.title}
                      <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-slate-600 text-sm">{service.description}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-orange-400 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              Potrebujete pomoc? Zavolajte nám!
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Naši technici sú pripravení pomôcť vám s akýmkoľvek problémom. Rýchla diagnostika, férové ceny.
            </p>
            <a href="tel:+421952240671">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-10 py-6 rounded-full shadow-lg shadow-orange-600/25 transition-all hover:shadow-xl hover:-translate-y-0.5 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                +421 952 240 671
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
