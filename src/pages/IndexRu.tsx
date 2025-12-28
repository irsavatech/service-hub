import HeaderRu from '@/components/landing/ru/HeaderRu';
import HeroSectionRu from '@/components/landing/ru/HeroSectionRu';
import ServicesSectionRu from '@/components/landing/ru/ServicesSectionRu';
import ModularRepairSectionRu from '@/components/landing/ru/ModularRepairSectionRu';
import PricingSectionRu from '@/components/landing/ru/PricingSectionRu';
import ContactSectionRu from '@/components/landing/ru/ContactSectionRu';
import ReviewsSectionRu from '@/components/landing/ru/ReviewsSectionRu';
import FooterRu from '@/components/landing/ru/FooterRu';
import MobileCTARu from '@/components/landing/ru/MobileCTARu';

export default function IndexRu() {
  return (
    <div className="min-h-screen bg-background antialiased">
      <HeaderRu />
      <main>
        <HeroSectionRu />
        <ServicesSectionRu />
        <ModularRepairSectionRu />
        <PricingSectionRu />
        <ContactSectionRu />
        <ReviewsSectionRu />
      </main>
      <FooterRu />
      <MobileCTARu />
    </div>
  );
}
