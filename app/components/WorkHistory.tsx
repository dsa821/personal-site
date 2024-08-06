'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { workHistory } from 'data/work';
import Image from 'next/image';
import Link from 'next/link';

export const WorkHistory: React.FC = () => {
  return (
    <>
      <div className='flex flex-col gap-4'>
        {workHistory.map((x) => (
          <motion.div
            key={x.companyName}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ margin: '-50px', once: true }}
          >
            {x.logoFilename && (
              <div className='w-40 h-10 relative'>
                <Link href={x.companyUrl} target='_blank'>
                  <Image
                    src={`/images/logos/${x.logoFilename}`}
                    alt={x.companyName}
                    fill
                    className='!my-4'
                  />
                </Link>
              </div>
            )}
            <div className='text-lg font-bold mt-8'>
              {x.jobTitle}, {x.companyName}
            </div>
            <div className='text-slate-500 text-sm font-bold uppercase tracking-wide'>
              {x.dates}
            </div>

            <div>{x.content}</div>
          </motion.div>
        ))}
      </div>
    </>
  );
};
