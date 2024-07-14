'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { Intro, portfolioData } from './data';
import styles from './styles.module.css';
import { PortfolioImage } from 'app/components/PortfolioImage';
import { PhotoProvider } from 'react-photo-view';

export const Portfolio = () => {
  return (
    <PhotoProvider>
      <Intro />

      {portfolioData.map((data, i) => {
        return (
          <div key={i} className={data.color ? styles[data.color] : ''}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ margin: '-150px', once: true }}
            >
              <div className={styles.section}>
                {data.title && (
                  // <Link href={`#${data.anchor}`} id={data.anchor} className='jump-link'>
                    <h2>{data.title}</h2>
                  // </Link>
                )}

                {data.img && (
                  <PortfolioImage
                    src={data.img.src}
                    alt={data.img.alt}
                    width={data.img.width ?? 800}
                    height={data.img.height ?? 600}
                  />
                )}

                <div>{data.content}</div>
              </div>
            </motion.div>
          </div>
        );
      })}
    </PhotoProvider>
  );
};
