import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

const euclidCircularA = localFont({
  src: [
    {
      path: './fonts/Euclid Circular A Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './fonts/Euclid Circular A Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/Euclid Circular A Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/Euclid Circular A SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './fonts/Euclid Circular A Bold.ttf',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-euclid-circular-a'
});

export const metadata: Metadata = {
  title: 'Itering - Research, Invest, Build The Trust-Free Future',
  description: 'Itering - Research, Invest, Build The Trust-Free Future',
  keywords: 'Trust-Free, Itering, Venture Production Studio, Data, DeFi',
  authors: [{ name: 'Itering' }],
  openGraph: {
    title: 'Itering - Research, Invest, Build The Trust-Free Future',
    description: 'Itering - Research, Invest, Build The Trust-Free Future',
    images: [
      {
        url: 'https://itering.io/images/favicon/favicon512.png',
        width: 512,
        height: 512,
        alt: 'Itering Logo'
      }
    ],
    type: 'website',
    siteName: 'Itering',
    locale: 'en_US',
    url: 'https://itering.io'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Itering - Research, Invest, Build The Trust-Free Future',
    description: 'Itering - Research, Invest, Build The Trust-Free Future',
    images: ['https://itering.io/images/favicon/favicon512.png']
  },
  icons: {
    icon: [
      { url: '/images/favicon/favicon32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon/favicon48.png', sizes: '48x48', type: 'image/png' },
      { url: '/images/favicon/favicon96.png', sizes: '96x96', type: 'image/png' },
      { url: '/images/favicon/favicon192.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/favicon/favicon512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/images/favicon/favicon167.png', sizes: '167x167', type: 'image/png' },
      { url: '/images/favicon/favicon180.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  other: {
    'og:site_name': 'Itering',
    canonical: 'https://itering.io'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${euclidCircularA.variable} bg-black text-white antialiased`}>
        <div className="min-w-screen h-screen">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
