import { Laptop } from 'lucide-react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';

export default function DiagnostikaNotebookPage() {
  return (
    <ServicePageTemplate
      seoTitle="Diagnostika notebooku | Oprava základnej dosky | Iršava tech"
      seoDescription="Notebook sa nezapína? Čierna obrazovka? Profesionálna diagnostika a oprava základných dosiek notebookov. Špecializujeme sa na mikrospájkovanie."
      seoKeywords="diagnostika notebooku, notebook sa nezapína, oprava základnej dosky, čierna obrazovka notebook, mikrospájkovanie, oprava napájania"
      url="/diagnostika-notebooku"
      h1Title="Diagnostika notebooku, ktorý sa nezapne."
      heroDescription="Váš notebook sa nezapína? Má čiernu obrazovku? Vykonáme hĺbkovú diagnostiku a nájdeme príčinu problému. Špecializujeme sa na opravy základných dosiek."
      ctaText="Objednať diagnostiku"
      HeroIcon={Laptop}
      symptoms={[
        "Notebook sa vôbec nezapína",
        "Po zapnutí zostáva čierna obrazovka",
        "Notebook sa zapne a hneď vypne",
        "Bliká LED kontrolka ale nenaštartuje",
        "Notebook sa reštartuje sám od seba",
        "Po páde alebo zaliatí nefunguje",
      ]}
      faqs={[
        {
          question: "Čo zahŕňa diagnostika notebooku?",
          answer: "Diagnostika zahŕňa vizuálnu kontrolu, testovanie napájacích obvodov, kontrolu základnej dosky pod mikroskopom, testovanie RAM a úložiska. Identifikujeme presnú príčinu problému a navrhneme riešenie s cenovou kalkuláciou."
        },
        {
          question: "Koľko stojí diagnostika?",
          answer: "Základná diagnostika je zdarma ak sa rozhodnete pre opravu. Ak opravu nebudete chcieť, účtujeme poplatok 15-25 € za čas strávený diagnostikou. Vždy vás vopred informujeme o možnostiach."
        },
        {
          question: "Viete opraviť základnú dosku?",
          answer: "Áno, špecializujeme sa na opravy základných dosiek vrátane mikrospájkovania BGA čipov, výmeny napájacích obvodov a opravy poškodených ciest. Máme profesionálne vybavenie vrátane BGA stanice a diagnostických nástrojov."
        }
      ]}
    />
  );
}
