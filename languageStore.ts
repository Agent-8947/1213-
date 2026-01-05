import { create } from 'zustand';
import { dictionary, Language, TranslationKey } from './dictionary';

interface LanguageStore {
  currentLang: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

export const useLanguageStore = create<LanguageStore>((set, get) => ({
  currentLang: 'en',
  
  setLanguage: (lang: Language) => {
    set({ currentLang: lang });
  },
  
  t: (key: TranslationKey): string => {
    const { currentLang } = get();
    return dictionary[currentLang]?.[key] || dictionary['en'][key] || key;
  },
}));
