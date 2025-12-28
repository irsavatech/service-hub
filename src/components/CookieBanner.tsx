import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      // Small delay for smooth appearance
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm animate-in slide-in-from-right-full duration-500">
      <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors"
          aria-label="Zatvoriť"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="flex items-start gap-4">
          <div className="bg-primary/20 rounded-lg p-2.5 flex-shrink-0">
            <Cookie className="w-6 h-6 text-primary" />
          </div>
          
          <div className="flex-1 pr-4">
            <h3 className="text-white font-semibold text-sm mb-1.5">
              Súbory cookie
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Táto stránka používa súbory cookie na zlepšenie vášho zážitku z prehliadania.
            </p>
            
            <Button 
              onClick={handleAccept}
              size="sm"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            >
              Prijať
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
