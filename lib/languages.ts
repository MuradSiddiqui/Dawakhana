export const languages = {
  en: {
    name: 'English',
    code: 'en',
    dir: 'ltr'
  },
  ur: {
    name: 'اردو',
    code: 'ur', 
    dir: 'rtl'
  }
} as const;

export type Language = keyof typeof languages;
