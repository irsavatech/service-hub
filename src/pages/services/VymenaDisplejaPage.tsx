import { Smartphone } from 'lucide-react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';

export default function VymenaDisplejaPage() {
  return (
    <ServicePageTemplate
      seoTitle="Výmena displeja na mobile | Iršava tech Bratislava"
      seoDescription="Profesionálna výmena prasknutého displeja na iPhone a Android. Kvalitné náhradné diely, záruka 12 mesiacov. Rýchla oprava do 24 hodín v Bratislave."
      seoKeywords="výmena displeja, oprava displeja, prasknutý displej, výmena skla mobil, iPhone displej, Samsung displej, Bratislava"
      url="/vymena-displeja"
      h1Title="Výmena prasknutého displeja na mobile."
      heroDescription="Praskol vám displej? Nefunguje dotyk? Vymeníme vám displej rýchlo a kvalitne. Používame originálne aj kvalitné alternatívne diely s dlhou zárukou."
      ctaText="Vymeniť displej"
      HeroIcon={Smartphone}
      symptoms={[
        "Prasknuté alebo rozbité sklo displeja",
        "Nefunkčný alebo prerušovaný dotyk",
        "Čierne škvrny alebo pruhy na obrazovke",
        "Displej bliká alebo má zlé farby",
        "Obrazovka celkom nereaguje",
        "Mŕtve pixely na displeji",
      ]}
      faqs={[
        {
          question: "Aký displej používate pri výmene?",
          answer: "Ponúkame originálne (ORI) aj kvalitné alternatívne (KÓPIA) displeje. Originálne displeje sú priamo od výrobcu a majú najvyššiu kvalitu. Alternatívne displeje sú lacnejšie, no stále kvalitné s plnou funkčnosťou. Pri objednávke vám poradíme, ktorá možnosť je pre vás najlepšia."
        },
        {
          question: "Ako dlho trvá výmena displeja?",
          answer: "Väčšinu displejov vymeníme do 1-2 hodín. Pri menej bežných modeloch alebo ak nemáme diel na sklade, môže oprava trvať 1-2 pracovné dni. Po diagnostike vás vždy informujeme o presnom čase."
        },
        {
          question: "Poskytujete záruku na výmenu displeja?",
          answer: "Áno, na všetky naše opravy poskytujeme záruku od 6 do 12 mesiacov v závislosti od typu použitého dielu. Originálne diely majú 12-mesačnú záruku, alternatívne diely 6-mesačnú záruku."
        }
      ]}
    />
  );
}
