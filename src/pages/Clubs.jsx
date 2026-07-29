import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import clubsData from '../data/clubs.json';
import { Seo } from '../components/Seo';

const FEDERATION_WHATSAPP = '+357 99 621812';

function TeamPhoto({ club }) {
  const photos = club.images && club.images.length > 1 ? club.images : (club.image ? [club.image] : []);
  const [index, setIndex] = useState(0);

  if (photos.length === 0) {
    return (
      <div className="h-48 bg-gradient-to-br from-brand-navy to-brand-dark flex items-center justify-center text-7xl font-black text-white opacity-90">
        {club.name[0]}
      </div>
    );
  }

  return (
    <div className="h-48 bg-brand-dark relative overflow-hidden">
      <img src={photos[index]} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-50" />
      <img src={photos[index]} alt={club.name} className="relative w-full h-full object-contain" />
      {photos.length > 1 && (
        <>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIndex((index - 1 + photos.length) % photos.length); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center text-brand-dark shadow transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIndex((index + 1) % photos.length); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center text-brand-dark shadow transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight size={18} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {photos.map((_, i) => (
              <span key={i} className={`w-1.5 h-1.5 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function Clubs() {
  const { t } = useTranslation();
  return (
    <div className="animate-fade-in py-12 px-4 max-w-7xl mx-auto">
      <Seo
        title={t('clubs_section.seo_title')}
        description={t('clubs_section.seo_description')}
        image="/images/teams/general-1.jpg"
        path="/clubs"
      />
      <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">{t('clubs_section.title_target')} <span className="text-brand-magenta">{t('clubs_section.title_accent')}</span></h1>
      <p className="text-xl text-gray-600 mb-12">{t('clubs_section.subtitle')}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clubsData.map(club => (
          <Card key={club.id} hoverable className="flex flex-col h-full border-t-4 border-t-brand-magenta">
            <TeamPhoto club={club} />
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-brand-dark mb-1">{club.name}</h3>
              <p className="text-brand-magenta font-bold mb-6">{club.city}</p>

              <div className="text-gray-600 space-y-3 mb-8 flex-1 text-base">
                <p><span className="font-semibold text-brand-dark">{t('clubs_section.coach')}</span> {club.coach}</p>
                <p><span className="font-semibold text-brand-dark">{t('clubs_section.schedule')}</span><br/>{club.schedule}</p>
                {club.captain && (
                  <p><span className="font-semibold text-brand-dark">{t('clubs_section.captain')}</span> {club.captain}</p>
                )}
              </div>

              {club.captainPhone && (
                <a
                  href={`https://wa.me/${club.captainPhone.replace(/[\s+]/g, '')}?text=Hello`}
                  target="_blank"
                  rel="noreferrer"
                  className="mb-3 inline-flex items-center justify-center gap-2 text-brand-magenta font-semibold hover:underline"
                >
                  <MessageCircle size={18} /> {t('clubs_section.contact_captain')}
                </a>
              )}

              {club.whatsapp ? (
                <a href={`https://wa.me/${club.whatsapp.replace('+','')}?text=Hello`} target="_blank" rel="noreferrer" className="mt-auto">
                  <Button size="lg" className="w-full">{t('clubs_section.join_whatsapp')}</Button>
                </a>
              ) : (
                <Button size="lg" className="w-full mt-auto opacity-50 cursor-not-allowed" disabled>{t('clubs_section.join_whatsapp')}</Button>
              )}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-20 bg-gray-50 rounded-xl shadow-sm p-10 md:p-14 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4 tracking-tight">{t('recruitment.title')}</h2>
        <p className="text-lg text-gray-600 mb-8">{t('recruitment.text')}</p>
        <a
          href={`https://wa.me/${FEDERATION_WHATSAPP.replace(/[\s+]/g, '')}?text=Hello`}
          target="_blank"
          rel="noreferrer"
          className="inline-block"
        >
          <Button size="lg" className="px-10">{t('recruitment.cta')}</Button>
        </a>
      </div>
    </div>
  );
}
