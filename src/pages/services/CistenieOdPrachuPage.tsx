import { Wind } from 'lucide-react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';

export default function CistenieOdPrachuPage() {
  return (
    <ServicePageTemplate
      seoTitle="Čistenie notebooku od prachu | Iršava tech Bratislava"
      seoDescription="Notebook sa prehrieva alebo je hlučný? Profesionálne čistenie ventilátora a chladiaceho systému. Predĺžte životnosť vášho zariadenia."
      seoKeywords="čistenie notebooku, notebook sa prehrieva, hlučný ventilátor, čistenie od prachu, údržba notebooku, prehrievanie"
      url="/cistenie-od-prachu"
      h1Title="Čistenie notebooku od prachu a nečistôt."
      heroDescription="Notebook sa prehrieva? Ventilátor je príliš hlučný? Vyčistíme chladiaci systém a váš notebook bude opäť tichý a chladný."
      ctaText="Objednať čistenie"
      HeroIcon={Wind}
      symptoms={[
        "Notebook je veľmi horúci",
        "Ventilátor je hlučný alebo beží stále",
        "Počítač sa sám vypína pri záťaži",
        "Výkon je nižší ako predtým",
        "Notebook ste nečistili viac ako 2 roky",
        "Pri hraní hier sa prehrieva",
      ]}
      faqs={[
        {
          question: "Ako často treba čistiť notebook?",
          answer: "Odporúčame čistenie každých 12-24 mesiacov v závislosti od prostredia. Ak máte doma zvieratá, fajčíte alebo pracujete v prašnom prostredí, čistenie je potrebné častejšie. Pravidelná údržba predlžuje životnosť notebooku."
        },
        {
          question: "Čo zahŕňa profesionálne čistenie?",
          answer: "Rozoberieme notebook, vyčistíme ventilátor a chladič od prachu, vymeníme teplovodnú pastu (ak je súčasťou balíka), vyčistíme vetracie otvory a skontrolujeme celkový stav chladiaceho systému."
        },
        {
          question: "Môžem si notebook vyčistiť sám?",
          answer: "Povrchové čistenie vetracích otvorov zvládnete aj doma. Ale hlbšie čistenie vrátane rozobratia a čistenia ventilátora odporúčame nechať na profesionálov, aby ste nepoškodili komponenty."
        }
      ]}
      relatedServices={[
        {
          title: "Výmena teplovodivej pasty",
          description: "Ak čistíte notebook, odporúčame aj výmenu pasty pre najlepšie výsledky chladenia.",
          href: "/vymena-teplovodivej-pasty"
        }
      ]}
    />
  );
}
