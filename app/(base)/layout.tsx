import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Footer from '../components/Footer';
import { Navbar } from '../components/Sidenav';
import React from 'react';

export const metadata = {
  title: 'danielsa.dev',
  description: 'Personal website for Daniel Sa',
};

type LayoutProps = {
  children: React.ReactNode;
};
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-8 pb-8 max-w-5xl mx-4 md:mx-auto'>
        <Navbar />
        <section className='flex-auto md:ml-64 pb-16'>{children}</section>
        {/* <Footer /> */}
        <Analytics />
        <SpeedInsights />
      </main>
    </>
  );
};

export default Layout;
