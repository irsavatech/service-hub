import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const quickLinks = [{
    label: 'Služby',
    hash: '#sluzby'
  }, {
    label: 'Cenník',
    hash: '#cennik'
  }, {
    label: 'Kontakt',
    hash: '#kontakt'
  }];
  const handleQuickLinkClick = (hash: string) => {
    if (isHomePage) {
      // On home page, just scroll to section
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
    // If not on home page, Link will navigate to /{hash} and then scroll
  };
  return <footer id="o-nas" className="bg-slate-900 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} alt="Iršava tech logo" className="h-9 w-auto brightness-0 invert" />
              <span className="font-oswald text-lg tracking-wide">
                <span className="text-white">IRŠAVA</span>{' '}
                <span className="text-blue-400">TECH</span>
              </span>
            </div>
            <div className="text-slate-400 leading-relaxed space-y-1">
              <p>Stanislav Zavydniak</p>
              <p>Karpatské námestie 7770/10A,</p>
              <p>831 06 Bratislava</p>
              <p>IČO: 53788656 DIČ: 3120946994</p>
              <p>Nie je platiteľ DPH.</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Rýchle odkazy</h4>
            <nav className="space-y-3">
              {quickLinks.map(link => isHomePage ? <a key={link.label} href={link.hash} onClick={e => {
              e.preventDefault();
              handleQuickLinkClick(link.hash);
            }} className="block text-slate-400 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </a> : <Link key={link.label} to={`/${link.hash}`} className="block text-slate-400 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>)}
              <Link to="/servisne-podmienky" className="block text-slate-400 hover:text-primary-foreground transition-colors">
                Servisné podmienky
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Kontakt</h4>
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
                <span>Račianske mýto 1D, Bratislava</span>
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
              © {currentYear} Iršava tech. Všetky práva vyhradené.
            </p>
            <p className="text-slate-500 text-sm">
              Servis elektroniky v Bratislave | Made by{' '}
              <a 
                href="https://vlad-weby.sk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                vlad-weby.sk
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>;
}
