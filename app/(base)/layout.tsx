import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Footer from '../components/footer';
import { Navbar } from '../components/nav';
import React from 'react';

export const metadata = {
  title: 'dsa.dev',
  description: 'Personal website for Daniel Sa',
};

type LayoutProps = {
  children: React.ReactNode;
};
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 pb-8 max-w-3xl mx-4 md:mx-auto'>
        {children}
        {/* <Footer /> */}
        <Analytics />
        <SpeedInsights />
      </main>
    </>
  );
};

export default Layout;
