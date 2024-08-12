'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';

import { ProjectData } from 'data/projects';

import styles from './styles.module.css';
import { TagList } from '../TagList';

type Props = {
  data: ProjectData[];
};
export const Projects: React.FC<Props> = ({ data }) => {
  return (
    <div className='flex flex-col gap-16'>
      {data.map((x) => {
        return (
          <motion.div
            key={x.name}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ margin: '-50px', once: true }}
            className='flex flex-wrap gap-8'
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
                <Link href={x.url} target={x.newWindow ? '_blank' : '_self'}>
                  More <IconArrowRight className={`${styles.accent} inline`} />
                </Link>
              </p>

              <TagList tags={x.tags} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
