import React from 'react';
import { Viewer } from './components/Viewer';
import { LanguageSelector } from './LanguageSelector';
import { useLanguageStore } from './languageStore';

export default function App() {
  const { t } = useLanguageStore(); // Initialize connection

  return (
    <>
      <LanguageSelector />
      <Viewer />
    </>
  );
}
