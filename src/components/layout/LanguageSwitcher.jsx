import React from 'react';
import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const getButtonClass = (lng) => {
    return `px-2 py-1 text-sm font-bold rounded transition-colors ${i18n.language === lng ? 'bg-fuchsia-accent text-white shadow-sm' : 'text-gray-500 hover:text-deep-navy'}`;
  };

  return (
    <div className="flex gap-1 items-center bg-gray-100/80 rounded-lg p-1 mr-4">
      <button onClick={() => changeLanguage('en')} className={getButtonClass('en')}>EN</button>
      <button onClick={() => changeLanguage('el')} className={getButtonClass('el')}>EL</button>
      <button onClick={() => changeLanguage('ru')} className={getButtonClass('ru')}>RU</button>
    </div>
  );
}
