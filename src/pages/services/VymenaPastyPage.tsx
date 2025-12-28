import { Thermometer } from 'lucide-react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';

export default function VymenaPastyPage() {
  return (
    <ServicePageTemplate
      seoTitle="Výmena teplovodivej pasty | Prepastovanie | Iršava tech"
      seoDescription="Profesionálna výmena teplovodivej pasty na CPU a GPU. Znížte teploty a predĺžte životnosť notebooku. Používame kvalitné pasty Noctua a Thermal Grizzly."
      seoKeywords="výmena teplovodivej pasty, prepastovanie, teplovodivá pasta, Thermal Grizzly, Noctua, chladenie CPU, GPU pasta"
      url="/vymena-teplovodivej-pasty"
      h1Title="Výmena teplovodivej pasty (Prepastovanie)."
      heroDescription="Znížte teploty vášho procesora a grafiky. Používame kvalitné pasty Noctua, Thermal Grizzly a tekutý kov pre maximálny výkon chladenia."
      ctaText="Vymeniť pastu"
      HeroIcon={Thermometer}
      symptomsTitle="Kedy je čas na výmenu pasty?"
      symptoms={[
        "Notebook je horúci aj pri bežnej práci",
        "Teploty CPU/GPU presahujú 85°C",
        "Ventilátor beží stále na maximum",
        "Notebook má viac ako 2-3 roky",
        "Výkon pri hrách alebo práci klesá",
        "Zariadenie sa vypína kvôli prehriatiu",
      ]}
      faqs={[
        {
          question: "Akú teplovodivú pastu používate?",
          answer: "Ponúkame tri úrovne: Noctua NT-H1 pre bežné notebooky, Thermal Grizzly Kryonaut pre gaming notebooky a tekutý kov (Thermal Grizzly Conductonaut) alebo fázovú pastu PTM 9750 pre maximálny výkon. Poradíme vám najlepšiu možnosť pre váš notebook."
        },
        {
          question: "Oplatí sa robiť prepastovanie spolu s čistením?",
          answer: "Rozhodne áno! Pri čistení aj tak notebook rozoberáme, takže výmena pasty je logický krok. Navyše stará pasta (2+ roky) stráca účinnosť a čistenie bez výmeny pasty neprinesie optimálne výsledky."
        },
        {
          question: "Ako veľmi sa znížia teploty po výmene pasty?",
          answer: "Závisí od stavu starej pasty a typu novej. Bežne vidíme pokles o 10-20°C. Pri použití tekutého kovu môže byť pokles ešte väčší. Výsledkom je tichší chod a lepší výkon bez thermal throttlingu."
        }
      ]}
      relatedServices={[
        {
          title: "Čistenie od prachu",
          description: "Kombinujte výmenu pasty s čistením pre najlepšie výsledky. Balík služieb za zvýhodnenú cenu.",
          href: "/cistenie-od-prachu"
        }
      ]}
    />
  );
}
