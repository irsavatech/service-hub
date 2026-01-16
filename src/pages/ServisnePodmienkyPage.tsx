import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import Seo from '@/components/Seo';

export default function ServisnePodmienkyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Servisné podmienky | Iršava tech"
        description="Všeobecné obchodné podmienky servisu mobilných telefónov a elektroniky. Záručné podmienky, reklamačný poriadok."
        keywords="servisné podmienky, záručné podmienky, reklamácia, oprava telefónu, servis elektroniky"
        lang="sk"
        url="/servisne-podmienky"
      />
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Servisné podmienky
          </h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-8">
              Všeobecné obchodné podmienky spoločnosti Stanislav Zavydniak pre servis elektroniky.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">1. Základné ustanovenia</h2>
              <p className="text-slate-600 leading-relaxed">
                Tieto všeobecné obchodné podmienky upravujú vzťah medzi spoločnosťou <strong>Stanislav Zavydniak</strong>, 
                so sídlom Karpatské námestie 7770/10A, 831 06 Bratislava - mestská časť Rača, Slovenská republika, 
                IČO 53788656, Okresný úrad Bratislava, Odbor živnostenského podnikania, Tomášikova 46, Bratislava, 83205, 
                OU-BA-OZP1-2021/079292-3 č. Živnostenského registra 110-299967 (ďalej len „Servis" alebo „servisné stredisko") 
                a zákazníkom, ktorý si objednáva vykonanie pozáručného/záručného servisu mobilného telefónu, prípadne iného 
                zariadenia v súlade s ustanovením § 652 a nasl. zákona č. 40/1964 Zb. Občianskeho zákonníka v znení neskorších 
                predpisov (ďalej len „Občiansky zákonník").
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                Tieto všeobecné obchodné podmienky sú vydané v súlade s Občianskym zákonníkom, zákonom č. 250/2007 Z. z. 
                o ochrane spotrebiteľa a o zmene zákona Slovenskej národnej rady č. 372/1990 Zb. o priestupkoch v znení 
                neskorších predpisov, zákona č. 391/2015 Z. z. o alternatívnom riešení spotrebiteľských sporov, ako aj 
                ostatnými všeobecne záväznými právnymi predpismi Slovenskej republiky.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">2. Zálohovanie dát</h2>
              <p className="text-slate-600 leading-relaxed">
                Zákazník si je vedomý, že pri servisnom zásahu môže prísť k strate zákazníckych dát (telefónny zoznam, 
                kontakty, fotografie, videá, jednotlivé aplikácie, atď.) v zariadení alebo na pamäťovom médiu. 
                Strate dát je možné predísť zálohovaním dát.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">3. Povinnosť zálohovania</h2>
              <p className="text-slate-600 leading-relaxed">
                Zákazník je povinný pred servisným zásahom si osobné dáta na zariadení sám zálohovať. 
                Zálohu je možné vytvoriť aj v servisnom stredisku, v závislosti od stavu zariadenia. 
                Táto služba je spoplatnená podľa platného cenníka.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">4. Resetovanie zariadenia</h2>
              <p className="text-slate-600 leading-relaxed">
                Zákazník si je vedomý a svojim podpisom súhlasí s resetovaním zariadenia do výrobných nastavení 
                pričom dochádza k strate dát, za ktoré nie je zodpovedný servis a ani výrobca.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">5. Príslušenstvo zariadenia</h2>
              <p className="text-slate-600 leading-relaxed">
                Servis nenesie zodpovednosť za stratu SIM kariet, pamäťových médií, Bluetooth donglov, Wi-Fi adaptérov 
                ani obalov. Zákazník je povinný vopred vybrať všetky tieto veci z telefónu alebo iného zariadenia, 
                prípadne požiadať pracovníka pri prijatí zariadenia, aby to urobil za neho. Servis nekontroluje 
                prítomnosť SIM kariet ani pamäťových médií v zariadení.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">6. Skryté závady</h2>
              <p className="text-slate-600 leading-relaxed">
                Zariadenie po nadmernom mechanickom namáhaní, vystavení nadmernej vlhkosti, zariadenie už rozobraté 
                pred opravou v našom servisnom stredisku môže obsahovať skryté závady, ktoré môžu navýšiť cenu opravy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">7. Zodpovednosť za skryté chyby</h2>
              <p className="text-slate-600 leading-relaxed">
                Servisné stredisko nenesie žiadnu zodpovednosť za prejavenie skrytých chýb a poškodení zistených 
                po otvorení opravovaného zariadenia resp. začatí servisného úkonu a neznáša žiadne náklady s tým spojené.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">8. Termín opravy</h2>
              <p className="text-slate-600 leading-relaxed">
                Predpokladaný čas vykonania opravy sa odvíja od momentálnej dostupnosti náhradného dielu. 
                O možných termínoch opravy informujeme vopred, po diagnostike.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">9. Platobné podmienky</h2>
              <p className="text-slate-600 leading-relaxed">
                Všetky opravy v hodnote nad 200 € sa uhrádzajú vopred. Servis má zároveň právo požadovať zálohu 
                od zákazníka na základe jeho negatívnej histórie v systéme evidencie objednávok.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">10. Špecifické náhradné diely</h2>
              <p className="text-slate-600 leading-relaxed">
                V prípade ak má zákazník záujem o opravu zariadenia, ktoré vyžaduje špecifický náhradný diel, 
                zákazník po odsúhlasení cenovej ponuky musí uhradiť zálohu pre daný diel. Po zaplatení zálohy 
                bude diel objednaný bez možnosti storna objednávky, nakoľko takéto diely sú objednané na konkrétne 
                sériové číslo a nemôžu sa používať na bežné opravy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">11. Pôvodné náhradné diely</h2>
              <p className="text-slate-600 leading-relaxed">
                Pôvodné (poškodené, nefunkčné, atď.) náhradné diely zo zariadenia servis odovzdá iba na vyžiadanie 
                zákazníka do 7 dní od realizácie opravy/výmeny. Po tomto termíne nebude možné vyžiadanie pôvodných 
                náhradných dielov z dôvodu pravidelnej ekologickej likvidácie.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">12. Nevyzdvihnuté zariadenia</h2>
              <p className="text-slate-600 leading-relaxed">
                Servis si vyhradzuje právo anulovať zálohovú čiastku za objednaný diel do 30 kalendárnych dní 
                od kontaktovania zákazníka. Po šiestich mesiacoch máme právo podľa Občianskeho zákonníka prístroj 
                ekologicky zlikvidovať alebo predať. Toto opatrenie je bohužiaľ nutné vzhľadom na obmedzené priestory 
                prevádzky. Zariadenie Vám bude vydané na základe servisného protokolu.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">13. Diagnostika a manipulačný poplatok</h2>
              <p className="text-slate-600 leading-relaxed">
                Servis si môže účtovať manipulačný poplatok v zmysle cenníka servisného strediska za diagnostiku, 
                a to aj v prípade, ak nebolo možné opravu vykonať alebo ak bolo vykonanie opravy zákazníkom odmietnuté 
                po vykonaní diagnostiky. Pri nesúhlase s cenovým návrhom za opravu zariadenia bude zákazníkovi účtovaný 
                poplatok vo výške <strong>20,00€ až 35,00€ bez DPH</strong> za diagnostiku zariadenia v závislosti od zložitosti diagnostiky.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">14. Ochrana osobných údajov</h2>
              <p className="text-slate-600 leading-relaxed">
                Zákazník sa oboznámil so záručnými podmienkami a svojím podpisom udeľuje spoločnosti Stanislav Zavydniak 
                súhlas v zmysle zákona č. 122/2013 Z.z. o ochrane osobných údajov v znení neskorších predpisov so správou, 
                spracovaním a uchovaním jeho osobných údajov uvedených v servisnom protokole spoločnosti Stanislav Zavydniak 
                a jej obchodným partnerom.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">15. Spracovanie osobných údajov</h2>
              <p className="text-slate-600 leading-relaxed">
                Zákazník si je vedomý, že kvôli servisnému zásahu do zariadenia musí odovzdať kontaktné a fakturačné údaje 
                na základe účtovných a obchodných zákonov. Pri servisnom zásahu sa nijakým spôsobom nespracúvajú iné osobné 
                údaje (fotografie a pod.) zákazníka okrem vopred dohodnutej zálohe údajov zo zariadenia, ktorá je chránená 
                antivírusom, heslom a šifrovaním podľa zákona 18/2018 Z.z. O ochrane osobných údajov.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">16. Reklamačný poriadok</h2>
              <p className="text-slate-600 leading-relaxed">
                Dohoda o spôsobe vybavenia reklamácie: predávajúci a kupujúci sa dohodli, že zákazník je povinný najneskôr 
                na 30-ty deň reklamáciu vyzdvihnúť osobne v mieste uplatnenia reklamácie. V prípade nevyzdvihnutia si reklamácie 
                sa má zato, že reklamácia bola vybavená včas. Podrobné podmienky reklamačného poriadku a pozáručného servisu 
                sú k dispozícii na internetovej stránke Irsava-tech.sk
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">17. Záručná doba</h2>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-slate-700 font-medium">
                  Záručná doba na servisný úkon resp. na prácu technika je <strong>6 mesiacov</strong>, 
                  na náhradný diel je <strong>24 mesiacov</strong>.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">18. Výluky zo záruky</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Záruka na prácu technika a menený diel sa nevzťahuje na:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Zariadenie vystavené nadmernej vlhkosti</li>
                <li>Zariadenie vystavené nadmernej vlhkosti a následne prečistené bez použitia náhradných dielov</li>
                <li>Zariadenie vystavené nadmernej vlhkosti, prečistené a opravené výmenou náhradných dielov</li>
                <li>Zariadenie ktoré už bolo v inom servise</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">19. Skryté vady</h2>
              <p className="text-slate-600 leading-relaxed">
                Z dôvodu že servis nedokáže zaručiť dlhodobú funkčnosť zariadenia, pretože časom môže dôjsť 
                k prejaveniu skrytých vád na zariadení ktoré počas servisu neboli prejavené/zistené.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">20. Neodborný zásah</h2>
              <p className="text-slate-600 leading-relaxed">
                V prípade zistenia neodborného zásahu do zariadenia servisné stredisko nedrží záruku na prácu technika.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">21. Náklady reklamácie</h2>
              <p className="text-slate-600 leading-relaxed">
                Ak pri reklamačnom konaní nebude uznaná vada v rámci záruky, zákazník si hradí všetky náklady 
                spojené s logistickými poplatkami a opravou.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Podmienky pre testovanie zariadenia</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Pre úspešnú servisnú opravu zariadenia a jej garanciu spoločnosť Stanislav Zavydniak potrebuje zariadenie 
                po servisnej oprave kompletne otestovať. Pre kompletné otestovanie zariadenia je potrebné:
              </p>
              <ol className="list-decimal pl-6 text-slate-600 space-y-2">
                <li>Zariadenie odovzdať v továrenských nastaveniach (resetované a odhlásené zo všetkých účtov) s možnosťou aktivácie zariadenia.</li>
                <li>Poskytnúť heslo (grafické, číselné, vzorové, atď.).</li>
                <li>Zariadenie odovzdať odblokované (bez grafického, číselného, atď. hesla).</li>
              </ol>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mt-4">
                <p className="text-slate-700">
                  V prípade, že zákazník odmieta všetky 3 predošlé alternatívy, servisné stredisko nebude mať možnosť 
                  plnohodnotne otestovať zariadenie po oprave a z toho dôvodu nedokáže poskytnúť štandardnú záruku 
                  (6 mesiacov na prácu servisného technika). Zákazník si je plne vedomý, že v tomto prípade stráca 
                  záruku/garanciu na servisnú prácu (6 mesiacov). <strong>Zákazník dostane záruku 24 mesiacov len na menený diel.</strong>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">22. Skladné</h2>
              <p className="text-slate-600 leading-relaxed">
                Objednávateľ je vždy upozornený o ukončení opravy resp. servisného úkonu (SMS), po uplynutí 7 pracovných 
                dní od dňa upozornenia si servisné stredisko resp. predávajúci vyhradzuje právo účtovať objednávateľovi – 
                kupujúcemu skladné <strong>0,90 €/deň/ks</strong>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">23. Prevzatie zariadenia</h2>
              <p className="text-slate-600 leading-relaxed">
                Zákazník potvrdzuje, že prevzal zariadenie po servisnom zásahu. Zariadenie bolo opravené/servisované 
                v súlade s dohodou. Podpisom protokolu o oprave zákazník potvrdzuje, že je oboznámený so stavom zariadenia 
                po servise. Ďalej svojím podpisom potvrdzuje, že na zariadení nevznikli žiadne ďalšie poškodenia počas servisu. 
                Výrobok si preberá bez výhrad.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">24. Súhlas s podmienkami</h2>
              <p className="text-slate-600 leading-relaxed">
                Odberateľ si prečítal zmluvné podmienky opravy a je si plne vedomý rizík spojených s opravou mechanických 
                alebo tekutinou poškodených zariadení a svojím podpisom súhlasí s vykonaním a zmluvnými podmienkami opravy 
                resp. servisného úkonu.
              </p>
            </section>

            <section className="mb-8 bg-red-50 border border-red-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-red-800 mb-4 flex items-center gap-2">
                ⚠️ Upozornenie
              </h2>
              <ol className="list-decimal pl-6 text-slate-700 space-y-4">
                <li>
                  <strong>Poškodené a následne opravované zariadenie už nikdy nebude ako NOVÉ!</strong> Pri výmene resp. 
                  servise náhradných dielov môžu vzniknúť menšie nerovnosti, medzery medzi spojmi, malé oderky, 
                  znížená citlivosť ovládacích prvkov (tlačidlá ovládania, dotyková plocha).
                </li>
                <li>
                  <strong>Po servise zariadenia nie je garantovaná jeho pôvodná vodeodolnosť.</strong>
                </li>
                <li>
                  Servisné stredisko nenesie žiadnu zodpovednosť za škody, poškodenia zariadenia alebo jeho súčastí, 
                  ktoré môžu vzniknúť pri servise zariadenia v ktorom sa nachádza <strong>nafúknutá alebo inak poškodená batéria</strong>. 
                  Takáto batéria sa môže vznietiť alebo explodovať.
                </li>
                <li>
                  V prípade náhradného dielu <strong>Apple iPhone</strong> (batéria, displej, fotoaparát v závislosti od modelu iPhone) 
                  na zariadeniach značky Apple, sa môže zobrazovať hlásenie: "Nie je možné overiť, či tento iPhone používa 
                  originálny Apple diel (batéria, displej, fotoaparát v závislosti od modelu iPhone)". Tieto správy nijako 
                  neovplyvňujú výkon zariadenia a po 4 dňoch zmiznú z uzamknutej obrazovky a potom budú viditeľné len v Nastaveniach. 
                  Nadobudnutie tejto správy nemá vplyv na výkon zariadenia.
                </li>
              </ol>
            </section>

            <div className="mt-12 text-sm text-slate-500">
              <p>Tieto podmienky sú platné od 1. januára 2024.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
