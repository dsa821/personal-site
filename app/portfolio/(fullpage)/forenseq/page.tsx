'use client';

import React from 'react';
import Image from 'next/image';
import ReactFullpage, { fullpageApi } from '@fullpage/react-fullpage';

import styles from './forenseq.module.css';

const colors = ['#6b9a43', '#3283d1'];

type SlideData = {
  color?: string;
  anchor: string;
};

const slideData: SlideData[] = [
  {
    color: '#123456',
    anchor: 'slide1',
  },
  {
    anchor: 'slide2',
  },
  {
    anchor: 'slide3',
  },
  {
    anchor: 'slide4',
  },
  {
    anchor: 'slide5',
  },
];

export default function Page() {
  return (
    <ReactFullpage
      licenseKey='gplv3-license'
      credits={{ enabled: true }}
      navigation
      sectionsColor={slideData.map((x, i) => x.color || colors[i % 2])}
      slidesNavigation
      anchors={slideData.map((x) => x.anchor)}
      render={({ fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Slides fullpageApi={fullpageApi} />
          </ReactFullpage.Wrapper>
        );
      }}
    ></ReactFullpage>
  );
}

function FullpageSection({ children }: { children: React.ReactNode }) {
  return <div className='section'>{children}</div>;
}

function FullpageSlide({ children }: { children: React.ReactNode }) {
  return (
    <div className='slide'>
      <div className='max-w-4xl mx-4 md:mx-auto flex flex-col gap-4'>
        {children}
      </div>
    </div>
  );
}

function Slides({ fullpageApi }: { fullpageApi: fullpageApi }) {
  return (
    <>
      <FullpageSection>
        <div className='text-center'>
          <h1>ForenSeq Universal Analysis Software</h1>
        </div>
      </FullpageSection>

      <FullpageSection>
        <FullpageSlide>
          <Image
            src='/images/forenseq/v1/run-details.png'
            alt='ForenSeq v1 Run Details'
            width={800}
            height={600}
          />
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </FullpageSlide>

        <FullpageSlide>
          <Image
            src='/images/forenseq/v2/run-details.png'
            alt='ForenSeq v2 Run Details'
            width={800}
            height={600}
          />

          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </FullpageSlide>
      </FullpageSection>

      <FullpageSection>
        <FullpageSlide>
          <Image
            src='/images/forenseq/v1/locus-overview.png'
            alt='ForenSeq v1 Locus Overview'
            width={800}
            height={600}
          />
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </FullpageSlide>

        <FullpageSlide>
          <Image
            src='/images/forenseq/v2/locus-overview.png'
            alt='ForenSeq v2 Locus Overview'
            width={800}
            height={600}
          />

          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </FullpageSlide>
      </FullpageSection>
    </>
  );
}
