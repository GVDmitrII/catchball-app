import React from 'react';
import { Card } from '../components/ui/Card';
import { useTranslation } from 'react-i18next';
import eventsData from '../data/events.json';

export function Events() {
  const { t, i18n } = useTranslation();
  return (
    <div className="animate-fade-in py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">{t('events_page.title_target')} <span className="text-brand-magenta">{t('events_page.title_accent')}</span></h1>
      <p className="text-xl text-gray-600 mb-12">{t('events_page.subtitle')}</p>

      <div className="space-y-6">
        {eventsData.map(event => {
          const date = new Date(event.date);
          const langMap = { 'el': 'el-GR', 'ru': 'ru-RU', 'en': 'en-US' };
          const locale = langMap[i18n.language] || 'en-US';
          const month = date.toLocaleString(locale, { month: 'short' });
          const day = date.getDate();
          const time = date.toLocaleString(locale, { hour: '2-digit', minute:'2-digit' });
          
          return (
            <Card key={event.id} className="flex flex-col md:flex-row overflow-hidden hover:shadow-lg transition-all duration-300">
               <div className="bg-brand-magenta text-white p-6 md:w-56 flex flex-col justify-center items-center text-center">
                <span className="text-sm uppercase font-bold tracking-wider">{month}</span>
                <span className="text-6xl font-black my-2">{day}</span>
                <span className="text-fuchsia-100 font-semibold text-lg">{time}</span>
              </div>
              <div className="p-8 md:p-10 flex-1 flex flex-col justify-center bg-white">
                <div className={`text-xs font-bold uppercase tracking-wider mb-3 ${event.type === 'match' ? 'text-brand-magenta' : 'text-blue-600'}`}>
                  {event.type === 'match' ? t('events_page.type_match') : t('events_page.type_training')}
                </div>
                <h3 className="text-3xl font-bold text-brand-dark mb-4">{event.title}</h3>
                <p className="text-gray-600 flex items-center text-lg">
                  <span className="mr-3 text-xl">📍</span> {event.location}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
