import { Link, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLang: 'sk' | 'ru';
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const location = useLocation();
  
  const getAlternateUrl = () => {
    if (currentLang === 'sk') {
      // Slovak -> Russian
      if (location.pathname === '/') return '/ru';
      if (location.pathname === '/price') return '/cena';
      return '/ru';
    } else {
      // Russian -> Slovak
      if (location.pathname === '/ru') return '/';
      if (location.pathname === '/cena') return '/price';
      return '/';
    }
  };

  return (
    <div className="flex items-center gap-1 bg-slate-100 rounded-full p-1">
      <Link
        to={currentLang === 'sk' ? location.pathname : getAlternateUrl()}
        className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
          currentLang === 'sk'
            ? 'bg-white text-slate-900 shadow-sm'
            : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        SK
      </Link>
      <Link
        to={currentLang === 'ru' ? location.pathname : getAlternateUrl()}
        className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
          currentLang === 'ru'
            ? 'bg-white text-slate-900 shadow-sm'
            : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        RU
      </Link>
    </div>
  );
}
