import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';

export default function FooterRu() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isRuPage = location.pathname.startsWith('/ru');
  
  const quickLinks = [
    { label: 'Услуги', hash: '#uslugi' },
    { label: 'Цены', hash: '#cennik' },
    { label: 'Контакт', hash: '#kontakt' }
  ];

  const handleQuickLinkClick = (hash: string) => {
    if (isRuPage) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="o-nas" className="bg-slate-900 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} alt="Iršava tech логотип" className="h-9 w-auto brightness-0 invert" />
              <span className="font-oswald text-lg tracking-wide">
                <span className="text-white">IRŠAVA</span>{' '}
                <span className="text-blue-400">TECH</span>
              </span>
            </div>
            <div className="text-slate-400 leading-relaxed space-y-1">
              <p>Stanislav Zavydniak</p>
              <p>Karpatské námestie 7770/10A,</p>
              <p>831 06 Братислава</p>
              <p>IČO: 53788656 DIČ: 3120946994</p>
              <p>Не является плательщиком НДС.</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Быстрые ссылки</h4>
            <nav className="space-y-3">
              {quickLinks.map(link => 
                isRuPage ? (
                  <a 
                    key={link.label} 
                    href={link.hash} 
                    onClick={(e) => {
                      e.preventDefault();
                      handleQuickLinkClick(link.hash);
                    }} 
                    className="block text-slate-400 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link 
                    key={link.label} 
                    to={`/ru${link.hash}`} 
                    className="block text-slate-400 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link to="/servisne-podmienky" className="block text-slate-400 hover:text-primary-foreground transition-colors">
                Условия сервиса
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Контакт</h4>
            <div className="space-y-4">
              <a href="tel:+421952240671" className="flex items-center gap-3 text-slate-400 hover:text-primary-foreground transition-colors">
                <Phone className="w-5 h-5" />
                <span>+421 952 240 671</span>
              </a>
              <a href="mailto:servis@irsava-tech.sk" className="flex items-center gap-3 text-slate-400 hover:text-primary-foreground transition-colors">
                <Mail className="w-5 h-5" />
                <span>servis@irsava-tech.sk</span>
              </a>
              <a href="https://maps.app.goo.gl/2KfzyhRo3TKoRQSt8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-primary-foreground transition-colors">
                <MapPin className="w-5 h-5" />
                <span>Račianske mýto 1D, Братислава</span>
              </a>
              <a href="https://www.instagram.com/irsava.tech?igsh=MXQxNW1zaTV0cmx4Yw==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
                <span>irsava.tech</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} Iršava tech. Все права защищены.
            </p>
            <p className="text-slate-500 text-sm">
              Сервис электроники в Братиславе
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
