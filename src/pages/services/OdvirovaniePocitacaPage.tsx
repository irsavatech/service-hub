import { ShieldAlert } from 'lucide-react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';

export default function OdvirovaniePocitacaPage() {
  return (
    <ServicePageTemplate
      seoTitle="Odvírovanie počítača | Odstránenie malvéru | Iršava tech"
      seoDescription="Počítač je pomalý alebo máte vírusy? Odstránime malvér, adware a nepotrebný softvér. Optimalizácia systému pre rýchlejší chod."
      seoKeywords="odvírovanie počítača, odstránenie vírusov, malvér, adware, pomalý počítač, optimalizácia Windows, bloatware"
      url="/odvirovanie-pocitaca"
      h1Title="Odvírovanie a odstránenie nepotrebného softvéru."
      heroDescription="Počítač je pomalý? Vyskakujú vám reklamy? Odstránime vírusy, malvér a nepotrebné programy. Váš počítač bude opäť rýchly a bezpečný."
      ctaText="Vyčistiť systém"
      HeroIcon={ShieldAlert}
      symptoms={[
        "Počítač je veľmi pomalý",
        "Vyskakujú reklamy a pop-up okná",
        "Prehliadač má neznáme panely nástrojov",
        "Programy sa samy inštalujú",
        "Antivírus hlási hrozby",
        "Počítač sa správa čudne alebo zamŕza",
      ]}
      faqs={[
        {
          question: "Ako zistím, že mám vírus?",
          answer: "Typické príznaky sú: pomalý chod počítača, vyskakujúce reklamy, neznáme programy, zmeny v prehliadači, vysoké využitie procesora bez zjavnej príčiny. Ak spozorujete niečo neobvyklé, radšej nás kontaktujte."
        },
        {
          question: "Stratím svoje dáta pri odvírovaní?",
          answer: "Nie, odvírovanie nezmazáva vaše osobné súbory. Odstránime len škodlivý softvér a nepotrebné programy. V prípade vážnejšej infekcie vám odporúčame zálohu dát, ktorú vieme tiež zabezpečiť."
        },
        {
          question: "Ako dlho trvá odvírovanie?",
          answer: "Štandardné odvírovanie trvá 2-4 hodiny v závislosti od rozsahu infekcie a výkonu počítača. Pri vážnejších prípadoch môže byť potrebná aj kompletná reinštalácia systému, čo trvá dlhšie."
        }
      ]}
    />
  );
}
