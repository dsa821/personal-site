import './styles/global.css';
import type { Metadata } from 'next';
import { Inconsolata, Inter, DM_Sans } from 'next/font/google';

import { baseUrl } from './sitemap';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'dsa.dev',
    template: '%s | dsa.dev',
  },
  description: 'Personal website for Daniel Sa.',
  openGraph: {
    title: 'dsa.dev',
    description: 'Personal website for Daniel Sa.',
    url: baseUrl,
    siteName: 'dsa.dev',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

// Fonts
const bodyFont = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
});
const headerFont = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-header',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={cx(
        'text-white bg-gradient-to-br from-slate-800 min-h-lvh',
        bodyFont.className,
        headerFont.variable
      )}
    >
      <body className='antialiased'>{children}</body>
    </html>
  );
}
