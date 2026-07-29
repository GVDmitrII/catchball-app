import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useTranslation } from 'react-i18next';
import { Seo } from '../components/Seo';

const FEDERATION_PHONE = '+357 99 621812';
const WHATSAPP_DIGITS = FEDERATION_PHONE.replace(/[\s+]/g, '');
const TEL_DIGITS = FEDERATION_PHONE.replace(/\s/g, '');

export function Sponsors() {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in">
      <Seo
        title={t('sponsorsPage.seo_title')}
        description={t('sponsorsPage.seo_description')}
        image="/gallery/photo-07.jpeg"
        path="/sponsors"
      />

      {/* HERO */}
      <section className="relative bg-brand-dark text-white py-24 px-4 text-center overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.span
            initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}
            className="inline-block py-1 px-3 rounded-full bg-brand-gold/20 text-brand-gold font-bold text-sm tracking-wider mb-6 uppercase"
          >
            {t('sponsorsPage.kicker')}
          </motion.span>
          <motion.h1
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight leading-tight"
          >
            {t('sponsorsPage.title')}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t('sponsorsPage.subtitle')}
          </motion.p>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <a href={`https://wa.me/${WHATSAPP_DIGITS}?text=Hello`} target="_blank" rel="noreferrer">
              <Button size="lg" className="shadow-brand text-lg">{t('sponsorsPage.cta_whatsapp')}</Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* WHAT YOUR BRAND GETS */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">{t('sponsorsPage.cards_title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('sponsorsPage.cards_subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t('sponsorsPage.card1_title'), text: t('sponsorsPage.card1_text') },
              { title: t('sponsorsPage.card2_title'), text: t('sponsorsPage.card2_text') },
              { title: t('sponsorsPage.card3_title'), text: t('sponsorsPage.card3_text') },
            ].map((card, i) => (
              <Card key={card.title} className="p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                <div className="w-10 h-10 rounded-full bg-brand-magenta text-white font-extrabold flex items-center justify-center mb-5">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{card.title}</h3>
                <p className="text-gray-600">{card.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT A TEAM */}
      <section className="bg-brand-dark text-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">{t('sponsorsPage.team_title')}</h2>
            <p className="text-xl text-gray-300 max-w-2xl">{t('sponsorsPage.team_subtitle')}</p>
          </motion.div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <li key={n} className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-sm bg-brand-gold mt-2 shrink-0" />
                <span className="text-lg text-gray-100">{t(`sponsorsPage.bullet${n}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* LET'S TALK CTA */}
      <section className="bg-white py-24 px-4 text-center border-t-4 border-brand-magenta">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">{t('sponsorsPage.talk_title')}</h2>
          <p className="text-lg text-gray-600 mb-10">{t('sponsorsPage.talk_subtitle')}</p>

          <a href={`tel:${TEL_DIGITS}`} className="block text-4xl md:text-5xl font-black text-brand-dark mb-3 hover:text-brand-magenta transition-colors">
            {FEDERATION_PHONE}
          </a>
          <p className="text-gray-500 mb-10">{t('sponsorsPage.talk_note')}</p>

          <a href={`https://wa.me/${WHATSAPP_DIGITS}?text=Hello`} target="_blank" rel="noreferrer" className="inline-block">
            <Button size="lg" className="px-10">{t('sponsorsPage.cta_whatsapp')}</Button>
          </a>
        </div>
      </section>
    </div>
  );
}
