import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="o-nas" className="bg-slate-900 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} alt="Iršava tech logo" className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-slate-400 leading-relaxed">
              Profesionálny servis mobilov a notebookov v Bratislave. Špecializujeme sa na komplexné opravy, ktoré iní nezvládajú.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Rýchle odkazy</h4>
            <nav className="space-y-3">
              {['Služby', 'Cenník', 'Kontakt'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace('í', 'i')}`}
                  className="block text-slate-400 hover:text-primary-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
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
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5" />
                <span>Bratislava, Slovensko</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} Iršava tech. Všetky práva vyhradené.
            </p>
            <p className="text-slate-500 text-sm">
              Servis elektroniky v Bratislave
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
