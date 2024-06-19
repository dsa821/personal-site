import Link from 'next/link';
import React from 'react';

export type SectionData = {
  color?: string;
  anchor: string;
  imgUrl?: string;
  content?: React.ReactNode;
  slides?: SlideData[];
};

export type SlideData = {
  title: string;
  img: ImageData;
  content: React.ReactNode;
};

type ImageData = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export const portfolioData: SectionData[] = [
  {
    // Main Title
    color: '#123456',
    anchor: 'intro',
    content: (
      <div className='prose dark:prose-invert max-w-none'>
        <h1 className='text-center'>ForenSeq Universal Analysis Software</h1>

        <div className='mt-8 max-w-4xl mx-4 md:mx-auto '>
          <p>
            The ForenSeq Universal Analysis Software (UAS) provides a platform
            for analyzing and managing forensic genomic data, simplifying
            complex bioinformatics. It brings the power of next-gen sequencing
            to the field of forensic genomics, and pairs it with first-class UI
            tools. Users can view a high-level overview of a sample, use the
            powerful filtering and flagging system to identify areas of
            interest, and drill down to the allele level to override individual
            calls. Data can then be exported in various formats such as Excel
            (*.xlsx) or CODIS (*.cmf), so that users can have full control of
            their data.
          </p>

          <p>
            This application was initially developed at{' '}
            <Link href='https://www.illumina.com/' target='_blank'>
              Illumina
            </Link>{' '}
            using:
          </p>
          <ul>
            <li>AngularJS</li>
            <li>Bootstrap</li>
            <li>.NET Web API</li>
            <li>Entity Framework</li>
            <li>PostgreSQL</li>
          </ul>

          <p>
            It was later spun off into a separate company as{' '}
            <Link href='https://www.verogen.com/' target='_blank'>
              Verogen
            </Link>{' '}
            where it was rebuilt with a fresh tech stack:
          </p>
          <ul>
            <li>Angular</li>
            <li>Angular Material</li>
            <li>Tailwind CSS</li>
            <li>.NET Core Web API</li>
            <li>Entity Framework Core</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    // Locus Overview
    anchor: 'locus-overview',
    slides: [
      {
        title: 'v1 Locus Overview',
        img: {
          src: '/images/forenseq/v1/locus-overview.png',
          alt: 'ForenSeq v1 Locus Overview',
        },
        content: (
          <p>
            The locus overview is the heart of the UAS. Here, the user can see
            all the loci in a given sample at a glance. Calls for each locus are
            easily visible, and loci which have triggered various flags are
            highlighted in orange to help the user quickly identify what needs
            manual attention.
          </p>
        ),
      },

      {
        title: 'v2 Locus Overview',
        img: {
          src: '/images/forenseq/v2/locus-overview.png',
          alt: 'ForenSeq v2 Locus Overview',
          width: 1000,
        },
        content: (
          <>
            <p>
              In v2, I redesigned the locus overview to display a bar graph of
              the allele calls for each locus. This gives the user much more
              useful data at a glance, and also has the effect of resembling the
              output of capillary electrophoresis, which is the old sequencing
              technology that forensics labs are most familiar with.
            </p>
          </>
        ),
      },

      {
        title: 'v2 Locus Overview Filters',
        img: {
          src: '/images/forenseq/v2/locus-overview-filters-flags.png',
          alt: 'ForenSeq v2 Locus Overview Filters',
          width: 1000,
        },
        content: (
          <>
            <p>
              I also added powerful filter and sort capabilities that were
              missing from v1. The loci with flags are still highlighted in
              orange, but now the user can also take advantage of the filters in
              the sidebar to quickly isolate what they are looking for. They can
              also filter on common categories like locus type, or directly by
              locus name using the search box in the upper right.
            </p>
          </>
        ),
      },
    ],
  },

  {
    anchor: 'locus-details',
    slides: [
      {
        title: 'v1 Locus Details',
        img: {
          src: '/images/forenseq/v1/str-details.png',
          alt: 'ForenSeq v1 Locus Details',
        },
        content: (
          <p>
            Locus details are the most granular level of data the user can view.
            Here the user can see each allele that was detected in the locus,
            view their full sequence, and even override calls. In v1 this
            section appeared as a popover, which limited the available space and
            also blocked other UI elements that the user may have wanted to
            interact with.
          </p>
        ),
      },

      {
        title: 'v2 Locus Details',
        img: {
          src: '/images/forenseq/v2/locus-details.png',
          alt: 'ForenSeq v2 Locus Details',
          width: 1000,
        },
        content: (
          <p>
            Locus details now stretch the full width of the available space,
            allowing easier viewing of sequence data as well as adding the
            bracketed sequence format. It also appears as its own section, in
            between rows of the locus overview. Threshold information is clearly
            labeled and displayed with the new space available.
          </p>
        ),
      },
    ],
  },

  {
    anchor: 'mtdna',
    slides: [
      {
        title: 'v2 mtDNA Analysis',
        img: {
          src: '/images/forenseq/v2/mito-results.png',
          alt: 'ForenSeq v1 Locus Details',
        },
        content: (
          <p>
            Analysis of mitochondrial DNA gave me the unique opportunity to come
            up with an innovative custom data visualization using the power of
            D3.js. Since mtDNA is circular in shape, the visual on the left
            takes a simple line graph and wraps it into a circle. Markers along
            the outer edge help indicate areas with high concentrations of
            variants and other flags. The component on the right allows the user
            to see the full genomic data at each position, as well as giving
            them precise control over what section of the DNA to view.
          </p>
        ),
      },
    ],
  },

  // {
  //   // Run Details
  //   anchor: 'run-details',
  //   slides: [
  //     {
  //       title: 'v1 Run Details',
  //       img: {
  //         src: '/images/forenseq/v1/run-details.png',
  //         alt: 'ForenSeq v1 Run Details',
  // 				width: 750
  //       },
  //       content: (
  //         <p>
  //           The run details page is where the user can create a run and define the samples which will be going in the DNA sequencer.
  //         </p>
  //       ),
  //     },

  //     {
  //       title: 'v2 Run Details',
  //       img: {
  //         src: '/images/forenseq/v2/run-details.png',
  //         alt: 'ForenSeq v2 Run Details',
  //       },
  //       content: (
  //         <p>
  //           In v2, I expanded the table to use the screen space more effectively, as well as added the sort and filter abilities that were also lacking in v1.
  //         </p>
  //       ),
  //     },
  //   ],
  // },
];
