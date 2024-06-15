import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Footer from '../components/footer';
import { Navbar } from '../components/nav';
import React from 'react';

export const metadata = {
  title: 'dsa.devs',
  description: 'Personal website for Daniel Sa',
};

type LayoutProps = {
  children: React.ReactNode;
};
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <body className='antialiased max-w-3xl mx-4 mt-8 md:mx-auto'>
      <main className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </main>
    </body>
  );
};

export default Layout;
