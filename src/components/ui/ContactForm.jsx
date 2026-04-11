import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './Button';

export function ContactForm() {
  const [status, setStatus] = useState('');
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setStatus('success');
      e.target.reset();
    } else {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input type="text" name="name" placeholder={t('footer.contact_name')} required className="w-full p-3 rounded-xl border-none focus:ring-2 focus:ring-brand-magenta bg-white/10 text-white placeholder-gray-400" />
      <input type="email" name="email" placeholder={t('footer.contact_email')} required className="w-full p-3 rounded-xl border-none focus:ring-2 focus:ring-brand-magenta bg-white/10 text-white placeholder-gray-400" />
      <textarea name="message" placeholder={t('footer.contact_msg')} required className="w-full p-3 rounded-xl border-none min-h-[100px] focus:ring-2 focus:ring-brand-magenta bg-white/10 text-white placeholder-gray-400"></textarea>
      <label className="flex items-start gap-2 cursor-pointer">
        <input type="checkbox" name="gdpr" required className="mt-1 accent-brand-magenta" />
        <span
          className="text-xs text-brand-dark [&_a]:underline [&_a]:text-brand-sky"
          dangerouslySetInnerHTML={{ __html: t('gdpr.consent_label') }}
        />
      </label>
      <p className="text-xs text-gray-400 -mt-1">{t('gdpr.consent_required')}</p>
      <Button type="submit" disabled={status === 'sending'} className="w-full py-3 shadow-none bg-brand-magenta hover:bg-fuchsia-600 border-0 text-white font-bold">
        {t('footer.contact_btn')}
      </Button>
      {status === 'success' && <span className="text-sm font-semibold text-center mt-1 text-brand-sky">{t('footer.contact_success')}</span>}
      {status === 'error' && <span className="text-sm font-semibold text-center mt-1 text-red-400">{t('footer.contact_error')}</span>}
    </form>
  );
}
