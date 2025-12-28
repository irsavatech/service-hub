import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import ServicesSection from '@/components/landing/ServicesSection';
import ModularRepairSection from '@/components/landing/ModularRepairSection';
import PricingSection from '@/components/landing/PricingSection';
import ContactSection from '@/components/landing/ContactSection';
import ReviewsSection from '@/components/landing/ReviewsSection';
import Footer from '@/components/landing/Footer';
import MobileCTA from '@/components/landing/MobileCTA';
import Seo from '@/components/Seo';

export default function Index() {
  return (
    <div className="min-h-screen bg-background antialiased">
      <Seo
        title="Iršava tech - Servis mobilov a notebookov"
        description="Profesionálny servis mobilov a notebookov v Bratislave. Špecializujeme sa na opravy základných dosiek a spájkovanie CPU/GPU."
        keywords="oprava mobilu, servis notebookov, Bratislava, výmena displeja, oprava základnej dosky"
        lang="sk"
        url="/"
      />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ModularRepairSection />
        <PricingSection />
        <ContactSection />
        <ReviewsSection />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
