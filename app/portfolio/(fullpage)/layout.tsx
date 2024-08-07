import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// import Footer from 'app/components/footer';
import { Navbar } from 'app/components/nav';
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
    <>
      <Navbar />

      <main>
        {children}
        {/* <Footer /> */}
        <Analytics />
        <SpeedInsights />
      </main>
    </>
  );
};

export default Layout;
