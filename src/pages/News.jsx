import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import newsData from '../data/news.json';
import { getLocalizedName } from '../utils/teamName';
import { Seo, SITE_URL } from '../components/Seo';

function NewsPhotos({ item, title }) {
  const photos = item.images && item.images.length > 1 ? item.images : (item.image ? [item.image] : []);
  const [index, setIndex] = useState(0);

  if (photos.length === 0) return null;

  return (
    <div className="h-64 md:h-80 bg-brand-dark relative overflow-hidden">
      <img src={photos[index]} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-50" />
      <img src={photos[index]} alt={`${title} — photo ${index + 1}`} className="relative w-full h-full object-contain" />
      {photos.length > 1 && (
        <>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIndex((index - 1 + photos.length) % photos.length); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center text-brand-dark shadow transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIndex((index + 1) % photos.length); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center text-brand-dark shadow transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight size={20} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {photos.map((_, i) => (
              <span key={i} className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function News() {
  const { t, i18n } = useTranslation();
  const sorted = [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date));
  const langMap = { el: 'el-GR', ru: 'ru-RU', en: 'en-US' };
  const locale = langMap[i18n.language] || 'en-US';

  const newsSchemas = sorted.map((item) => {
    const headline = getLocalizedName(item, i18n.language, 'title');
    const images = item.images && item.images.length
      ? item.images.map((img) => `${SITE_URL}${img}`)
      : (item.image ? [`${SITE_URL}${item.image}`] : []);

    return {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": headline,
      "datePublished": item.date,
      "image": images,
      "author": {
        "@type": "Person",
        "name": item.author || "Cyprus Catch'n Serve Ball Federation"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Cyprus Catch'n Serve Ball Federation",
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/president.jpeg`
        }
      }
    };
  });

  return (
    <div className="animate-fade-in py-12 px-4 max-w-4xl mx-auto">
      <Seo
        title={t('news.seo_title')}
        description={t('news.seo_description')}
        image="/images/news/beach-games/beach-games-1.jpg"
        path="/news"
        jsonLd={newsSchemas}
      />
      <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">{t('news.title')}</h1>
      <p className="text-xl text-gray-600 mb-12">{t('news.latest_subtitle')}</p>

      <div className="space-y-10">
        {sorted.map((item) => {
          const title = getLocalizedName(item, i18n.language, 'title');
          const body = getLocalizedName(item, i18n.language, 'body') || getLocalizedName(item, i18n.language, 'summary');
          const category = getLocalizedName(item, i18n.language, 'category');
          const date = new Date(item.date);

          return (
            <Card key={item.id} className="overflow-hidden">
              <NewsPhotos item={item} title={title} />
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  {category && (
                    <span className="text-xs font-bold uppercase tracking-wider text-white bg-brand-magenta px-3 py-1 rounded-full">
                      {category}
                    </span>
                  )}
                  <span className="text-sm text-gray-500">{date.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">{title}</h2>
                {body && (
                  <div className="text-gray-600 text-lg leading-relaxed space-y-4 whitespace-pre-line">
                    {body}
                  </div>
                )}
                {(item.author || item.phone) && (
                  <p className="mt-6 text-sm text-gray-500">
                    {t('news.contact')}: {item.author}{item.author && item.phone ? ' — ' : ''}{item.phone}
                  </p>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
