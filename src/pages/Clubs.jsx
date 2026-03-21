import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useTranslation } from 'react-i18next';
import clubsData from '../data/clubs.json';

export function Clubs() {
  const { t } = useTranslation();
  return (
    <div className="animate-fade-in py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold text-deep-navy mb-4 tracking-tight">{t('clubs_section.title_target')} <span className="text-fuchsia-accent">{t('clubs_section.title_accent')}</span></h1>
      <p className="text-xl text-gray-600 mb-12">{t('clubs_section.subtitle')}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clubsData.map(club => (
          <Card key={club.id} hoverable className="flex flex-col h-full border-t-4 border-t-fuchsia-accent">
            <div className="h-48 bg-gray-100 flex items-center justify-center text-7xl font-black text-white bg-gradient-to-br from-[#1a365d] to-[#0A192F] opacity-90">
              {club.city[0]}
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-deep-navy mb-1">{club.name}</h3>
              <p className="text-fuchsia-accent font-bold mb-6">{club.city}</p>
              
              <div className="text-gray-600 space-y-3 mb-8 flex-1 text-base">
                <p><span className="font-semibold text-deep-navy">{t('clubs_section.coach')}</span> {club.coach}</p>
                <p><span className="font-semibold text-deep-navy">{t('clubs_section.schedule')}</span><br/>{club.schedule}</p>
              </div>
              
              <a href={`https://wa.me/${club.whatsapp.replace('+','')}?text=Hello`} target="_blank" rel="noreferrer" className="mt-auto">
                <Button size="lg" className="w-full">{t('clubs_section.join_whatsapp')}</Button>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
