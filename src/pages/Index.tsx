import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import ServicesSection from '@/components/landing/ServicesSection';
import PricingSection from '@/components/landing/PricingSection';
import ContactSection from '@/components/landing/ContactSection';
import Footer from '@/components/landing/Footer';
import MobileCTA from '@/components/landing/MobileCTA';

export default function Index() {
  return (
    <div className="min-h-screen bg-background antialiased">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
