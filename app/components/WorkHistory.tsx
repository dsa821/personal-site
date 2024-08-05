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
            className='text-slate-600 bg-gradient-to-br from-slate-300 to-slate-400 p-4 rounded-xl shadow'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ margin: '-50px', once: true }}
          >
            <Link
              href={x.companyUrl}
              target='_blank'
              className='flex justify-center'
            >
              <Image
                src={`/images/logos/${x.logoFilename}`}
                alt={x.companyName}
                width={280}
                height={70}
                className='my-0'
              />
            </Link>
            <div className="text-slate-600 text-lg font-bold mt-2">{x.jobTitle}</div>
            <div className='text-slate-500 text-xs font-bold'>{x.dates}</div>

            <div>{x.content}</div>
          </motion.div>
        ))}
      </div>
    </>
  );
};
