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
  url: 'https://itering.io/',
  logo: 'https://itering.io/images/favicon/favicon512.png',
  description: 'Itering - Research, Invest, Build The Trust-Free Future.',
  sameAs: ['https://x.com/itering_io', 'https://github.com/itering'],
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://itering.io/'
  },
  potentialAction: {
    '@type': 'ReadAction',
    target: [
      {
        '@type': 'EntryPoint',
        urlTemplate: 'https://itering.io/work.html',
        name: 'WORK'
      },
      {
        '@type': 'EntryPoint',
        urlTemplate: 'https://apply.workable.com/itering/',
        name: 'CAREERS'
      },
      {
        '@type': 'ContactPoint',
        email: 'contact@itering.io',
        name: 'CONTACT US'
      }
    ]
  },
  slogan: 'Itering - Research, Invest, Build The Trust-Free Future.',
  knowsAbout: [
    'Web3',
    'Blockchain technology',
    'Decentralized finance (DeFi)',
    'Data solutions',
    'Trust-free systems',
    'Connected to the world',
    'Power of expertise'
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Data Solutions',
        description:
          'Delivering comprehensive blockchain data solutions with high performance and reliability to power the next generation of Web3 applications.'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'DeFi Solutions',
        description:
          'Revolutionizing financial services through decentralized protocols, enabling seamless, secure, and efficient transactions in the Web3 ecosystem.'
      }
    }
  ],
  brand: {
    '@type': 'Brand',
    name: 'Itering',
    slogan: 'Research, Invest, Build The Trust-Free Future'
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
      <StructuredData data={structuredData} />
    </>
  );
}
