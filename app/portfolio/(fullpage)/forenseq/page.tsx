'use client';

import React from 'react';
import Image from 'next/image';
import ReactFullpage, { fullpageApi } from '@fullpage/react-fullpage';
import { SectionData, sectionData } from './data';

import styles from './forenseq.module.css';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';

const colors = ['#6b9a43', '#3283d1'];

export default function Page() {
  return (
    <ReactFullpage
      licenseKey='gplv3-license'
      credits={{ enabled: true }}
      sectionsColor={sectionData.map((x, i) => x.color || colors[i % 2])}
      navigation
      slidesNavigation
      responsiveWidth={1120}
      responsiveHeight={800}
      anchors={sectionData.map((x) => x.anchor)}
      render={({ fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Slides data={sectionData} fullpageApi={fullpageApi} />
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
      <div className='max-w-4xl mx-4 md:mx-auto flex flex-col'>{children}</div>
    </div>
  );
}

function Slides({
  data,
  fullpageApi,
}: {
  data: SectionData[];
  fullpageApi: fullpageApi;
}) {
  return (
    <>
      {data.map((section, i) => {
        if (section.content) {
          return (
            <FullpageSection key={i}>
              <div className='prose'>{section.content}</div>
            </FullpageSection>
          );
        } else if (section.slides != null) {
          return (
            <FullpageSection key={i}>
              {section.slides.map((slide, i) => {
                return (
                  <FullpageSlide key={i}>
                    <h1 className='mb-2 text-center'>{slide.title}</h1>
                    {slide.img && (
                      <div className='mx-auto'>
                        <Image
                          src={slide.img.src}
                          alt={slide.img.alt}
                          width={slide.img.width ?? 800}
                          height={slide.img.height ?? 600}
                        />
                      </div>
                    )}
                    <div className='prose'>{slide.content}</div>
                  </FullpageSlide>
                );
              })}
            </FullpageSection>
          );
        }
      })}
    </>
  );
}
