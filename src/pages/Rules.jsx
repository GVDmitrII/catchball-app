import React from 'react';
import { Card } from '../components/ui/Card';
import { Download } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useTranslation } from 'react-i18next';

export function Rules() {
  const { t } = useTranslation();
  return (
    <div className="animate-fade-in py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold text-deep-navy mb-4 tracking-tight">{t('rules_page.title_target')}<span className="text-fuchsia-accent">{t('rules_page.title_accent')}</span></h1>
      <p className="text-xl text-gray-600 mb-12">{t('rules_page.subtitle')}</p>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
        <Card className="p-8 sm:p-10 border-l-4 border-l-fuchsia-accent">
          <h2 className="text-2xl font-bold text-deep-navy mb-6">{t('rules_page.h2_diff')}</h2>
          <ul className="list-none space-y-4">
            <li className="flex items-start">
              <span className="text-fuchsia-accent mr-3 mt-1">✔</span>
              <span dangerouslySetInnerHTML={{ __html: t('rules_page.diff_1_html') }}></span>
            </li>
            <li className="flex items-start">
              <span className="text-fuchsia-accent mr-3 mt-1">✔</span>
              <span>{t('rules_page.diff_2')}</span>
            </li>
            <li className="flex items-start">
              <span className="text-fuchsia-accent mr-3 mt-1">✔</span>
              <span>{t('rules_page.diff_3')}</span>
            </li>
            <li className="flex items-start">
              <span className="text-fuchsia-accent mr-3 mt-1">✔</span>
              <span>{t('rules_page.diff_4')}</span>
            </li>
            <li className="flex items-start">
              <span className="text-fuchsia-accent mr-3 mt-1">✔</span>
              <span>{t('rules_page.diff_5')}</span>
            </li>
          </ul>
        </Card>

        <Card className="p-8 sm:p-10 bg-fuchsia-50 border-0 shadow-none">
          <h2 className="text-2xl font-bold text-deep-navy mb-4">{t('rules_page.h2_ethics')}</h2>
          <p className="mb-4 text-deep-navy/80">{t('rules_page.ethics_desc')}</p>
          <ul className="list-disc pl-6 space-y-2 text-deep-navy/80">
            <li>{t('rules_page.ethics_1')}</li>
            <li>{t('rules_page.ethics_2')}</li>
            <li>{t('rules_page.ethics_3')}</li>
          </ul>
        </Card>

        <div className="flex flex-col sm:flex-row items-center justify-between bg-deep-navy rounded-[20px] p-8 sm:p-10 text-white shadow-xl mt-12">
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h3 className="text-3xl font-extrabold mb-2 text-white">{t('rules_page.docs_title')}</h3>
            <p className="text-gray-300">{t('rules_page.docs_desc')}</p>
          </div>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-deep-navy w-full sm:w-auto">
            <Download className="w-5 h-5 mr-2" /> {t('rules_page.btn_download')}
          </Button>
        </div>
      </div>
    </div>
  );
}
