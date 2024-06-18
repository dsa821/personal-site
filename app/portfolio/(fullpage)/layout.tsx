import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// import Footer from '../components/footer';
import { Navbar } from '../../components/nav';
import React from 'react';

export const metadata = {
  title: 'Portfolio - ForenSeq UAS - dsa.dev',
  description:
    'Demonstrating the ForenSeq Universal Analysis Software, developed first for Illumina and then for Verogen (now QIAGEN)',
};

type LayoutProps = {
  children: React.ReactNode;
};
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <body className='antialiased'>
      <main>
        <div className='relative max-w-3xl mx-4 md:mx-auto'>
          <div className='absolute top-8 z-10'>
            <Navbar />
          </div>
        </div>
        {children}
        {/* <Footer /> */}
        <Analytics />
        <SpeedInsights />
      </main>
    </body>
  );
};

export default Layout;
