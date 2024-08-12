import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Topnav } from 'app/components/Topnav';

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
      <Topnav />

      <main>
        {children}
        <Analytics />
        <SpeedInsights />
      </main>
    </>
  );
};

export default Layout;
