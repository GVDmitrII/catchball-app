import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    { name: t('navbar.about'), path: '/#about' },
    { name: t('navbar.clubs'), path: '/clubs' },
    { name: t('navbar.standings'), path: '/standings' },
    { name: t('navbar.events'), path: '/events' },
    { name: t('navbar.rules'), path: '/rules' },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-magenta rounded-full flex items-center justify-center text-white font-bold text-xl">
                C&S
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-gray-600 hover:text-brand-magenta font-bold transition-colors text-lg"
              >
                {link.name}
              </Link>
            ))}
            <LanguageSwitcher />
            <Link to="/clubs"><Button variant="primary" size="md">{t('navbar.join_btn')}</Button></Link>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand-magenta focus:outline-none transition-colors"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-4 pb-6 space-y-2 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-4 py-3 rounded-xl text-lg font-bold text-brand-dark hover:text-brand-magenta hover:bg-fuchsia-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link to="/clubs"><Button variant="primary" className="w-full">{t('navbar.join_btn')}</Button></Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
