import { ANTHROPIC_CERTIFICATES } from '../ai-expert/certificates';
import { SITE_NAME, SITE_URL } from './seo.service';

const PERSON_ID = `${SITE_URL}/#person`;

/** schema.org graph for the landing page: who the site is about, so search engines can build an entity for him. */
export const HOME_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      inLanguage: 'pl-PL',
      about: { '@id': PERSON_ID },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}/#profile`,
      url: `${SITE_URL}/`,
      mainEntity: { '@id': PERSON_ID },
    },
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/assets/man_icon.png`,
      jobTitle: 'Programista full-stack i AI',
      description:
        'Programista full-stack z Poznania pracujący na co dzień z narzędziami sztucznej inteligencji (Claude, LLM). Angular, TypeScript, Java EE.',
      telephone: '+48697083364',
      address: { '@type': 'PostalAddress', addressLocality: 'Poznań', addressCountry: 'PL' },
      knowsAbout: [
        'Sztuczna inteligencja',
        'Artificial Intelligence',
        'Duże modele językowe (LLM)',
        'Asystenci kodowania AI',
        'Claude',
        'Angular',
        'TypeScript',
        'Java EE',
        'Vue.js',
        'Tailwind CSS',
      ],
      hasCredential: ANTHROPIC_CERTIFICATES.map((certificate) => ({
        '@type': 'EducationalOccupationalCredential',
        name: certificate.title,
        credentialCategory: 'certificate',
        recognizedBy: { '@type': 'Organization', name: 'Anthropic' },
        url: certificate.verifyUrl,
      })),
      sameAs: [
        'https://www.linkedin.com/in/amadeusz-lewandowsk/',
        'https://github.com/AmadeuszLew',
        'https://www.facebook.com/amadeusz.lewandowski.5/',
      ],
    },
  ],
};
