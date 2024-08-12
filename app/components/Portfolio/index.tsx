'use client';

import { motion } from 'framer-motion';

import styles from './styles.module.css';
import { PortfolioImage } from 'app/components/PortfolioImage';
import { PhotoProvider } from 'react-photo-view';
import { UasIntro, uasPortfolioData } from './data';

export const Portfolio = () => {
  return (
    <PhotoProvider>
      <UasIntro />

      {uasPortfolioData.map((data, i) => {
        return (
          <div key={i} className={data.color ? styles[data.color] : ''}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.75 }}
              viewport={{ margin: '-150px', once: true }}
            >
              <div className={styles.section}>
                {data.title && (
                  // <Link href={`#${data.anchor}`} id={data.anchor} className='jump-link'>
                    <h2 className="text-balance">{data.title}</h2>
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
