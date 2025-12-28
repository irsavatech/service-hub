import { BatteryCharging } from 'lucide-react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';

export default function OpravaNabijaniaPage() {
  return (
    <ServicePageTemplate
      seoTitle="Oprava nabíjania mobilu | Výmena konektora | Iršava tech"
      seoDescription="Mobil sa nenabíja? Vymeníme nabíjací konektor, vyčistíme port alebo opravíme nabíjací obvod. Rýchla oprava v Bratislave s zárukou."
      seoKeywords="oprava nabíjania, nabíjací konektor, mobil sa nenabíja, výmena USB-C, oprava lightning, čistenie nabíjacieho portu"
      url="/oprava-nabijania"
      h1Title="Výmena nabíjacieho konektora."
      heroDescription="Mobil sa nenabíja alebo je kábel voľný? Opravíme váš nabíjací port rýchlo a spoľahlivo. Čistenie, oprava aj kompletná výmena konektora."
      ctaText="Opraviť nabíjanie"
      HeroIcon={BatteryCharging}
      symptoms={[
        "Telefón sa vôbec nenabíja",
        "Nabíjací kábel je voľný alebo vypadáva",
        "Nabíjanie funguje len v určitej polohe kábla",
        "Pomalé alebo prerušované nabíjanie",
        "Telefón sa nabíja len keď je vypnutý",
        "Nabíjací port je poškodený alebo zoxidovaný",
      ]}
      faqs={[
        {
          question: "Prečo sa môj telefón nenabíja?",
          answer: "Najčastejšie príčiny sú: znečistený nabíjací port (prach, vlákna), poškodený konektor, zlomené kontakty alebo problém s nabíjacím obvodom na základnej doske. Diagnostika nám ukáže presnú príčinu a navrhneme najlepšie riešenie."
        },
        {
          question: "Dá sa nabíjací port len vyčistiť?",
          answer: "Áno, často stačí profesionálne vyčistenie portu. Používame špeciálne nástroje a stlačený vzduch na bezpečné odstránenie nečistôt. Ak je port mechanicky poškodený, odporúčame výmenu."
        },
        {
          question: "Koľko stojí oprava nabíjania?",
          answer: "Čistenie nabíjacieho portu stojí od 10 €. Výmena nabíjacieho konektora sa pohybuje od 35 € v závislosti od modelu telefónu. Ak je problém v nabíjacom obvode na základnej doske, cena závisí od rozsahu opravy."
        }
      ]}
    />
  );
}
