import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './Button';

export function ContactForm() {
  const [result, setResult] = useState("");
  const { t } = useTranslation();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("...");
    const formData = new FormData(event.target);
    const accessKey = "dad877da-13be-49ba-ab1b-97fe51504327";
    formData.append("access_key", accessKey);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      setResult(t('footer.contact_success'));
      event.target.reset();
    } else {
      setResult(t('footer.contact_error'));
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <input type="text" name="name" placeholder={t('footer.contact_name')} required className="w-full p-3 rounded-xl border-none focus:ring-2 focus:ring-fuchsia-accent bg-white/10 text-white placeholder-gray-400" />
      <input type="email" name="email" placeholder={t('footer.contact_email')} required className="w-full p-3 rounded-xl border-none focus:ring-2 focus:ring-fuchsia-accent bg-white/10 text-white placeholder-gray-400" />
      <textarea name="message" placeholder={t('footer.contact_msg')} required className="w-full p-3 rounded-xl border-none min-h-[100px] focus:ring-2 focus:ring-fuchsia-accent bg-white/10 text-white placeholder-gray-400"></textarea>
      <Button type="submit" className="w-full py-3 shadow-none bg-fuchsia-accent hover:bg-fuchsia-600 border-0 text-white font-bold">{t('footer.contact_btn')}</Button>
      <span className="text-sm font-semibold text-center mt-1 text-fuchsia-light">{result}</span>
    </form>
  );
}
