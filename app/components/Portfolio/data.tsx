import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

import styles from './styles.module.css';
import { PortfolioImage } from 'app/components/PortfolioImage';

export type SectionData = {
  color?: string;
  title?: string;
  anchor: string;
  img?: ImageData;
  content?: React.ReactNode;
};

type ImageData = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export const Intro = () => {
  const ulMotion = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  };
  const liMotion = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  };

  return (
    <div className='bg-slate-800 min-h-lvh'>
      <div className={`pt-24 ${styles.section}`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          <h1>ForenSeq Universal Analysis Software</h1>
          <div>
            <p>
              The ForenSeq Universal Analysis Software (UAS) provides a platform
              for analyzing and managing forensic genomic data, simplifying
              complex bioinformatics. It brings the power of next-gen sequencing
              to the field of forensic genomics, and pairs it with first-class
              UI tools. Users can view a high-level overview of a sample, use
              the powerful filtering and flagging system to identify areas of
              interest, and drill down to the allele level to override
              individual calls. Data can then be exported in various formats
              such as Excel (*.xlsx) or CODIS (*.cmf), so that users can have
              full control of their data.
            </p>

            <p>
              The initial v1 of this application was developed at{' '}
              <Link href='https://www.illumina.com/' target='_blank'>
                Illumina
              </Link>
              . It was later spun off into a separate company as{' '}
              <Link href='https://www.verogen.com/' target='_blank'>
                Verogen
              </Link>{' '}
              where a v2 was built from the ground up.
            </p>

            <p>ForenSeq UAS uses the following technologies:</p>

            <motion.ul
              initial='hidden'
              whileInView='visible'
              variants={ulMotion}
              viewport={{ once: true }}
            >
              <motion.li variants={liMotion}>Angular</motion.li>
              <motion.li variants={liMotion}>Angular Material</motion.li>
              <motion.li variants={liMotion}>Tailwind CSS</motion.li>
              <motion.li variants={liMotion}>.NET Core Web API</motion.li>
              <motion.li variants={liMotion}>Entity Framework Core</motion.li>
              <motion.li variants={liMotion}>PostgreSQL</motion.li>
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const portfolioData: SectionData[] = [
  // Locus Overview
  {
    color: 'bg-v1',
    anchor: 'v1-locus-overview',
    title: 'v1 Locus Overview',
    img: {
      src: '/images/forenseq/v1/locus-overview.png',
      alt: 'ForenSeq v1 Locus Overview',
    },

    content: (
      <>
        <p>
          The locus overview is the heart of the UAS. Here, the user can see all
          the loci in a given sample at a glance. Calls for each locus are
          easily visible, and loci which have triggered various flags are
          highlighted in orange to help the user quickly identify what needs
          manual attention.
        </p>
      </>
    ),
  },
  {
    color: 'bg-v2',
    anchor: 'v2-locus-overview',
    title: 'v2 Locus Overview',
    img: {
      src: '/images/forenseq/v2/locus-overview.png',
      alt: 'ForenSeq v2 Locus Overview',
      width: 1000,
    },

    content: (
      <p>
        In v2, there were several things from the v1 design that I wanted to
        improve on. One of the most obvious changes is the addition of a bar
        graph to each individual locus box, showing the alleles and their read
        counts. This gives the users a lot more data at their fingertips to make
        decisions without having to drill down to the locus details level. It
        also has the effect of resembling the output of capillary
        electrophoresis, which is the old sequencing technology that forensics
        labs are most familiar with.
      </p>
    ),
  },
  {
    color: 'bg-v2',
    anchor: 'v2-locus-overview-filters',
    title: 'v2 Locus Overview - Filters',
    img: {
      src: '/images/forenseq/v2/locus-overview-filters-flags.png',
      alt: 'ForenSeq v2 Locus Overview Filters',
      width: 1000,
    },

    content: (
      <>
        <p>
          I also added powerful filter and sort capabilities that were missing
          from v1. The loci with flags are still highlighted in orange, but now
          the user can also take advantage of the filters in the sidebar to
          quickly isolate what they are looking for. They can also filter on
          common criteria like locus type, or directly by locus name using the
          search box in the upper right.
        </p>
        <p>
          In order to make space for these new features, I changed the overall
          layout of the STRs and SNPs from a two column view to using two tabs
          instead. This gave us the space needed, and also gave us options to
          customize the filter sidebar for each tab.
        </p>
      </>
    ),
  },

  // Locus Details
  {
    color: 'bg-v1',
    anchor: 'v1-locus-details',
    title: 'v1 Locus Details',
    img: {
      src: '/images/forenseq/v1/str-details.png',
      alt: 'ForenSeq v1 Locus Details',
      width: 1000,
    },

    content: (
      <p>
        Locus details are the most granular level of data the user can view.
        Here the user can see information on each allele that was detected in
        the locus, view their full sequence, and even override calls. This is
        also the only way that the user can see read counts for each allele,
        represented as a bar graph. In v1 this section appeared as a popover,
        which limited the available horizontal space for displaying the data,
        and also blocked other UI elements that the user may have wanted to
        interact with.
      </p>
    ),
  },
  {
    color: 'bg-v2',
    anchor: 'v2-locus-details',
    title: 'v2 Locus Details',
    img: {
      src: '/images/forenseq/v2/locus-details.png',
      alt: 'ForenSeq v2 Locus Details',
      width: 1000,
    },

    content: (
      <p>
        In v2, I opted to have the locus details open up underneath the row of
        the selected locus. This allows the component to stretch the full width
        of the available space, providing easier viewing of sequence data.
        Threshold information is clearly labeled and displayed with the new
        space available. The graph of alleles and read counts is still visible,
        though it has also been pulled up a level into the locus overview.
      </p>
    ),
  },

  // Projects
  {
    color: 'bg-v1',
    anchor: 'v1-projects',
    title: 'v1 Projects',
    img: {
      src: '/images/forenseq/v1/project-details.png',
      alt: 'ForenSeq v1 Project Details',
    },
    content: (
      <p>
        Sample analyses can be grouped by users into projects, as an
        organization tool. The landing page for a project in v1 was rather
        simplistic, and was in fact just a way for them to access their reports
        they had generated.
      </p>
    ),
  },

  {
    color: 'bg-v2',
    anchor: 'v2-projects',
    title: 'v2 Projects',
    img: {
      src: '/images/forenseq/v2/project-details-samples.png',
      alt: 'ForenSeq v2 Project Samples',
    },
    content: (
      <>
        <p>
          The v2 project page gives users much more powerful tools for working
          with their sample analyses. By putting them into a table format, I can
          now add sorting and filtering options for users to take advantage of.
          One particularly useful feature is the ability to filter for a
          specific flag, for example to isolate all samples which have a locus
          that triggered an <b>Interpretation Threshold</b> flag.
        </p>
        <PortfolioImage
          src='/images/forenseq/v2/project-details-sample-flags-tooltip.png'
          alt='ForenSeq v2 Project Samples QC Flags Tooltip'
          width={300}
          height={200}
        />
        <p>
          A tooltip on the <b>QC Ind.</b> column gives a helpful breakdown of
          exactly which flags were triggered in a given sample.
        </p>
      </>
    ),
  },

  // mtDNA
  {
    color: 'bg-v2',
    anchor: 'v2-mtDNA',
    title: 'v2 mtDNA Analysis',
    img: {
      src: '/images/forenseq/v2/mito-results.png',
      alt: 'ForenSeq v1 Locus Details',
    },

    content: (
      <p>
        Analysis of mitochondrial DNA gave me the unique opportunity to come up
        with an innovative custom data visualization using the power of D3.js.
        Since mtDNA is circular in shape, the visual on the left takes a simple
        line graph and wraps it into a circle. Markers along the outer edge help
        indicate areas with high concentrations of variants and other flags. The
        component on the right allows the user to see the full genomic data at
        each position, as well as giving them precise control over what section
        of the DNA to view.
      </p>
    ),
  },
];
