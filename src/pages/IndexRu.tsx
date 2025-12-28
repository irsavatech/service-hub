import HeaderRu from '@/components/landing/ru/HeaderRu';
import HeroSectionRu from '@/components/landing/ru/HeroSectionRu';
import ServicesSectionRu from '@/components/landing/ru/ServicesSectionRu';
import ModularRepairSectionRu from '@/components/landing/ru/ModularRepairSectionRu';
import PricingSectionRu from '@/components/landing/ru/PricingSectionRu';
import ContactSectionRu from '@/components/landing/ru/ContactSectionRu';
import ReviewsSectionRu from '@/components/landing/ru/ReviewsSectionRu';
import FooterRu from '@/components/landing/ru/FooterRu';
import MobileCTARu from '@/components/landing/ru/MobileCTARu';
import Seo from '@/components/Seo';

export default function IndexRu() {
  return (
    <div className="min-h-screen bg-background antialiased">
      <Seo
        title="Iršava tech - Ремонт телефонов и ноутбуков"
        description="Профессиональный ремонт мобильных телефонов и ноутбуков в Братиславе. Специализируемся на ремонте материнских плат и пайке CPU/GPU."
        keywords="ремонт телефона, сервис ноутбуков, Братислава, замена дисплея, ремонт материнской платы"
        lang="ru"
        url="/ru"
      />
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
