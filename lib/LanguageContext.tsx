'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, languages } from './languages';
import { translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && languages[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Save language to localStorage
    localStorage.setItem('language', language);
    
    // Apply appropriate font and direction to body
    const body = document.body;
    const html = document.documentElement;
    
    if (language === 'ur' || language === 'sd') {
      body.classList.add('font-urdu');
      body.dir = 'rtl';
      html.dir = 'rtl';
      html.lang = language === 'ur' ? 'ur' : 'sd';
    } else {
      body.classList.remove('font-urdu');
      body.dir = 'ltr';
      html.dir = 'ltr';
      html.lang = 'en';
    }
  }, [language]);

  const isRTL = languages[language].dir === 'rtl';

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
