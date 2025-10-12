'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { languages, Language } from '../lib/languages';
import { Globe } from 'lucide-react';

type Props = {
  onLanguageChange?: () => void;
};

export default function LanguageSwitcher({ onLanguageChange }: Props) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (newLanguage: Language, e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLanguage(newLanguage);
    setIsOpen(false);
    // Close the mobile menu if callback is provided
    if (onLanguageChange) {
      onLanguageChange();
    }
  };

  const toggleDropdown = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        onTouchEnd={toggleDropdown}
        className="flex items-center gap-2 px-3 py-3 rounded-lg border border-gray-300 hover:border-rose-400 hover:bg-rose-50 transition-all duration-300 text-sm font-medium text-gray-700 hover:text-rose-700 w-full touch-manipulation"
        aria-label="Language switcher"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="h-4 w-4" />
        <span className="flex-1 text-left">{languages[language].name}</span>
        <svg className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-[9999]">
          <div className="py-2">
            {Object.entries(languages).map(([code, lang]) => (
              <button
                key={code}
                onClick={(e) => handleLanguageChange(code as Language, e)}
                onTouchEnd={(e) => handleLanguageChange(code as Language, e)}
                className={`w-full px-4 py-3 text-left text-sm hover:bg-rose-50 transition-colors touch-manipulation ${
                  language === code 
                    ? 'text-rose-700 font-medium bg-rose-50' 
                    : 'text-gray-700 hover:text-rose-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{lang.name}</span>
                  {language === code && (
                    <svg className="h-4 w-4 text-rose-700" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
