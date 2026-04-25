import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone } from 'lucide-react';
import { ContactForm } from '../ui/ContactForm';

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-brand-dark text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-extrabold text-brand-magenta mb-4 tracking-tight">{t('org_name')}</h3>
            <p className="text-gray-300 mb-4 max-w-sm">
              {t('footer.desc')}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">{t('footer.nav_title')}</h4>
            <ul className="space-y-2">
              <li><Link to="/clubs" className="text-gray-300 hover:text-white transition-colors">{t('navbar.clubs')}</Link></li>
              <li><Link to="/standings" className="text-gray-300 hover:text-white transition-colors">{t('navbar.standings')}</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-white transition-colors">{t('navbar.events')}</Link></li>
              <li><Link to="/rules" className="text-gray-300 hover:text-white transition-colors">{t('navbar.rules')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">{t('footer.contact_title')}</h4>
            <a
              href="tel:+35799621812"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-4"
            >
              <Phone size={16} className="text-brand-magenta shrink-0" />
              {t('footer.phone')}
            </a>
            <ContactForm />
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {t('org_name')}. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-xs text-white/50">
            Designed &amp; developed by{' '}
            <a
              href="https://www.olisandra.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-magenta hover:text-brand-gold transition-colors"
            >
              Olisandra Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
