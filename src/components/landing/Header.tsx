import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import logo from '@/assets/logo.png';

const servicePages = [
  { label: 'Výmena displeja', href: '/vymena-displeja' },
  { label: 'Oprava nabíjania', href: '/oprava-nabijania' },
  { label: 'Diagnostika notebooku', href: '/diagnostika-notebooku' },
  { label: 'Odvírovanie počítača', href: '/odvirovanie-pocitaca' },
  { label: 'Čistenie od prachu', href: '/cistenie-od-prachu' },
  { label: 'Výmena pasty', href: '/vymena-teplovodivej-pasty' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Cenník', href: '/price', isRoute: true },
    { label: 'O nás', href: '#o-nas' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-slate-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link 
            to="/" 
            className="flex items-center gap-2"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src={logo} alt="Iršava tech logo" className="h-9 w-auto" />
            <span className="font-oswald text-lg tracking-wide">
              <span className="text-slate-900">IRŠAVA</span>{' '}
              <span className="text-blue-700">TECH</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors flex items-center gap-1 outline-none">
                Služby
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {servicePages.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link to={service.href} className="cursor-pointer">
                      {service.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            {navItems.map((item) => 
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full" />
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full" />
                </a>
              )
            )}
          </nav>

          <a href="tel:+421952240671" className="hidden md:block">
            <Button className="bg-orange-600 hover:bg-orange-700 text-primary-foreground font-medium px-5 py-2.5 rounded-full shadow-lg shadow-orange-600/20 transition-all hover:shadow-xl hover:shadow-orange-600/30 hover:-translate-y-0.5">
              <Phone className="w-4 h-4 mr-2" />
              Zavolať teraz
            </Button>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-background border-t border-slate-100"
      >
        <nav className="px-4 py-4 space-y-2">
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="w-full flex items-center justify-between py-3 px-4 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
          >
            Služby
            <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileServicesOpen && (
            <div className="pl-4 space-y-1">
              {servicePages.map((service) => (
                <Link
                  key={service.href}
                  to={service.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 px-4 text-slate-600 text-sm rounded-lg hover:bg-slate-50 transition-colors"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          )}
          {navItems.map((item) => 
            item.isRoute ? (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-4 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-4 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
              >
                {item.label}
              </a>
            )
          )}
        </nav>
      </motion.div>
    </motion.header>
  );
}
