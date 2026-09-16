import Hero from '@/app/_components/hero';
import Vision from '@/app/_components/vision';
import Beliefs from '@/app/_components/beliefs';
import Products from '@/app/_components/products';
import Culture from '@/app/_components/culture';
import Partners from '@/app/_components/partners';
import { StructuredData } from '@/components/StructuredData';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'InternetCompany',
  name: 'Itering',
  url: 'https://itering.com/',
  logo: 'https://itering.com/images/favicon/favicon512.png',
  description: 'RESEARCH. BUILD. DEPLOY. THE AI NATIVE FUTURE',
  sameAs: ['https://x.com/itering_io', 'https://github.com/itering'],
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://itering.com/'
  },
  potentialAction: {
    '@type': 'ReadAction',
    target: [
      {
        '@type': 'ContactPoint',
        email: 'contact@itering.com',
        name: 'CONTACT US'
      }
    ]
  },
  slogan: 'RESEARCH. BUILD. DEPLOY. THE AI NATIVE FUTURE',
  knowsAbout: ['AI Native', 'AI workflows', 'Forward-Deployed Engineering', 'AI agents'],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: 'Hast AIP', url: 'https://hast.so/' }
    },
    {
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: 'Hast FDE', url: 'https://hast.so/en/fde' }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'SoftwareApplication',
        name: 'Hast Agent',
        url: 'https://hast.so/en/agent'
      }
    }
  ],
  brand: {
    '@type': 'Brand',
    name: 'Itering',
    slogan: 'RESEARCH. BUILD. DEPLOY. THE AI NATIVE FUTURE'
  },
  memberOf: [
    { '@type': 'Organization', name: 'SNZ' },
    { '@type': 'Organization', name: 'DeGate' },
    { '@type': 'Organization', name: 'HASHKEY' },
    { '@type': 'Organization', name: 'Web3 Foundation' },
    { '@type': 'Organization', name: 'Parity' },
    { '@type': 'Organization', name: 'RingDAO' }
  ]
};

export default function Home() {
  return (
    <>
      <Hero />
      <Vision />
      <Beliefs />
      <Products />
      <Culture />
      <Partners />
      <section className="container space-y-[30px] py-[100px] text-center">
        <h2 className="text-[28px] leading-normal lg:text-[54px]">
          Embrace the AI future. Build the next generation of companies, products, and systems.
        </h2>
        <a
          href="mailto:contact@itering.com"
          className="inline-block text-[20px] underline underline-offset-8"
        >
          Contact us
        </a>
      </section>
      <StructuredData data={structuredData} />
    </>
  );
}
