import React from 'react';
import { useLanguageStore } from './languageStore';
import { Language } from './dictionary';

const LANGUAGE_NAMES: Record<Language, { name: string; flag: string }> = {
  en: { name: 'English', flag: '🇬🇧' },
  ru: { name: 'Русский', flag: '🇷🇺' },
  uk: { name: 'Українська', flag: '🇺🇦' },
  de: { name: 'Deutsch', flag: '🇩🇪' },
  fr: { name: 'Français', flag: '🇫🇷' },
  es: { name: 'Español', flag: '🇪🇸' },
  it: { name: 'Italiano', flag: '🇮🇹' },
  zh: { name: '中文', flag: '🇨🇳' },
};

export const LanguageSelector: React.FC = () => {
  const { currentLang, setLanguage } = useLanguageStore();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as Language);
  };

  return (
    <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 9999 }}>
      <select
        value={currentLang}
        onChange={handleChange}
        style={{
          padding: '8px 12px',
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          minWidth: '140px',
          color: 'white',
        }}
      >
        {(Object.keys(LANGUAGE_NAMES) as Language[]).map((lang) => (
          <option key={lang} value={lang} style={{ color: '#000' }}>
            {LANGUAGE_NAMES[lang].flag} {LANGUAGE_NAMES[lang].name}
          </option>
        ))}
      </select>
    </div>
  );
};
