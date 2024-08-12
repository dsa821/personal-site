import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// import { Footer } from 'app/components/Footer';
import { Sidenav } from 'app/components/Sidenav';

export const metadata = {
  title: 'danielsa.dev',
  description:
    'Full stack engineer with a focus on front-end Javascript frameworks like Angular and React.',
};

type LayoutProps = {
  children: React.ReactNode;
};
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-8 max-w-5xl mx-4 md:mx-auto'>
        <Sidenav />
        <section className='flex-auto md:ml-64 pb-16'>{children}</section>
        {/* <Footer /> */}
        <Analytics />
        <SpeedInsights />
      </main>
    </>
  );
};

export default Layout;
