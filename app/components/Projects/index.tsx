'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';

import { PortfolioData } from 'data/portfolio';

import styles from './styles.module.css';

type Props = {
  data: PortfolioData[];
};
export const Projects: React.FC<Props> = ({ data }) => {
  return (
    <div className='flex flex-col gap-8'>
      {data.map((x) => {
        return (
          <motion.div
            key={x.name}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ margin: '-50px', once: true }}
            className='flex flex-wrap gap-4'
          >
            <div className='w-full h-36 lg:w-64 flex-none relative'>
              {x.imgUrl && (
                <Image
                  src={x.imgUrl}
                  alt={x.name}
                  fill
                  className='!mt-0 object-cover rounded-xl'
                />
              )}
            </div>
            <div className='flex-1'>
              <h3 className='font-bold !mt-0'>{x.name}</h3>

              <p>{x.description}</p>
              <p className='font-bold'>
                <Link href={x.url} target='_blank'>
                  More <IconArrowRight className={`${styles.accent} inline`} />
                </Link>
              </p>

              <div className={styles.tags}>
                {x.tags.map((tag) => {
                  return <div key={tag} className={styles.tag}>{tag}</div>;
                })}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
