'use client';

import { useState, useEffect } from 'react';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = (type: 'all' | 'essential') => {
    localStorage.setItem('cookie_consent', type);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 right-4 left-4 md:left-auto md:max-w-md bg-slate-900 border border-slate-800 text-slate-300 p-5 rounded-2xl shadow-2xl z-50 flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-white font-semibold text-sm">Nós valorizamos sua privacidade 🍪</h3>
      </div>

      <p className="text-xs text-slate-400 leading-relaxed">
        Utilizamos cookies para garantir o funcionamento básico do site e melhorar sua experiência. Você pode escolher aceitar todos ou apenas os essenciais.
      </p>

      <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800/80">
        <button
          onClick={() => handleConsent('essential')}
          className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 py-2 rounded-full text-xs font-medium transition-colors border border-slate-700"
        >
          Apenas essenciais
        </button>
        <button
          onClick={() => handleConsent('all')}
          className="w-full sm:w-auto bg-sky-400 text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-sky-500 transition-colors"
        >
          Aceitar todos
        </button>
      </div>
    </div>
  );
}