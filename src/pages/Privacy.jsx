import React from 'react';

export default function Privacy() {
  return (
    <div className="animate-fade-in py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-2 tracking-tight">
        Privacy Policy
      </h1>
      <p className="text-lg text-gray-500 mb-2">Политика конфиденциальности / Πολιτική Απορρήτου</p>
      <p className="text-sm text-gray-400 mb-12">Russian and Greek versions coming soon.</p>

      <div className="space-y-10 text-brand-dark">

        <section>
          <h2 className="text-2xl font-bold text-brand-magenta mb-3">1. Data Controller</h2>
          <p className="text-gray-700 leading-relaxed">
            CYPRUS CATCH'N SERVE BALL FEDERATION, Cyprus.<br />
            Email: <a href="mailto:contact@catchballcyprus.com" className="text-brand-magenta underline">contact@catchballcyprus.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-magenta mb-3">2. What Data We Collect</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            We collect only the data you voluntarily submit through the contact form on this website:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number (if provided)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-2">
            No data is collected automatically beyond anonymized analytics (see Section 6).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-magenta mb-3">3. Purpose of Processing</h2>
          <p className="text-gray-700 leading-relaxed">
            The data you submit is used solely to respond to your membership inquiries and to provide
            information about CYPRUS CATCH'N SERVE BALL FEDERATION clubs, events, and activities.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-magenta mb-3">4. Legal Basis</h2>
          <p className="text-gray-700 leading-relaxed">
            Processing is based on your freely given consent in accordance with{' '}
            <strong>GDPR Article 6(1)(a)</strong>. You may withdraw your consent at any time by
            contacting us at the email address above.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-magenta mb-3">5. Data Retention</h2>
          <p className="text-gray-700 leading-relaxed">
            Personal data submitted via the contact form is retained for a maximum of{' '}
            <strong>12 months</strong> from the date of submission, after which it is securely deleted.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-magenta mb-3">6. Third-Party Services</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Google Analytics</strong> — used to understand how visitors interact with our
              website. IP addresses are anonymized. Data is processed by Google LLC in accordance with
              their Privacy Policy. Analytics is only loaded after you accept cookies.
            </li>
            <li>
              <strong>Web3Forms</strong> — used to process contact form submissions. Data submitted
              through the form is transmitted to Web3Forms servers. See their privacy policy at{' '}
              <a href="https://web3forms.com/privacy" target="_blank" rel="noreferrer" className="text-brand-magenta underline">
                web3forms.com/privacy
              </a>.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-magenta mb-3">7. Your Rights</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            Under the GDPR, you have the following rights regarding your personal data:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li><strong>Right of access</strong> — request a copy of your data</li>
            <li><strong>Right to rectification</strong> — request correction of inaccurate data</li>
            <li><strong>Right to erasure</strong> — request deletion of your data ("right to be forgotten")</li>
            <li>
              <strong>Right to lodge a complaint</strong> — you may file a complaint with the{' '}
              <a
                href="https://www.dataprotection.gov.cy"
                target="_blank"
                rel="noreferrer"
                className="text-brand-magenta underline"
              >
                Commissioner for Personal Data Protection of Cyprus
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-magenta mb-3">8. Contact</h2>
          <p className="text-gray-700 leading-relaxed">
            For any questions or requests regarding your personal data, please contact us at:{' '}
            <a href="mailto:contact@catchballcyprus.com" className="text-brand-magenta underline">
              contact@catchballcyprus.com
            </a>
          </p>
        </section>

        <p className="text-sm text-gray-400 pt-6 border-t border-gray-100">
          Last updated: April 2026
        </p>

      </div>
    </div>
  );
}
